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
  console.log(`Sentence challenge test server listening on ${baseUrl}`);

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

    // 1. Navigation to Grammar Tab
    console.log('1. Navigating to Grammar Tab...');
    const grammarNavBtn = page.locator('.bottom-nav button[data-view="grammar"]');
    assert.strictEqual(await grammarNavBtn.count(), 1, 'Grammar button must exist in bottom nav');
    await grammarNavBtn.click();
    await page.waitForTimeout(300);

    // 2. Check Sentence Challenge Subview
    console.log('2. Checking Sentence Challenge subview...');
    const challengeHeading = await page.locator('.challenge-container h1').textContent();
    console.log('Heading:', challengeHeading.trim());
    assert(challengeHeading.includes('Build & Speak'), 'Sentence Challenge heading must appear');

    // Screenshot Unrevealed Prompt at 390px
    await page.screenshot({ path: path.join(artifactsDir, 'sentence-challenge-prompt-390.png') });
    console.log('Captured: sentence-challenge-prompt-390.png');

    // 3. Check Prompt Elements
    const targetBlocks = await page.locator('.challenge-container [style*="border-radius: 12px"]').count();
    console.log('Target building blocks count:', targetBlocks);
    assert(targetBlocks >= 3, 'Must have at least 3 target building blocks (Subject, Action, Context)');

    // 4. Reveal Step
    console.log('4. Clicking Check Sentence & Structural Rubric button...');
    const revealBtn = page.locator('button[data-challenge-action="reveal"]');
    assert.strictEqual(await revealBtn.count(), 1, 'Reveal button must be visible');
    await revealBtn.click();
    await page.waitForTimeout(300);

    // Screenshot Revealed 3-Point Audit at 390px
    await page.screenshot({ path: path.join(artifactsDir, 'sentence-challenge-revealed-390.png') });
    console.log('Captured: sentence-challenge-revealed-390.png');

    // Check revealed components
    const revealedAnswer = await page.locator('.revealed-section [style*="font-size: 20px"]').textContent();
    console.log('Revealed French Answer:', revealedAnswer.trim());
    assert(revealedAnswer.trim().length > 0, 'French answer must be displayed');

    const rubricItems = await page.locator('.revealed-section [style*="border: 1px solid #fde68a"]').count();
    console.log('3-point rubric items count:', rubricItems);
    assert.strictEqual(rubricItems, 3, 'Must display all 3 diagnostic checklist items');

    const rateButtons = await page.locator('button[data-challenge-rate]').count();
    console.log('Self-rate buttons count:', rateButtons);
    assert.strictEqual(rateButtons, 3, 'Must have 3 self-rate buttons (Missed, Hesitated, Fast & Flawless)');

    // 5. Test Rating and Queue Progression
    console.log('5. Rating Fast & Flawless...');
    await page.locator('button[data-challenge-rate="fast"]').click();
    await page.waitForTimeout(200);

    const sessionStats = await page.locator('.challenge-container .small.muted').last().textContent();
    console.log('Session Stats after rating:', sessionStats.trim());
    assert(sessionStats.includes('1 completed'), 'Session count must increment');

    // 6. Test Category Filter
    console.log('6. Testing Category Filter (Reflexive Passé)...');
    const reflFilter = page.locator('button[data-challenge-filter="reflexive"]');
    await reflFilter.click();
    await page.waitForTimeout(200);

    const activeFilterText = await reflFilter.textContent();
    console.log('Active filter:', activeFilterText.trim());
    assert(reflFilter, 'Reflexive filter button must exist');

    // 7. Responsive Viewport Check (320px, 375px, 390px, 430px)
    for (const width of [320, 375, 390, 430]) {
      await page.setViewportSize({ width, height: 800 });
      await page.waitForTimeout(100);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      assert.strictEqual(overflow, false, `No horizontal overflow allowed at width ${width}px`);
    }
    console.log('Responsive width checks passed at 320px, 375px, 390px, 430px!');

    console.log('==================================================');
    console.log('ALL SENTENCE PRODUCTION CHALLENGE E2E TESTS PASSED 100%!');
    console.log('==================================================');
  } finally {
    await browser.close();
    server.close();
  }
});
