/* A small, offline verb-time game. Sessions and results belong to the active learner. */
window.ParlezGrammarGame=(()=>{
  'use strict';
  const forms=[
    {id:'present',name:'Présent',time:'Every day',rule:'A habit: use the present form of the verb.',pattern:'Je + present verb'},
    {id:'continuous',name:'Présent continu',time:'Right now',rule:'An action in progress: suis en train de + infinitive.',pattern:'Je suis en train de + infinitive'},
    {id:'recent',name:'Passé récent',time:'Just now',rule:'Something just happened: viens de + infinitive.',pattern:'Je viens de + infinitive'},
    {id:'perfect',name:'Passé composé',time:'Already done',rule:'A completed action: ai + past participle for these verbs.',pattern:'J’ai + past participle'},
    {id:'future',name:'Futur proche',time:'Next',rule:'A plan: vais + infinitive.',pattern:'Je vais + infinitive'}
  ];
  const verbs=[
    {id:'eat',inf:'manger',present:'mange',participle:'mangé',scene:'eat-now',english:{present:'I eat every day.',continuous:'I am eating right now.',recent:'I have just eaten.',perfect:'I have eaten.',future:'I am going to eat.'}},
    {id:'work',inf:'travailler',present:'travaille',participle:'travaillé',scene:'work',english:{present:'I work every day.',continuous:'I am working right now.',recent:'I have just worked.',perfect:'I have worked.',future:'I am going to work.'}},
    {id:'watch',inf:'regarder',present:'regarde',participle:'regardé',object:'un film',scene:'cinema',english:{present:'I watch a film every day.',continuous:'I am watching a film right now.',recent:'I have just watched a film.',perfect:'I have watched a film.',future:'I am going to watch a film.'}},
    {id:'finish',inf:'finir',present:'finis',participle:'fini',object:'le travail',scene:'finish-flag',english:{present:'I finish the work every day.',continuous:'I am finishing the work right now.',recent:'I have just finished the work.',perfect:'I have finished the work.',future:'I am going to finish the work.'}},
    {id:'choose',inf:'choisir',present:'choisis',participle:'choisi',object:'un livre',scene:'choose-path',english:{present:'I choose a book every day.',continuous:'I am choosing a book right now.',recent:'I have just chosen a book.',perfect:'I have chosen a book.',future:'I am going to choose a book.'}},
    {id:'take',inf:'prendre',present:'prends',participle:'pris',object:'le bus',scene:'transit-bus',english:{present:'I take the bus every day.',continuous:'I am taking the bus right now.',recent:'I have just taken the bus.',perfect:'I have taken the bus.',future:'I am going to take the bus.'}}
  ];
  let mode='game';
  const shuffle=items=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  function chunks(formId,verbId){
    const v=verbs.find(v=>v.id===verbId);
    const byForm={present:['Je',v.present],continuous:['Je','suis','en train de',v.inf],recent:['Je','viens','de',v.inf],perfect:['J’ai',v.participle],future:['Je','vais',v.inf]};
    return [...byForm[formId],...(v.object?[v.object]:[]),...(formId==='present'?['tous les jours']:[])];
  }
  const sentence=(form,verb)=>chunks(form,verb).join(' ')+'.';
  const question=q=>({form:forms.find(f=>f.id===q.form),verb:verbs.find(v=>v.id===q.verb)});
  function makeQuestion(form,type,verb,retry=false){
    // Je mange can also mean "I am eating". Never mark it wrong as a continuous distractor.
    const others=forms.filter(f=>f.id!==form&&!(form==='continuous'&&f.id==='present'));
    const options=shuffle([form,...shuffle(others).slice(0,2).map(f=>f.id)]);
    const answer=chunks(form,verb);
    const extras=shuffle(['Je','J’ai','suis','vais','viens','de','en train de',...verbs.filter(v=>v.id===verb).flatMap(v=>[v.present,v.inf,v.participle])].filter(t=>!answer.includes(t))).slice(0,2);
    let tiles=shuffle([...answer,...extras]);
    if(tiles.slice(0,answer.length).join(' ')===answer.join(' '))tiles=tiles.slice(1).concat(tiles[0]);
    return {form,verb,type,retry,options,tiles};
  }
  function validSession(s){
    return s?.version===1&&Array.isArray(s.questions)&&s.questions.length>=10&&s.questions.length<=20&&
      s.questions.every(q=>forms.some(f=>f.id===q.form)&&verbs.some(v=>v.id===q.verb)&&['choose','build'].includes(q.type)&&
        Array.isArray(q.options)&&q.options.length===3&&q.options.includes(q.form)&&q.options.every(id=>forms.some(f=>f.id===id))&&
        Array.isArray(q.tiles)&&q.tiles.every(t=>typeof t==='string')&&chunks(q.form,q.verb).every(t=>q.tiles.includes(t)))&&
      Number.isInteger(s.index)&&s.index>=0&&s.index<=s.questions.length&&Number.isInteger(s.score)&&s.score>=0&&s.score<=10&&
      Array.isArray(s.selected)&&s.selected.every(i=>Number.isInteger(i)&&i>=0&&i<(s.questions[s.index]?.tiles.length||0));
  }
  function session(){const s=activeProfile().grammarGame;return validSession(s)?s:null;}
  function pairWeakScore(formId, verbId){
    const hist = (typeof activeProfile==='function' && activeProfile()?.grammarHistory) || [];
    let misses=0, hits=0;
    for(const h of hist){
      if(h && h.kind==='verb-game' && h.form===formId){
        if(h.verb===verbId){
          if(h.correct) hits++; else misses+=2;
        } else if(!h.correct){
          misses+=0.5;
        }
      }
    }
    return misses * 3 - hits * 0.5 + Math.random() * 0.8;
  }
  function start(){
    const choose=[],build=[];
    for(const f of forms){
      const ranked=[...verbs].sort((a,b)=>pairWeakScore(f.id,b.id)-pairWeakScore(f.id,a.id));
      choose.push(makeQuestion(f.id,'choose',ranked[0].id));
      build.push(makeQuestion(f.id,'build',ranked[1].id));
    }
    activeProfile().grammarGame={version:1,id:'verbs-'+Date.now()+'-'+Math.random().toString(36).slice(2,6),questions:[...shuffle(choose),...shuffle(build)],index:0,score:0,selected:[],feedback:null};
    persist();render();
  }
  function answer(correct,chosen=null){
    const s=session();if(!s||s.feedback||s.index>=s.questions.length)return;
    const q=s.questions[s.index];
    s.feedback={correct,chosen};
    if(correct&&!q.retry)s.score++;
    if(!correct&&!q.retry)s.questions.push(makeQuestion(q.form,'build',q.verb,true));
    activeProfile().grammarHistory.push({time:Date.now(),kind:'verb-game',sessionId:s.id,form:q.form,verb:q.verb,mode:q.type,retry:q.retry,correct});
    persist();render();
    document.querySelector('.game-feedback')?.scrollIntoView({block:'nearest',behavior:'smooth'});
  }
  function gameBody(){
    const s=session();
    if(!s)return `<div class="game-intro"><div class="game-preview">${sceneSVG('eat-now')}</div><h2>Verb time</h2><p>10 rounds. Choose a sentence, then build one.</p><div class="game-forms">${forms.map(f=>`<span>${esc(f.name)}</span>`).join('')}</div><button class="btn btn-primary btn-lg btn-block" data-game="start">Play ${icon('arrow')}</button></div>`;
    if(s.index>=s.questions.length){
      const misses=forms.filter(f=>activeProfile().grammarHistory.some(h=>h.sessionId===s.id&&h.form===f.id&&!h.correct));
      return `<div class="game-intro game-finish"><span class="game-trophy" aria-hidden="true">${s.score===10?'🏆':'⭐'}</span><h2>Round complete</h2><div class="game-score">${s.score}<span> / 10</span></div><p>Correct on your first try</p>${misses.length?`<p class="small muted">Keep practising: ${misses.map(f=>esc(f.name)).join(', ')}.</p>`:'<p class="small muted">All five verb forms matched.</p>'}<button class="btn btn-primary btn-lg btn-block" data-game="start">Play again</button></div>`;
    }
    const q=s.questions[s.index],{form,verb}=question(q),feedback=s.feedback;
    const scene=verb.id==='eat'?(q.form==='future'?'eat-before':['recent','perfect'].includes(q.form)?'eat-after':'eat-now'):verb.scene;
    const header=`<div class="game-round"><span>${q.retry?'Practice again':`${s.index+1} / 10`}</span><span>${s.score} ★</span></div><div class="review-progress"><div style="width:${100*Math.min(s.index,10)/10}%"></div></div>`;
    const chosen=s.selected.map(i=>q.tiles[i]);
    const controls=q.type==='choose'?`<div class="game-options" aria-label="Choose the French sentence">${q.options.map(id=>`<button class="game-option ${feedback?(id===q.form?'is-correct':id===feedback.chosen?'is-wrong':''):''}" data-game="choose" data-form="${id}" lang="fr" ${feedback?'disabled':''}>${esc(sentence(id,q.verb))}</button>`).join('')}</div>`:
      `<div class="game-build" aria-label="Your sentence">${chosen.length?chosen.map((t,i)=>`<button class="game-tile selected" data-game="remove" data-index="${i}" ${feedback?'disabled':''}>${esc(t)}</button>`).join(''):'<span class="muted">Tap words in order</span>'}</div><div class="game-tiles" aria-label="Word tiles">${q.tiles.map((t,i)=>`<button class="game-tile" data-game="tile" data-index="${i}" lang="fr" ${feedback||s.selected.includes(i)?'disabled':''}>${esc(t)}</button>`).join('')}</div>${!feedback?`<button class="btn btn-primary btn-block" data-game="check" ${chosen.length?'':'disabled'}>Check</button>`:''}`;
    return `${header}<div class="game-card"><div class="game-art">${sceneSVG(scene)}</div><div class="game-time">${esc(form.time)} <span>· ${esc(form.name)}</span></div><h2 class="game-prompt">${esc(verb.english[q.form])}</h2><p class="game-task">${q.type==='choose'?'Choose the sentence':'Build the sentence'}</p>${controls}${feedback?`<div class="game-feedback ${feedback.correct?'correct':'incorrect'}" role="status" tabindex="-1"><b>${feedback.correct?'Correct!':'Let’s try this form again.'}</b><p lang="fr">${esc(sentence(q.form,q.verb))}</p><p>${esc(form.rule)}</p>${q.form==='perfect'?'<p class="small">Passé composé can mean “I ate” or “I have eaten”. “I have just eaten” uses viens de.</p>':''}<button class="btn btn-secondary" data-game="listen">${icon('sound')} Listen</button></div><button class="btn btn-primary btn-block game-next" data-game="next">${s.index===s.questions.length-1?'Finish':'Next'} ${icon('arrow')}</button>`:''}</div>`;
  }
  function page(){
    return `<section class="grammar-game"><div class="game-heading"><h1>Grammar</h1><div class="tabline" role="group" aria-label="Grammar activity"><button class="chip ${mode==='game'?'active':''}" data-game="mode" data-mode="game" aria-pressed="${mode==='game'}">Verb game</button><button class="chip ${mode==='practice'?'active':''}" data-game="mode" data-mode="practice" aria-pressed="${mode==='practice'}">Other practice</button></div></div>${mode==='practice'?grammarPracticePage():gameBody()}</section>`;
  }
  document.addEventListener('click',e=>{
    const el=e.target.closest('button[data-game]');if(!el||el.disabled)return;
    const action=el.dataset.game;
    if(action==='mode'){mode=el.dataset.mode==='practice'?'practice':'game';render();return;}
    if(action==='start'){start();return;}
    const s=session();if(!s||s.index>=s.questions.length)return;
    const q=s.questions[s.index];
    if(action==='listen'&&s.feedback){say(sentence(q.form,q.verb));return;}
    if(action==='next'&&s.feedback){s.index++;s.feedback=null;s.selected=[];persist();render();document.querySelector('.grammar-game')?.scrollIntoView({block:'start'});return;}
    if(s.feedback)return;
    if(action==='choose'&&q.type==='choose'&&q.options.includes(el.dataset.form)){answer(el.dataset.form===q.form,el.dataset.form);return;}
    const i=Number(el.dataset.index);
    if(action==='tile'&&q.type==='build'&&Number.isInteger(i)&&i>=0&&i<q.tiles.length&&!s.selected.includes(i)){s.selected.push(i);persist();render();}
    if(action==='remove'&&q.type==='build'&&Number.isInteger(i)&&i>=0&&i<s.selected.length){s.selected.splice(i,1);persist();render();}
    if(action==='check'&&q.type==='build'&&s.selected.length)answer(s.selected.map(i=>q.tiles[i]).join(' ')===chunks(q.form,q.verb).join(' '));
  });
  return {page,forms,verbs,sentence,chunks};
})();
