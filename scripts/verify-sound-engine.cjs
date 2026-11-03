const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const assert = require('assert');

const publicDir = path.join(__dirname, '..', 'public');
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0].split('#')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(publicDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(0, '127.0.0.1', async () => {
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Sound engine test server listening on ${baseUrl}`);

  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PARLEZ_BROWSER_CHANNEL || 'msedge'
  });

  try {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148'
    });
    const page = await context.newPage();

    page.on('console', msg => {
      if (msg.type() === 'error') console.log('PAGE ERROR LOG:', msg.text());
    });
    page.on('pageerror', err => console.log('UNCAUGHT PAGE ERROR:', err.message));

    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    console.log('1. Checking global audio availability...');
    const audioGlobals = await page.evaluate(() => ({
      hasSay: typeof window.say === 'function',
      hasParlezAudio: typeof window.ParlezAudio === 'object' && window.ParlezAudio !== null
    }));
    console.log('Audio globals:', audioGlobals);

    // 2. Test speech execution and utterance retention
    console.log('2. Testing speech synthesis execution...');
    const speechResult = await page.evaluate(async () => {
      let firedEvents = [];
      const testText = 'Je me réveille à sept heures.';
      
      // Call say
      window.say(testText, 0.83);

      return {
        speaking: window.speechSynthesis.speaking,
        pending: window.speechSynthesis.pending,
        activeCount: (window.ParlezAudio && window.ParlezAudio.getActiveCount) ? window.ParlezAudio.getActiveCount() : null
      };
    });
    console.log('Speech result:', speechResult);

    // 3. Test Vocab Card Listen Button
    console.log('3. Testing Vocab Card Listen Button...');
    await page.locator('.bottom-nav button[data-view="vocab"]').click();
    await page.waitForTimeout(200);

    const startDeckBtn = page.locator('[data-start-deck]').first();
    if (await startDeckBtn.count() > 0) {
      await startDeckBtn.click();
      await page.waitForTimeout(200);
      await page.locator('[data-action="vocab-reveal"]').click();
      await page.waitForTimeout(200);

      const listenBtn = page.locator('[data-action="say-vocab-answer"]');
      assert.strictEqual(await listenBtn.count(), 1, 'Vocab card Listen button must exist');
      await listenBtn.click();
      console.log('Clicked Vocab Card Listen button successfully');
    }

    // 4. Test Settings Sound Check
    console.log('4. Testing Settings Sound Check...');
    await page.locator('.top-actions button[data-view="settings"]').click();
    await page.waitForTimeout(300);

    const testSoundBtn = page.locator('button[data-action="test-sound"]');
    const testSoundCount = await testSoundBtn.count();
    console.log('Settings Test Sound button count:', testSoundCount);

    console.log('Test completed.');
  } finally {
    await browser.close();
    server.close();
  }
});
