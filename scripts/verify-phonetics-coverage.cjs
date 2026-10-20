const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const publicDir = path.resolve(__dirname, '../public');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png'
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0];
      if (reqPath === '/') reqPath = '/index.html';
      const filePath = path.join(publicDir, reqPath);
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
        } else {
          const ext = path.extname(filePath);
          res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
          res.end(data);
        }
      });
    });
    server.listen(0, '127.0.0.1', () => {
      resolve({ server, port: server.address().port });
    });
  });
}

(async () => {
  const { server, port } = await startServer();
  const url = `http://127.0.0.1:${port}`;
  console.log('Testing server on', url);

  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PARLEZ_BROWSER_CHANNEL || 'msedge'
  });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  try {
    await page.goto(url);
    await page.waitForTimeout(300);

    // 1. Check all cards coverage in state
    const stats = await page.evaluate(() => {
      const all = state.cards;
      const missingWord = all.filter(c => !cardPhonetic(c).word);
      const missingEx = all.filter(c => c.frenchExample && !cardPhonetic(c).example);
      return {
        total: all.length,
        missingWord: missingWord.map(c => ({ id: c.id, word: c.frenchAnswer })),
        missingEx: missingEx.map(c => ({ id: c.id, word: c.frenchAnswer, ex: c.frenchExample }))
      };
    });

    console.log(`Total cards evaluated: ${stats.total}`);
    console.log(`Missing word phonetics count: ${stats.missingWord.length}`);
    if (stats.missingWord.length) console.log('Missing word sample:', stats.missingWord.slice(0, 5));
    assert.equal(stats.missingWord.length, 0, 'Every card must have a word phonetic pronunciation guide!');

    console.log(`Missing example phonetics count: ${stats.missingEx.length}`);
    if (stats.missingEx.length) console.log('Missing ex sample:', stats.missingEx.slice(0, 5));
    assert.equal(stats.missingEx.length, 0, 'Every card with an example must have an example phonetic guide!');

    // 2. Test visual flashcard session UI (review)
    await page.locator('.bottom-nav [data-view="review"]').click();
    await page.waitForTimeout(200);

    // Reveal card
    await page.click('button[data-action="reveal"]');
    await page.waitForTimeout(200);

    const wordPhoneticCount = await page.locator('.word-phonetic').count();
    console.log('Word phonetic element visible in review:', wordPhoneticCount);
    assert.ok(wordPhoneticCount >= 1, 'Word phonetic should be displayed on card back');

    const wordPhoneticText = await page.locator('.word-phonetic').first().innerText();
    console.log('Sample word phonetic text:', wordPhoneticText);
    assert.match(wordPhoneticText, /^\[.+\]$/, 'Word phonetic must be formatted in brackets [ ... ]');

    const exPhoneticCount = await page.locator('.example-phonetic').count();
    console.log('Example phonetic element visible in review:', exPhoneticCount);
    assert.ok(exPhoneticCount >= 1, 'Example phonetic should be displayed on card back');

    const exPhoneticText = await page.locator('.example-phonetic').first().innerText();
    console.log('Sample example phonetic text:', exPhoneticText);
    assert.match(exPhoneticText, /^\[.+\]$/, 'Example phonetic must be formatted in brackets [ ... ]');

    // 3. Test 3-dot details modal
    await page.click('button[data-action="card-details"]');
    await page.waitForTimeout(200);

    const modalWordPhonCount = await page.locator('.card-details-modal .word-phonetic').count();
    console.log('Modal word phonetic visible:', modalWordPhonCount);
    assert.ok(modalWordPhonCount >= 1, 'Modal must display word phonetic');

    const modalExPhonCount = await page.locator('.card-details-modal .example-phonetic').count();
    console.log('Modal example phonetic visible:', modalExPhonCount);
    assert.ok(modalExPhonCount >= 1, 'Modal must display example phonetic');

    await page.click('button[data-action="close-modal"]');
    await page.waitForTimeout(200);

    // 4. Test Vocab Deck Session
    await page.locator('.bottom-nav [data-view="vocab"]').click();
    await page.waitForTimeout(200);

    await page.locator('button[data-start-deck="A1.2 · Séances 7–8"]').click();
    await page.waitForTimeout(200);

    await page.click('button[data-action="vocab-reveal"]');
    await page.waitForTimeout(200);

    const vocabWordPhonText = await page.locator('.word-phonetic').first().innerText();
    console.log('Vocab session word phonetic:', vocabWordPhonText);
    assert.match(vocabWordPhonText, /^\[.+\]$/);

    const vocabExPhonText = await page.locator('.example-phonetic').first().innerText();
    console.log('Vocab session example phonetic:', vocabExPhonText);
    assert.match(vocabExPhonText, /^\[.+\]$/);

    console.log('==================================================');
    console.log('ALL PHONETICS COVERAGE TESTS PASSED 100%!');
    console.log('==================================================');
  } catch (err) {
    console.error('Test failed:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
    server.close();
  }
})();
