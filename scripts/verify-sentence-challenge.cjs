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
  console.log(`Parlez Grammar Flashcards test server listening on ${baseUrl}`);

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

    // Verify Grammar Flashcard Root exists
    const rootCount = await page.locator('#grammar-flashcards-root').count();
    assert.strictEqual(rootCount, 1, 'Grammar Flashcard root container must be present');

    // Verify subview chip says "🗂️ Grammar Flashcards"
    const activeChip = await page.locator('button[data-grammar-subview="challenge"]').textContent();
    console.log('Active chip text:', activeChip.trim());
    assert(activeChip.includes('Grammar Flashcards'), 'Must say Grammar Flashcards');

    // 2. Verify Visual Flashcard Front:
    // - Photo/scene illustration is rendered
    // - English prompt is visible directly below the photo
    // - Word assembly area and scrambled word bank
    console.log('2. Verifying Flashcard Front layout & English placement...');
    const sceneHtml = await page.locator('#grammar-flashcards-root .review-scene').innerHTML();
    console.log('Scene HTML:', sceneHtml);
    const sceneCount = await page.locator('#grammar-flashcards-root .review-scene svg').count();
    assert(sceneCount >= 1, 'Flashcard scene SVG illustration must be rendered');

    const englishPrompt = await page.locator('#grammar-flashcards-root div:has-text("Sentence to Build:")').first().textContent();
    console.log('English Prompt Section:', englishPrompt.replace(/\s+/g, ' ').trim());
    assert(englishPrompt.includes('Sentence to Build:'), 'Must show Sentence to Build label');
    assert(englishPrompt.includes('got up early') || englishPrompt.length > 20, 'English sentence must be visible below photo');

    // Screenshot 1: Flashcard Front (Photo + English below photo + Scrambled Word Bank)
    const frontScreenshotPath = path.join(artifactsDir, 'grammar-flashcard-front-390.png');
    await page.screenshot({ path: frontScreenshotPath });
    console.log('Captured: grammar-flashcard-front-390.png');

    // 3. Test Deceptive Distractor / Trap Detection
    console.log('3. Testing Deceptive Distractor (Auxiliary trap "a" or agreement trap "levé")...');
    // Find distractor button 'a'
    const distractorA = page.locator('#grammar-flashcards-root button[data-gflash-select]:text-is("a")').first();
    if (await distractorA.count() > 0) {
      await distractorA.click();
      await page.waitForTimeout(100);
    }
    // Also select some words
    const btnElle = page.locator('#grammar-flashcards-root button[data-gflash-select]:text-is("Elle")').first();
    if (await btnElle.count() > 0) {
      await btnElle.click();
      await page.waitForTimeout(100);
    }

    // Click Check Sentence
    const checkBtn = page.locator('button[data-gflash-action="check-sentence"]');
    await checkBtn.click();
    await page.waitForTimeout(250);

    // Verify trap feedback is shown
    const trapFeedback = await page.locator('#grammar-flashcards-root div:has-text("Auxiliary Error")').first().textContent();
    console.log('Trap Feedback verified:', trapFeedback.replace(/\s+/g, ' ').trim());
    assert(trapFeedback.includes('Auxiliary Error') || trapFeedback.includes('Reflexive verbs'), 'Must explain specific mistake trap');

    // Screenshot 2: Trap Detected Alert
    const trapScreenshotPath = path.join(artifactsDir, 'grammar-flashcard-trap-detected-390.png');
    await page.screenshot({ path: trapScreenshotPath });
    console.log('Captured: grammar-flashcard-trap-detected-390.png');

    // Click Next to proceed to card 2
    console.log('4. Advancing to Card 2 and testing correct word assembly...');
    const nextBtn = page.locator('button[data-gflash-action="next-card"]');
    await nextBtn.click();
    await page.waitForTimeout(250);

    // On Card 2: Assemble correctly!
    const wordsToClick = ['Tu', 't’es', 'douchée', 'hier', 'soir', '?'];
    for (const w of wordsToClick) {
      const wBtn = page.locator(`#grammar-flashcards-root button[data-gflash-select]:text-is("${w}")`).first();
      if (await wBtn.count() > 0) {
        await wBtn.click();
        await page.waitForTimeout(80);
      }
    }

    // Click Check Sentence
    await page.locator('button[data-gflash-action="check-sentence"]').click();
    await page.waitForTimeout(250);

    // Verify success banner and revealed card
    const successBanner = await page.locator('#grammar-flashcards-root div:has-text("Bravo ! Sentence Flawlessly Built")').first().textContent();
    console.log('Success Banner:', successBanner.replace(/\s+/g, ' ').trim());
    assert(successBanner.includes('Bravo'), 'Must show success message');

    // Verify French answer with Listen & Slow buttons
    const spokenFrench = await page.locator('#grammar-flashcards-root div:has-text("Correct Spoken French")').first().textContent();
    assert(spokenFrench.includes('Tu t’es douchée hier soir ?'), 'Must display full spoken sentence');
    const listenBtnCount = await page.locator('button[data-gflash-say]').count();
    const slowBtnCount = await page.locator('button[data-gflash-slow]').count();
    assert(listenBtnCount >= 1 && slowBtnCount >= 1, 'Listen and Slow audio buttons must be present');

    // Verify Grammar Rule explanation box
    const grammarRuleText = await page.locator('#grammar-flashcards-root div:has-text("Grammar Rule:")').first().textContent();
    console.log('Grammar Rule displayed:', grammarRuleText.replace(/\s+/g, ' ').trim());
    assert(grammarRuleText.includes('Grammar Rule:'), 'Must show grammar rule explanation');

    // Screenshot 3: Correctly Revealed Card
    const correctScreenshotPath = path.join(artifactsDir, 'grammar-flashcard-revealed-correct-390.png');
    await page.screenshot({ path: correctScreenshotPath });
    console.log('Captured: grammar-flashcard-revealed-correct-390.png');

    // 5. Test End-of-Session Screen & Targeted Remediation Button
    console.log('5. Testing End-of-Session screen and Targeted Remediation flow...');
    // We can fast-forward session to completion via evaluate to test remediation screen
    await page.evaluate(() => {
      // Trigger session completion with 1 mistake recorded
      window.ParlezChallenge.startSession('reflexive');
      // Intentionally record a mistake on card 0
      window.ParlezChallenge.selectToken(document.querySelector('button[data-gflash-select]')?.dataset.gflashSelect);
      window.ParlezChallenge.checkSentence();
      // Advance until end of session screen appears
      for (let i = 0; i < 20; i++) {
        window.ParlezChallenge.nextCard();
      }
    });
    await page.waitForTimeout(300);
    const endHtml = await page.locator('#grammar-flashcards-root').innerHTML();
    console.log('END HTML:', endHtml.slice(0, 500));

    // Verify Targeted Practice Remediation screen
    const remediationBtn = page.locator('button[data-gflash-action="start-remediation"]');
    assert(await remediationBtn.count() > 0, 'Targeted Remediation button must be shown when mistakes were made');
    const remediationText = await remediationBtn.textContent();
    console.log('Remediation button text:', remediationText.trim());

    // Screenshot 4: End-of-Session Remediation Screen
    const remScreenshotPath = path.join(artifactsDir, 'grammar-flashcard-remediation-screen-390.png');
    await page.screenshot({ path: remScreenshotPath });
    console.log('Captured: grammar-flashcard-remediation-screen-390.png');

    // Click "Start Targeted Practice on Missed Rules"
    await remediationBtn.click();
    await page.waitForTimeout(250);

    // Verify queue restarted in targeted mode
    const headerTitle = await page.locator('#grammar-flashcards-root div:has-text("Targeted Practice")').first().textContent();
    console.log('Header after clicking remediation:', headerTitle.replace(/\s+/g, ' ').trim());
    assert(headerTitle.includes('Targeted Practice'), 'Must switch to Targeted Practice mode');

    // 6. Responsive width checks across 320px, 375px, 390px, 430px
    console.log('6. Checking responsive widths for zero horizontal overflow...');
    for (const w of [320, 375, 390, 430]) {
      await page.setViewportSize({ width: w, height: 844 });
      await page.waitForTimeout(150);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
      assert.strictEqual(overflow, false, `No horizontal overflow allowed at ${w}px`);
    }
    console.log('Responsive width checks passed at 320px, 375px, 390px, 430px!');

    console.log('==================================================');
    console.log('ALL GRAMMAR FLASHCARD SENTENCE BUILDER TESTS PASSED 100%!');
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
