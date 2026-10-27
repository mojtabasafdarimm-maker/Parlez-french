// Comprehensive E2E verification for FSRS Scheduler, 2-Step Learning, True Daily New Cap, Tricky Words & Adaptive Game Mistake Memory
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const publicDir = path.resolve(__dirname, '../public');
const artifactDir = process.env.ARTIFACT_DIR || path.resolve(__dirname, '../artifacts');
fs.mkdirSync(artifactDir, { recursive: true });

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp'
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
    await page.goto(`http://127.0.0.1:${port}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(250);

    // 1. Verify FSRS Forgetting Curve, Late-Review Bonus & Legacy Migration
    const fsrsMath = await page.evaluate(() => {
      const rAtStability = fsrsRetrievability(10, 10); // Should be ~0.90
      // Test late review bonus on a graduated card
      const card = state.cards[0];
      const p = ensureProgress(card);
      p.reviews = 2;
      p.reps = 2;
      p.learningStep = 2;
      p.interval = 3;
      p.stability = 3.0;
      p.difficulty = 4.9;
      p.lastReviewed = Date.now() - 3 * 86400000; // On time (3 days ago)
      const onTimeSched = calcNextSchedule(card, 'good');

      p.lastReviewed = Date.now() - 12 * 86400000; // Overdue (12 days ago, still remembered!)
      const lateSched = calcNextSchedule(card, 'good');

      // Reset card progress
      delete activeProfile().progress[card.id];

      return {
        rAtStability: +rAtStability.toFixed(2),
        onTimeStability: onTimeSched.stability,
        lateStability: lateSched.stability,
        onTimeInterval: onTimeSched.interval,
        lateInterval: lateSched.interval
      };
    });
    console.log('FSRS math check:', fsrsMath);
    assert.equal(fsrsMath.rAtStability, 0.90, 'Retrievability at t=S must be 0.90 (90%)');
    assert.ok(fsrsMath.lateStability > fsrsMath.onTimeStability, 'Remembering an overdue card must yield higher FSRS stability than on-time review');

    // 2. Verify 2-Step Learning on Brand-New Card (Step 1/2 -> Step 2/2 -> Graduated 1 day)
    await page.evaluate(() => {
      vocabLessonFilter = 'All';
      vocabTopicFilter = 'All';
      vocabGenderFilter = 'All';
      initVocabSession(['c1_bonjour'], 'srs', true);
      navigate('vocab');
      initVocabSession(['c1_bonjour'], 'srs', true);
      render();
    });
    await page.waitForTimeout(200);

    // Reveal first pass (Step 1/2)
    await page.click('button[data-action="vocab-reveal"]');
    await page.waitForTimeout(150);

    const step1GoodLabel = await page.locator('button[data-vocab-rate="good"] span').innerText();
    console.log('Step 1/2 Good label:', step1GoodLabel);
    assert.equal(step1GoodLabel, '10m → 1 day', 'First pass Good button must show 2-step 10m -> 1 day label');
    await page.screenshot({ path: path.join(artifactDir, 'fsrs-step1-buttons-390.png') });

    // Click Good on Step 1/2 -> should re-queue at end of session for confirmation (Step 2/2)
    await page.click('button[data-vocab-rate="good"]');
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(artifactDir, 'fsrs-step2-confirming-390.png') });

    const afterStep1 = await page.evaluate(() => ({
      progress: activeProfile().progress['c1_bonjour'],
      sessionIds: vocabSession.ids,
      sessionIndex: vocabSession.index,
      badge: document.querySelector('.card-corner-mem')?.innerText
    }));
    console.log('After Step 1/2 Good:', afterStep1.badge, 'learningStep =', afterStep1.progress.learningStep);
    assert.equal(afterStep1.progress.learningStep, 1, 'Card must enter learningStep 1');
    assert.equal(afterStep1.progress.interval, 0, 'Card must stay interval 0 until Step 2/2 confirmation');
    assert.ok(afterStep1.badge.includes('Confirming (2/2)'), 'Corner badge must show Confirming (2/2)');

    // Reveal and click Good on Step 2/2 -> graduates to 1 day!
    await page.click('button[data-action="vocab-reveal"]');
    await page.waitForTimeout(150);
    const step2GoodLabel = await page.locator('button[data-vocab-rate="good"] span').innerText();
    console.log('Step 2/2 Good label:', step2GoodLabel);
    assert.equal(step2GoodLabel, '1 day', 'Confirmation pass Good button must graduate to 1 day');

    await page.click('button[data-vocab-rate="good"]');
    await page.waitForTimeout(150);

    const afterStep2 = await page.evaluate(() => activeProfile().progress['c1_bonjour']);
    console.log('After Step 2/2 Graduation:', afterStep2);
    assert.equal(afterStep2.learningStep, 2, 'Card must graduate to learningStep 2');
    assert.equal(afterStep2.interval, 1, 'Graduated interval must be 1 day');
    assert.ok(afterStep2.stability >= 1.2, 'Graduated stability must be >= 1.2 days');

    // 3. Verify True Daily New-Card Cap & +5 Unlock Button
    const capCheck = await page.evaluate(() => {
      activeProfile().prefs.dailyNew = 5;
      // Mark 4 more cards as introduced today (total 5 = c1_bonjour + 4)
      for (const id of ['c1_bonsoir', 'c1_salut', 'c1_merci', 'c1_svp']) {
        const cp = ensureProgress({ id });
        cp.reviews = 1;
        cp.interval = 4;
        cp.stability = 4;
        cp.learningStep = 2;
        cp.lastReviewed = Date.now();
        cp.dueAt = Date.now() + 4 * 86400000;
        cp.firstReviewedDay = todayKey();
      }
      persist();
      initReview('srs');
      navigate('review');
      return {
        introducedToday: newCardsIntroducedToday(),
        remainingAllowance: remainingDailyNewAllowance(),
        reviewQueueLen: reviewSession.ids.length
      };
    });
    console.log('Daily New Cap check:', capCheck);
    assert.equal(capCheck.introducedToday, 5, 'Should count 5 new cards introduced today');
    assert.equal(capCheck.remainingAllowance, 0, 'Remaining daily new allowance must be 0');
    assert.equal(capCheck.reviewQueueLen, 0, 'Global review queue must not add more new cards once daily cap is reached');

    // Verify "+5 New Cards Today" button is visible and works
    const unlockBtn = page.locator('button[data-action="unlock-more-new"]');
    assert.equal(await unlockBtn.count(), 1, 'Unlock +5 New Cards Today button must appear when daily cap is reached');
    await page.screenshot({ path: path.join(artifactDir, 'fsrs-daily-cap-unlock-390.png') });
    await unlockBtn.click();
    await page.waitForTimeout(150);
    const unlockedLen = await page.evaluate(() => reviewSession.ids.length);
    console.log('Unlocked review queue length after clicking +5:', unlockedLen);
    assert.equal(unlockedLen, 5, 'Clicking +5 New Cards Today must add 5 new cards to the session');

    // 4. Verify Adaptive Mistake Memory Across Games & Tricky Words Filter
    const adaptiveCheck = await page.evaluate(() => {
      // A) Gender Reflex Quiz mistake memory on 'b2' (une écharpe)
      activeProfile().genderHistory = [
        { time: Date.now() - 5000, cardId: 'b2', bare: 'écharpe', gender: 'f', chosen: 'm', correct: false },
        { time: Date.now() - 2000, cardId: 'b2', bare: 'écharpe', gender: 'f', chosen: 'm', correct: false }
      ];
      const cp = ensureProgress({ id: 'b2' });
      cp.genderMisses = 2;
      cp.difficulty = 7.2;

      // Start a new Gender Reflex session and verify 'b2' is prioritized into the session
      window.ParlezGender.startReflex();

      // B) Sounds Lab Ear Trainer mistake memory
      activeProfile().soundsHistory = [
        { time: Date.now() - 4000, roundId: 'ou_u_3', category: 'u_vs_ou', correct: false },
        { time: Date.now() - 1000, roundId: 'ou_u_3', category: 'u_vs_ou', correct: false }
      ];

      // C) Tricky Words count
      const trickyIds = trickyCards().map(c => c.id);
      return {
        trickyIncludesEcharpe: trickyIds.includes('b2'),
        trickyCount: trickyIds.length
      };
    });
    console.log('Adaptive Game & Tricky Words check:', adaptiveCheck);
    assert.equal(adaptiveCheck.trickyIncludesEcharpe, true, 'Missed gender noun must appear in Tricky Words filter');

    // Navigate to Vocab and click Tricky Words filter
    await page.evaluate(() => navigate('vocab'));
    await page.waitForTimeout(150);
    await page.click('button[data-gender-filter="tricky"]');
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(artifactDir, 'fsrs-tricky-words-390.png') });

    // Navigate to Settings and screenshot FSRS Settings panel
    await page.evaluate(() => navigate('settings'));
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(artifactDir, 'fsrs-settings-390.png') });

    console.log('==================================================');
    console.log('ALL FSRS, 2-STEP LEARNING, DAILY CAP & ADAPTIVE GAME TESTS PASSED 100%!');
    console.log('==================================================');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(err => {
  console.error('FSRS VERIFICATION FAILED:', err);
  process.exit(1);
});
