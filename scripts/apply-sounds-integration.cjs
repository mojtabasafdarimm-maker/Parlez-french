const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '..', 'public', 'app.js');
let code = fs.readFileSync(appJsPath, 'utf8');

const changes = [
  // 1. Decoder definition
  {
    find: `return { word, example };\r\n}`,
    altFind: `return { word, example };\n}`,
    replace: (matched) => `${matched}
function renderPronunciationDecoder(c){
  if(!c||!window.ParlezSounds)return '';
  const decWord=window.ParlezSounds.annotateFrench(c.frenchAnswer);
  const decEx=c.frenchExample?window.ParlezSounds.annotateFrench(c.frenchExample):'';
  return \`<details class="pron-decoder-accordion"><summary class="decoder-summary"><span>🔍 Pronunciation & Sound Breakdown</span><span class="small muted">vowels · liaisons · silent letters</span></summary><div class="decoder-content"><div class="decoder-sentence-row"><span class="small muted" style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:0.5px">Word breakdown:</span><span lang="fr">\${decWord}</span><button class="btn btn-secondary btn-sm slow-btn" type="button" data-say-slow="\${esc(c.frenchAnswer)}" style="margin-left:8px;padding:3px 8px;font-size:12px">🐢 Slow (0.6x)</button></div>\${decEx?\`<div class="decoder-sentence-row" style="margin-top:10px"><span class="small muted" style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:0.5px">Example sentence breakdown:</span><span lang="fr">\${decEx}</span><button class="btn btn-secondary btn-sm slow-btn" type="button" data-say-slow="\${esc(c.frenchExample)}" style="margin-left:8px;padding:3px 8px;font-size:12px">🐢 Slow sentence</button></div>\`:''}<div class="decoder-legend"><span><span class="v-mark v-ou">ou</span> food</span><span><span class="v-mark v-u">u</span> whistle</span><span><span class="v-mark v-oi">oi</span> wash</span><span><span class="v-mark v-on">on</span>/<span class="v-mark v-an">an</span>/<span class="v-mark v-in">in</span> nasals</span><span><span class="silent-char">dim</span> silent</span><span><span class="liaison-badge">‿[z]</span> liaison</span></div></div></details>\`;
}`
  },

  // 2. Shell side and bottom navigation
  {
    find: `const tabs=['home','vocab','grammar','review','library'];let names=['Home','Vocab','Grammar','Review','Library'];return \`<div class="app-shell"><aside class="side"><div class="logo"><span class="logo-mark">P</span> Parlez</div><nav class="side-nav">\${tabs.map((t,i)=>navItem(t,names[i])).join('')}</nav><div class="side-bottom"><span class="eyebrow">Your learning method</span><p style="font-size:15px;font-weight:700;line-height:1.5;margin:10px 0 5px">See it. Think it.<br/>Say it in French.</p><p class="small muted" style="margin:0">Direct visual recall without translation.</p></div></aside><main class="main">\${navbar()}\${content}</main></div><nav class="bottom-nav">\${tabs.map((t,i)=>\`<button data-view="\${t}" class="\${view===t?'active':''}" aria-label="\${names[i]}">\${icon(t)}\${names[i]}</button>\`).join('')}</nav>\`;`,
    replace: () => `const sideTabs=['home','vocab','grammar','sounds','review','library'];let sideNames=['Home','Vocab','Grammar','Sounds','Review','Library'];const bottomTabs=['home','vocab','grammar','sounds','review'];let bottomNames=['Home','Vocab','Grammar','Sounds','Review'];return \`<div class="app-shell"><aside class="side"><div class="logo"><span class="logo-mark">P</span> Parlez</div><nav class="side-nav">\${sideTabs.map((t,i)=>navItem(t,sideNames[i])).join('')}</nav><div class="side-bottom"><span class="eyebrow">Your learning method</span><p style="font-size:15px;font-weight:700;line-height:1.5;margin:10px 0 5px">See it. Think it.<br/>Say it in French.</p><p class="small muted" style="margin:0">Direct visual recall without translation.</p></div></aside><main class="main">\${navbar()}\${content}</main></div><nav class="bottom-nav">\${bottomTabs.map((t,i)=>\`<button data-view="\${t}" class="\${view===t?'active':''}" aria-label="\${bottomNames[i]}">\${icon(t)}\${bottomNames[i]}</button>\`).join('')}</nav>\`;`
  },

  // 3. Home page hero button
  {
    find: `\${btn(\`Start visual review \${icon('arrow')}\`,'btn-primary btn-lg','data-action="start-review"')}\${btn(\`Vocab flashcards \${icon('vocab')}\`,'btn-secondary btn-lg','data-view="vocab"')}`,
    replace: () => `\${btn(\`Start visual review \${icon('arrow')}\`,'btn-primary btn-lg','data-action="start-review"')}\${btn(\`Vocab flashcards \${icon('vocab')}\`,'btn-secondary btn-lg','data-view="vocab"')}\${btn(\`Sounds Lab \${icon('sound')}\`,'btn-white btn-lg','data-view="sounds"')}`
  },

  // 4. simpleReviewPage decoder
  {
    find: `      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}\r\n    </div>\`:''}\r\n\r\n    <div class="rating-row">\${[['Again'`,
    altFind: `      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}\n    </div>\`:''}\n\n    <div class="rating-row">\${[['Again'`,
    replace: (matched) => matched.replace(
      `    </div>\`:''}`,
      `    </div>\`:''}\r\n\r\n    \${renderPronunciationDecoder(c)}`
    )
  },

  // 5. vocabCardSessionView decoder
  {
    find: `      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}\r\n    </div>\`:''}\r\n\r\n    <div class="rating-row">\${[['Again',sched.again.label,'again'],['Hard',sched.hard.label,'hard'],['Good',sched.good.label,'good'],['Easy',sched.easy.label,'easy']].map(([label,sub,rate])=>\`<button data-vocab-rate`,
    altFind: `      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}\n    </div>\`:''}\n\n    <div class="rating-row">\${[['Again',sched.again.label,'again'],['Hard',sched.hard.label,'hard'],['Good',sched.good.label,'good'],['Easy',sched.easy.label,'easy']].map(([label,sub,rate])=>\`<button data-vocab-rate`,
    replace: (matched) => matched.replace(
      `    </div>\`:''}`,
      `    </div>\`:''}\r\n\r\n    \${renderPronunciationDecoder(c)}`
    )
  },

  // 6. grammarCardSessionView decoder
  {
    find: `      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}\r\n    </div>\`:''}\r\n\r\n    <div class="rating-row">\${[['Again',sched.again.label,'again'],['Hard',sched.hard.label,'hard'],['Good',sched.good.label,'good'],['Easy',sched.easy.label,'easy']].map(([label,sub,rate])=>\`<button data-grammar-rate`,
    altFind: `      \${c.exampleEnglish?\`<p class="quiet-example-meaning">\${esc(c.exampleEnglish)}</p>\`:''}\n    </div>\`:''}\n\n    <div class="rating-row">\${[['Again',sched.again.label,'again'],['Hard',sched.hard.label,'hard'],['Good',sched.good.label,'good'],['Easy',sched.easy.label,'easy']].map(([label,sub,rate])=>\`<button data-grammar-rate`,
    replace: (matched) => matched.replace(
      `    </div>\`:''}`,
      `    </div>\`:''}\r\n\r\n    \${renderPronunciationDecoder(c)}`
    )
  },

  // 7. say(text, rate = .83)
  {
    find: `function say(text){if(!('speechSynthesis' in window)){toast('Speech playback is not supported in this browser.');return;}window.speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.rate=.83;`,
    replace: () => `function say(text,rate=.83){if(!('speechSynthesis' in window)){toast('Speech playback is not supported in this browser.');return;}window.speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.rate=rate;`
  },

  // 8. page() switch statement
  {
    find: `function page(){switch(view){case 'vocab':return vocabPage();case 'review':return reviewPage();case 'grammar':return grammarPage();case 'speak':return speakPage();case 'library':return libraryPage();case 'settings':return settingsPage();default:return homePage();}}`,
    replace: () => `function page(){switch(view){case 'vocab':return vocabPage();case 'review':return reviewPage();case 'grammar':return grammarPage();case 'sounds':return window.ParlezSounds?window.ParlezSounds.page():'<div>Loading Sounds Lab...</div>';case 'speak':return speakPage();case 'library':return libraryPage();case 'settings':return settingsPage();default:return homePage();}}`
  },

  // 9. Delegated click handler for saySlow
  {
    find: `if(el.dataset.grammarRate){rateGrammarCard(el.dataset.grammarRate);return;}`,
    replace: () => `if(el.dataset.saySlow){say(el.dataset.saySlow,.60);return;}if(el.dataset.grammarRate){rateGrammarCard(el.dataset.grammarRate);return;}`
  },

  // 10. Route hash lists
  {
    find: `['home','vocab','review','grammar','speak','library','settings']`,
    replace: () => `['home','vocab','review','grammar','sounds','speak','library','settings']`
  }
];

let applied = 0;
for (const ch of changes) {
  let f = ch.find;
  if (!code.includes(f) && ch.altFind && code.includes(ch.altFind)) {
    f = ch.altFind;
  }
  if (!code.includes(f)) {
    console.error('Target not found for change:', f.slice(0, 60));
    process.exit(1);
  }
  code = code.replace(f, ch.replace(f));
  applied++;
}

// Replace the second occurrence of the route hash list if present
const routeTarget = `['home','vocab','review','grammar','speak','library','settings']`;
if (code.includes(routeTarget)) {
  code = code.replace(routeTarget, `['home','vocab','review','grammar','sounds','speak','library','settings']`);
  applied++;
}

fs.writeFileSync(appJsPath, code, 'utf8');
console.log(`Successfully applied ${applied} sound integration updates to public/app.js!`);
