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
  console.log(`Parlez Purposeful Grammar Chains test server on ${baseUrl}`);

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
    await page.waitForTimeout(400);

    // 1. Navigate to Grammar Tab
    console.log('1. Navigating to Grammar Tab...');
    await page.locator('.bottom-nav button[data-view="grammar"]').click();
    await page.waitForTimeout(300);

    // 2. Verify flashcard root & Pedagogical Chain Header on Step 1 (Grâce à)
    console.log('2. Verifying Pedagogical Chain Header on Step 1 (Grâce à)...');
    const root = page.locator('#grammar-flashcards-root');
    assert.strictEqual(await root.count(), 1, 'Grammar root container must exist');

    const cardText = await root.textContent();
    console.log('Card 1 preview text:', cardText.replace(/\s+/g, ' ').slice(0, 150));
    assert(cardText.includes('Step 1 of 4'), 'Must show Step 1 of 4 in Chain header');
    assert(cardText.includes('Positive Cause') || cardText.includes('Grâce à'), 'Must indicate Positive Cause purpose');
    assert(cardText.includes('Connection:'), 'Must show educational Connection explanation');

    // Screenshot 1: Step 1 Positive Cause
    await page.screenshot({ path: path.join(artifactsDir, 'grammar-chain-step1-grâce-390.png') });
    console.log('Captured: grammar-chain-step1-grâce-390.png');

    // 3. Assemble words correctly for Card 1 (J’ai réussi mon examen grâce à mon professeur)
    console.log('3. Assembling words for Card 1 to test purposeful progression to Card 2...');
    const wordsCard1 = ['J’ai', 'réussi', 'mon', 'examen', 'grâce', 'à', 'mon', 'professeur'];
    for (const w of wordsCard1) {
      const btn = page.locator(`button[data-gflash-select]:has-text("${w}")`).first();
      await btn.click();
      await page.waitForTimeout(40);
    }

    // Check sentence
    await page.locator('button[data-gflash-action="check-sentence"]').click();
    await page.waitForTimeout(200);

    const successMsg = await page.locator('#grammar-flashcards-root').textContent();
    assert(successMsg.includes('Sentence Flawlessly Built') || successMsg.includes('Bravo'), 'Must show success message');
    assert(successMsg.includes('Next card purpose:'), 'Must display what comes next preview on revealed card back');

    // Screenshot 2: Revealed card back with Next Preview
    await page.screenshot({ path: path.join(artifactsDir, 'grammar-chain-revealed-preview-390.png') });
    console.log('Captured: grammar-chain-revealed-preview-390.png');

    // 4. Advance to Card 2 in the chain
    console.log('4. Advancing to Card 2 in the Pedagogical Chain...');
    await page.locator('button[data-gflash-action="next-card"]').click();
    await page.waitForTimeout(300);

    // Verify Card 2 purposefully contrasts Card 1 with Negative Cause (À cause de)
    const card2Text = await page.locator('#grammar-flashcards-root').textContent();
    console.log('Card 2 text:', card2Text.replace(/\s+/g, ' ').slice(0, 200));
    assert(card2Text.includes('Step 2 of 4'), 'Must show Step 2 of 4');
    assert(card2Text.includes('Negative Cause') || card2Text.includes('À cause de'), 'Must show Negative Cause purpose');
    assert(card2Text.includes('The train is late because of the snow'), 'Card 2 English prompt must be about the train delay');
    assert(card2Text.includes('Contrast with Card 1') || card2Text.includes('Grâce à'), 'Must explain the deliberate contrast with Card 1');

    // Screenshot 3: Step 2 Negative Cause
    await page.screenshot({ path: path.join(artifactsDir, 'grammar-chain-step2-acause-390.png') });
    console.log('Captured: grammar-chain-step2-acause-390.png');

    // 5. Test Topic Selector: Switch to "Subject Shifts & Agreement Rounds"
    console.log('5. Testing Topic Selector with "shifts" (Subject Shifts & Agreement Rounds)...');
    await page.selectOption('#gflash-topic-select', 'shifts');
    await page.waitForTimeout(300);

    const shiftsCardText = await page.locator('#grammar-flashcards-root').textContent();
    console.log('Shifts queue preview:', shiftsCardText.replace(/\s+/g, ' ').slice(0, 180));
    assert(shiftsCardText.includes('Subject Shift'), 'Must display Subject Shift badge');
    assert(shiftsCardText.includes('Elle') || shiftsCardText.includes('Nous') || shiftsCardText.includes('Je') || shiftsCardText.includes('Agreement'), 'Must focus on subject agreement shift');

    // Screenshot 4: Subject Shift Round
    await page.screenshot({ path: path.join(artifactsDir, 'grammar-chain-subject-shift-390.png') });
    console.log('Captured: grammar-chain-subject-shift-390.png');

    // 6. Test Structure Table Modal from within the chain card
    console.log('6. Testing Structure Table Modal...');
    await page.locator('button[data-gflash-structure]').first().click();
    await page.waitForTimeout(200);
    assert.strictEqual(await page.locator('.gflash-modal-dialog').count(), 1, 'Structure modal must be open');
    await page.locator('button[data-gflash-close-modal]').first().click();
    await page.waitForTimeout(200);
    assert.strictEqual(await page.locator('.gflash-modal-dialog').count(), 0, 'Structure modal must close cleanly');

    // 7. Verify Responsive Viewports across 320px, 375px, 390px, 430px
    console.log('7. Checking responsive widths for zero horizontal overflow...');
    for (const w of [320, 375, 390, 430]) {
      await page.setViewportSize({ width: w, height: 844 });
      await page.waitForTimeout(150);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
      assert.strictEqual(overflow, false, `No horizontal overflow allowed at ${w}px`);
    }
    console.log('Responsive width checks passed at 320px, 375px, 390px, 430px!');

    console.log('==================================================');
    console.log('ALL PURPOSEFUL GRAMMAR CHAINS E2E TESTS PASSED 100%!');
    console.log('==================================================');
  } catch (err) {
    console.error('TEST SUITE FAILED WITH ERROR:', err);
    process.exit(1);
  } finally {
    await browser.close();
    server.close();
    process.exit(0);
  }
});
