const fs = require('fs');
const path = require('path');

const appJsPath = path.resolve(__dirname, '../public/app.js');
let code = fs.readFileSync(appJsPath, 'utf8');

const isCrlf = code.includes('\r\n');
code = code.replace(/\r\n/g, '\n');

// 1. Add cardPhonetic and update upgradeVocabularyContent
const oldUpgradeVocab = `function upgradeVocabularyContent(){
  for(const c of state.cards){
    const old=originalStarterContent[c.id],updated=vocabularyContent[c.id];
    if(old&&updated&&c.frenchAnswer===old.frenchAnswer){
      const sameExample=c.frenchExample===old.frenchExample||c.frenchExample===updated.frenchExample;
      if(c.englishPrompt===old.englishPrompt)c.englishPrompt=updated.englishPrompt;
      if(sameExample){c.frenchExample=updated.frenchExample;if(!c.exampleEnglish)c.exampleEnglish=updated.exampleEnglish;}
    }
    if(c.frenchExample && !c.examplePhonetic && window.ParlezPhonetics?.[c.frenchExample]){
      c.examplePhonetic = window.ParlezPhonetics[c.frenchExample];
    }
  }
}`;

const newUpgradeVocab = `function upgradeVocabularyContent(){
  for(const c of state.cards){
    const old=originalStarterContent[c.id],updated=vocabularyContent[c.id];
    if(old&&updated&&c.frenchAnswer===old.frenchAnswer){
      const sameExample=c.frenchExample===old.frenchExample||c.frenchExample===updated.frenchExample;
      if(c.englishPrompt===old.englishPrompt)c.englishPrompt=updated.englishPrompt;
      if(sameExample){c.frenchExample=updated.frenchExample;if(!c.exampleEnglish)c.exampleEnglish=updated.exampleEnglish;}
    }
    if(c.frenchExample && (!c.examplePhonetic || !c.examplePhonetic.startsWith('['))){
      if(window.ParlezPhonetics?.[c.frenchExample]){
        c.examplePhonetic = window.ParlezPhonetics[c.frenchExample];
      }
    }
    if(!c.pronunciation && window.ParlezPhonetics?.[c.frenchAnswer]){
      c.pronunciation = window.ParlezPhonetics[c.frenchAnswer];
    }
  }
}
function cardPhonetic(c){
  if(!c) return { word: '', example: '' };
  if(window.getCardPhonetic) return window.getCardPhonetic(c);
  const rawWord = c.pronunciation || c.wordPhonetic || c.phonetic || (window.ParlezPhonetics && window.ParlezPhonetics[c.frenchAnswer]) || '';
  const word = rawWord ? (rawWord.startsWith('[') ? rawWord : \`[\${rawWord}]\`) : '';
  const rawEx = c.examplePhonetic || (window.ParlezPhonetics && window.ParlezPhonetics[c.frenchExample]) || '';
  const example = rawEx ? (rawEx.startsWith('[') ? rawEx : \`[\${rawEx}]\`) : '';
  return { word, example };
}`;

if (!code.includes(oldUpgradeVocab)) {
  console.error('Could not find oldUpgradeVocab!');
  process.exit(1);
}
code = code.replace(oldUpgradeVocab, newUpgradeVocab);

// 2. simpleReviewPage
const oldSimpleReview = `  const picture=activeProfile().prefs.frontMode==='english'?\`<div class="english-front">\${esc(c.englishPrompt)}</div>\`:visual(c);
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
    </div>\`:''}`;

const newSimpleReview = `  const picture=activeProfile().prefs.frontMode==='english'?\`<div class="english-front">\${esc(c.englishPrompt)}</div>\`:visual(c);
  const phon=cardPhonetic(c);
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
      \${phon.word?\`<p class="word-phonetic">\${esc(phon.word)}</p>\`:''}
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
      \${phon.example?\`<p class="example-phonetic">\${esc(phon.example)}</p>\`:''}
      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}
    </div>\`:''}`;

if (!code.includes(oldSimpleReview)) {
  console.error('Could not find oldSimpleReview!');
  process.exit(1);
}
code = code.replace(oldSimpleReview, newSimpleReview);

// 3. vocabCardSessionView
const oldVocabSession = `  const picture=activeProfile().prefs.frontMode==='english'?\`<div class="english-front">\${esc(c.englishPrompt)}</div>\`:visual(c);
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
    </div>\`:''}`;

const newVocabSession = `  const picture=activeProfile().prefs.frontMode==='english'?\`<div class="english-front">\${esc(c.englishPrompt)}</div>\`:visual(c);
  const phon=cardPhonetic(c);
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
      \${phon.word?\`<p class="word-phonetic">\${esc(phon.word)}</p>\`:''}
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
      \${phon.example?\`<p class="example-phonetic">\${esc(phon.example)}</p>\`:''}
      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}
    </div>\`:''}`;

if (!code.includes(oldVocabSession)) {
  console.error('Could not find oldVocabSession!');
  process.exit(1);
}
code = code.replace(oldVocabSession, newVocabSession);

// 4. grammarCardSessionView
const oldGrammarSession = `  const picture=activeProfile().prefs.frontMode==='english'?\`<div class="english-front">\${esc(c.englishPrompt)}</div>\`:visual(c);
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
    </div>\`:''}`;

const newGrammarSession = `  const picture=activeProfile().prefs.frontMode==='english'?\`<div class="english-front">\${esc(c.englishPrompt)}</div>\`:visual(c);
  const phon=cardPhonetic(c);
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
      \${phon.word?\`<p class="word-phonetic">\${esc(phon.word)}</p>\`:''}
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
      \${phon.example?\`<p class="example-phonetic">\${esc(phon.example)}</p>\`:''}
      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}
    </div>\`:''}`;

if (!code.includes(oldGrammarSession)) {
  console.error('Could not find oldGrammarSession!');
  process.exit(1);
}
code = code.replace(oldGrammarSession, newGrammarSession);

// 5. cardDetailsModal
const oldCardDetails = `function cardDetailsModal(c){
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

const newCardDetails = `function cardDetailsModal(c){
  if(!c)return;
  modalClose();
  modalOpen=true;
  const phon=cardPhonetic(c);
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
            \${phon.word?\`<p class="word-phonetic" style="margin:6px 0 0">\${esc(phon.word)}</p>\`:''}
          </div>
          <button class="btn btn-secondary btn-sm" type="button" data-action="say-card-details" data-say="\${esc(c.frenchAnswer)}" aria-label="Listen to word">\${icon('sound')} Listen</button>
        </div>

        \${c.frenchExample?\`<div class="card-details-box">
          <span class="small muted">Example sentence</span>
          <div class="card-details-example-fr" lang="fr">
            <span>\${esc(c.frenchExample)}</span>
            <button class="round-btn btn-sm" type="button" data-action="say-card-details" data-say="\${esc(c.frenchExample)}" aria-label="Listen to example">\${icon('sound')}</button>
          </div>
          \${phon.example?\`<p class="example-phonetic" style="margin:4px 0 0">\${esc(phon.example)}</p>\`:''}
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

if (!code.includes(oldCardDetails)) {
  console.error('Could not find oldCardDetails!');
  process.exit(1);
}
code = code.replace(oldCardDetails, newCardDetails);

// 6. vocabCatalogView filtered grid
const oldVocabGrid = `      <div class="library-grid">
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
      </div>`;

const newVocabGrid = `      <div class="library-grid">
        \${pool.map(c=>{const p=cardPhonetic(c);return \`<div class="lib-card hover-card">
          <div class="lib-scene">\${visual(c)}</div>
          <div class="lib-content">
            <span class="meta">\${esc(c.lesson||c.topic)}</span>
            <h3>\${esc(c.frenchAnswer)}</h3>
            \${p.word?\`<p class="word-phonetic" style="margin:2px 0 6px;font-size:12.5px">\${esc(p.word)}</p>\`:''}
            <p>\${esc(c.englishPrompt)}</p>
            \${c.frenchExample?\`<div class="vocab-example"><p lang="fr">\${esc(c.frenchExample)}</p>\${p.example?\`<p class="example-phonetic">\${esc(p.example)}</p>\`:''}\${c.exampleEnglish?\`<p class="example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}</div>\`:''}
            <div class="lib-footer">
              <button class="btn btn-secondary btn-sm" data-say-card="\${esc(c.frenchAnswer)}">\${icon('sound')} Listen</button>
              <button class="btn btn-white btn-sm" data-practice="\${esc(c.id)}">Flashcard \${icon('arrow')}</button>
            </div>
          </div>
        </div>\`;}).join('')}
      </div>`;

if (!code.includes(oldVocabGrid)) {
  console.error('Could not find oldVocabGrid!');
  process.exit(1);
}
code = code.replace(oldVocabGrid, newVocabGrid);

// 7. libraryPage grid
const oldLibGrid = `<div class="library-grid">\${cs.map(c=>\`<div class="lib-card hover-card"><div class="lib-scene">\${visual(c)}</div><div class="lib-content"><span class="meta">\${esc(c.topic)}</span><h3>\${esc(c.frenchAnswer)}</h3><p>\${esc(c.englishPrompt)}</p>\${c.frenchExample?\`<div class="vocab-example"><p lang="fr">\${esc(c.frenchExample)}</p>\${(c.examplePhonetic||window.ParlezPhonetics?.[c.frenchExample])?\`<p class="example-phonetic">\${esc(c.examplePhonetic||window.ParlezPhonetics[c.frenchExample])}</p>\`:''}\${c.exampleEnglish?\`<p class="example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}</div>\`:''}<div class="lib-footer"><button class="btn btn-secondary" data-edit="\${esc(c.id)}">\${icon('edit')} Edit</button><button class="btn btn-white" data-practice="\${esc(c.id)}">Practice \${icon('arrow')}</button></div></div></div>\`).join('')}</div>`;

const newLibGrid = `<div class="library-grid">\${cs.map(c=>{const p=cardPhonetic(c);return \`<div class="lib-card hover-card"><div class="lib-scene">\${visual(c)}</div><div class="lib-content"><span class="meta">\${esc(c.topic)}</span><h3>\${esc(c.frenchAnswer)}</h3>\${p.word?\`<p class="word-phonetic" style="margin:2px 0 6px;font-size:12.5px">\${esc(p.word)}</p>\`:''}<p>\${esc(c.englishPrompt)}</p>\${c.frenchExample?\`<div class="vocab-example"><p lang="fr">\${esc(c.frenchExample)}</p>\${p.example?\`<p class="example-phonetic">\${esc(p.example)}</p>\`:''}\${c.exampleEnglish?\`<p class="example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}</div>\`:''}<div class="lib-footer"><button class="btn btn-secondary" data-edit="\${esc(c.id)}">\${icon('edit')} Edit</button><button class="btn btn-white" data-practice="\${esc(c.id)}">Practice \${icon('arrow')}</button></div></div></div>\`;}).join('')}</div>`;

if (!code.includes(oldLibGrid)) {
  console.error('Could not find oldLibGrid!');
  process.exit(1);
}
code = code.replace(oldLibGrid, newLibGrid);

if (isCrlf) {
  code = code.replace(/\n/g, '\r\n');
}

fs.writeFileSync(appJsPath, code, 'utf8');
console.log('Successfully updated public/app.js with complete phonetic UI & resolution!');
