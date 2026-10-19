// Comprehensive End-to-end curriculum & Vocab & Grammar verification with Playwright
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const publicDir = path.resolve(__dirname, '../public');
const out = path.resolve(__dirname, '../artifacts');
fs.mkdirSync(out, { recursive: true });

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
      const port = server.address().port;
      resolve({ server, port });
    });
  });
}

(async () => {
  const { server, port } = await startServer();
  const url = `http://127.0.0.1:${port}`;
  console.log('Static test server listening on', url);

  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PARLEZ_BROWSER_CHANNEL || 'msedge'
  });

  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    console.log('Navigating to', url);
    await page.goto(url);

    assert.equal(errors.length, 0, 'Page errors on load: ' + errors.join(', '));

    // 1. Total cards in state
    const totalCards = await page.evaluate(() => state.cards.length);
    console.log('Total cards in state:', totalCards);
    assert.ok(totalCards >= 180, 'Expected at least 180 cards, got ' + totalCards);

    // 2. Navigate to Vocab tab
    await page.locator('.bottom-nav [data-view="vocab"]').click();
    await page.waitForTimeout(200);

    const deckCards = await page.locator('.vocab-deck-card').count();
    console.log('Classroom deck cards visible in Vocab tab:', deckCards);
    assert.equal(deckCards, 10, 'Expected exactly 10 curriculum decks, got ' + deckCards);

    await page.screenshot({ path: path.join(out, 'vocab-catalog-390.png'), fullPage: false });

    // 3. Test A1.2 Deck Study: "A1.2 · Marché & Resto"
    console.log('Starting study session for A1.2 · Marché & Resto...');
    await page.locator('[data-start-deck="A1.2 · Marché & Resto"]').first().click();
    await page.waitForTimeout(200);

    // Verify card front has NO answer text
    assert.equal(await page.locator('.answer').count(), 0);
    await page.screenshot({ path: path.join(out, 'vocab-card-front-390.png') });

    // Reveal French
    await page.locator('[data-action="vocab-reveal"]').click();
    await page.waitForTimeout(200);

    // Verify card back shows answer, example, and rating buttons
    assert.equal(await page.locator('.answer').count(), 1);
    const frenchAnswer = await page.locator('.answer h2').textContent();
    console.log('A1.2 revealed French answer:', frenchAnswer);
    assert.ok(frenchAnswer.length > 0);
    await page.screenshot({ path: path.join(out, 'vocab-card-back-390.png') });

    // Rate "good"
    await page.locator('[data-vocab-rate="good"]').click();
    await page.waitForTimeout(200);

    // Exit vocab deck session
    await page.locator('[data-action="exit-vocab-session"]').click();
    await page.waitForTimeout(200);

    // 4. Test Grammar Tab
    console.log('Navigating to Grammar tab...');
    await page.locator('.bottom-nav [data-view="grammar"]').click();
    await page.waitForTimeout(200);

    // Verify Verb Game is open
    const hasPlayBtn = await page.locator('[data-game="start"]').count();
    const hasGameCard = await page.locator('.game-intro, .game-card').count();
    console.log('Verb game elements visible: start button =', hasPlayBtn, ', game card =', hasGameCard);
    assert.ok(hasPlayBtn > 0 || hasGameCard > 0, 'Expected active verb game intro or card');
    await page.screenshot({ path: path.join(out, 'grammar-verb-game-390.png') });

    // Switch to Grammar Flashcards subview
    console.log('Switching to Grammar Flashcards subview...');
    await page.locator('[data-grammar-subview="cards"]').click();
    await page.waitForTimeout(200);

    // Verify grammar flashcards catalog
    const grammarCardsCount = await page.locator('.library-grid .lib-card').count();
    console.log('Grammar rule cards in catalog:', grammarCardsCount);
    assert.ok(grammarCardsCount >= 14, 'Expected at least 14 grammar rule cards, got ' + grammarCardsCount);
    await page.screenshot({ path: path.join(out, 'grammar-catalog-390.png') });

    // Start studying grammar flashcards
    console.log('Starting grammar flashcards study session...');
    await page.locator('[data-action="study-grammar-pool"]').click();
    await page.waitForTimeout(200);

    // Front: concept visual, no answer yet
    assert.equal(await page.locator('.answer').count(), 0);
    await page.screenshot({ path: path.join(out, 'grammar-card-front-390.png') });

    // Reveal rule
    await page.locator('[data-action="grammar-reveal"]').click();
    await page.waitForTimeout(200);

    // Back: rule details, example, ratings
    assert.equal(await page.locator('.answer').count(), 1);
    const ruleAnswer = await page.locator('.answer h2').textContent();
    console.log('Revealed grammar rule:', ruleAnswer);
    assert.ok(ruleAnswer.length > 0);
    await page.screenshot({ path: path.join(out, 'grammar-card-back-390.png') });

    // Rate rule "good"
    await page.locator('[data-grammar-rate="good"]').click();
    await page.waitForTimeout(200);

    // Exit grammar session
    await page.locator('[data-action="exit-grammar-session"]').click();
    await page.waitForTimeout(200);

    // 5. Test responsive layout across mobile viewports
    for (const width of [320, 375, 390, 430]) {
      await page.setViewportSize({ width, height: 844 });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      assert.equal(overflow, false, `Horizontal overflow detected at width ${width}px`);
    }

    console.log('==================================================');
    console.log('ALL VOCAB & GRAMMAR EXPANSION E2E TESTS PASSED 100%!');
    console.log('==================================================');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(err => {
  console.error('TEST ERROR:', err);
  process.exit(1);
});
