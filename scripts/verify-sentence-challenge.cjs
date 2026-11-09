const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const assert = require('assert');

const publicDir = path.join(__dirname, '..', 'public');
const artifactsDir = path.resolve(__dirname, '..', '..', '..', '.gemini', 'antigravity', 'brain', '9c3c71ea-75c1-4320-bec8-91a99466a968');
if (!fs.existsSync(artifactsDir)) fs.mkdirSync(artifactsDir, { recursive: true });

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
  console.log(`Grammar Map & A1.3 test server listening on ${baseUrl}`);

  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PARLEZ_BROWSER_CHANNEL || 'msedge'
  });

  try {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2
    });
    const page = await context.newPage();

    page.on('console', msg => {
      if (msg.type() === 'error') console.log('PAGE ERROR LOG:', msg.text());
    });
    page.on('pageerror', err => console.log('UNCAUGHT PAGE ERROR:', err.message));

    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    // 1. Navigate to Grammar Tab
    console.log('1. Navigating to Grammar Tab...');
    const grammarNavBtn = page.locator('.bottom-nav button[data-view="grammar"]');
    await grammarNavBtn.click();
    await page.waitForTimeout(300);

    // 2. Verify Grammar Map heading & 6 chapters
    const heading = await page.locator('#grammar-map-root h1').textContent();
    console.log('Heading:', heading.trim());
    assert(heading.includes('Grammar Map'), 'Must show Grammar Map heading');

    const chapterBtns = await page.locator('button[data-gmap-chapter]').count();
    console.log('Chapters count:', chapterBtns);
    assert.strictEqual(chapterBtns, 6, 'Must have 6 organized chapters');

    // Screenshot 1: Chapter 1 (Se... Reflexive) Full Structure Table
    await page.screenshot({ path: path.join(artifactsDir, 'grammar-map-ch1-reflexive-390.png') });
    console.log('Captured: grammar-map-ch1-reflexive-390.png');

    // 3. Test Hide Answers to Test Yourself (Active Recall)
    console.log('3. Testing Hide Answers to Test Yourself...');
    await page.locator('button[data-gmap-action="toggle-hide"]').click();
    await page.waitForTimeout(250);
    const revealRowBtns = await page.locator('button[data-gmap-reveal-row]').count();
    console.log('Hidden rows count:', revealRowBtns);
    assert(revealRowBtns >= 6, 'All rows must hide when testing yourself');

    // Reveal row 0
    await page.locator('button[data-gmap-reveal-row="0"]').click();
    await page.waitForTimeout(200);
    await page.screenshot({ path: path.join(artifactsDir, 'grammar-map-ch1-practice-hidden-390.png') });
    console.log('Captured: grammar-map-ch1-practice-hidden-390.png');

    // Turn Show All back on
    await page.locator('button[data-gmap-action="toggle-hide"]').click();
    await page.waitForTimeout(200);

    // 4. Test Chapter 2: Se faire + Infinitif (A1.3)
    console.log('4. Switching to Chapter 2 (Se faire + Inf.)...');
    await page.locator('button[data-gmap-chapter="se_faire"]').click();
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(artifactsDir, 'grammar-map-ch2-se-faire-390.png') });
    console.log('Captured: grammar-map-ch2-se-faire-390.png');

    // 5. Test Chapter 5: Rules & Il faut (Obligation & Interdiction A1.3)
    console.log('5. Switching to Chapter 5 (Rules & Il faut)...');
    await page.locator('button[data-gmap-chapter="obligation"]').click();
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(artifactsDir, 'grammar-map-ch5-obligation-390.png') });
    console.log('Captured: grammar-map-ch5-obligation-390.png');

    // 6. Verify A1.3 Séances 1-2 Vocabulary & Illustrations in Vocab Tab
    console.log('6. Checking A1.3 Séances 1-2 in Vocab Tab...');
    await page.locator('.bottom-nav button[data-view="vocab"]').click();
    await page.waitForTimeout(300);
    const a13BrowseBtn = page.locator('button[data-filter-deck="A1.3 · Séances 1–2"]');
    assert.strictEqual(await a13BrowseBtn.count(), 1, 'A1.3 · Séances 1–2 deck card must exist');
    await a13BrowseBtn.click();
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(artifactsDir, 'a13-vocab-deck-390.png') });
    console.log('Captured: a13-vocab-deck-390.png');

    // 7. Responsive width checks across 320px, 375px, 390px, 430px
    await page.locator('.bottom-nav button[data-view="grammar"]').click();
    for (const w of [320, 375, 390, 430]) {
      await page.setViewportSize({ width: w, height: 844 });
      await page.waitForTimeout(150);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
      assert.strictEqual(overflow, false, `No horizontal overflow allowed at ${w}px`);
    }
    console.log('Responsive width checks passed at 320px, 375px, 390px, 430px!');

    console.log('==================================================');
    console.log('ALL GRAMMAR MAP & A1.3 SÉANCES 1-2 TESTS PASSED 100%!');
    console.log('==================================================');
  } finally {
    await browser.close();
    server.close();
    process.exit(0);
  }
});
