const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '..', 'public', 'app.js');
let code = fs.readFileSync(appJsPath, 'utf8');

const changes = [
  // 1. Add gender tip inside renderPronunciationDecoder
  {
    find: `  const decWord=window.ParlezSounds.annotateFrench(c.frenchAnswer);\n  const decEx=c.frenchExample?window.ParlezSounds.annotateFrench(c.frenchExample):'';`,
    altFind: `  const decWord=window.ParlezSounds.annotateFrench(c.frenchAnswer);\r\n  const decEx=c.frenchExample?window.ParlezSounds.annotateFrench(c.frenchExample):'';`,
    replace: () => `  const decWord=window.ParlezSounds.annotateFrench(c.frenchAnswer);
  const decEx=c.frenchExample?window.ParlezSounds.annotateFrench(c.frenchExample):'';
  const gInfo=window.ParlezGender?window.ParlezGender.getCardGender(c):null;`
  },
  {
    find: `<div class="decoder-legend">`,
    replace: () => `\${gInfo&&gInfo.tip?\`<div style="margin-top:8px;padding:7px 10px;border-radius:9px;font-size:12px;background:\${gInfo.gender==='f'?'#fff1f2':'#eff6ff'};color:\${gInfo.gender==='f'?'#9f1239':'#1e40af'}"><b>\${esc(gInfo.shortPill)} :</b> \${esc(gInfo.tip)}</div>\`:''}<div class="decoder-legend">`
  },

  // 2. Add vocabGenderFilter state variable
  {
    find: `let vocabSession=null,vocabLessonFilter='All',vocabTopicFilter='All',vocabSearch='';`,
    replace: () => `let vocabSession=null,vocabLessonFilter='All',vocabTopicFilter='All',vocabGenderFilter='All',vocabSearch='';`
  },

  // 3. Update simpleReviewPage() with visual noun gender cues
  {
    find: `  const phon=cardPhonetic(c);\r\n  const mem=cardMemoryStatus(c);\r\n  const sched={again:calcNextSchedule(c,'again'),hard:calcNextSchedule(c,'hard'),good:calcNextSchedule(c,'good'),easy:calcNextSchedule(c,'easy')};\r\n\r\n  const prompt=\`<div class="review-card">\r\n    <div class="review-scene">\r\n      \${picture}\r\n      <span class="corner">\${esc(c.topic)}</span>`,
    altFind: `  const phon=cardPhonetic(c);\n  const mem=cardMemoryStatus(c);\n  const sched={again:calcNextSchedule(c,'again'),hard:calcNextSchedule(c,'hard'),good:calcNextSchedule(c,'good'),easy:calcNextSchedule(c,'easy')};\n\n  const prompt=\`<div class="review-card">\n    <div class="review-scene">\n      \${picture}\n      <span class="corner">\${esc(c.topic)}</span>`,
    replace: () => `  const phon=cardPhonetic(c);
  const mem=cardMemoryStatus(c);
  const gInfo=window.ParlezGender?window.ParlezGender.getCardGender(c):null;
  const sched={again:calcNextSchedule(c,'again'),hard:calcNextSchedule(c,'hard'),good:calcNextSchedule(c,'good'),easy:calcNextSchedule(c,'easy')};

  const prompt=\`<div class="review-card">
    <div class="review-scene">
      \${picture}
      <span class="corner">\${esc(c.topic)}</span>
      \${window.ParlezGender?window.ParlezGender.frontPromptBadge(c):''}`
  },
  {
    find: `  const answer=\`<div class="review-card quiet-card revealed">\r\n    <div class="quiet-card-top">\r\n      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">\r\n        <span class="small muted">Card \${reviewSession.index+1} of \${all} · \${esc(c.topic)}</span>\r\n        <span class="mem-badge \${mem.badgeClass}">\${mem.label}</span>\r\n      </div>`,
    altFind: `  const answer=\`<div class="review-card quiet-card revealed">\n    <div class="quiet-card-top">\n      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">\n        <span class="small muted">Card \${reviewSession.index+1} of \${all} · \${esc(c.topic)}</span>\n        <span class="mem-badge \${mem.badgeClass}">\${mem.label}</span>\n      </div>`,
    replace: () => `  const answer=\`<div class="review-card quiet-card revealed \${gInfo?gInfo.cardClass:''}">
    <div class="quiet-card-top">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span class="small muted">Card \${reviewSession.index+1} of \${all} · \${esc(c.topic)}</span>
        <span class="mem-badge \${mem.badgeClass}">\${mem.label}</span>
        \${gInfo?\`<span class="gender-pill \${gInfo.pillClass}">\${esc(gInfo.pillLabel)}</span>\`:''}
      </div>`
  },
  {
    find: `    <div class="answer quiet-answer-section">\r\n      <h2 class="quiet-french-word">\${esc(c.frenchAnswer)}</h2>\r\n      \${phon.word?\`<p class="word-phonetic">\${esc(phon.word)}</p>\`:''}\r\n      <div class="quiet-english-meaning">\${esc(c.englishPrompt)}</div>\r\n      <div class="quiet-audio-row">\r\n        <button class="btn btn-secondary btn-sm" type="button" data-action="speak-french" aria-label="Listen to French answer">\${icon('sound')} Listen</button>\r\n      </div>\r\n    </div>\r\n\r\n    \${c.frenchExample?\`<div class="quiet-example-section">\r\n      <div class="quiet-example-french-row">\r\n        <p class="quiet-example-french" lang="fr">\${esc(c.frenchExample)}</p>`,
    altFind: `    <div class="answer quiet-answer-section">\n      <h2 class="quiet-french-word">\${esc(c.frenchAnswer)}</h2>\n      \${phon.word?\`<p class="word-phonetic">\${esc(phon.word)}</p>\`:''}\n      <div class="quiet-english-meaning">\${esc(c.englishPrompt)}</div>\n      <div class="quiet-audio-row">\n        <button class="btn btn-secondary btn-sm" type="button" data-action="speak-french" aria-label="Listen to French answer">\${icon('sound')} Listen</button>\n      </div>\n    </div>\n\n    \${c.frenchExample?\`<div class="quiet-example-section">\n      <div class="quiet-example-french-row">\n        <p class="quiet-example-french" lang="fr">\${esc(c.frenchExample)}</p>`,
    replace: () => `    <div class="answer quiet-answer-section">
      <h2 class="quiet-french-word">\${window.ParlezGender?window.ParlezGender.formatAnswerHTML(c):esc(c.frenchAnswer)}</h2>
      \${phon.word?\`<p class="word-phonetic">\${esc(phon.word)}</p>\`:''}
      <div class="quiet-english-meaning">\${esc(c.englishPrompt)}</div>
      <div class="quiet-audio-row">
        <button class="btn btn-secondary btn-sm" type="button" data-action="speak-french" aria-label="Listen to French answer">\${icon('sound')} Listen</button>
      </div>
    </div>

    \${c.frenchExample?\`<div class="quiet-example-section">
      <div class="quiet-example-french-row">
        <p class="quiet-example-french" lang="fr">\${window.ParlezGender?window.ParlezGender.highlightInlineArticles(c.frenchExample,gInfo):esc(c.frenchExample)}</p>`
  },

  // 4. Update getVocabPool() to support vocabGenderFilter
  {
    find: `function getVocabPool(){\r\n  let pool=state.cards.filter(c=>c.kind!=='speaking');\r\n  if(vocabLessonFilter!=='All')pool=pool.filter(c=>c.lesson===vocabLessonFilter);\r\n  if(vocabTopicFilter!=='All')pool=pool.filter(c=>c.topic===vocabTopicFilter);`,
    altFind: `function getVocabPool(){\n  let pool=state.cards.filter(c=>c.kind!=='speaking');\n  if(vocabLessonFilter!=='All')pool=pool.filter(c=>c.lesson===vocabLessonFilter);\n  if(vocabTopicFilter!=='All')pool=pool.filter(c=>c.topic===vocabTopicFilter);`,
    replace: () => `function getVocabPool(){
  let pool=state.cards.filter(c=>c.kind!=='speaking');
  if(vocabLessonFilter!=='All')pool=pool.filter(c=>c.lesson===vocabLessonFilter);
  if(vocabTopicFilter!=='All')pool=pool.filter(c=>c.topic===vocabTopicFilter);
  if(vocabGenderFilter==='m'||vocabGenderFilter==='f'){
    pool=pool.filter(c=>{
      const g=window.ParlezGender?window.ParlezGender.getCardGender(c):null;
      return g&&(g.gender===vocabGenderFilter||g.gender==='mf');
    });
  }`
  },

  // 5. Update vocabCardSessionView() with visual noun gender cues
  {
    find: `  const phon=cardPhonetic(c);\r\n  const mem=cardMemoryStatus(c);\r\n  const sched={again:calcNextSchedule(c,'again'),hard:calcNextSchedule(c,'hard'),good:calcNextSchedule(c,'good'),easy:calcNextSchedule(c,'easy')};\r\n\r\n  const prompt=\`<div class="review-card">\r\n    <div class="review-scene">\r\n      \${picture}\r\n      <span class="corner">\${esc(c.topic||'Vocab')}</span>`,
    altFind: `  const phon=cardPhonetic(c);\n  const mem=cardMemoryStatus(c);\n  const sched={again:calcNextSchedule(c,'again'),hard:calcNextSchedule(c,'hard'),good:calcNextSchedule(c,'good'),easy:calcNextSchedule(c,'easy')};\n\n  const prompt=\`<div class="review-card">\n    <div class="review-scene">\n      \${picture}\n      <span class="corner">\${esc(c.topic||'Vocab')}</span>`,
    replace: () => `  const phon=cardPhonetic(c);
  const mem=cardMemoryStatus(c);
  const gInfo=window.ParlezGender?window.ParlezGender.getCardGender(c):null;
  const sched={again:calcNextSchedule(c,'again'),hard:calcNextSchedule(c,'hard'),good:calcNextSchedule(c,'good'),easy:calcNextSchedule(c,'easy')};

  const prompt=\`<div class="review-card">
    <div class="review-scene">
      \${picture}
      <span class="corner">\${esc(c.topic||'Vocab')}</span>
      \${window.ParlezGender?window.ParlezGender.frontPromptBadge(c):''}`
  },
  {
    find: `  const answer=\`<div class="review-card quiet-card revealed">\r\n    <div class="quiet-card-top">\r\n      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">\r\n        <span class="small muted">Card \${vocabSession.index+1} of \${all} · \${esc(c.topic||'Vocab')}</span>\r\n        <span class="mem-badge \${mem.badgeClass}">\${mem.label}</span>\r\n      </div>`,
    altFind: `  const answer=\`<div class="review-card quiet-card revealed">\n    <div class="quiet-card-top">\n      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">\n        <span class="small muted">Card \${vocabSession.index+1} of \${all} · \${esc(c.topic||'Vocab')}</span>\n        <span class="mem-badge \${mem.badgeClass}">\${mem.label}</span>\n      </div>`,
    replace: () => `  const answer=\`<div class="review-card quiet-card revealed \${gInfo?gInfo.cardClass:''}">
    <div class="quiet-card-top">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span class="small muted">Card \${vocabSession.index+1} of \${all} · \${esc(c.topic||'Vocab')}</span>
        <span class="mem-badge \${mem.badgeClass}">\${mem.label}</span>
        \${gInfo?\`<span class="gender-pill \${gInfo.pillClass}">\${esc(gInfo.pillLabel)}</span>\`:''}
      </div>`
  },
  {
    find: `    <div class="answer quiet-answer-section">\r\n      <h2 class="quiet-french-word">\${esc(c.frenchAnswer)}</h2>\r\n      \${phon.word?\`<p class="word-phonetic">\${esc(phon.word)}</p>\`:''}\r\n      <div class="quiet-english-meaning">\${esc(c.englishPrompt)}</div>\r\n      <div class="quiet-audio-row">\r\n        <button class="btn btn-secondary btn-sm" type="button" data-action="say-vocab-answer" aria-label="Listen to French answer">\${icon('sound')} Listen</button>\r\n      </div>\r\n    </div>\r\n\r\n    \${c.frenchExample?\`<div class="quiet-example-section">\r\n      <div class="quiet-example-french-row">\r\n        <p class="quiet-example-french" lang="fr">\${esc(c.frenchExample)}</p>`,
    altFind: `    <div class="answer quiet-answer-section">\n      <h2 class="quiet-french-word">\${esc(c.frenchAnswer)}</h2>\n      \${phon.word?\`<p class="word-phonetic">\${esc(phon.word)}</p>\`:''}\n      <div class="quiet-english-meaning">\${esc(c.englishPrompt)}</div>\n      <div class="quiet-audio-row">\n        <button class="btn btn-secondary btn-sm" type="button" data-action="say-vocab-answer" aria-label="Listen to French answer">\${icon('sound')} Listen</button>\n      </div>\n    </div>\n\n    \${c.frenchExample?\`<div class="quiet-example-section">\n      <div class="quiet-example-french-row">\n        <p class="quiet-example-french" lang="fr">\${esc(c.frenchExample)}</p>`,
    replace: () => `    <div class="answer quiet-answer-section">
      <h2 class="quiet-french-word">\${window.ParlezGender?window.ParlezGender.formatAnswerHTML(c):esc(c.frenchAnswer)}</h2>
      \${phon.word?\`<p class="word-phonetic">\${esc(phon.word)}</p>\`:''}
      <div class="quiet-english-meaning">\${esc(c.englishPrompt)}</div>
      <div class="quiet-audio-row">
        <button class="btn btn-secondary btn-sm" type="button" data-action="say-vocab-answer" aria-label="Listen to French answer">\${icon('sound')} Listen</button>
      </div>
    </div>

    \${c.frenchExample?\`<div class="quiet-example-section">
      <div class="quiet-example-french-row">
        <p class="quiet-example-french" lang="fr">\${window.ParlezGender?window.ParlezGender.highlightInlineArticles(c.frenchExample,gInfo):esc(c.frenchExample)}</p>`
  },

  // 6. Update vocabCatalogView() with Gender Filter bar & color-coded cards
  {
    find: `      \${(vocabLessonFilter!=='All'||vocabTopicFilter!=='All'||vocabSearch)?\`<button class="btn btn-white btn-sm" data-action="reset-vocab-filter">Clear filters</button>\`:''}\r\n    </div>\r\n    \${(vocabLessonFilter==='All'&&vocabTopicFilter==='All'&&!vocabSearch)?\``,
    altFind: `      \${(vocabLessonFilter!=='All'||vocabTopicFilter!=='All'||vocabSearch)?\`<button class="btn btn-white btn-sm" data-action="reset-vocab-filter">Clear filters</button>\`:''}\n    </div>\n    \${(vocabLessonFilter==='All'&&vocabTopicFilter==='All'&&!vocabSearch)?\``,
    replace: () => `      \${(vocabLessonFilter!=='All'||vocabTopicFilter!=='All'||vocabGenderFilter!=='All'||vocabSearch)?\`<button class="btn btn-white btn-sm" data-action="reset-vocab-filter">Clear filters</button>\`:''}
    </div>
    <div class="gender-filter-bar" role="group" aria-label="Filter by noun gender">
      <button type="button" class="gender-filter-btn \${vocabGenderFilter==='All'?'active':''}" data-gender-filter="All">All Words</button>
      <button type="button" class="gender-filter-btn gf-btn-m \${vocabGenderFilter==='m'?'active':''}" data-gender-filter="m">♂ Masculin (un / le)</button>
      <button type="button" class="gender-filter-btn gf-btn-f \${vocabGenderFilter==='f'?'active':''}" data-gender-filter="f">♀ Féminin (une / la)</button>
      <button type="button" class="gender-filter-btn gf-btn-reflex \${vocabGenderFilter==='reflex'?'active':''}" data-gender-filter="reflex">🎨 Gender Reflex Quiz (un/le vs une/la)</button>
    </div>
    \${vocabGenderFilter==='reflex'&&window.ParlezGender?window.ParlezGender.renderReflexView():(vocabLessonFilter==='All'&&vocabTopicFilter==='All'&&vocabGenderFilter==='All'&&!vocabSearch)?\``
  },
  {
    find: `        \${pool.map(c=>{const p=cardPhonetic(c);return \`<div class="lib-card hover-card">\r\n          <div class="lib-scene">\${visual(c)}</div>\r\n          <div class="lib-content">\r\n            <span class="meta">\${esc(c.lesson||c.topic)}</span>\r\n            <h3>\${esc(c.frenchAnswer)}</h3>`,
    altFind: `        \${pool.map(c=>{const p=cardPhonetic(c);return \`<div class="lib-card hover-card">\n          <div class="lib-scene">\${visual(c)}</div>\n          <div class="lib-content">\n            <span class="meta">\${esc(c.lesson||c.topic)}</span>\n            <h3>\${esc(c.frenchAnswer)}</h3>`,
    replace: () => `        \${pool.map(c=>{const p=cardPhonetic(c);const gInfo=window.ParlezGender?window.ParlezGender.getCardGender(c):null;return \`<div class="lib-card hover-card">
          <div class="lib-scene">\${visual(c)}</div>
          <div class="lib-content">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px">
              <span class="meta" style="margin:0">\${esc(c.lesson||c.topic)}</span>
              \${gInfo?\`<span class="gender-pill \${gInfo.pillClass}">\${esc(gInfo.shortPill)}</span>\`:''}
            </div>
            <h3>\${window.ParlezGender?window.ParlezGender.formatAnswerHTML(c):esc(c.frenchAnswer)}</h3>`
  },

  // 7. Update libraryPage() card grid with gender badges & color-coded articles
  {
    find: `<div class="library-grid">\${cs.map(c=>{const p=cardPhonetic(c);return \`<div class="lib-card hover-card"><div class="lib-scene">\${visual(c)}</div><div class="lib-content"><span class="meta">\${esc(c.topic)}</span><h3>\${esc(c.frenchAnswer)}</h3>`,
    replace: () => `<div class="library-grid">\${cs.map(c=>{const p=cardPhonetic(c);const gInfo=window.ParlezGender?window.ParlezGender.getCardGender(c):null;return \`<div class="lib-card hover-card"><div class="lib-scene">\${visual(c)}</div><div class="lib-content"><div style="display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px"><span class="meta" style="margin:0">\${esc(c.topic)}</span>\${gInfo?\`<span class="gender-pill \${gInfo.pillClass}">\${esc(gInfo.shortPill)}</span>\`:''}</div><h3>\${window.ParlezGender?window.ParlezGender.formatAnswerHTML(c):esc(c.frenchAnswer)}</h3>`
  },

  // 8. Update cardDetailsModal(c) with Visual Noun Gender Memory box
  {
    find: `        \${c.grammarNote?\`<div class="card-details-box note-box">`,
    replace: () => `        \${(()=>{const gInfo=window.ParlezGender?window.ParlezGender.getCardGender(c):null;return gInfo?\`<div class="card-details-box gender-details-box \${gInfo.pillClass}" style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span class="small" style="font-weight:700">Visual Noun Gender Cue</span><span class="gender-pill \${gInfo.pillClass}">\${esc(gInfo.pillLabel)}</span></div>\${gInfo.tip?\`<p style="margin:6px 0 0;font-size:13.5px;line-height:1.5">\${esc(gInfo.tip)}</p>\`:''}</div>\`:'';})()}
        \${c.grammarNote?\`<div class="card-details-box note-box">`
  },

  // 9. Update delegated click handlers for gender filter and reflex quiz
  {
    find: `if(el.dataset.saySlow){say(el.dataset.saySlow,.60);return;}`,
    replace: () => `if(el.dataset.saySlow){say(el.dataset.saySlow,.60);return;}if(el.dataset.genderFilter){vocabGenderFilter=el.dataset.genderFilter;if(vocabGenderFilter==='reflex'&&window.ParlezGender)window.ParlezGender.startReflex();render();return;}if(el.dataset.genderAction&&window.ParlezGender){const ga=el.dataset.genderAction;if(ga==='choose')window.ParlezGender.answerReflex(el.dataset.choice);else if(ga==='next-reflex')window.ParlezGender.nextReflex();else if(ga==='restart-reflex'){window.ParlezGender.startReflex();render();}return;}`
  },
  {
    find: `case 'exit-vocab-session':vocabSession=null;vocabLessonFilter='All';vocabTopicFilter='All';vocabSearch='';render();break;`,
    replace: () => `case 'exit-vocab-session':vocabSession=null;vocabLessonFilter='All';vocabTopicFilter='All';vocabGenderFilter='All';vocabSearch='';render();break;`
  },
  {
    find: `case 'reset-vocab-filter':vocabLessonFilter='All';vocabTopicFilter='All';vocabSearch='';render();break;`,
    replace: () => `case 'reset-vocab-filter':vocabLessonFilter='All';vocabTopicFilter='All';vocabGenderFilter='All';vocabSearch='';render();break;`
  }
];

let applied = 0;
for (const ch of changes) {
  let f = ch.find;
  if (!code.includes(f) && ch.altFind && code.includes(ch.altFind)) {
    f = ch.altFind;
  }
  if (!code.includes(f)) {
    console.error('Target not found for change:', f.slice(0, 80));
    process.exit(1);
  }
  code = code.replace(f, ch.replace(f));
  applied++;
}

fs.writeFileSync(appJsPath, code, 'utf8');
console.log(`Successfully applied ${applied} Visual Noun Gender updates to public/app.js!`);
