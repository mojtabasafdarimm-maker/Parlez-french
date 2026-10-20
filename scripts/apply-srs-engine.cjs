const fs = require('fs');
const path = require('path');

const appJsPath = path.resolve(__dirname, '../public/app.js');
let code = fs.readFileSync(appJsPath, 'utf8');

const isCrlf = code.includes('\r\n');
code = code.replace(/\r\n/g, '\n');

// 1. Core SRS Scheduling & Memory Logic
const srsCoreFunctions = `function ensureProgress(c){
  const p=activeProfile();
  if(!p.progress[c.id]) p.progress[c.id]={};
  const cp=p.progress[c.id];
  if(cp.ease===undefined) cp.ease=2.5;
  if(cp.interval===undefined) cp.interval=0;
  if(cp.reviews===undefined) cp.reviews=0;
  if(cp.reps===undefined) cp.reps=0;
  if(cp.dueAt===undefined) cp.dueAt=0;
  if(cp.lastReviewed===undefined) cp.lastReviewed=0;
  return cp;
}

/* Scientific SM-2 Spaced Repetition (SRS) Engine */
function calcNextSchedule(c, level) {
  const p = ensureProgress(c);
  const now = Date.now();
  const ease = p.ease || 2.5;
  const prevInterval = p.interval || 0;
  const reps = p.reps || 0;
  const isNew = !p.lastReviewed || p.reviews === 0;

  let interval = 0;
  let nextEase = ease;
  let nextReps = reps;
  let dueAt = now;
  let label = '';

  switch (level) {
    case 'again':
      interval = 0;
      nextEase = Math.max(1.3, +(ease - 0.2).toFixed(2));
      nextReps = 0;
      dueAt = now + 10 * 60 * 1000;
      label = '< 10 min';
      break;

    case 'hard':
      if (isNew || prevInterval === 0) {
        interval = 1;
      } else {
        interval = Math.max(1, Math.round(prevInterval * 1.2));
      }
      nextEase = Math.max(1.3, +(ease - 0.15).toFixed(2));
      nextReps = reps + 1;
      dueAt = now + interval * 86400000;
      label = interval === 1 ? '1 day' : \`\${interval} days\`;
      break;

    case 'good':
      if (isNew || reps === 0) {
        interval = 1;
      } else if (reps === 1) {
        interval = 3;
      } else {
        interval = Math.max(1, Math.round(prevInterval * ease));
      }
      nextEase = ease;
      nextReps = reps + 1;
      dueAt = now + interval * 86400000;
      label = interval === 1 ? '1 day' : \`\${interval} days\`;
      break;

    case 'easy':
      if (isNew || reps === 0) {
        interval = 4;
      } else if (reps === 1) {
        interval = 6;
      } else {
        interval = Math.max(2, Math.round(prevInterval * ease * 1.3));
      }
      nextEase = Math.min(3.0, +(ease + 0.15).toFixed(2));
      nextReps = reps + 1;
      dueAt = now + interval * 86400000;
      label = interval === 1 ? '1 day' : \`\${interval} days\`;
      break;
  }

  return { interval, ease: nextEase, reps: nextReps, dueAt, label };
}

function cardMemoryStatus(c) {
  const p = progressFor(c);
  const now = Date.now();
  if (!p.lastReviewed || p.reviews === 0) {
    return { state: 'new', label: '🌱 New card', badgeClass: 'badge-new', isDue: true };
  }
  if (p.interval === 0) {
    return { state: 'learning', label: '🔄 In learning', badgeClass: 'badge-learning', isDue: true };
  }
  if (!p.dueAt || p.dueAt <= now) {
    return { state: 'due', label: '🧠 Due for review', badgeClass: 'badge-due', isDue: true };
  }
  const days = Math.max(1, Math.ceil((p.dueAt - now) / 86400000));
  if (p.interval >= 21) {
    return { state: 'mastered', label: \`⭐ Mastered · due in \${days}d\`, badgeClass: 'badge-mastered', isDue: false };
  }
  return { state: 'scheduled', label: \`⏳ Due in \${days}d\`, badgeClass: 'badge-scheduled', isDue: false };
}

function dueReviewCards(){
  const now = Date.now();
  return state.cards.filter(c => {
    const p = progressFor(c);
    return p.lastReviewed && p.reviews > 0 && p.interval > 0 && p.dueAt <= now;
  });
}
function newCards(){
  return state.cards.filter(c => {
    const p = progressFor(c);
    return !p.lastReviewed || p.reviews === 0;
  });
}
function learningCards(){
  return state.cards.filter(c => {
    const p = progressFor(c);
    return p.reviews > 0 && p.interval === 0;
  });
}
function scheduledCards(){
  const now = Date.now();
  return state.cards.filter(c => {
    const p = progressFor(c);
    return p.lastReviewed && p.dueAt > now;
  });
}

function buildSrsSessionQueue(candidateCards, options = {}) {
  const { mode = 'srs', dailyNewLimit = 10 } = options;
  const now = Date.now();

  if (mode === 'all') {
    return candidateCards.slice().sort((a, b) => {
      const pa = progressFor(a), pb = progressFor(b);
      const scoreA = (!pa.lastReviewed || pa.reviews === 0) ? 1 : (pa.dueAt <= now ? 0 : 2);
      const scoreB = (!pb.lastReviewed || pb.reviews === 0) ? 1 : (pb.dueAt <= now ? 0 : 2);
      if (scoreA !== scoreB) return scoreA - scoreB;
      return (pa.dueAt || 0) - (pb.dueAt || 0);
    }).map(c => c.id);
  }

  // SRS mode:
  // 1. Due reviews (cards already graduated whose dueAt <= now, sorted most overdue first)
  const dueReviews = candidateCards.filter(c => {
    const p = progressFor(c);
    return p.lastReviewed && p.reviews > 0 && p.interval > 0 && p.dueAt <= now;
  }).sort((a, b) => (progressFor(a).dueAt || 0) - (progressFor(b).dueAt || 0));

  // 2. Learning cards (lapsed or interval === 0)
  const learning = candidateCards.filter(c => {
    const p = progressFor(c);
    return p.reviews > 0 && p.interval === 0;
  });

  // 3. New cards (never studied)
  const newUnseen = candidateCards.filter(c => {
    const p = progressFor(c);
    return !p.lastReviewed || p.reviews === 0;
  });

  const selectedNew = newUnseen.slice(0, Math.max(0, dailyNewLimit));
  const queue = [...learning, ...dueReviews, ...selectedNew];

  return queue.map(c => c.id);
}

function applyCardRating(session, c, level) {
  if (!c || !session) return;
  const p = ensureProgress(c);
  const now = Date.now();
  const next = calcNextSchedule(c, level);

  p.reviews = (p.reviews || 0) + 1;
  p.lastReviewed = now;
  p.interval = next.interval;
  p.ease = next.ease;
  p.reps = next.reps;
  p.dueAt = next.dueAt;
  if (level === 'again') {
    p.lapses = (p.lapses || 0) + 1;
  }

  activeProfile().history.push({ id: c.id, time: now, level });
  session.done++;

  if (level === 'again') {
    session.again++;
    const remaining = session.ids.length - session.index - 1;
    if (remaining > 3) {
      session.ids.splice(session.index + 4, 0, c.id);
    } else {
      session.ids.push(c.id);
    }
  }

  session.index++;
  session.revealed = false;
  persist();
  render();
}`;

// Replace single-line ensureProgress with comprehensive ensureProgress + SRS functions
const targetEnsureProgress = 'function ensureProgress(c){const p=activeProfile();return p.progress[c.id]||(p.progress[c.id]={});}';
if (!code.includes(targetEnsureProgress)) {
  console.error('Target ensureProgress not found!');
  process.exit(1);
}
code = code.replace(targetEnsureProgress, srsCoreFunctions);

// 2. Replace homePage & Review Page logic
const homeAndReviewReplacement = `function homePage(){
  const dueReviews = dueReviewCards().length;
  const learnCount = learningCards().length;
  const newCount = newCards().length;
  const waitingCount = dueReviews + learnCount + Math.min(newCount, 10);
  const done = todayHistory().length;
  const byTopic=Object.entries(topicEmoji).map(([t,emoji])=>{let cs=state.cards.filter(c=>c.topic===t),remembered=cs.filter(c=>progressFor(c).interval>=7).length;return cs.length?\`<div class="topic-row"><div class="topic-icon">\${emoji}</div><div style="flex:1"><div style="display:flex;justify-content:space-between"><span class="topic-name">\${esc(t)}</span><span class="small muted">\${remembered}/\${cs.length}</span></div><div class="progress-track"><div class="progress-fill" style="width:\${100*remembered/cs.length}%"></div></div></div></div>\`:''}).join('');
  return \`<section class="hero"><div><div class="eyebrow">WELCOME, \${esc(activeProfile().name.toUpperCase())}</div><h1>See it. Say it.<br/>Remember it.</h1><p>Train yourself to think in French through pictures, real-life actions and tiny daily practice.</p><div style="display:flex;gap:10px;flex-wrap:wrap">\${btn(\`Start visual review \${icon('arrow')}\`,'btn-primary btn-lg','data-action="start-review"')}\${btn(\`Vocab flashcards \${icon('vocab')}\`,'btn-secondary btn-lg','data-view="vocab"')}</div></div><div class="hero-illustration">\${heroArt()}</div></section><div class="stats">\${stat(waitingCount,'Cards ready','clock')}\${stat(done,'Reviewed today','check')}\${stat(lastStreak()+' days','Study streak','fire')}</div><div class="section-head"><h2>Your learning space</h2><button class="link" data-view="library">See all cards →</button></div><div class="panels"><div class="panel"><div style="display:flex;align-items:center;justify-content:space-between"><h3>Today's focus</h3><span class="mini-step">VISUAL FIRST</span></div><p class="subline">Start with the picture, speak out loud, then reveal French. Ratings schedule your next review.</p><div style="display:flex;gap:12px;align-items:center;background:#f7f5fd;padding:17px;border-radius:16px"><span style="font-size:33px">🧠</span><div style="flex:1"><b>\${waitingCount} cards waiting</b><div class="small muted">\${dueReviews ? \`\${dueReviews} reviews due · \` : ''}\${Math.min(waitingCount,10)}-card focused session</div></div><button class="btn btn-secondary" data-action="start-review">Review \${icon('arrow')}</button></div></div><div class="panel"><h3>Progress by topic</h3>\${byTopic}</div></div><div class="notice">\${icon('info')} Review progress belongs to \${esc(activeProfile().name)} on this device. The card library is shared between profiles, but nothing syncs between phones yet.</div>\`;
}
function getReviewPool(filter, mode = 'srs'){
  let pool = state.cards;
  if(filter!=='Due now'&&filter!=='All cards'&&filter!=='') pool = pool.filter(c=>c.topic===filter);
  if(filter==='All cards') return buildSrsSessionQueue(pool, { mode: 'all' });
  return buildSrsSessionQueue(pool, { mode: 'srs', dailyNewLimit: 10 });
}
let reviewFilter='Due now';
function initReview(mode = 'srs'){
  const poolIds = getReviewPool(reviewFilter, mode);
  reviewSession = {
    ids: poolIds,
    index: 0,
    done: 0,
    again: 0,
    good: 0,
    revealed: false
  };
}
function currentReviewCard(){if(!reviewSession||!reviewSession.ids.length)return null;const id=reviewSession.ids[reviewSession.index];return state.cards.find(c=>c.id===id)||null;}
function simpleReviewPage(){
  if(!reviewSession)initReview();
  const c=currentReviewCard(),all=reviewSession.ids.length;
  const header=\`<div class="review-top"><div><div class="eyebrow">PICTURE → FRENCH</div><h2>Visual flashcards</h2></div><select class="select select-sm" id="review-filter" aria-label="Choose review topic">\${['Due now','All cards',...Object.keys(topicEmoji)].map(t=>\`<option \${t===reviewFilter?'selected':''}>\${esc(t)}</option>\`).join('')}</select></div>\`;
  if(!c||reviewSession.index>=all)return \`<div class="review-layout">\${header}<div class="empty"><div class="empty-emoji">✨</div><h2>\${all?'Session complete!':'No cards due right now'}</h2><p class="subline">\${all?\`You reviewed \${reviewSession.done} cards. \${reviewSession.again?\`\${reviewSession.again} were re-tested until memorized.\`:'All remembered!'}\`:'Nice work. Your cards are safely memorized and scheduled for future review.'}</p><button class="btn btn-primary" data-action="practice-all">Practice all cards \${icon('arrow')}</button> <button class="btn btn-white" data-view="home">Back home</button></div></div>\`;
  const picture=activeProfile().prefs.frontMode==='english'?\`<div class="english-front">\${esc(c.englishPrompt)}</div>\`:visual(c);
  const phon=c.examplePhonetic||(window.ParlezPhonetics&&window.ParlezPhonetics[c.frenchExample])||'';
  const mem=cardMemoryStatus(c);
  const sched={again:calcNextSchedule(c,'again'),hard:calcNextSchedule(c,'hard'),good:calcNextSchedule(c,'good'),easy:calcNextSchedule(c,'easy')};

  const prompt=\`<div class="review-card">
    <div class="review-scene">
      \${picture}
      <span class="corner">\${esc(c.topic)}</span>
      <span class="mem-badge card-corner-mem \${mem.badgeClass}">\${mem.label}</span>
      <button class="round-btn quiet-dots-btn card-corner-dots" type="button" data-action="card-details" data-card-id="\${esc(c.id)}" aria-label="Card details" title="More details">\${icon('dots')}</button>
    </div>
    <div class="simple-review-actions">
      <button class="btn btn-primary btn-lg" data-action="reveal">Reveal French \${icon('eye')}</button>
    </div>
  </div>\`;

  const answer=\`<div class="review-card quiet-card revealed">
    <div class="quiet-card-top">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span class="small muted">Card \${reviewSession.index+1} of \${all} · \${esc(c.topic)}</span>
        <span class="mem-badge \${mem.badgeClass}">\${mem.label}</span>
      </div>
      <button class="round-btn quiet-dots-btn" type="button" data-action="card-details" data-card-id="\${esc(c.id)}" aria-label="Card details" title="More details">\${icon('dots')}</button>
    </div>

    <div class="answer quiet-answer-section">
      <h2 class="quiet-french-word">\${esc(c.frenchAnswer)}</h2>
      <div class="quiet-english-meaning">\${esc(c.englishPrompt)}</div>
      <div class="quiet-audio-row">
        <button class="btn btn-secondary btn-sm" type="button" data-action="speak-french" aria-label="Listen to French answer">\${icon('sound')} Listen</button>
      </div>
    </div>

    \${c.frenchExample?\`<div class="quiet-example-section">
      <div class="quiet-example-french-row">
        <p class="quiet-example-french" lang="fr">\${esc(c.frenchExample)}</p>
        <button class="round-btn btn-sm quiet-listen-sub" type="button" data-action="say-example" data-say="\${esc(c.frenchExample)}" title="Listen to example sentence" aria-label="Listen to example">\${icon('sound')}</button>
      </div>
      \${phon?\`<p class="example-phonetic">\${esc(phon)}</p>\`:''}
      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}
    </div>\`:''}

    <div class="rating-row">\${[['Again',sched.again.label,'again'],['Hard',sched.hard.label,'hard'],['Good',sched.good.label,'good'],['Easy',sched.easy.label,'easy']].map(([label,sub,rate])=>\`<button data-rate="\${rate}" class="btn \${rate==='good'?'btn-primary':'btn-white'}">\${label}<span>\${sub}</span></button>\`).join('')}</div>
  </div>\`;

  return \`<div class="review-layout">
    \${header}
    <div class="small muted mb">Card \${reviewSession.index+1} of \${all}</div>
    <div class="review-progress"><div style="width:\${100*reviewSession.index/Math.max(all,1)}%"></div></div>
    \${revealed?answer:prompt}
  </div>\`;
}
const reviewPage=simpleReviewPage;
function rateCard(level){const c=currentReviewCard();if(!c)return;applyCardRating(reviewSession,c,level);}`;

const homeStart = code.indexOf('function homePage(){');
const reviewEnd = code.indexOf('function getVocabPool(){');

if (homeStart === -1 || reviewEnd === -1) {
  console.error('Failed to locate homePage or getVocabPool markers', { homeStart, reviewEnd });
  process.exit(1);
}

code = code.slice(0, homeStart) + homeAndReviewReplacement + '\n' + code.slice(reviewEnd);

// 3. Replace Vocab Section (getVocabPool through vocabPage)
const vocabReplacement = `function getVocabPool(){
  let pool=state.cards.filter(c=>c.kind!=='speaking');
  if(vocabLessonFilter!=='All')pool=pool.filter(c=>c.lesson===vocabLessonFilter);
  if(vocabTopicFilter!=='All')pool=pool.filter(c=>c.topic===vocabTopicFilter);
  if(vocabSearch){
    const q=textNormalized(vocabSearch);
    pool=pool.filter(c=>textNormalized(c.frenchAnswer).includes(q)||textNormalized(c.englishPrompt).includes(q)||textNormalized(c.topic).includes(q));
  }
  return pool;
}
function initVocabSession(ids, mode = 'srs'){
  const pool = getVocabPool();
  const queue = ids && ids.length ? ids : buildSrsSessionQueue(pool, { mode });
  vocabSession={ids:queue,index:0,done:0,again:0,revealed:false,mode:mode};
}
function currentVocabCard(){
  if(!vocabSession||!vocabSession.ids.length)return null;
  const id=vocabSession.ids[vocabSession.index];
  return state.cards.find(c=>c.id===id)||null;
}
function rateVocabCard(level){
  const c=currentVocabCard();if(!c)return;
  applyCardRating(vocabSession,c,level);
}
function vocabCardSessionView(){
  const c=currentVocabCard(),all=vocabSession.ids.length;
  if(!c||vocabSession.index>=all){
    return \`<div class="review-layout">
      <div class="review-top">
        <div><div class="eyebrow">VOCABULARY PRACTICE</div><h2>\${all?'Session Complete!':'Deck Caught Up ✨'}</h2></div>
        <button class="btn btn-secondary btn-sm" data-action="exit-vocab-session">Back to Decks</button>
      </div>
      <div class="empty">
        <div class="empty-emoji">\${all?'🎉':'✨'}</div>
        <h2>\${all?'Bravo !':'All Caught Up!'}</h2>
        <p class="subline">\${all?\`You completed \${vocabSession.done} vocabulary flashcards. \${vocabSession.again?\`\${vocabSession.again} were re-tested until memorized.\`:'All cards scheduled for future review.'}\`:'All cards in this deck have been learned and are scheduled for future review. You can study them again or choose another deck.'}</p>
        <button class="btn btn-primary" data-action="restart-vocab-session">Study Due & New \${icon('arrow')}</button>
        <button class="btn btn-secondary" data-action="restart-vocab-session-all">Review All Cards in Deck</button>
        <button class="btn btn-white" data-action="exit-vocab-session">All Decks</button>
      </div>
    </div>\`;
  }
  const picture=activeProfile().prefs.frontMode==='english'?\`<div class="english-front">\${esc(c.englishPrompt)}</div>\`:visual(c);
  const phon=c.examplePhonetic||(window.ParlezPhonetics&&window.ParlezPhonetics[c.frenchExample])||'';
  const mem=cardMemoryStatus(c);
  const sched={again:calcNextSchedule(c,'again'),hard:calcNextSchedule(c,'hard'),good:calcNextSchedule(c,'good'),easy:calcNextSchedule(c,'easy')};

  const prompt=\`<div class="review-card">
    <div class="review-scene">
      \${picture}
      <span class="corner">\${esc(c.topic||'Vocab')}</span>
      <span class="mem-badge card-corner-mem \${mem.badgeClass}">\${mem.label}</span>
      <button class="round-btn quiet-dots-btn card-corner-dots" type="button" data-action="card-details" data-card-id="\${esc(c.id)}" aria-label="Card details" title="More details">\${icon('dots')}</button>
    </div>
    <div class="simple-review-actions">
      <button class="btn btn-primary btn-lg" data-action="vocab-reveal">Reveal French \${icon('eye')}</button>
    </div>
  </div>\`;

  const answer=\`<div class="review-card quiet-card revealed">
    <div class="quiet-card-top">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span class="small muted">Card \${vocabSession.index+1} of \${all} · \${esc(c.topic||'Vocab')}</span>
        <span class="mem-badge \${mem.badgeClass}">\${mem.label}</span>
      </div>
      <button class="round-btn quiet-dots-btn" type="button" data-action="card-details" data-card-id="\${esc(c.id)}" aria-label="Card details" title="More details">\${icon('dots')}</button>
    </div>

    <div class="answer quiet-answer-section">
      <h2 class="quiet-french-word">\${esc(c.frenchAnswer)}</h2>
      <div class="quiet-english-meaning">\${esc(c.englishPrompt)}</div>
      <div class="quiet-audio-row">
        <button class="btn btn-secondary btn-sm" type="button" data-action="say-vocab-answer" aria-label="Listen to French answer">\${icon('sound')} Listen</button>
      </div>
    </div>

    \${c.frenchExample?\`<div class="quiet-example-section">
      <div class="quiet-example-french-row">
        <p class="quiet-example-french" lang="fr">\${esc(c.frenchExample)}</p>
        <button class="round-btn btn-sm quiet-listen-sub" type="button" data-action="say-example" data-say="\${esc(c.frenchExample)}" title="Listen to example sentence" aria-label="Listen to example">\${icon('sound')}</button>
      </div>
      \${phon?\`<p class="example-phonetic">\${esc(phon)}</p>\`:''}
      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}
    </div>\`:''}

    <div class="rating-row">\${[['Again',sched.again.label,'again'],['Hard',sched.hard.label,'hard'],['Good',sched.good.label,'good'],['Easy',sched.easy.label,'easy']].map(([label,sub,rate])=>\`<button data-vocab-rate="\${rate}" class="btn \${rate==='good'?'btn-primary':'btn-white'}">\${label}<span>\${sub}</span></button>\`).join('')}</div>
  </div>\`;

  return \`<div class="review-layout">
    <div class="review-top">
      <div><div class="eyebrow">\${esc(c.lesson||'A1.1 FLASHCARDS')}</div><h2>\${esc(c.topic||'Vocabulary')}</h2></div>
      <button class="btn btn-white btn-sm" data-action="exit-vocab-session">Exit Deck ✕</button>
    </div>
    <div class="small muted mb">Card \${vocabSession.index+1} of \${all}</div>
    <div class="review-progress"><div style="width:\${100*vocabSession.index/Math.max(all,1)}%"></div></div>
    \${vocabSession.revealed?answer:prompt}
  </div>\`;
}
function vocabCatalogView(){
  const allCards=state.cards.filter(c=>c.kind!=='speaking');
  const distinctLessons=[
    'A1.1 · Séances 1–2',
    'A1.1 · Séances 3–4',
    'A1.1 · Séances 5–6',
    'A1.1 · Séances 7–8',
    'A1.1 · Séances 9–10',
    'A1.2 · Séances 1–2',
    'A1.2 · Séances 3–4',
    'A1.2 · Séances 5–6',
    'A1.2 · Séances 7–8',
    'A1.2 · Marché & Resto'
  ];
  const distinctTopics=['All',...new Set(allCards.map(c=>c.topic).filter(Boolean))];
  const pool=getVocabPool();
  const lessonDescriptions={
    'A1.1 · Séances 1–2':{title:'Greetings, Politeness & Identity',desc:'Bonjour, bonsoir, enchanté, alphabet, spelling, politeness & questions.',icon:'👋'},
    'A1.1 · Séances 3–4':{title:'Tastes, Leisure & Hobbies',desc:'Aimer, détester, adorer, musique, lecture, sport, échecs, guitare & expressions.',icon:'🎨'},
    'A1.1 · Séances 5–6':{title:'Contact, Numbers & Living',desc:'Arobase (@), point, tiret, numéros de téléphone, soixante-dix, quatre-vingts, cent.',icon:'🔢'},
    'A1.1 · Séances 7–8':{title:'Questions & City Places',desc:'Qui, qu’est-ce que, où, quand, comment, combien, bibliothèque, quartier, mairie.',icon:'❓'},
    'A1.1 · Séances 9–10':{title:'Everyday Talk, Family & Professions',desc:'Quoi de neuf, train-train, parents, enfants, enseignant, médecin, avocat, architecte.',icon:'👨‍👩‍👧'},
    'A1.2 · Séances 1–2':{title:'Verbes en -ir & Sentiments',desc:'Finir, choisir, rougir, réfléchir, sortir, dormir, partir, se sentir bien & fatigué.',icon:'✨'},
    'A1.2 · Séances 3–4':{title:'Transports, Déplacements & Itinéraire',desc:'Bus, métro, tramway, vélo, monter, descendre, tourner à gauche/droite, tout droit.',icon:'🚇'},
    'A1.2 · Séances 5–6':{title:'Vêtements, Style & Les Trois Temps',desc:'Chemise, pantalon, robe, manteau, moufles, en train de, venir de, aller + inf.',icon:'🧣'},
    'A1.2 · Séances 7–8':{title:'Vie quotidienne, Corvées & Invitations',desc:'Se réveiller, se lever, faire les courses, la vaisselle, la lessive, ça te dit de... ?',icon:'☕'},
    'A1.2 · Marché & Resto':{title:'Au Marché & Au Restaurant',desc:'Qu’est-ce qu’il vous faudra, tomates, laitue, oignons, l’addition s’il vous plaît.',icon:'🥖'}
  };
  const now = Date.now();
  const deckCardsHtml=distinctLessons.map(lessonKey=>{
    const cardsInLesson=allCards.filter(c=>c.lesson===lessonKey);
    const meta=lessonDescriptions[lessonKey]||{title:lessonKey,desc:'Classroom curriculum deck.',icon:'📖'};
    const remembered=cardsInLesson.filter(c=>progressFor(c).interval>=7).length;
    const pct=cardsInLesson.length?Math.round(100*remembered/cardsInLesson.length):0;
    const dueCount = cardsInLesson.filter(c => {
      const p = progressFor(c);
      return p.lastReviewed && p.reviews > 0 && p.interval > 0 && p.dueAt <= now;
    }).length;
    const learnCount = cardsInLesson.filter(c => {
      const p = progressFor(c);
      return p.reviews > 0 && p.interval === 0;
    }).length;
    const newCount = cardsInLesson.filter(c => {
      const p = progressFor(c);
      return !p.lastReviewed || p.reviews === 0;
    }).length;

    let srsPill = '';
    if (dueCount > 0) {
      srsPill = \`<span class="mem-pill pill-due">🧠 \${dueCount} due</span>\`;
    } else if (learnCount > 0) {
      srsPill = \`<span class="mem-pill pill-new">🔄 \${learnCount} learning</span>\`;
    } else if (newCount > 0) {
      srsPill = \`<span class="mem-pill pill-new">🌱 \${newCount} new</span>\`;
    } else {
      srsPill = \`<span class="mem-pill pill-caughtup">✨ Caught up</span>\`;
    }

    const actionText = (dueCount > 0 || learnCount > 0 || newCount > 0)
      ? \`Study (\${dueCount + learnCount + Math.min(newCount, 10)}) \${icon('arrow')}\`
      : \`Practice Deck \${icon('arrow')}\`;

    return \`<div class="panel vocab-deck-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">
        <div style="font-size:32px">\${meta.icon}</div>
        <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:flex-end">
          \${srsPill}
          <span class="meta">\${cardsInLesson.length} cards</span>
        </div>
      </div>
      <h3 style="margin:12px 0 6px">\${esc(meta.title)}</h3>
      <p class="small muted" style="margin:0 0 14px;line-height:1.5">\${esc(meta.desc)}</p>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span class="small muted" style="font-size:11px">Mastery: \${pct}%</span>
        <span class="small muted" style="font-size:11px">\${remembered}/\${cardsInLesson.length} learned</span>
      </div>
      <div class="progress-track" style="margin-bottom:16px"><div class="progress-fill" style="width:\${pct}%"></div></div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" style="flex:1" data-start-deck="\${esc(lessonKey)}">\${actionText}</button>
        <button class="btn btn-white btn-sm" data-filter-deck="\${esc(lessonKey)}">Browse</button>
      </div>
    </div>\`;
  }).join('');
  return \`<div>
    <div class="eyebrow">VOCABULARY FLASHCARDS · CLASS & ÉDITO</div>
    <h1>See it. Say it.</h1>
    <p class="header-desc">Direct visual recall without intermediate translation. Choose a classroom session or search for specific words.</p>
    <div class="library-toolbar">
      <div class="search-box">
        \${icon('search')}
        <input type="search" id="vocab-search-input" class="input" placeholder="Search vocabulary in French or English..." value="\${esc(vocabSearch)}"/>
      </div>
      <select id="vocab-lesson-select" class="select" aria-label="Filter by lesson">
        <option value="All" \${vocabLessonFilter==='All'?'selected':''}>All Sessions (\${allCards.length} cards)</option>
        \${distinctLessons.map(l=>\`<option value="\${esc(l)}" \${vocabLessonFilter===l?'selected':''}>\${esc(l)}</option>\`).join('')}
      </select>
      <select id="vocab-topic-select" class="select" aria-label="Filter by topic">
        \${distinctTopics.map(t=>\`<option value="\${esc(t)}" \${vocabTopicFilter===t?'selected':''}>\${esc(t)}</option>\`).join('')}
      </select>
      \${(vocabLessonFilter!=='All'||vocabTopicFilter!=='All'||vocabSearch)?\`<button class="btn btn-white btn-sm" data-action="reset-vocab-filter">Clear filters</button>\`:''}
    </div>
    \${(vocabLessonFilter==='All'&&vocabTopicFilter==='All'&&!vocabSearch)?\`
      <div class="section-head" style="margin-top:10px">
        <h2>Classroom Curriculum Decks</h2>
        <button class="btn btn-secondary btn-sm" data-action="study-all-vocab">Study All (\${allCards.length}) \${icon('arrow')}</button>
      </div>
      <div class="vocab-deck-grid">\${deckCardsHtml}</div>
    \`:\`
      <div class="section-head" style="margin-top:10px">
        <h2>\${pool.length} Cards Found</h2>
        <button class="btn btn-primary btn-sm" data-action="study-filtered-vocab">Study These \${pool.length} Cards \${icon('arrow')}</button>
      </div>
      <div class="library-grid">
        \${pool.map(c=>\`<div class="lib-card hover-card">
          <div class="lib-scene">\${visual(c)}</div>
          <div class="lib-content">
            <span class="meta">\${esc(c.lesson||c.topic)}</span>
            <h3>\${esc(c.frenchAnswer)}</h3>
            <p>\${esc(c.englishPrompt)}</p>
            \${c.frenchExample?\`<div class="vocab-example"><p lang="fr">\${esc(c.frenchExample)}</p>\${c.exampleEnglish?\`<p class="example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}</div>\`:''}
            <div class="lib-footer">
              <button class="btn btn-secondary btn-sm" data-say-card="\${esc(c.frenchAnswer)}">\${icon('sound')} Listen</button>
              <button class="btn btn-white btn-sm" data-practice="\${esc(c.id)}">Flashcard \${icon('arrow')}</button>
            </div>
          </div>
        </div>\`).join('')}
      </div>
    \`}
  </div>\`;
}
function vocabPage(){return vocabSession?vocabCardSessionView():vocabCatalogView();}`;

const vocabStart = code.indexOf('function getVocabPool(){');
const vocabEnd = code.indexOf('const grammarExercises=[');

if (vocabStart === -1 || vocabEnd === -1) {
  console.error('Failed to locate getVocabPool or grammarExercises markers', { vocabStart, vocabEnd });
  process.exit(1);
}

code = code.slice(0, vocabStart) + vocabReplacement + '\n' + code.slice(vocabEnd);

// 4. Replace Grammar Flashcards Session logic (getGrammarPool through grammarCardSessionView)
const grammarReplacement = `function getGrammarPool(){
  let pool=state.cards.filter(c=>c.kind==='grammar');
  if(grammarTopicFilter!=='All')pool=pool.filter(c=>c.topic===grammarTopicFilter);
  return pool;
}
function initGrammarSession(ids, mode = 'srs'){
  const pool = getGrammarPool();
  const queue = ids && ids.length ? ids : buildSrsSessionQueue(pool, { mode });
  grammarSession={
    ids:queue,
    index:0,
    done:0,
    again:0,
    revealed:false,
    mode:mode
  };
}
function currentGrammarCard(){
  if(!grammarSession||!grammarSession.ids.length)return null;
  const id=grammarSession.ids[grammarSession.index];
  return state.cards.find(c=>c.id===id)||null;
}
function rateGrammarCard(level){
  const c=currentGrammarCard();if(!c)return;
  applyCardRating(grammarSession,c,level);
}
function grammarCardSessionView(){
  const c=currentGrammarCard(),all=grammarSession.ids.length;
  if(!c||grammarSession.index>=all){
    return \`<div class="review-layout">
      <div class="review-top">
        <div><div class="eyebrow">GRAMMAR FLASHCARDS</div><h2>\${all?'Session Complete!':'Rules Caught Up ✨'}</h2></div>
        <button class="btn btn-secondary btn-sm" data-action="exit-grammar-session">All Grammar Rules</button>
      </div>
      <div class="empty">
        <div class="empty-emoji">\${all?'🎉':'✨'}</div>
        <h2>\${all?'Bravo !':'All Caught Up!'}</h2>
        <p class="subline">\${all?\`You completed \${grammarSession.done} grammar rule flashcards. \${grammarSession.again?\`\${grammarSession.again} were re-tested until memorized.\`:'All cards scheduled for future review.'}\`:'All cards in this topic are scheduled for future review. You can review them again or choose another topic.'}</p>
        <button class="btn btn-primary" data-action="restart-grammar-session">Review Due & New \${icon('arrow')}</button>
        <button class="btn btn-secondary" data-action="restart-grammar-session-all">Review All Rules</button>
        <button class="btn btn-white" data-action="exit-grammar-session">Back to Rules</button>
      </div>
    </div>\`;
  }
  const picture=activeProfile().prefs.frontMode==='english'?\`<div class="english-front">\${esc(c.englishPrompt)}</div>\`:visual(c);
  const phon=c.examplePhonetic||(window.ParlezPhonetics&&window.ParlezPhonetics[c.frenchExample])||'';
  const mem=cardMemoryStatus(c);
  const sched={again:calcNextSchedule(c,'again'),hard:calcNextSchedule(c,'hard'),good:calcNextSchedule(c,'good'),easy:calcNextSchedule(c,'easy')};

  const prompt=\`<div class="review-card">
    <div class="review-scene">
      \${picture}
      <span class="corner">\${esc(c.topic||'Grammar')}</span>
      <span class="mem-badge card-corner-mem \${mem.badgeClass}">\${mem.label}</span>
      <button class="round-btn quiet-dots-btn card-corner-dots" type="button" data-action="card-details" data-card-id="\${esc(c.id)}" aria-label="Card details" title="More details">\${icon('dots')}</button>
    </div>
    <div class="simple-review-actions">
      <button class="btn btn-primary btn-lg" data-action="grammar-reveal">Reveal Rule \${icon('eye')}</button>
    </div>
  </div>\`;

  const answer=\`<div class="review-card quiet-card revealed">
    <div class="quiet-card-top">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span class="small muted">Rule \${grammarSession.index+1} of \${all} · \${esc(c.topic||'Grammar')}</span>
        <span class="mem-badge \${mem.badgeClass}">\${mem.label}</span>
      </div>
      <button class="round-btn quiet-dots-btn" type="button" data-action="card-details" data-card-id="\${esc(c.id)}" aria-label="Card details" title="More details">\${icon('dots')}</button>
    </div>

    <div class="answer quiet-answer-section">
      <div class="eyebrow" style="font-size:11px;letter-spacing:1px;margin-bottom:4px">RÈGLE DE GRAMMAIRE</div>
      <h2 class="quiet-french-word">\${esc(c.frenchAnswer)}</h2>
      <div class="quiet-english-meaning">\${esc(c.englishPrompt)}</div>
      <div class="quiet-audio-row">
        <button class="btn btn-secondary btn-sm" type="button" data-action="say-grammar-answer" aria-label="Listen to French answer">\${icon('sound')} Listen</button>
      </div>
    </div>

    \${c.frenchExample?\`<div class="quiet-example-section">
      <div class="quiet-example-french-row">
        <p class="quiet-example-french" lang="fr">\${esc(c.frenchExample)}</p>
        <button class="round-btn btn-sm quiet-listen-sub" type="button" data-action="say-example" data-say="\${esc(c.frenchExample)}" title="Listen to example sentence" aria-label="Listen to example">\${icon('sound')}</button>
      </div>
      \${phon?\`<p class="example-phonetic">\${esc(phon)}</p>\`:''}
      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}
    </div>\`:''}

    <div class="rating-row">\${[['Again',sched.again.label,'again'],['Hard',sched.hard.label,'hard'],['Good',sched.good.label,'good'],['Easy',sched.easy.label,'easy']].map(([label,sub,rate])=>\`<button data-grammar-rate="\${rate}" class="btn \${rate==='good'?'btn-primary':'btn-white'}">\${label}<span>\${sub}</span></button>\`).join('')}</div>
  </div>\`;

  return \`<div class="review-layout">
    <div class="review-top">
      <div><div class="eyebrow">\${esc(c.lesson||'GRAMMAR RULE')}</div><h2>\${esc(c.topic||'Grammar')}</h2></div>
      <button class="btn btn-white btn-sm" data-action="exit-grammar-session">Exit Deck ✕</button>
    </div>
    <div class="small muted mb">Rule \${grammarSession.index+1} of \${all}</div>
    <div class="review-progress"><div style="width:\${100*grammarSession.index/Math.max(all,1)}%"></div></div>
    \${grammarSession.revealed?answer:prompt}
  </div>\`;
}`;

const grammarStart = code.indexOf('function getGrammarPool(){');
const grammarEnd = code.indexOf('function grammarFlashcardsView(){');

if (grammarStart === -1 || grammarEnd === -1) {
  console.error('Failed to locate getGrammarPool or grammarFlashcardsView markers', { grammarStart, grammarEnd });
  process.exit(1);
}

code = code.slice(0, grammarStart) + grammarReplacement + '\n' + code.slice(grammarEnd);

// 5. Replace cardDetailsModal with scientific SM-2 stats
const cardDetailsStart = code.indexOf('function cardDetailsModal(c){');
const cardDetailsEnd = code.indexOf('function profileModal(){');

if (cardDetailsStart === -1 || cardDetailsEnd === -1) {
  console.error('Failed to locate cardDetailsModal or profileModal markers', { cardDetailsStart, cardDetailsEnd });
  process.exit(1);
}

const updatedCardDetailsModal = `function cardDetailsModal(c){
  if(!c)return;
  modalClose();
  modalOpen=true;
  const phon=c.examplePhonetic||(window.ParlezPhonetics&&window.ParlezPhonetics[c.frenchExample])||'';
  const p=progressFor(c);
  const mem=cardMemoryStatus(c);
  const now=Date.now();
  let dueText='Not yet studied';
  if(p.lastReviewed && p.reviews > 0){
    if(p.interval === 0) dueText = 'In learning (< 10 min)';
    else if(!p.dueAt || p.dueAt <= now) dueText = 'Due right now';
    else {
      const d = Math.max(1, Math.ceil((p.dueAt - now)/86400000));
      const dateStr = new Date(p.dueAt).toLocaleDateString('en-CA', { month: 'short', day: 'numeric' });
      dueText = \`In \${d} \${d===1?'day':'days'} (\${dateStr})\`;
    }
  }

  const html=\`<div class="modal-backdrop" id="modal-backdrop">
    <div class="modal card-details-modal" role="dialog" aria-modal="true" aria-label="Card Details: \${esc(c.frenchAnswer)}">
      <div class="modal-header">
        <div>
          <div class="eyebrow">\${esc(c.topic||'VOCABULARY')}\${c.lesson?\` · \${esc(c.lesson)}\`:''}</div>
          <h2 style="margin-top:4px">\${esc(c.frenchAnswer)}</h2>
        </div>
        <button class="round-btn" type="button" data-action="close-modal" aria-label="Close details">\${icon('close')}</button>
      </div>

      <div class="card-details-scene">
        \${visual(c)}
      </div>

      <div class="card-details-content">
        <div class="card-details-box" style="background:#f8f7fd;border:1px solid #e7e2f5">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span class="small muted" style="font-weight:700;color:var(--purple,#5d4ea8)">Scientific Spaced Repetition (SM-2)</span>
            <span class="mem-badge \${mem.badgeClass}">\${mem.label}</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;font-size:12.5px">
            <div><span class="muted">Interval:</span> <b>\${p.interval ? (p.interval === 1 ? '1 day' : p.interval + ' days') : (p.reviews ? '< 10 min' : '0 days (New)')}</b></div>
            <div><span class="muted">Ease Factor:</span> <b>\${Math.round((p.ease||2.5)*100)}%</b></div>
            <div><span class="muted">Reviews:</span> <b>\${p.reviews||0} times</b></div>
            <div><span class="muted">Next Review:</span> <b>\${dueText}</b></div>
          </div>
        </div>

        <div class="card-details-row">
          <div style="flex:1">
            <span class="small muted">English meaning</span>
            <div style="font-size:16px;font-weight:600;color:var(--text,#2d263b);margin-top:2px">\${esc(c.englishPrompt)}</div>
          </div>
          <button class="btn btn-secondary btn-sm" type="button" data-action="say-card-details" data-say="\${esc(c.frenchAnswer)}" aria-label="Listen to word">\${icon('sound')} Listen</button>
        </div>

        \${c.frenchExample?\`<div class="card-details-box">
          <span class="small muted">Example sentence</span>
          <div class="card-details-example-fr" lang="fr">
            <span>\${esc(c.frenchExample)}</span>
            <button class="round-btn btn-sm" type="button" data-action="say-card-details" data-say="\${esc(c.frenchExample)}" aria-label="Listen to example">\${icon('sound')}</button>
          </div>
          \${phon?\`<p class="example-phonetic" style="margin:4px 0 0">\${esc(phon)}</p>\`:''}
          \${c.exampleEnglish?\`<p class="small muted" style="margin:4px 0 0">\${esc(c.exampleEnglish)}</p>\`:''}
        </div>\`:''}

        \${c.grammarNote?\`<div class="card-details-box note-box">
          <span class="small muted" style="font-weight:600;color:var(--purple-dark,#515097)">Grammar & Usage Note</span>
          <p style="margin:6px 0 0;font-size:13.5px;line-height:1.5">\${esc(c.grammarNote)}</p>
        </div>\`:''}
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:16px">
        <button class="btn btn-white btn-sm" type="button" data-edit="\${esc(c.id)}">\${icon('edit')} Edit card</button>
        <button class="btn btn-primary btn-sm" type="button" data-action="close-modal">Got it</button>
      </div>
    </div>
  </div>\`;
  document.body.insertAdjacentHTML('beforeend',html);
}`;

code = code.slice(0, cardDetailsStart) + updatedCardDetailsModal + '\n' + code.slice(cardDetailsEnd);

// 6. Update click delegation for smart deck start & restart-all actions
const smartStartDeck = [
  'if(el.dataset.startDeck){',
  '  vocabLessonFilter=el.dataset.startDeck;',
  '  vocabTopicFilter="All";',
  '  vocabSearch="";',
  '  const cardsInDeck = state.cards.filter(c => c.lesson === el.dataset.startDeck && c.kind !== "speaking");',
  '  const now = Date.now();',
  '  const hasDueOrNew = cardsInDeck.some(c => {',
  '    const p = progressFor(c);',
  '    return (!p.lastReviewed || p.reviews === 0) || (p.dueAt <= now) || (p.reviews > 0 && p.interval === 0);',
  '  });',
  '  initVocabSession(null, hasDueOrNew ? "srs" : "all");',
  '  render();',
  '  return;',
  '}'
].join('\n');

code = code.replace(
  "if(el.dataset.startDeck){vocabLessonFilter=el.dataset.startDeck;initVocabSession();render();return;}",
  smartStartDeck
);

code = code.replace(
  "case 'restart-vocab-session':initVocabSession(vocabSession?vocabSession.ids:null);render();break;",
  "case 'restart-vocab-session':initVocabSession(null, 'srs');render();break;case 'restart-vocab-session-all':initVocabSession(null, 'all');render();break;"
);

code = code.replace(
  "case 'exit-vocab-session':vocabSession=null;render();break;",
  "case 'exit-vocab-session':vocabSession=null;vocabLessonFilter='All';vocabTopicFilter='All';vocabSearch='';render();break;"
);

code = code.replace(
  "case 'restart-grammar-session':initGrammarSession(grammarSession?grammarSession.ids:null);render();break;",
  "case 'restart-grammar-session':initGrammarSession(null, 'srs');render();break;case 'restart-grammar-session-all':initGrammarSession(null, 'all');render();break;"
);

if (isCrlf) {
  code = code.replace(/\n/g, '\r\n');
}

fs.writeFileSync(appJsPath, code, 'utf8');
console.log('Successfully updated public/app.js with Scientific SRS Memory Engine!');
