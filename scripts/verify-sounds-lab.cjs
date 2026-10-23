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
  '.png': 'image/png'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0].split('#')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(publicDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(0, '127.0.0.1', async () => {
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Sounds Lab test server listening on ${baseUrl}`);

  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PARLEZ_BROWSER_CHANNEL || 'msedge'
  });

  try {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 }, // iPhone 13/14/15 viewport
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148'
    });
    const page = await context.newPage();

    console.log('Navigating to app...');
    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    // 1. Direct Engine Unit Assertions inside browser context
    console.log('Testing Sound Annotator and Tokenizer Engine...');
    const engineTests = await page.evaluate(() => {
      const PS = window.ParlezSounds;
      if (!PS) return { error: 'window.ParlezSounds not defined' };

      const sample1 = PS.annotateFrench('Ils ont un ami.');
      const hasLiaisonZ = sample1.includes('‿[z]');
      const hasLiaisonN = sample1.includes('‿[n]');

      const sample2 = PS.annotateFrench('Ils parlent français.');
      const hasSilentEnt = sample2.includes('title="Silent verb ending -ent"');
      const hasSilentS = sample2.includes('title="Silent final consonant"');

      const sample3 = PS.annotateFrench('Tu as une jupe.');
      const hasFrenchU = sample3.includes('v-mark v-u');

      const sample4 = PS.annotateFrench('Je me douche.');
      const hasFrenchOu = sample4.includes('v-mark v-ou');

      const sample5 = PS.annotateFrench('Il fait froid.');
      const hasFrenchOi = sample5.includes('v-mark v-oi');

      return {
        hasLiaisonZ,
        hasLiaisonN,
        hasSilentEnt,
        hasSilentS,
        hasFrenchU,
        hasFrenchOu,
        hasFrenchOi
      };
    });

    console.log('Engine test results:', engineTests);
    assert.strictEqual(engineTests.hasLiaisonZ, true, 'Engine must detect [z] liaison in Ils ont');
    assert.strictEqual(engineTests.hasLiaisonN, true, 'Engine must detect [n] liaison in un ami');
    assert.strictEqual(engineTests.hasSilentEnt, true, 'Engine must detect silent verb ending -ent');
    assert.strictEqual(engineTests.hasSilentS, true, 'Engine must detect silent final s');
    assert.strictEqual(engineTests.hasFrenchU, true, 'Engine must detect pure French u [y]');
    assert.strictEqual(engineTests.hasFrenchOu, true, 'Engine must detect ou [u]');
    assert.strictEqual(engineTests.hasFrenchOi, true, 'Engine must detect oi [wa]');

    // 2. Navigation to Sounds Lab Tab
    console.log('Navigating to Sounds Lab Tab via bottom navigation...');
    const soundsNavBtn = await page.locator('.bottom-nav button[data-view="sounds"]');
    assert.strictEqual(await soundsNavBtn.count(), 1, 'Sounds button must exist in bottom navigation');
    await soundsNavBtn.click();
    await page.waitForTimeout(300);

    const heading = await page.locator('.sounds-lab-page h1').textContent();
    console.log('Sounds Lab heading:', heading);
    assert(heading.includes('Speak clearly'), 'Sounds lab heading must be rendered');

    // 3. Subview 1: Ear Trainer Game
    console.log('Starting Ear Trainer Game...');
    await page.locator('[data-sound-action="start-game"]').click();
    await page.waitForTimeout(200);

    const questionCount = await page.locator('.sound-question-prompt').count();
    assert.strictEqual(questionCount, 1, 'Ear trainer question prompt must be visible');
    const questionText = await page.locator('.sound-question-prompt').textContent();
    console.log('Ear Trainer Round 1 prompt:', questionText);

    // Audio controls
    const normalAudioBtn = await page.locator('[data-sound-action="play-target"]');
    const slowAudioBtn = await page.locator('[data-sound-action="play-target-slow"]');
    assert.strictEqual(await normalAudioBtn.count(), 1, 'Normal audio button must exist');
    assert.strictEqual(await slowAudioBtn.count(), 1, '0.6x Slow audio button must exist');

    // Answer option A
    console.log('Answering Option A...');
    await page.locator('.sound-option-btn').first().click();
    await page.waitForTimeout(200);

    const feedbackCount = await page.locator('.sound-feedback-box').count();
    assert.strictEqual(feedbackCount, 1, 'Feedback box must appear after answering');
    const ruleText = await page.locator('.sound-feedback-rule').textContent();
    console.log('Feedback rule summary:', ruleText);

    await page.screenshot({ path: path.join(artifactsDir, 'sounds-lab-ear-trainer-390.png') });
    console.log('Captured: sounds-lab-ear-trainer-390.png');

    // 4. Subview 2: Rules & Soundboard
    console.log('Switching to Rules & Soundboard tab...');
    await page.locator('[data-sound-tab="rules"]').click();
    await page.waitForTimeout(200);

    const ruleCards = await page.locator('.sound-rule-card').count();
    console.log('Soundboard rule cards count:', ruleCards);
    assert.strictEqual(ruleCards, 4, 'Must have 4 masterclass categories (Vowels, Nasals, Silent letters, Liaisons)');

    const chipAudioButtons = await page.locator('.sound-chip-btn').count();
    console.log('Interactive soundboard chip buttons count:', chipAudioButtons);
    assert(chipAudioButtons >= 15, 'Must have multiple interactive sound chips');

    await page.screenshot({ path: path.join(artifactsDir, 'sounds-lab-rules-390.png') });
    console.log('Captured: sounds-lab-rules-390.png');

    // 5. Subview 3: Read-Aloud Workout
    console.log('Switching to Read-Aloud Workout tab...');
    await page.locator('[data-sound-tab="workout"]').click();
    await page.waitForTimeout(200);

    const workoutPrompt = await page.locator('.workout-target-sentence').textContent();
    console.log('Workout target sentence to read aloud:', workoutPrompt.trim());
    assert(workoutPrompt.trim().length > 0, 'Target sentence must be displayed');

    console.log('Revealing pronunciation breakdown...');
    await page.locator('[data-sound-action="reveal-workout"]').click();
    await page.waitForTimeout(200);

    const coachingTitle = await page.locator('.coaching-title').textContent();
    console.log('Coaching focus:', coachingTitle);
    assert(coachingTitle.includes('Pronunciation Focus'), 'Coaching focus must appear');

    const slowWorkoutAudio = await page.locator('.workout-audio-row .slow-btn');
    assert.strictEqual(await slowWorkoutAudio.count(), 1, '0.6x Slow audio button must exist in workout');

    const ratingButtons = await page.locator('.workout-rating-bar .rating-row button').count();
    assert.strictEqual(ratingButtons, 4, 'SM-2 rating buttons (Again, Hard, Good, Easy) must exist');

    await page.screenshot({ path: path.join(artifactsDir, 'sounds-lab-workout-390.png') });
    console.log('Captured: sounds-lab-workout-390.png');

    // 6. Test Card Back Pronunciation Decoder in Vocab Flashcards
    console.log('Navigating to Vocab Flashcards to test card back decoder...');
    await page.locator('.bottom-nav button[data-view="vocab"]').click();
    await page.waitForTimeout(200);

    // Start study on first available deck
    const startDeckBtn = page.locator('[data-start-deck]').first();
    await startDeckBtn.click();
    await page.waitForTimeout(200);

    // Reveal French answer
    console.log('Revealing flashcard...');
    await page.locator('[data-action="vocab-reveal"]').click();
    await page.waitForTimeout(200);

    const decoderAccordion = await page.locator('.pron-decoder-accordion');
    assert.strictEqual(await decoderAccordion.count(), 1, 'Pronunciation decoder accordion must exist on card back');

    console.log('Expanding Pronunciation Decoder accordion on card back...');
    await page.locator('.decoder-summary').click();
    await page.waitForTimeout(200);

    const decoderContentVisible = await page.locator('.decoder-content').isVisible();
    assert.strictEqual(decoderContentVisible, true, 'Decoder content must expand when clicked');

    const slowDecoderBtn = await page.locator('.decoder-content .slow-btn').first();
    assert.strictEqual(await slowDecoderBtn.count(), 1, '0.6x Slow audio button must exist in decoder');

    await page.screenshot({ path: path.join(artifactsDir, 'flashcard-back-decoder-390.png') });
    console.log('Captured: flashcard-back-decoder-390.png');

    console.log('==================================================');
    console.log('ALL SOUNDS & PRONUNCIATION LAB E2E TESTS PASSED 100%!');
    console.log('==================================================');
  } finally {
    await browser.close();
    server.close();
  }
});
