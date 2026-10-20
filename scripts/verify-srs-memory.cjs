// End-to-end SM-2 Spaced Repetition System verification
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
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  try {
    console.log('Navigating to', url);
    await page.goto(url);
    await page.waitForTimeout(300);

    // Step 1: Open Vocab Tab
    await page.locator('.bottom-nav [data-view="vocab"]').click();
    await page.waitForTimeout(200);

    // Step 2: Inspect deck with 'Wake up' (a1) -> A1.2 · Séances 7–8
    const deck78Btn = page.locator('button[data-start-deck="A1.2 · Séances 7–8"]');
    await assert(await deck78Btn.count() > 0, 'Deck A1.2 · Séances 7–8 button should exist');
    console.log('Deck A1.2 · Séances 7–8 button found');

    // Click to start deck session
    await deck78Btn.click();
    await page.waitForTimeout(200);

    // Initial card: verify it is indeed 'wake' or first unseen card
    const frontText = await page.locator('.review-scene .corner').innerText();
    console.log('First card in session topic:', frontText);

    // Reveal answer
    await page.click('button[data-action="vocab-reveal"]');
    await page.waitForTimeout(200);

    const firstFrenchWord = await page.locator('.quiet-french-word').innerText();
    console.log('First French word revealed:', firstFrenchWord);

    // Check dynamic interval labels on rating buttons
    const easyBtn = page.locator('button[data-vocab-rate="easy"]');
    const easyLabel = await easyBtn.locator('span').innerText();
    console.log('Easy button interval label:', easyLabel);
    assert.match(easyLabel, /4 days|4d/i, 'Easy rating should show 4 days interval');

    const goodBtn = page.locator('button[data-vocab-rate="good"]');
    const goodLabel = await goodBtn.locator('span').innerText();
    console.log('Good button interval label:', goodLabel);
    assert.match(goodLabel, /1 day|1d/i, 'Good rating for new card should show 1 day interval');

    const againBtn = page.locator('button[data-vocab-rate="again"]');
    const againLabel = await againBtn.locator('span').innerText();
    console.log('Again button interval label:', againLabel);
    assert.match(againLabel, /< 10 min|< 10m/i, 'Again rating should show < 10 min interval');

    // Inspect 3-dot details modal
    await page.click('button[data-action="card-details"]');
    await page.waitForTimeout(200);
    const modalText = await page.locator('.card-details-modal').innerText();
    assert.ok(modalText.includes('Scientific Spaced Repetition (SM-2)'), 'Details modal must include SM-2 info');
    assert.ok(modalText.includes('Ease Factor'), 'Details modal must include Ease Factor');
    console.log('SM-2 details modal verified!');

    // Close modal
    await page.click('button[data-action="close-modal"]');
    await page.waitForTimeout(200);

    // Rate the card EASY!
    console.log(`Rating first card "${firstFrenchWord}" as EASY...`);
    await easyBtn.click();
    await page.waitForTimeout(200);

    // Verify progress storage in localStorage
    const cardProgress = await page.evaluate((word) => {
      const p = activeProfile();
      const card = state.cards.find(c => c.frenchAnswer === word);
      return card ? p.progress[card.id] : null;
    }, firstFrenchWord);

    console.log('Card progress recorded in storage:', cardProgress);
    assert.ok(cardProgress, 'Progress entry must exist for rated card');
    assert.equal(cardProgress.interval, 4, 'Interval should be 4 days');
    assert.ok(cardProgress.dueAt > Date.now() + 3 * 86400000, 'dueAt must be scheduled in the future');
    assert.equal(cardProgress.reviews, 1, 'Reviews count should be 1');

    // Step 3: Exit session back to deck view
    await page.click('button[data-action="exit-vocab-session"]');
    await page.waitForTimeout(200);

    // Step 4: Re-start the deck and verify that the rated card is NOT served first!
    console.log('Re-starting deck session...');
    await page.click('button[data-start-deck="A1.2 · Séances 7–8"]');
    await page.waitForTimeout(200);

    await page.click('button[data-action="vocab-reveal"]');
    await page.waitForTimeout(200);

    const secondSessionFirstWord = await page.locator('.quiet-french-word').innerText();
    console.log('Second session first French word:', secondSessionFirstWord);
    assert.notEqual(secondSessionFirstWord, firstFrenchWord,
      `Memory bug fixed! "${firstFrenchWord}" was correctly scheduled for the future and NOT repeated at index 0!`
    );

    // Step 5: Test "Again" re-queueing behavior
    console.log('Testing "Again" button re-queueing in active session...');
    const sessionLengthBeforeAgain = await page.evaluate(() => vocabSession.ids.length);
    const cardRatedAgain = secondSessionFirstWord;
    await page.click('button[data-vocab-rate="again"]');
    await page.waitForTimeout(200);

    const sessionLengthAfterAgain = await page.evaluate(() => vocabSession.ids.length);
    assert.equal(sessionLengthAfterAgain, sessionLengthBeforeAgain + 1,
      'Card rated Again must be re-queued in the active session queue'
    );
    console.log('Verified: Card rated Again was re-queued so learner must repeat it before finishing session!');

    console.log('==================================================');
    console.log('ALL SCIENTIFIC SRS MEMORY TESTS PASSED 100%!');
    console.log('==================================================');
  } catch (err) {
    console.error('Test failed:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
    server.close();
  }
})();
