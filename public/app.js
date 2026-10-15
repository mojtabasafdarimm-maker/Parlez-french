/* Parlez · A visual concept-to-French learning app. No servers, no AI API, no external images. */
'use strict';
const STORE='parlez-v3-state', LEGACY_STORE='parlez-v2-state';
const $=s=>document.querySelector(s);
const icons={home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',review:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h4"/>',grammar:'<path d="M3 5h7a4 4 0 0 1 4 4v12a4 4 0 0 0-4-4H3zM21 5h-3a4 4 0 0 0-4 4v12a4 4 0 0 1 4-4h3z"/>',speak:'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8"/>',library:'<path d="M4 4h16v16H4zM9 4v16M13 9h4M13 13h4"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="m19.4 15 1 1.7-2 2-1.7-1a8 8 0 0 1-2 .8l-.5 2.2H9.8l-.5-2.2a8 8 0 0 1-2-.8l-1.7 1-2-2 1-1.7a8 8 0 0 1-.8-2L1.5 12l2.3-.5a8 8 0 0 1 .8-2L3.6 7.8l2-2 1.7 1a8 8 0 0 1 2-.8l.5-2.2h4.4l.5 2.2a8 8 0 0 1 2 .8l1.7-1 2 2-1 1.7a8 8 0 0 1 .8 2l2.3.5-2.3.5a8 8 0 0 1-.8 2z"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',sound:'<path d="M11 5 6 9H3v6h3l5 4zM15 9a5 5 0 0 1 0 6M18 6a9 9 0 0 1 0 12"/>',edit:'<path d="M12 20h9M16 4l4 4L9 19l-5 1 1-5z"/>',plus:'<path d="M12 5v14M5 12h14"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',check:'<path d="m5 12 4 4L19 6"/>',close:'<path d="M5 5 19 19M19 5 5 19"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',fire:'<path d="M12 22c5 0 8-4 8-8 0-4-3-7-5-9 0 4-2 5-3 6 0-4-2-6-4-8-1 4-4 7-4 11 0 4 3 8 8 8z"/>',brain:'<path d="M12 5a4 4 0 0 0-7 2 4 4 0 0 0-1 7 5 5 0 0 0 8 5M12 5a4 4 0 0 1 7 2 4 4 0 0 1 1 7 5 5 0 0 1-8 5zM12 5v14"/>',download:'<path d="M12 3v13m-5-5 5 5 5-5M4 18v3h16v-3"/>',upload:'<path d="M12 17V4m-5 5 5-5 5 5M4 18v3h16v-3"/>',trash:'<path d="M4 7h16M10 11v7m4-7v7M6 7l1 14h10l1-14M9 7V4h6v3"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',spark:'<path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z"/>',left:'<path d="m14 5-7 7 7 7"/>',book:'<path d="M4 3h13a3 3 0 0 1 3 3v15H7a3 3 0 0 1-3-3zM4 18a3 3 0 0 1 3-3h13"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/>'};
function icon(name,cl='icon'){return `<svg class="${cl}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||icons.spark}</svg>`;}
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function textNormalized(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();}
function toast(message){const e=$('#toast');e.textContent=message;e.classList.add('visible');clearTimeout(toast.timer);toast.timer=setTimeout(()=>e.classList.remove('visible'),3100);}
function todayKey(t=Date.now()){const d=new Date(t);return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');}
function isoAfter(days){return Date.now()+days*86400000;}
function C(id,kind,topic,scene,english,french,pron,example='',mnemonic='',grammar=''){return {id,kind,topic,scene,englishPrompt:english,frenchAnswer:french,pronunciation:pron,frenchExample:example,mnemonic,grammarNote:grammar,lesson:'A1.2 · Séances 5–6',tags:[],reviews:0,interval:0,ease:2.5,dueAt:0,lastReviewed:0,mastered:false,customImage:null};}
const starter=[
 C('a1','action','Daily routine','wake','Wake up','Je me réveille.','zhuh muh ray-VEHY','Je me réveille à sept heures.','Reveille = the wake-up bugle call.','Reflexive: je + me + réveille.'),
 C('a2','action','Daily routine','rise','Get out of bed','Je me lève.','zhuh muh LEHV','Je me lève tôt.','A LEVER lifting you up.','Se lever → je me lève.'),
 C('a3','action','Daily routine','brush','Brush your teeth','Je me brosse les dents.','zhuh muh BROSS lay dahn','Je me brosse les dents le matin.','برس reminds you of brosse; dentist → dents.','Use les dents, not mes dents.'),
 C('a4','action','Daily routine','shower','Take a shower','Je me douche.','zhuh muh DOOSH','Je me douche tous les jours.','Douche sounds like shower/douche.','Reflexive: se doucher.'),
 C('a5','action','Daily routine','dress','Get dressed','Je m’habille.','zhuh mah-BEEY','Je m’habille après la douche.','','m’ before a vowel (habille).'),
 C('a6','action','Daily routine','hair','Do your hair','Je me coiffe.','zhuh muh KWAHF','Je me coiffe avant de sortir.','Think coiffure, a hairstyle.','Se coiffer is reflexive.'),
 C('a7','action','Daily routine','walk','Go for a walk','Je me promène.','zhuh muh proh-MEN','Je me promène dans le parc.','A promenade is a leisurely walk.','se promener → je me promène.'),
 C('a8','action','Daily routine','bedtime','Go to bed','Je me couche.','zhuh muh KOOSH','Je me couche à vingt-trois heures.','COUCH → coucher.','Going to bed is different from falling asleep.'),
 C('a9','action','Daily routine','sleep','Fall asleep','Je m’endors.','zhuh mahn-DOR','Je m’endors vers minuit.','','s’endormir = to fall asleep, dormir = to sleep.'),
 C('a10','sentence','Daily routine','breakfast','Have breakfast','Je prends mon petit-déjeuner.','zhuh prahn mohn puh-TEE day-zhuh-NAY','Je prends mon petit-déjeuner à huit heures.','','Prendre + petit-déjeuner.'),
 C('a11','action','Daily routine','makebed','Make your bed','Je fais mon lit.','zhuh feh mohn lee','Je fais mon lit le matin.','Lit = bed.','Faire son lit.'),
 C('a12','action','Daily routine','dishes','Wash the dishes','Je fais la vaisselle.','zhuh feh lah veh-SEL','Après le dîner, je fais la vaisselle.','','Faire la vaisselle.'),
 C('a13','sentence','Daily routine','plants','Take care of your plants','Je m’occupe de mes plantes.','zhuh moh-KEWP duh may plahnt','Je m’occupe de mes plantes vertes.','OCCUPIED taking care of everything.','S’occuper de + noun.'),
 C('a14','action','Daily routine','work','Start working','Je commence à travailler.','zhuh koh-MAHNS ah trah-vah-YAY','Je commence à travailler à neuf heures.','','Commencer à + infinitive.'),
 C('a15','action','Daily routine','coffee','Take a coffee break','Je fais une pause café.','zhuh feh ewn pohz kah-FAY','À dix heures, je fais une pause café.','','Pause café = coffee break.'),
 C('a16','action','Daily routine','bike','Ride a bicycle','Je fais du vélo.','zhuh feh dew vay-LOH','Le week-end, je fais du vélo.','','Faire du + activity.'),
 C('b1','vocab','Clothing','hat','Winter hat / beanie','un bonnet','uhn boh-NEH','Je mets un bonnet en hiver.','Imagine a bonnet warming your head.','Masculine noun: un.'),
 C('b2','vocab','Clothing','scarf','Scarf','une écharpe','ewn ay-SHARP','Je porte une écharpe.','','Feminine noun: une.'),
 C('b3','vocab','Clothing','dressobj','Dress','une robe','ewn rob','Elle porte une robe rouge.','','Feminine: une robe.'),
 C('b4','vocab','Clothing','shoes','Sneakers / trainers','des baskets','day bas-KET','Je porte des baskets pour le sport.','','Usually used in plural: des.'),
 C('b5','vocab','Clothing','shirt','Shirt','une chemise','ewn shuh-MEEZ','Il met une chemise blanche.','','une chemise.'),
 C('b6','vocab','Clothing','pants','Trousers / pants','un pantalon','uhn pahn-tah-LOHN','Je porte un pantalon noir.','','Un pantalon: singular in French.'),
 C('b7','vocab','Clothing','skirt','Skirt','une jupe','ewn zhoop','Elle porte une jupe.','','une jupe.'),
 C('b8','vocab','Clothing','socks','Socks','des chaussettes','day shoh-SET','Je mets des chaussettes.','','des = plural article.'),
 C('b9','vocab','Clothing','gloves','Mittens','des moufles','day MOOFL','Je mets des moufles pour le ski.','','des moufles = mittens; des gants = gloves.'),
 C('b10','sentence','Clothing','red-dress','Wearing a red dress','Elle porte une robe rouge.','el port ewn rob roozh','Elle porte une belle robe rouge.','','Colour adjectives normally go after the noun.'),
 C('b11','grammar','Clothing','mexican-film','Describe a good Mexican film','C’est un bon film mexicain.','seh uhn bohn feelm mek-see-KAHN','Nous regardons un bon film mexicain.','','Bon before noun; mexicain after noun.'),
 C('w1','sentence','Weather','rain','Rainy weather','Il pleut.','eel PLUH','Aujourd’hui, il pleut.','Picture loud plop-plop raindrops.','Il + weather verb.'),
 C('w2','sentence','Weather','snow','Snowing','Il neige.','eel NEZH','En hiver, il neige.','','Il + weather verb.'),
 C('w3','sentence','Weather','cold','Cold weather','Il fait froid.','eel feh FRWAH','Il fait froid au Canada en hiver.','Imagine a FRIDGE full of snow.','Il fait + adjective.'),
 C('w4','sentence','Weather','hot','Hot weather','Il fait chaud.','eel feh SHOH','En été, il fait chaud.','','Il fait + adjective.'),
 C('w5','sentence','Weather','sun','Sunny weather','Il y a du soleil.','eel yah dew soh-LAY','Aujourd’hui, il y a du soleil.','','Il y a + noun.'),
 C('w6','sentence','Weather','wind','Windy weather','Il y a du vent.','eel yah dew VAHN','Il y a du vent ce soir.','','Il y a + noun.'),
 C('w7','sentence','Weather','clouds','Cloudy weather','Il y a des nuages.','eel yah day new-AHZH','Il y a des nuages aujourd’hui.','','Il y a + des + plural.'),
 C('o1','sentence','Objects','write','What is a pen used for?','Ça sert à écrire.','sah sehr ah ay-KREER','Un stylo, ça sert à écrire.','','Ça sert à + infinitive = used for.'),
 C('o2','sentence','Objects','pen','Describe a metal pen','Il est en métal.','eel eh ahn may-TAL','Mon stylo est en métal.','','en + material.'),
 C('o3','sentence','Objects','notes','Using a pen to take notes','On l’utilise pour prendre des notes.','ohn lew-tee-LEEZ poor prahndr day not','On utilise un stylo pour prendre des notes.','','On l’utilise pour + infinitive.'),
 C('g1','grammar','Grammar','eat-before','About to eat','Je vais manger.','zhuh veh mahn-ZHAY','Je vais manger dans dix minutes.','','Futur proche = aller + infinitive. Timeline: next.'),
 C('g2','grammar','Grammar','eat-now','Eating right now','Je suis en train de manger.','zhuh swee ahn trahn duh mahn-ZHAY','Je suis en train de manger maintenant.','','Présent continu = être en train de + infinitive. Timeline: now.'),
 C('g3','grammar','Grammar','eat-after','Just finished eating','Je viens de manger.','zhuh vyehn duh mahn-ZHAY','Je viens de manger un sandwich.','','Passé récent = venir de + infinitive. Timeline: just before.'),
 C('g4','grammar','Grammar','work-future','Going to work','Je vais travailler.','zhuh veh trah-vah-YAY','Demain, je vais travailler.','','Je vais + infinitive.'),
 C('g5','grammar','Grammar','no-walk','Not going for a walk','Je ne me promène pas.','zhuh nuh muh proh-MEN pah','Aujourd’hui, je ne me promène pas.','','ne + me + verb + pas.'),
 C('g6','grammar','Grammar','bedtime-future','Planning to go to bed','Je vais me coucher.','zhuh veh muh koo-SHAY','Ce soir, je vais me coucher tôt.','','Reflexive pronoun before infinitive.'),
 C('g7','grammar','Grammar','project','Participating in a project','Il veut participer au projet.','eel vuh par-tee-see-PAY oh proh-ZHEH','Il veut participer au projet.','','participer à + le → au.'),
 C('t1','sentence','Time','clock-215','Clock showing quarter past two','Il est deux heures et quart.','eel eh duh zuhr ay KAR','Il est deux heures et quart.','','et quart = :15.'),
 C('t2','sentence','Time','clock-230','Clock showing half past two','Il est deux heures et demie.','eel eh duh zuhr ay duh-MEE','Il est deux heures et demie.','','et demie = :30.'),
 C('t3','sentence','Time','clock-245','Clock showing quarter to three','Il est trois heures moins le quart.','eel eh trwa zuhr mwahn luh KAR','Il est trois heures moins le quart.','','moins le quart = quarter to.'),
 C('s1','speaking','Speaking','morning','Describe your morning routine','Le matin, je me réveille, puis je prends mon petit-déjeuner.','luh mah-TAHN, zhuh muh ray-VEHY, pwee zhuh prahn mohn puh-TEE day-zhuh-NAY','Je me réveille à sept heures et demie.','','Say one or two natural sentences.'),
 C('s2','speaking','Speaking','sport','Explain what you wear for sport','Je porte un short et des baskets.','zhuh port uhn short ay day bas-KET','Je porte un short pour faire du sport.','','porter + clothing.'),
 C('s3','speaking','Speaking','cinema','Tell a friend your evening plan','Je vais aller au cinéma ce soir.','zhuh veh ah-LAY oh see-nay-MAH suh swahr','Ce soir, je vais regarder un film.','','Futur proche + infinitive.'),
];
// SVG scenes are authored as individual physical situations, NOT language-based hints.
const person=(x=226,y=127,opts={})=>{let {shirt='#817cc7',pants='#586a97',arm='down',pose='stand',hair='#3d3556',skin='#ebbca3'}=opts;let head=`<ellipse cx="${x}" cy="${y}" rx="22" ry="25" fill="${skin}"/><path d="M${x-22} ${y-4}q-2-35 22-32 23-1 22 32-10-17-23-18-12 4-21 18" fill="${hair}"/><circle cx="${x-8}" cy="${y+2}" r="1.8" fill="#514655"/><circle cx="${x+8}" cy="${y+2}" r="1.8" fill="#514655"/>`;if(pose==='sit'){return `<g>${head}<path d="M${x-28} ${y+28}q28-13 56 0l14 65h-72z" fill="${shirt}"/><path d="M${x-3} ${y+91}h80" stroke="${pants}" stroke-width="23" stroke-linecap="round"/><path d="M${x+70} ${y+91}v45" stroke="${pants}" stroke-width="20" stroke-linecap="round"/></g>`}return `<g>${head}<path d="M${x-25} ${y+31}q25-10 50 0l12 82h-74z" fill="${shirt}"/><path d="M${x-17} ${y+111}l-9 57M${x+17} ${y+111}l12 57" stroke="${pants}" stroke-width="19" stroke-linecap="round"/><path d="M${x-28} ${y+47}l${arm==='up'?'-22 -40':'-20 64'}M${x+28} ${y+47}l${arm==='up'?'20 -34':'24 64'}" stroke="${skin}" stroke-width="14" stroke-linecap="round" fill="none"/></g>`;};
const sky=(color='#f4efff')=>`<rect width="520" height="340" rx="25" fill="${color}"/><ellipse cx="260" cy="292" rx="206" ry="21" fill="#292744" opacity=".055"/>`;
const sun=(cx,cy,r=35)=>`<g stroke="#f2bf54" stroke-width="6" stroke-linecap="round">${Array.from({length:10},(_,i)=>{let a=i*Math.PI/5;return `<line x1="${cx+Math.cos(a)*(r+9)}" y1="${cy+Math.sin(a)*(r+9)}" x2="${cx+Math.cos(a)*(r+23)}" y2="${cy+Math.sin(a)*(r+23)}"/>`}).join('')}</g><circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffd67d"/>`;
const cloud=(cx,cy,s=1)=>`<g transform="translate(${cx},${cy}) scale(${s})" fill="#fff"><ellipse cx="-36" cy="9" rx="37" ry="23"/><ellipse cx="2" cy="-5" rx="38" ry="36"/><ellipse cx="39" cy="13" rx="34" ry="23"/><rect x="-63" y="6" width="117" height="28" rx="14"/></g>`;
const bed=()=>`<rect x="88" y="196" width="332" height="101" rx="13" fill="#d8d2fa"/><rect x="94" y="184" width="322" height="57" rx="17" fill="#7772c9"/><rect x="96" y="178" width="114" height="40" rx="16" fill="#fffcf8"/><rect x="85" y="284" width="16" height="33" rx="4" fill="#a19ccc"/><rect x="406" y="284" width="16" height="33" rx="4" fill="#a19ccc"/>`;
const alarm=()=>`<circle cx="392" cy="120" r="28" fill="#ffcb80" stroke="#d99269" stroke-width="4"/><path d="M392 104v17l12 7" stroke="#8e6a5e" stroke-width="4" fill="none" stroke-linecap="round"/><path d="m369 92-11-11m58 11 11-11" stroke="#d99269" stroke-width="5" stroke-linecap="round"/>`;
const plant=()=>`<path d="M62 248h57l-8 48H70z" fill="#dd9e84"/><path d="M92 244v-120" stroke="#629c81" stroke-width="7"/><ellipse cx="72" cy="160" rx="14" ry="34" transform="rotate(-40 72 160)" fill="#83b7a2"/><ellipse cx="116" cy="152" rx="14" ry="33" transform="rotate(40 116 152)" fill="#69a58a"/><ellipse cx="69" cy="211" rx="14" ry="30" transform="rotate(-53 69 211)" fill="#92c3a3"/><ellipse cx="119" cy="200" rx="14" ry="30" transform="rotate(50 119 200)" fill="#83b7a2"/>`;
const clock=(h,m)=>{let a=(h+m/60)*Math.PI/6,b=m*Math.PI/30;return `<circle cx="260" cy="168" r="112" fill="#fff" stroke="#c8c5db" stroke-width="9"/><circle cx="260" cy="168" r="100" fill="#f9f8fb"/>${Array.from({length:12},(_,i)=>{const t=i*Math.PI/6;return `<circle cx="${260+Math.sin(t)*88}" cy="${168-Math.cos(t)*88}" r="3.5" fill="#a5a3c4"/>`}).join('')}<line x1="260" y1="168" x2="${260+Math.sin(a)*68}" y2="${168-Math.cos(a)*68}" stroke="#65629f" stroke-width="9" stroke-linecap="round"/><line x1="260" y1="168" x2="${260+Math.sin(b)*86}" y2="${168-Math.cos(b)*86}" stroke="#e6a86d" stroke-width="6" stroke-linecap="round"/><circle cx="260" cy="168" r="9" fill="#65629f"/>`};
const clothes=(item)=>{const map={hat:`<path d="M164 212q0-110 96-110t96 110z" fill="#9d88cc"/><path d="M136 209h248q0 46-52 46H188q-52 0-52-46" fill="#7770bc"/><circle cx="260" cy="91" r="20" fill="#f6c2b3"/>`,scarf:`<path d="M194 88q-55 44-23 119 12 27 46 11l100-13q51-12 36-64-13-41-55-45l-60 8" stroke="#a28acb" stroke-width="32" fill="none" stroke-linecap="round"/><path d="M215 207l-22 103 52 8 28-101" fill="#8677c5"/><path d="M192 304l55 10" stroke="#7164b2" stroke-width="5"/>`,dressobj:`<path d="M240 81h40l12 52-17 28 67 121q-82 26-166 0l69-121-18-28z" fill="#db7594"/><path d="M239 86l-25 24-41 36 24 31 42-23M281 86l25 24 43 36-24 31-45-23" fill="#eaa4ba"/><path d="M239 163h42" stroke="#f5cbd7" stroke-width="8"/>`,shoes:`<g transform="translate(36 0)"><path d="M102 195l-12 64q46 35 140 6l12-23-51-10-40-54" fill="#7c86c4"/><path d="M90 260q72 23 152-17" stroke="#fff" stroke-width="10" fill="none"/><path d="M261 177l-8 68q46 38 141 6l12-21-55-12-39-56" fill="#c68fa9"/><path d="M253 243q70 28 153-13" stroke="#fff" stroke-width="10" fill="none"/></g>`,shirt:`<path d="M218 79h84l54 44-33 51-24-20v136h-78V154l-23 20-33-51z" fill="#7b9ec8"/><path d="M218 82l42 45 42-45" fill="none" stroke="#e6edf3" stroke-width="8"/>`,pants:`<path d="M183 67h154l-10 231-61-3-13-147-10 147-61 3z" fill="#6674a4"/><path d="M183 105h154" stroke="#9fb1c8" stroke-width="5"/>`,skirt:`<path d="M220 115h80l59 159q-99 34-198 0z" fill="#e9b66a"/><path d="M220 120h80" stroke="#e2a04f" stroke-width="12"/>`,socks:`<path d="M145 68v134q0 23-43 39-25 10-17 33 7 20 34 19l69-8q28-5 28-32V68z" fill="#af9bd4"/><path d="M310 69v135q0 21 43 38 26 10 16 32-7 18-34 18l-72-9q-27-5-27-30V69z" fill="#8ec3b6"/><path d="M145 118h71M236 118h74" stroke="#fff" stroke-width="8"/>`,gloves:`<path d="M192 272l-43-7-36-95q-7-27 9-33 12-5 23 13l-25-75q-7-22 7-26 15-4 22 16l32 78 2-80q0-26 18-24 16 2 16 23l-2 103 15-47q8-23 22-16 12 6 6 24l-25 115q-9 42-41 31z" fill="#c69c86" transform="translate(15 0)"/><path d="M147 270l53-9 11 41-58 8z" fill="#8976b9"/>`};return map[item]||map.hat};
function timeline(stage){const i={before:0,now:1,after:2,future:2,past:0}[stage]??1;return `<g transform="translate(168 296)"><path d="M0 0h184" stroke="#cecadd" stroke-width="6" stroke-linecap="round"/>${[0,92,184].map((x,j)=>`<circle cx="${x}" cy="0" r="${i===j?13:8}" fill="${i===j?'#6864b4':'#cfcddb'}" stroke="#fff" stroke-width="3"/>`).join('')}<path d="m189-7 11 7-11 7" fill="none" stroke="#cecadd" stroke-width="4" stroke-linejoin="round"/></g>`;}
function sceneSVG(scene){let s=sky(),m='',palette={floor:'#e1dced'};const floor=`<path d="M65 300h391" stroke="#e4deed" stroke-width="8" stroke-linecap="round"/>`;
 switch(scene){
 case 'wake':s=sky('#f5f1ff');m=bed()+`<ellipse cx="230" cy="192" rx="27" ry="29" fill="#e5b597"/><path d="M203 190q0-27 28-27 20 0 24 20" fill="#41364e"/><path d="m218 191 6 2m14-2 7 2" stroke="#68515b" stroke-width="3"/>`+alarm()+`<path d="m306 99 12-23m17 21 18-8" stroke="#e8a874" stroke-width="5"/>`;break;
 case 'rise':m=bed()+person(285,113,{pose:'sit'})+`<path d="m350 111 13-24" stroke="#e8ad83" stroke-width="6"/>`;break;
 case 'brush':
    s=sky('#f2f9fb');
    m=`
      <rect x="59" y="43" width="401" height="259" rx="35" fill="#e8f3f7"/>
      <path d="M166 297q12-74 79-86 80-8 109 86Z" fill="#a0c5b6"/>
      <path d="M185 143q-9-80 76-87 79-4 77 90v19h-151z" fill="#453a5e"/>
      <ellipse cx="263" cy="150" rx="66" ry="80" fill="#eebfa7"/>
      <path d="M193 126Q197 47 274 65q54 7 57 64-27-12-46-32-30 29-92 29Z" fill="#453a5e"/>
      <circle cx="240" cy="155" r="4" fill="#544353"/><circle cx="285" cy="155" r="4" fill="#544353"/>
      <path d="M244 189q19 13 39 0" stroke="#b27378" stroke-width="6" fill="none" stroke-linecap="round"/>
      <rect x="234" y="183" width="56" height="16" rx="6" fill="#fff"/>
      ${Array.from({length:4},(_,i)=>`<path d="M${247+i*10} 185v12" stroke="#ead9d8" stroke-width="2"/>`).join('')}
      <!-- A toothbrush brushing the visible teeth -->
      <path d="M344 252q-36-18-55-42l-23-20" stroke="#edb99e" stroke-width="19" fill="none" stroke-linecap="round"/>
      <g transform="rotate(-18 262 190)">
        <rect x="251" y="184" width="113" height="11" rx="5" fill="#69aac2"/>
        <rect x="244" y="177" width="30" height="19" rx="4" fill="#d7eaf7" stroke="#69aac2" stroke-width="2"/>
        ${Array.from({length:7},(_,i)=>`<path d="M${247+i*3.4} 177v-10" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`).join('')}
      </g>
      <circle cx="288" cy="185" r="7" fill="#fff" opacity=".9"/><circle cx="297" cy="174" r="5" fill="#fff" opacity=".82"/>
    `;
    break;
 case 'shower':m=`<path d="M135 301V90q0-32 34-32h158" stroke="#a4a7b8" stroke-width="13" fill="none"/><path d="M327 58v22" stroke="#a4a7b8" stroke-width="9"/><rect x="280" y="80" width="95" height="12" rx="6" fill="#a4a7b8"/>`+person(253,140,{shirt:'#c2d6e3',pants:'#8ac6ca'})+Array.from({length:16},(_,i)=>`<path d="M${291+(i%8)*10} ${96+Math.floor(i/8)*40}l-5 18" stroke="#83b6d7" stroke-width="3"/>`).join('');break;
 case 'dress':m=`<rect x="75" y="80" width="120" height="195" rx="11" fill="#efe4d5"/><path d="M115 107h46m-23 0v27" stroke="#a68e89" stroke-width="6"/>`+person(306,96,{shirt:'#dea6a9'})+`<path d="M260 189q46-34 92 2l22 90h-135z" fill="#d7abca" opacity=".85"/>`;break;
 case 'hair':
    s=sky('#f8f3fc');
    m=`
      <!-- Clear close-up: person brushing their own hair; no empty mirror -->
      <rect x="62" y="36" width="400" height="264" rx="38" fill="#eee8fa"/>
      <ellipse cx="260" cy="313" rx="172" ry="17" fill="#dcd4ec"/>
      <path d="M178 294 Q177 228 223 204 Q260 190 312 209 Q349 233 352 294Z" fill="#bba6d9"/>
      <path d="M190 223 Q165 173 183 99 Q194 53 250 49 Q326 46 345 109 Q353 163 351 234 Q328 241 312 225 L310 180 L209 180 L212 226Z" fill="#453a5e"/>
      <ellipse cx="264" cy="143" rx="65" ry="78" fill="#edb99e"/>
      <path d="M198 137 Q182 60 260 58 Q329 56 332 135 Q309 126 294 96 Q261 130 201 119Z" fill="#453a5e"/>
      <path d="M207 125 Q190 179 204 231" fill="none" stroke="#453a5e" stroke-width="30" stroke-linecap="round"/>
      <path d="M327 124 Q343 172 333 239" fill="none" stroke="#453a5e" stroke-width="29" stroke-linecap="round"/>
      <path d="M224 155 Q236 147 247 155M280 155 Q291 147 302 155" stroke="#5d4351" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M263 164l-4 20 9 1" stroke="#d49a86" stroke-width="3" stroke-linejoin="round" fill="none"/>
      <path d="M244 200q20 13 39 0" stroke="#ad6e79" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Right arm visibly holding a hair comb against the side of the head -->
      <path d="M343 234 Q373 208 390 170 Q397 147 387 122" fill="none" stroke="#edb99e" stroke-width="21" stroke-linecap="round"/>
      <path d="M383 138l-15-26" stroke="#edb99e" stroke-width="17" stroke-linecap="round"/>
      <g transform="rotate(-26 355 113)">
        <rect x="308" y="94" width="104" height="17" rx="7" fill="#8570b7" stroke="#63519d" stroke-width="2"/>
        ${Array.from({length:13},(_,i)=>`<path d="M${315+i*6.5} 111v23" stroke="#7462a9" stroke-width="4" stroke-linecap="round"/>`).join('')}
      </g>
      <path d="M314 144q18 18 22 43M318 152q19 19 16 48" stroke="#77678e" stroke-width="3" fill="none" opacity=".75"/>
      <path d="M377 68l11-19M405 82l19-8" stroke="#b8a3db" stroke-width="5" stroke-linecap="round"/>
    `;
    break;
 case 'walk':m=`<path d="M40 300q110-60 225-11 120-49 215 11" stroke="#cdd9b9" stroke-width="22" fill="none"/>`+`<path d="M105 241V103" stroke="#a9aa89" stroke-width="15"/><circle cx="107" cy="103" r="55" fill="#a5c8a3"/><path d="M419 241V124" stroke="#a9aa89" stroke-width="15"/><circle cx="418" cy="114" r="46" fill="#c3d6b5"/>`+person(269,82,{shirt:'#e0a4aa',arm:'up'});break;
 case 'bedtime':m=`<rect x="95" y="86" width="87" height="114" rx="10" fill="#ddd9ee"/>`+bed()+`<path d="M179 176h179q24 0 24 20v47H172z" fill="#aa9bd4"/><ellipse cx="159" cy="191" rx="23" ry="23" fill="#f2c5a5"/><path d="M137 187q8-32 40-9" stroke="#46374c" stroke-width="14" fill="none"/>`+`<path d="M404 74q-36 12-27 55 27 14 48-9-21 1-21-46" fill="#f6db9c"/>`;break;
 case 'sleep':m=bed()+`<ellipse cx="175" cy="195" rx="27" ry="23" fill="#f0bea2"/><path d="M149 185q26-36 54 1" fill="#45384d"/><path d="m162 196 8 2m10-2 7 2" stroke="#665465" stroke-width="3"/>`+`<path d="M237 181q90-55 136 34l4 27H205z" fill="#958ccc"/>`+`<path d="m363 91 27-25m-15 42 25-13" stroke="#edb57b" stroke-width="6"/>`;break;
 case 'breakfast':m=`<ellipse cx="260" cy="270" rx="182" ry="42" fill="#d9b9a2"/><ellipse cx="260" cy="252" rx="182" ry="34" fill="#f4dcc1"/><ellipse cx="249" cy="232" rx="73" ry="28" fill="#fff" stroke="#d7c7c8" stroke-width="7"/><path d="M221 224q28-37 58 0z" fill="#e5b86f"/><rect x="333" y="180" width="59" height="64" rx="6" fill="#fff" stroke="#c4c8d7" stroke-width="6"/><path d="M394 193q24-4 23 17 0 22-25 20" stroke="#c4c8d7" fill="none" stroke-width="6"/><path d="M346 164q-8-13 2-27m16 27q-8-13 2-27" stroke="#b9b1a8" stroke-width="4"/>`;break;
 case 'makebed':m=bed()+`<path d="M170 194q112-30 188 3v52H170z" fill="#c7bfdc"/>`+person(422,105,{shirt:'#8fbfb3'})+`<path d="M390 180l-70 15" stroke="#edc3aa" stroke-width="13" stroke-linecap="round"/>`;break;
 case 'dishes':m=`<rect x="74" y="223" width="376" height="73" rx="13" fill="#d0cbd9"/><ellipse cx="160" cy="223" rx="86" ry="20" fill="#edf8fa"/><path d="M120 190q36 40 81 0" stroke="#7c9fbc" stroke-width="10" fill="none"/>`+person(332,79,{shirt:'#b3a5cb'})+`<path d="M300 174L225 210" stroke="#edc3aa" stroke-width="15" stroke-linecap="round"/>`+Array.from({length:5},(_,i)=>`<circle cx="${176+i*13}" cy="${170-i*10}" r="${i%2?6:9}" fill="#d6f3f4"/>`).join('');break;
 case 'plants':m=plant()+person(312,85,{shirt:'#d9a8ab'})+`<path d="M280 191L121 208" stroke="#edc3aa" stroke-width="13" stroke-linecap="round"/><path d="M118 201l-21-19m7 31-20-7" stroke="#82b7cb" stroke-width="5"/>`;break;
 case 'work':m=`<rect x="132" y="186" width="270" height="107" rx="10" fill="#e5d6ca"/><rect x="215" y="105" width="142" height="108" rx="9" fill="#8991c3"/><rect x="229" y="119" width="114" height="77" rx="4" fill="#f9faff"/><path d="M238 142h96m-96 18h68" stroke="#c0bfdf" stroke-width="8"/>`+`<circle cx="134" cy="127" r="27" fill="#ecc1a8"/><path d="M111 119q-3-31 27-27 18 0 20 23" fill="#493d55"/><path d="M134 154v32" stroke="#9db5bd" stroke-width="32"/>`;break;
 case 'coffee':m=`<rect x="139" y="143" width="184" height="127" rx="21" fill="#fff" stroke="#b7b6ca" stroke-width="8"/><path d="M322 175q72-12 72 32-4 50-72 30" fill="none" stroke="#b7b6ca" stroke-width="14"/><ellipse cx="230" cy="152" rx="85" ry="19" fill="#9d735b"/><path d="M187 128q-15-24 1-52m41 52q-15-24 1-52m41 52q-15-24 1-52" stroke="#b5a6a3" stroke-width="6" fill="none" stroke-linecap="round"/>`;break;
 case 'bike':m=`<circle cx="150" cy="249" r="58" fill="none" stroke="#718ab7" stroke-width="10"/><circle cx="376" cy="249" r="58" fill="none" stroke="#718ab7" stroke-width="10"/><path d="m150 249 71-85 70 85h-141l70-85h102l54 85" fill="none" stroke="#b383bc" stroke-width="9" stroke-linejoin="round"/><path d="M218 166l-6-23h-27" stroke="#6b769c" stroke-width="9"/>`+`<circle cx="244" cy="83" r="23" fill="#ebb9a3"/><path d="M241 108l28 55 50 16" stroke="#e3a9a8" stroke-width="20" fill="none"/><path d="M265 165l-24 49-56 10" stroke="#6b76aa" stroke-width="18" fill="none"/>`;break;
 case 'hat':case 'scarf':case 'dressobj':case 'shoes':case 'shirt':case 'pants':case 'skirt':case 'socks':m=clothes(scene);break;
 case 'gloves':
    s=sky('#f6f2fb');
    m=`
      <!-- Pair of mittens with rounded, joined-finger tips, not gloves -->
      <g transform="translate(45 6) rotate(-13 167 176)">
        <path d="M131 275L105 206Q82 170 98 125Q113 86 148 91Q185 89 198 126Q212 166 187 217L173 278Z" fill="#9b83cb" stroke="#7c66ae" stroke-width="6"/>
        <path d="M116 184Q89 155 73 164Q57 177 81 211L116 229" fill="#9b83cb" stroke="#7c66ae" stroke-width="6"/>
        <rect x="126" y="264" width="56" height="31" rx="7" fill="#6f61af"/>
        <path d="M140 265v26M153 267v26" stroke="#b5a6df" stroke-width="5"/>
      </g>
      <g transform="translate(45 3) rotate(15 331 174)">
        <path d="M306 276L280 205Q257 169 273 124Q287 88 324 91Q361 91 376 128Q389 169 365 218L349 277Z" fill="#83bdb3" stroke="#639d94" stroke-width="6"/>
        <path d="M362 183Q394 151 407 171Q417 191 387 218L362 225" fill="#83bdb3" stroke="#639d94" stroke-width="6"/>
        <rect x="301" y="263" width="56" height="31" rx="7" fill="#55998f"/>
        <path d="M314 265v26M327 267v26" stroke="#b6ded4" stroke-width="5"/>
      </g>
    `;
    break;
 case 'red-dress':m=person(260,93,{shirt:'#df8095',pants:'#d6809f'})+`<path d="M230 214h60l63 73H171z" fill="#d76e87"/>`;break;
 case 'rain':m=cloud(250,94,1.2)+Array.from({length:21},(_,i)=>`<path d="M${100+(i%7)*53+((Math.floor(i/7)%2)*13)} ${167+Math.floor(i/7)*45}l-11 24" stroke="#81aed8" stroke-width="7" stroke-linecap="round"/>`).join('');break;
 case 'snow':m=cloud(244,90,1.25)+Array.from({length:20},(_,i)=>{let x=96+(i%7)*54,y=163+Math.floor(i/7)*43;return `<g stroke="#98badd" stroke-width="4"><path d="M${x-9} ${y}h18m-9-9v18m-7-7 14 14m-14 0 14-14"/></g>`}).join('');break;
 case 'sun':m=sun(260,158,75);break;
 case 'wind':m=`${cloud(173,92,0.8)}<path d="M80 170h265q59 0 48-41-6-20-28-12m-285 99h321q42 0 32 29-7 19-22 18M140 262h176" stroke="#8bb8c7" stroke-width="13" fill="none" stroke-linecap="round"/>`+Array.from({length:5},(_,i)=>`<path d="M${140+i*62} 287q10-16 28-10" fill="none" stroke="#b9aa80" stroke-width="5"/>`).join('');break;
 case 'clouds':m=cloud(178,141,1)+cloud(339,110,.73)+cloud(364,216,.76);break;
 case 'cold':m=`${cloud(392,60,.62)}${person(247,80,{shirt:'#8db0ce'})}<path d="M217 152q28 33 58 0" stroke="#f2e8ee" stroke-width="15" fill="none"/><path d="m177 133-12 19m1-32-13 18m222 3-12 19" stroke="#8ab7da" stroke-width="7" stroke-linecap="round"/><path d="M225 112q21 17 41 0" stroke="#f5f5fb" stroke-width="11" fill="none"/>`;break;
 case 'hot':m=sun(411,86,36)+person(225,92,{shirt:'#efa38c'})+`<path d="M277 119q57-17 53 31-17 33-45 19" stroke="#e7bd9d" stroke-width="14" fill="none"/><path d="M330 149l29-35" stroke="#b59fc6" stroke-width="7"/><path d="m196 126 8 22" stroke="#80b7ca" stroke-width="7" stroke-linecap="round"/>`;break;
 case 'write':m=`<rect x="84" y="89" width="355" height="213" rx="11" fill="#fff" stroke="#dbd7de" stroke-width="6" transform="rotate(-4 260 195)"/><path d="M130 135h177M130 164h194M130 193h139M130 220h163" stroke="#ccd1e5" stroke-width="6" stroke-linecap="round"/><path d="M331 101 217 239" stroke="#6b7fb1" stroke-width="17" stroke-linecap="round"/><path d="M217 239l-13 16 5-28" fill="#47476c"/><path d="M327 106l13-15" stroke="#ced5e4" stroke-width="20" stroke-linecap="round"/>`;break;
 case 'pen':
    s=sky('#f8f8fb');
    m=`
      <!-- Shiny metallic pen, prominent reflective steel material -->
      <g transform="rotate(-31 270 169)">
        <rect x="102" y="145" width="297" height="53" rx="17" fill="#93a6b9" stroke="#667f9a" stroke-width="7"/>
        <path d="M110 157h277" stroke="#f5faff" stroke-width="10" stroke-linecap="round" opacity=".93"/>
        <path d="M110 185h276" stroke="#516985" stroke-width="7" opacity=".55"/>
        <rect x="316" y="147" width="19" height="50" fill="#d9e3e9" stroke="#849aa8" stroke-width="3"/>
        <path d="M399 152l52 19-52 21Z" fill="#d1dce6" stroke="#72889e" stroke-width="5"/>
        <path d="M451 166l13 5-13 5Z" fill="#51546b"/>
        <path d="M175 143v-20q0-13 17-13h126" stroke="#f4f4f8" stroke-width="8" fill="none" stroke-linecap="round"/>
      </g>
      <path d="M391 52l8-20m13 31 20-13" stroke="#b9b4dc" stroke-width="5" stroke-linecap="round"/>
    `;
    break;
 case 'notes':
    s=sky('#faf7f2');
    m=`
      <!-- Clearly a notes list rather than a lone pen -->
      <g transform="rotate(-5 260 167)">
        <rect x="114" y="46" width="303" height="255" rx="19" fill="#fffefc" stroke="#d3ccde" stroke-width="7"/>
        <rect x="114" y="47" width="36" height="253" rx="9" fill="#e8e3f4"/>
        ${[98,145,192,239].map((y,i)=>`<g><circle cx="179" cy="${y}" r="7" fill="#8b83b9"/><path d="M204 ${y}h${i===2?99:145}" stroke="#c8c4d7" stroke-width="9" stroke-linecap="round"/></g>`).join('')}
        <path d="M204 114h95m-95 47h109m-109 47h128m-128 46h104" stroke="#e5e1eb" stroke-width="6" stroke-linecap="round"/>
      </g>
      <path d="M394 92l-92 143" stroke="#5e83ad" stroke-width="19" stroke-linecap="round"/>
      <path d="M297 238l-8 25 23-17" fill="#3c4457"/>
      <path d="M393 86l9-14" stroke="#dae3ed" stroke-width="20" stroke-linecap="round"/>
    `;
    break;
 case 'eat-before':case 'eat-now':case 'eat-after':m=`<rect x="93" y="220" width="342" height="59" rx="12" fill="#dcc2b8"/>`+person(250,82,{shirt:'#8daaba'})+`<ellipse cx="270" cy="217" rx="80" ry="22" fill="#fff" stroke="#d0bdc0" stroke-width="5"/>`+((scene==='eat-before')?`<path d="M240 207h60" stroke="#d2a86b" stroke-width="13"/>`:scene==='eat-now'?`<path d="M246 205h32" stroke="#d2a86b" stroke-width="9"/><path d="M276 171l-23 19" stroke="#e9bea9" stroke-width="12"/>`:`<circle cx="260" cy="216" r="8" fill="#d3b3a2"/><path d="M234 212h54" stroke="#d9d0c9" stroke-width="3"/>`)+timeline(scene==='eat-before'?'future':scene==='eat-now'?'now':'past');break;
 case 'work-future':m=`<rect x="70" y="109" width="126" height="152" rx="10" fill="#e2e2f1"/><rect x="90" y="132" width="88" height="46" rx="4" fill="#b9cddd"/><path d="M110 199h46" stroke="#a3a0c2" stroke-width="8"/>`+person(324,84,{shirt:'#9eb7c0'})+timeline('future');break;
 case 'no-walk':m=`<path d="M70 285q150-49 370 0" stroke="#d4dcbf" stroke-width="28" fill="none"/>`+person(244,81,{shirt:'#b0a9d0'})+`<circle cx="376" cy="119" r="44" fill="#fff" stroke="#db829a" stroke-width="9"/><path d="m347 89 59 59" stroke="#db829a" stroke-width="10"/>`;break;
 case 'bedtime-future':m=bed()+`<path d="M344 97l44-34 18 20" stroke="#b7a5d4" stroke-width="9" fill="none"/>`+person(285,80,{shirt:'#a1b6cb'})+timeline('future');break;
 case 'project':m=`<rect x="114" y="82" width="298" height="169" rx="12" fill="#fff" stroke="#c9cbde" stroke-width="6"/><path d="M149 117h131M149 146h205M149 174h178" stroke="#cbc8e4" stroke-width="9" stroke-linecap="round"/><circle cx="208" cy="268" r="20" fill="#e5b59e"/><circle cx="284" cy="268" r="20" fill="#e5b59e"/><circle cx="358" cy="268" r="20" fill="#e5b59e"/><path d="M180 300q28-26 56 0m20 0q28-26 56 0m19 0q28-26 56 0" stroke="#9291bc" stroke-width="18"/>`;break;
 case 'clock-215':m=clock(2,15);break;
 case 'clock-230':m=clock(2,30);break;
 case 'clock-245':m=clock(2,45);break;
 case 'morning':m=bed()+alarm()+sun(107,87,27)+`<ellipse cx="239" cy="188" rx="23" ry="24" fill="#e5b597"/><path d="M215 188q0-25 23-25 20 0 25 21" fill="#45374d"/>`;break;
 case 'sport':m=person(249,77,{shirt:'#b3a0d6',pants:'#7f88b7',arm:'up'})+`<path d="M230 194l-20 33M269 194l29 31" stroke="#59699d" stroke-width="18" stroke-linecap="round"/><path d="M90 269h50M386 269h47" stroke="#a9bdb7" stroke-width="9"/>`;break;
 case 'mexican-film':
    s=sky('#f8f5ff');
    m=`
      <rect x="121" y="48" width="289" height="213" rx="18" fill="#57577c"/>
      <rect x="134" y="61" width="263" height="186" rx="9" fill="#e9e7f4"/>
      <path d="M184 115v80h40v-80Z" fill="#27916a"/>
      <path d="M224 115v80h40v-80Z" fill="#fff"/>
      <path d="M264 115v80h40v-80Z" fill="#d45e61"/>
      <circle cx="243" cy="155" r="9" fill="#8d8b7d"/>
      <g transform="translate(320 165)">
        <circle cx="0" cy="0" r="49" fill="#fff1ce"/>
        <path d="M-20 18v-29h13l12-23q7-13 15-5 3 4-3 23h17q19 0 12 19l-7 26q-3 10-14 10H-7v-11Z" fill="#8fbb9f" stroke="#588d76" stroke-width="5" stroke-linejoin="round"/>
      </g>
      <path d="M145 279h241" stroke="#c4b8d6" stroke-width="14" stroke-linecap="round"/>
    `;
    break;
 case 'cinema':m=`<rect x="94" y="82" width="326" height="165" rx="13" fill="#626492"/><rect x="110" y="99" width="294" height="133" rx="7" fill="#d9d6ef"/><circle cx="256" cy="166" r="44" fill="#9290c7"/><path d="M246 145v42l37-21z" fill="#fff"/>`+`<path d="M128 289h258" stroke="#c0a8b3" stroke-width="27" stroke-linecap="round"/>`;break;
 default:m=sun(240,152,50);break;
 }
 m=window.ParlezIllustrations?.scene(scene)||m;
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 340" role="img" aria-label="Illustration of a visual learning concept" focusable="false">${s}${m}</svg>`;
}
function visual(c){if(c.customImage){const safe=c.customImage.startsWith('data:image/')?c.customImage:'';if(safe)return `<img src="${esc(safe)}" alt="Custom flashcard visual" />`;}return sceneSVG(c.scene||'sun');}

const PROFILE_COLORS=['#706bbc','#4d977f','#b67b55','#a66a95','#607fa9','#8d7e5a'];
function makeProfile(name='My profile'){
  return {id:'profile-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8),name,color:PROFILE_COLORS[0],createdAt:Date.now(),history:[],grammarHistory:[],speakingHistory:[],progress:{},prefs:{frontMode:'visual',dailyNew:8}};
}
function initial(){
  const profile=makeProfile();
  return {version:3,cards:starter.map(c=>({...c,tags:[...c.tags]})),profiles:[profile],activeProfileId:profile.id,createdAt:Date.now()};
}
function migrate(old){
  if(old?.version===3 && Array.isArray(old.cards) && Array.isArray(old.profiles) && old.profiles.length){
    old.profiles=old.profiles.filter(p=>p&&typeof p.id==='string'&&typeof p.name==='string').map((p,i)=>({
      ...p,name:p.name.slice(0,30),color:p.color||PROFILE_COLORS[i%PROFILE_COLORS.length],
      history:Array.isArray(p.history)?p.history:[],
      grammarHistory:Array.isArray(p.grammarHistory)?p.grammarHistory:[],
      speakingHistory:Array.isArray(p.speakingHistory)?p.speakingHistory:[],
      progress:p.progress && typeof p.progress==='object' && !Array.isArray(p.progress)?p.progress:{},
      prefs:{frontMode:'visual',dailyNew:8,...p.prefs}
    }));
    if(!old.profiles.length)return initial();
    if(!old.profiles.some(p=>p.id===old.activeProfileId))old.activeProfileId=old.profiles[0].id;
    return old;
  }
  if(old?.version===2 && Array.isArray(old.cards)){
    const p=makeProfile();
    p.history=Array.isArray(old.history)?old.history:[];
    p.grammarHistory=Array.isArray(old.grammarHistory)?old.grammarHistory:[];
    p.speakingHistory=Array.isArray(old.speakingHistory)?old.speakingHistory:[];
    p.prefs={...p.prefs,...(old.prefs||{})};
    for(const c of old.cards){
      if(typeof c.id!=='string')continue;
      const progress={};
      for(const key of ['interval','dueAt','reviews','ease','lastReviewed'])if(c[key]!==undefined)progress[key]=c[key];
      if(Object.keys(progress).length)p.progress[c.id]=progress;
    }
    return {version:3,cards:old.cards,profiles:[p],activeProfileId:p.id,createdAt:old.createdAt||Date.now()};
  }
  return initial();
}
let state;
try{
  const raw=localStorage.getItem(STORE)||localStorage.getItem(LEGACY_STORE);
  state=migrate(raw?JSON.parse(raw):null);
}catch(e){state=initial();}
function upgradeStarterIllustrations(){
  const movie=state.cards.find(c=>c.id==='b11');
  if(movie && movie.scene==='cinema' && !movie.customImage)movie.scene='mexican-film';
}
upgradeStarterIllustrations();
function activeProfile(){return state.profiles.find(p=>p.id===state.activeProfileId)||state.profiles[0];}
function progressFor(c){return activeProfile().progress[c.id]||{};}
function ensureProgress(c){const p=activeProfile();return p.progress[c.id]||(p.progress[c.id]={});}
function persist(){
  try{localStorage.setItem(STORE,JSON.stringify(state));return true;}
  catch(e){toast('Storage is full. Export a backup, then reduce image sizes.');return false;}
}
persist();
let view='home',reviewSession=null,revealed=false,hint=false,hintLevel=0,englishHint=false,libSearch='',libTopic='All',libType='All',modalOpen=false,editId=null,editImage=null,editScene='wake',gramTab='All',grammarInput='',grammarFeedback='',grammarAt=0,speakAt=0,speakShown=false,speakHint=false,speakResponse='',speakResult='';
function todayHistory(){return activeProfile().history.filter(e=>todayKey(e.time)===todayKey());}
function lastStreak(){const dates=new Set(activeProfile().history.map(e=>todayKey(e.time)));let streak=0;let d=new Date();if(!dates.has(todayKey(d)))d.setDate(d.getDate()-1);while(dates.has(todayKey(d))){streak++;d.setDate(d.getDate()-1);}return streak;}
function dueCards(){return state.cards.filter(c=>{const p=progressFor(c);return !p.dueAt||p.dueAt<=Date.now();});}
function mastered(){return state.cards.filter(c=>progressFor(c).interval>=21).length;}
function btn(text,cls='btn-primary',event='',other=''){return `<button class="btn ${cls}" ${event} ${other}>${text}</button>`;}
function navItem(name,title){return `<button class="nav-btn ${view===name?'active':''}" data-view="${name}" aria-label="${title}">${icon(name)}${title}</button>`;}
function navbar(){
 let date=new Date().toLocaleDateString('en-CA',{weekday:'long',month:'long',day:'numeric'}),p=activeProfile();
 return `<div class="topbar"><div class="mobile-logo"><span class="logo-mark">P</span> Parlez</div><div class="date">${esc(date)}</div><div class="top-actions"><button class="round-btn" data-view="settings" aria-label="Settings">${icon('settings')}</button><button class="profile-switch" type="button" data-action="open-profiles" aria-label="Switch or add a study profile" title="Switch profile"><span class="profile-bubble" style="background:${esc(p.color)}">${esc(p.name.charAt(0).toUpperCase())}</span><span class="profile-title">${esc(p.name)}</span><span class="profile-down">⌄</span></button></div></div>`;
}
function shell(content){const tabs=['home','review','grammar','speak','library'];let names=['Home','Review','Grammar','Speak','Library'];return `<div class="app-shell"><aside class="side"><div class="logo"><span class="logo-mark">P</span> Parlez</div><nav class="side-nav">${tabs.map((t,i)=>navItem(t,names[i])).join('')}</nav><div class="side-bottom"><span class="eyebrow">Your learning method</span><p style="font-size:15px;font-weight:700;line-height:1.5;margin:10px 0 5px">See it. Think it.<br/>Say it in French.</p><p class="small muted" style="margin:0">Direct visual recall without translation.</p></div></aside><main class="main">${navbar()}${content}</main></div><nav class="bottom-nav">${tabs.map((t,i)=>`<button data-view="${t}" class="${view===t?'active':''}" aria-label="${names[i]}">${icon(t)}${names[i]}</button>`).join('')}</nav>`;}
function heroArt(){return `<svg viewBox="0 0 320 255" xmlns="http://www.w3.org/2000/svg"><g transform="translate(4 5) rotate(-10 120 115)"><rect x="36" y="35" width="192" height="202" rx="24" fill="#fff"/><rect x="52" y="52" width="160" height="123" rx="16" fill="#e8e5fb"/>${sun(132,107,32).replace('cx="132"','cx="132"')}<path d="M70 203h127" stroke="#e2dfec" stroke-width="11" stroke-linecap="round"/></g><g transform="translate(96 12) rotate(12 120 110)"><rect x="45" y="30" width="186" height="203" rx="24" fill="#fff" stroke="#e3dff2" stroke-width="3"/><rect x="61" y="46" width="154" height="120" rx="15" fill="#f5eff8"/><path d="M101 135q32-45 70 0" stroke="#b7a1d4" stroke-width="24" fill="none"/><circle cx="137" cy="87" r="28" fill="#f1bda8"/><path d="M110 85q-3-34 29-30 22 0 24 28" fill="#51455a"/><path d="M92 193h94" stroke="#d8d3e7" stroke-width="9" stroke-linecap="round"/><path d="M92 212h57" stroke="#e9e6f1" stroke-width="8" stroke-linecap="round"/></g><circle cx="289" cy="29" r="14" fill="#ffd78a"/><circle cx="29" cy="207" r="9" fill="#aac5bd"/></svg>`;}
function stat(num,label,ic){return `<div class="stat"><div class="stat-icon">${icon(ic)}</div><div><div class="big-count">${num}</div><div class="stat-label">${label}</div></div></div>`;}
const topicEmoji={'Daily routine':'☀️','Clothing':'🧣','Weather':'🌦️','Objects':'✍️','Grammar':'📖','Time':'🕒','Speaking':'💬'};
function homePage(){const due=dueCards().length,done=todayHistory().length;const byTopic=Object.entries(topicEmoji).map(([t,emoji])=>{let cs=state.cards.filter(c=>c.topic===t),remembered=cs.filter(c=>progressFor(c).interval>=7).length;return cs.length?`<div class="topic-row"><div class="topic-icon">${emoji}</div><div style="flex:1"><div style="display:flex;justify-content:space-between"><span class="topic-name">${esc(t)}</span><span class="small muted">${remembered}/${cs.length}</span></div><div class="progress-track"><div class="progress-fill" style="width:${100*remembered/cs.length}%"></div></div></div></div>`:''}).join('');return `<section class="hero"><div><div class="eyebrow">WELCOME, ${esc(activeProfile().name.toUpperCase())}</div><h1>See it. Say it.<br/>Remember it.</h1><p>Train yourself to think in French through pictures, real-life actions and tiny daily practice.</p>${btn(`Start visual review ${icon('arrow')}`,'btn-primary btn-lg','data-action="start-review"')}</div><div class="hero-illustration">${heroArt()}</div></section><div class="stats">${stat(due,'Cards ready','clock')}${stat(done,'Reviewed today','check')}${stat(lastStreak()+' days','Study streak','fire')}</div><div class="section-head"><h2>Your learning space</h2><button class="link" data-view="library">See all cards →</button></div><div class="panels"><div class="panel"><div style="display:flex;align-items:center;justify-content:space-between"><h3>Today's focus</h3><span class="mini-step">VISUAL FIRST</span></div><p class="subline">Start with the picture, speak out loud, then reveal French. Ratings schedule your next review.</p><div style="display:flex;gap:12px;align-items:center;background:#f7f5fd;padding:17px;border-radius:16px"><span style="font-size:33px">🧠</span><div style="flex:1"><b>${due} cards waiting</b><div class="small muted">${Math.min(due,10)}-card focused session</div></div><button class="btn btn-secondary" data-action="start-review">Review ${icon('arrow')}</button></div></div><div class="panel"><h3>Progress by topic</h3>${byTopic}</div></div><div class="notice">${icon('info')} Review progress belongs to ${esc(activeProfile().name)} on this device. The card library is shared between profiles, but nothing syncs between phones yet.</div>`;}
function getReviewPool(filter){let due=dueCards();if(filter==='All cards')due=[...state.cards];if(filter!=='Due now'&&filter!=='All cards'&&filter!=='')due=due.filter(c=>c.topic===filter);return due.sort((a,b)=>(progressFor(a).dueAt||0)-(progressFor(b).dueAt||0));}
let reviewFilter='Due now';function initReview(){const pool=getReviewPool(reviewFilter);reviewSession={ids:(reviewFilter==='Due now'?pool.slice(0,10):pool).map(c=>c.id),index:0,done:0,again:0,good:0};revealed=false;hint=false;hintLevel=0;englishHint=false;}
function currentReviewCard(){if(!reviewSession)return null;const id=reviewSession.ids[reviewSession.index];return state.cards.find(c=>c.id===id)||null;}
function cardHints(c){
  const seed=starter.find(item=>item.id===c.id);
  if(window.ParlezHints && typeof window.ParlezHints.forCard==='function'){
    return window.ParlezHints.forCard(c,seed);
  }
  return {
    scene:c.sceneHint||c.englishPrompt||'Focus on the action shown.',
    starter:c.startHint||'Begin with the main subject and verb.',
    memory:c.mnemonic||c.grammarNote||'Connect the phrase to the image.'
  };
}
function mnemonicText(value=''){
  const persian=/^[^A-Za-z\u0600-\u06ff]*[\u0600-\u06ff]/.test(value);
  const text=esc(value).replace(/«([^»]+)»/g,(_,word)=>'«<bdi'+(/[\u0600-\u06ff]/.test(word)?' lang="fa" dir="rtl"':'')+'>'+word+'</bdi>»');
  return `<p dir="${persian?'rtl':'auto'}"${persian?' lang="fa"':''}>${text}</p>`;
}
function reviewPage(){if(!reviewSession)initReview();const c=currentReviewCard(),all=reviewSession.ids.length,hasMemory=Boolean(c&&cardHints(c).mnemonic);return `<div class="review-layout"><div class="review-top"><div><div class="eyebrow">PICTURE → FRENCH</div><h2>Visual flashcards</h2></div><select class="select select-sm" id="review-filter" aria-label="Choose review topic">${['Due now','All cards',...Object.keys(topicEmoji)].map(t=>`<option ${t===reviewFilter?'selected':''}>${esc(t)}</option>`).join('')}</select></div>${c?`<div class="small muted mb">Card ${reviewSession.index+1} of ${all} · Say the French aloud before revealing</div><div class="review-progress"><div style="width:${100*reviewSession.index/Math.max(all,1)}%"></div></div><div class="review-card"><div class="review-scene">${activeProfile().prefs.frontMode==='english'?`<div style="font-size:29px;font-weight:700;text-align:center;padding:30px">${esc(c.englishPrompt)}</div>`:visual(c)}<span class="corner">${esc(c.topic)}</span></div><div class="review-eyebrow eyebrow">What would you say in French?</div>${activeProfile().prefs.frontMode==='mixed'?`<p style="text-align:center;font-size:15px">${esc(c.englishPrompt)}</p>`:''}${!revealed?`${englishHint?`<div class="hint-card"><b>English hint:</b> ${esc(c.englishPrompt)}</div>`:''}${hintLevel>=1&&hasMemory?`<div class="hint-card mnemonic-card"><b>1 · Memory hook</b>${mnemonicText(cardHints(c).mnemonic)}</div>`:''}${hintLevel>=2?`<div class="hint-card clue-card"><b>${hasMemory?2:1} · Scene clue</b><p>${esc(cardHints(c).scene)}</p></div>`:''}${hintLevel>=3?`<div class="hint-card starter-card"><b>${hasMemory?3:2} · French starter</b><p>${esc(cardHints(c).starter)}</p></div>`:''}<div class="tabline hint-controls" style="justify-content:center;margin-bottom:0"><button class="btn btn-secondary" data-action="next-hint">${hintLevel===0?(hasMemory?'Memory hook':'Scene clue'):hintLevel===1?'Scene clue':hintLevel===2?'French starter':'Hide hints'}</button><button class="btn btn-white" data-action="toggle-english">${englishHint?'Hide English':'English meaning'}</button></div><button class="btn btn-primary btn-lg reveal-button" data-action="reveal">Reveal French ${icon('eye')}</button>`:`<div class="answer"><div class="eyebrow">FRENCH ANSWER</div><h2>${esc(c.frenchAnswer)}</h2><div class="muted">${esc(c.pronunciation)}</div><div class="answer-actions"><button class="btn btn-secondary" data-action="speak-french">${icon('sound')} Listen</button><button class="btn btn-white" data-action="toggle-english">${englishHint?'Hide meaning':'Show meaning'}</button></div>${englishHint?`<div class="english">${esc(c.englishPrompt)}</div>`:''}<div class="answer-memory">${hasMemory?`<b>Memory hook</b>${mnemonicText(cardHints(c).mnemonic)}`:''}<details class="extra-scene-memory"><summary>How the picture connects</summary><p>${esc(cardHints(c).memory)}</p></details></div>${c.frenchExample?`<div class="example"><b>In a sentence</b><br/>${esc(c.frenchExample)}</div>`:''}${c.grammarNote?`<div class="mini" style="margin-top:12px">${esc(c.grammarNote)}</div>`:''}</div><div class="eyebrow" style="text-align:center;margin:19px 0 10px">HOW WELL DID YOU REMEMBER?</div><div class="rating-row">${[['Again','0 min','again'],['Hard','1 day','hard'],['Good','3+ days','good'],['Easy','5+ days','easy']].map(([l,sub,r])=>`<button data-rate="${r}" class="btn ${r==='good'?'btn-primary':'btn-white'}">${l}<span>${sub}</span></button>`).join('')}</div>`}</div><p class="small muted" style="text-align:center;margin-top:17px">Picture on front · French on back · Spaced repetition adjusts automatically</p>`:`<div class="empty"><div class="empty-emoji">✨</div><h2>${all?'Session complete!':'No cards due right now'}</h2><p class="subline">${all?`You reviewed ${reviewSession.done} cards. ${reviewSession.again} were marked Again.`:'Nice work. You can review all cards or choose a topic to practice more.'}</p><button class="btn btn-primary" data-action="practice-all">Practice all cards ${icon('arrow')}</button> <button class="btn btn-white" data-view="home">Back home</button></div>`}</div>`;}
function simpleReviewPage(){
  if(!reviewSession)initReview();
  const c=currentReviewCard(),all=reviewSession.ids.length;
  const header=`<div class="review-top"><div><div class="eyebrow">PICTURE → FRENCH</div><h2>Visual flashcards</h2></div><select class="select select-sm" id="review-filter" aria-label="Choose review topic">${['Due now','All cards',...Object.keys(topicEmoji)].map(t=>`<option ${t===reviewFilter?'selected':''}>${esc(t)}</option>`).join('')}</select></div>`;
  if(!c)return `<div class="review-layout">${header}<div class="empty"><div class="empty-emoji">✨</div><h2>${all?'Session complete!':'No cards due right now'}</h2><p class="subline">${all?`You reviewed ${reviewSession.done} cards. ${reviewSession.again} were marked Again.`:'Nice work. You can review all cards or choose a topic to practice more.'}</p><button class="btn btn-primary" data-action="practice-all">Practice all cards ${icon('arrow')}</button> <button class="btn btn-white" data-view="home">Back home</button></div></div>`;
  const h=cardHints(c);
  const picture=activeProfile().prefs.frontMode==='english'?`<div class="english-front">${esc(c.englishPrompt)}</div>`:visual(c);
  const answer=`<div class="answer"><div class="eyebrow">FRENCH ANSWER</div><h2>${esc(c.frenchAnswer)}</h2><div class="muted">${esc(c.pronunciation)}</div><div class="answer-actions"><button class="btn btn-secondary" data-action="speak-french">${icon('sound')} Listen</button><button class="btn btn-white" data-action="toggle-english">${englishHint?'Hide meaning':'Show meaning'}</button></div>${englishHint?`<div class="english">${esc(c.englishPrompt)}</div>`:''}${h.mnemonic?`<div class="answer-memory"><b>Memory link</b>${mnemonicText(h.mnemonic)}</div>`:''}${c.frenchExample?`<div class="example"><b>In a sentence</b><br/>${esc(c.frenchExample)}</div>`:''}${c.grammarNote?`<div class="mini" style="margin-top:12px">${esc(c.grammarNote)}</div>`:''}</div><div class="eyebrow rating-title">HOW WELL DID YOU REMEMBER?</div><div class="rating-row">${[['Again','0 min','again'],['Hard','1 day','hard'],['Good','3+ days','good'],['Easy','5+ days','easy']].map(([label,sub,rate])=>`<button data-rate="${rate}" class="btn ${rate==='good'?'btn-primary':'btn-white'}">${label}<span>${sub}</span></button>`).join('')}</div>`;
  const prompt=`${hint?`<div class="hint-card simple-hint"><b>Picture clue</b><p>${esc(h.scene)}</p></div>`:''}<div class="simple-review-actions"><button class="btn btn-secondary" data-action="toggle-hint">${hint?'Hide hint':'Hint'}</button><button class="btn btn-primary btn-lg" data-action="reveal">Reveal French ${icon('eye')}</button></div>`;
  return `<div class="review-layout">${header}<div class="small muted mb">Card ${reviewSession.index+1} of ${all} · Say the French aloud before revealing</div><div class="review-progress"><div style="width:${100*reviewSession.index/Math.max(all,1)}%"></div></div><div class="review-card"><div class="review-scene">${picture}<span class="corner">${esc(c.topic)}</span></div><div class="review-eyebrow eyebrow">What would you say in French?</div>${revealed?answer:prompt}</div><p class="small muted review-footnote">Picture first · French after reveal</p></div>`;
}
reviewPage=simpleReviewPage;
function rateCard(level){const c=currentReviewCard();if(!c)return;const p=ensureProgress(c),now=Date.now();p.reviews=(p.reviews||0)+1;p.lastReviewed=now;p.ease=p.ease||2.5;const prev=p.interval||0;switch(level){case 'again':p.interval=0;p.ease=Math.max(1.3,p.ease-.2);p.dueAt=now+10*60*1000;break;case 'hard':p.interval=Math.max(1,Math.round(prev?prev*1.2:1));p.ease=Math.max(1.3,p.ease-.15);p.dueAt=isoAfter(p.interval);break;case 'good':p.interval=prev?Math.max(3,Math.round(prev*p.ease)):3;p.dueAt=isoAfter(p.interval);break;case 'easy':p.interval=prev?Math.max(5,Math.round(prev*(p.ease+.35))):5;p.ease+=.12;p.dueAt=isoAfter(p.interval);break;}activeProfile().history.push({id:c.id,time:now,level});reviewSession.done++;if(level==='again')reviewSession.again++;reviewSession.index++;revealed=false;hint=false;hintLevel=0;englishHint=false;persist();render();}
const grammarExercises=[
{group:'Futur proche',title:'An action about to happen',scene:'eat-before',prompt:'I am going to eat.',fill:'Je ___ manger.',answer:'vais',explain:'aller (present) + infinitive → Je vais manger.'},
{group:'Futur proche',title:'Going to work tomorrow',scene:'work-future',prompt:'Tomorrow I am going to work.',fill:'Demain, je ___ travailler.',answer:'vais',explain:'Future plan: je vais + infinitive.'},
{group:'Passé récent',title:'Just finished eating',scene:'eat-after',prompt:'I just ate.',fill:'Je ___ de manger.',answer:'viens',explain:'venir (present) + de + infinitive → Je viens de manger.'},
{group:'Présent continu',title:'Eating right now',scene:'eat-now',prompt:'I am eating right now.',fill:'Je ___ en train de manger.',answer:'suis',explain:'être (present) + en train de + infinitive.'},
{group:'Reflexive verbs',title:'Getting up in the morning',scene:'rise',prompt:'I get up.',fill:'Je ___ lève.',answer:'me',explain:'Use me before a reflexive verb with je.'},
{group:'Reflexive verbs',title:'Get dressed',scene:'dress',prompt:'I get dressed.',fill:'Je ___habille.',answer:"m’",explain:'Before a vowel: me → m’ (Je m’habille).'},
{group:'Negation',title:'Not going for a walk',scene:'no-walk',prompt:'I do not go for a walk.',fill:'Je ne me promène ___.',answer:'pas',explain:'ne + reflexive pronoun + verb + pas.'},
{group:'Adjectives',title:'Red party dress',scene:'red-dress',prompt:'She wears a beautiful red dress.',fill:'Elle porte une ___ robe rouge.',answer:'belle',explain:'Belle goes before the noun, rouge follows it.'},
{group:'Time',title:'Read the clock',scene:'clock-215',prompt:'Quarter past two.',fill:'Il est deux heures et ___.',answer:'quart',explain:'et quart = fifteen past the hour.'},
{group:'Weather',title:'Rainy weather',scene:'rain',prompt:'It is raining.',fill:'Il ___.',answer:'pleut',explain:'Weather verb: il pleut. Do not use il fait pleut.'},
{group:'Weather',title:'Sunny weather',scene:'sun',prompt:'It is sunny.',fill:'Il y a du ___.',answer:'soleil',explain:'Il y a + du + singular noun.'},
{group:'Functions',title:'Writing with a pen',scene:'write',prompt:'It is used for writing.',fill:'Ça sert ___ écrire.',answer:'à',explain:'Ça sert à + infinitive.'}
];
function grammarPage(){let groups=['All',...new Set(grammarExercises.map(g=>g.group))],filtered=grammarExercises.filter(g=>gramTab==='All'||g.group===gramTab);return `<div><div class="eyebrow">LEARN BY DOING</div><h1>Grammar in action.</h1><p class="header-desc">See a scene, complete one small phrase, and discover the grammar rule from a real example.</p><div class="tabline">${groups.map(t=>`<button class="chip ${t===gramTab?'active':''}" data-gramtab="${esc(t)}">${esc(t)}</button>`).join('')}</div><div class="exercise">${filtered.map((g,i)=>`<div class="exercise-card"><div class="review-scene">${sceneSVG(g.scene)}<span class="corner">${esc(g.group)}</span></div><h3 style="margin:17px 0 5px">${esc(g.title)}</h3><div class="small muted" style="margin-bottom:8px">${esc(g.prompt)}</div><p style="font-weight:600">${esc(g.fill)}</p><div class="field"><label for="gr-${grammarExercises.indexOf(g)}">Fill the blank</label><input class="input" id="gr-${grammarExercises.indexOf(g)}" data-grammar-input="${grammarExercises.indexOf(g)}" placeholder="Type the missing word" autocomplete="off"/></div><button class="btn btn-secondary" data-check-grammar="${grammarExercises.indexOf(g)}">Check answer</button><div id="res-${grammarExercises.indexOf(g)}"></div></div>`).join('')}</div></div>`;}
const speakExercises=[
{scene:'morning',title:'Morning routine',optional:'Describe two things you do in the morning.',suggested:'Le matin, je me réveille à sept heures. Ensuite, je prends mon petit-déjeuner.',tip:'Use sequence words: ensuite, puis, après.'},
{scene:'sport',title:'Getting ready for sport',optional:'What are you wearing to exercise?',suggested:'Je porte un tee-shirt, un short et des baskets.',tip:'Use porter + clothes.'},
{scene:'rain',title:'Describe the weather',optional:'Look outside. What is the weather like?',suggested:'Aujourd’hui, il pleut et il y a des nuages.',tip:'Mix il pleut with il y a + noun.'},
{scene:'cold',title:'Cold morning',optional:'What is the weather and what will you wear?',suggested:'Il fait froid. Je vais mettre un bonnet et une écharpe.',tip:'Use il fait and je vais + infinitive.'},
{scene:'cinema',title:'Evening plans',optional:'Tell a friend what you are going to do tonight.',suggested:'Ce soir, je vais aller au cinéma avec mes amis.',tip:'Future proche: je vais + infinitive.'},
{scene:'plants',title:'Your responsibilities',optional:'Talk about taking care of plants.',suggested:'Je m’occupe de mes plantes le week-end.',tip:'S’occuper de quelque chose.'},
{scene:'clock-230',title:'Tell the time',optional:'Say the time shown on the clock.',suggested:'Il est deux heures et demie.',tip:'et demie = half past.'},
{scene:'eat-after',title:'Something that just happened',optional:'Say that you have just eaten.',suggested:'Je viens de manger.',tip:'Passé récent: je viens de + infinitive.'}
];
function speakPage(){const g=speakExercises[speakAt % speakExercises.length];return `<div class="speaking-box"><div class="eyebrow">PRACTICE YOUR VOICE</div><h1>Real-life moments.</h1><p class="header-desc">Imagine yourself in the scene. Say a response out loud, then optionally type it. You're not being automatically graded.</p><div class="review-top"><span class="small muted">Scene ${speakAt+1} / ${speakExercises.length}</span><span class="mini-step">SPEAK FIRST</span></div><div class="review-card"><div class="review-scene prompt-scene">${sceneSVG(g.scene)}<span class="corner">${esc(g.title)}</span></div><div class="eyebrow review-eyebrow">WHAT WOULD YOU SAY IN FRENCH?</div><div class="field"><label for="speaking-answer">Draft your answer (optional)</label><textarea id="speaking-answer" class="textarea" rows="3" placeholder="Try saying it aloud first...">${esc(speakResponse)}</textarea></div><div class="tabline" style="margin-bottom:11px"><button class="btn btn-white" data-action="speak-hint">${speakHint?'Hide situation hint':'Show situation hint'}</button></div>${speakHint?`<p class="small muted" style="line-height:1.5">${esc(g.optional)}</p>`:''}${!speakShown?`<div class="tabline"><button class="btn btn-primary" data-action="speak-reveal">Show example answer ${icon('eye')}</button></div>`:`<div class="answer"><div class="eyebrow">ONE NATURAL RESPONSE</div><h2 style="font-size:22px">${esc(g.suggested)}</h2><p class="mini">${esc(g.tip)}</p><button class="btn btn-secondary" data-action="speech-example">${icon('sound')} Listen to example</button></div><div class="rating-row" style="grid-template-columns:1fr 1fr"><button class="btn btn-white" data-action="speak-retry">Practice again</button><button class="btn btn-primary" data-action="speak-done">I said it ${icon('check')}</button></div>`}</div><div class="notice">${icon('info')} This mode offers model answers for self-practice. It does not pretend to recognize or assess your pronunciation. You can request more complex speaking feedback later.</div></div>`;}
function libCards(){return state.cards.filter(c=>(libTopic==='All'||c.topic===libTopic)&&(libType==='All'||c.kind===libType)&&[c.frenchAnswer,c.englishPrompt,c.topic,c.frenchExample].some(v=>textNormalized(v).includes(textNormalized(libSearch))));}
function libraryPage(){const cs=libCards();return `<div><div class="eyebrow">YOUR LEARNING LIBRARY</div><h1>Every idea has a picture.</h1><p class="header-desc">Browse your visual cards, change the illustrations, and add your own daily-life scenes. All edits are saved locally.</p><div class="library-toolbar"><div class="search-box">${icon('search')}<input class="input" placeholder="Find a concept or French expression..." id="lib-search" value="${esc(libSearch)}"/></div><select id="lib-topic" class="select" aria-label="Filter by topic"><option>All</option>${[...new Set(state.cards.map(c=>c.topic))].map(t=>`<option ${libTopic===t?'selected':''}>${esc(t)}</option>`).join('')}</select><select id="lib-type" class="select" aria-label="Filter by card type">${['All','vocab','action','sentence','grammar','speaking'].map(t=>`<option ${libType===t?'selected':''}>${esc(t)}</option>`).join('')}</select><button class="btn btn-primary" data-action="add-card">${icon('plus')} Add card</button></div><p class="small muted">${cs.length} cards · Pictures are the default prompt</p><div class="library-grid">${cs.map(c=>`<div class="lib-card hover-card"><div class="lib-scene">${visual(c)}</div><div class="lib-content"><span class="meta">${esc(c.topic)}</span><h3>${esc(c.frenchAnswer)}</h3><p>${esc(c.englishPrompt)}</p><div class="lib-footer"><button class="btn btn-secondary" data-edit="${esc(c.id)}">${icon('edit')} Edit</button><button class="btn btn-white" data-practice="${esc(c.id)}">Practice ${icon('arrow')}</button></div></div></div>`).join('')}</div>${cs.length?'':`<div class="empty"><h3>No matching cards</h3><p>Adjust filters or add a new card.</p></div>`}</div>`;}
function settingsPage(){return `<div><div class="eyebrow">YOUR APP, YOUR RULES</div><h1>Settings & backups.</h1><p class="header-desc">Visual French practice works offline after installation. Each learner has independent progress saved on this device only; there is no cross-device synchronization.</p><div class="settings-grid"><div class="panel"><h3>Study profiles</h3><p>Each learner has separate reviews, streaks, grammar and speaking history. Everyone shares one vocabulary library.</p><p class="mini-step">Studying as: ${esc(activeProfile().name)}</p><div style="margin-top:17px"><button class="btn btn-primary" data-action="open-profiles">${icon("plus")} Manage profiles</button></div></div><div class="panel"><h3>Flashcard front</h3><p>Choose what appears before you reveal French. Visual is the recommended speaking-focused mode.</p><div class="field"><label for="front-mode">Card prompt mode</label><select id="front-mode" class="select"><option value="visual" ${activeProfile().prefs.frontMode==='visual'?'selected':''}>Picture only (recommended)</option><option value="english" ${activeProfile().prefs.frontMode==='english'?'selected':''}>English prompt</option><option value="mixed" ${activeProfile().prefs.frontMode==='mixed'?'selected':''}>Picture + English</option></select></div></div><div class="panel"><h3>Backup your progress</h3><p>Download a complete backup of your shared cards, uploaded pictures and every learner profile with its own study history. Importing a backup replaces all existing local profiles on that device.</p><button class="btn btn-primary" data-action="export-json">${icon('download')} Export backup</button> <button class="btn btn-white" data-action="import-json">${icon('upload')} Import backup</button><input id="import-input" type="file" accept="application/json,.json" hidden/></div><div class="panel"><h3>Add to your iPhone</h3><p>After deploying to a secure HTTPS address, open it in Safari → Share → Add to Home Screen. Then Parlez appears as an app icon.</p><p class="small muted">Offline files are cached after the first successful visit. Your card data remains local.</p></div><div class="panel"><h3>Data controls</h3><p><b>${state.cards.length}</b> cards · <b>${activeProfile().history.length}</b> reviews · <b>${activeProfile().speakingHistory.length}</b> speaking attempts.</p><button class="btn btn-white" data-action="export-csv">${icon('download')} Export cards CSV</button> <button class="btn btn-danger" style="margin-top:12px" data-action="reset-data">${icon('trash')} Reset entire app</button></div></div><div class="notice">${icon('info')} Important: all profiles are stored only in this browser. Different phones do not synchronize. Clearing Safari data removes all local profiles and your edited cards. Export a full JSON backup regularly.</div></div>`;}
function cardModal(c){modalOpen=true;editId=c?.id||null;editScene=c?.scene||'wake';editImage=c?.customImage||null;const sceneKeys=['wake','rise','brush','shower','dress','hair','walk','bedtime','sleep','breakfast','makebed','dishes','plants','work','coffee','bike','hat','scarf','dressobj','shoes','shirt','pants','skirt','socks','gloves','red-dress','rain','snow','sun','wind','clouds','cold','hot','write','eat-before','eat-now','eat-after','clock-215','clock-230','clock-245','sport','cinema','mexican-film'];const fields=[['sceneHint','Scene clue (optional)','What is happening or changing in the picture?'],['startHint','French starter (optional)','e.g. Je me ré…'],['englishPrompt','English meaning (for hints)','e.g. I wake up'],['frenchAnswer','French answer','e.g. Je me réveille.'],['pronunciation','Pronunciation','e.g. zhuh muh ray-VEHY'],['frenchExample','Example in French','e.g. Je me réveille tôt.'],['mnemonic','Your memory hook (optional)','e.g. couch → coucher; leave blank for our suggested hook'],['grammarNote','Optional grammar note','e.g. Je + me + verb']];const f=(key,title,placeholder)=>`<div class="field"><label for="ed-${key}">${title}</label><input class="input" id="ed-${key}" value="${esc(c?.[key]||'')}" placeholder="${esc(placeholder)}" ${key==='frenchAnswer'?'required':''}/></div>`;const html=`<div class="modal-backdrop" id="modal-backdrop"><div class="modal" role="dialog" aria-modal="true" aria-label="${c?'Edit':'Add'} card"><div class="modal-header"><h2>${c?'Edit your card':'Create a new card'}</h2><button class="round-btn" data-action="close-modal" aria-label="Close dialog">${icon('close')}</button></div><div class="field-row"><div class="field"><label for="ed-topic">Topic</label><input class="input" id="ed-topic" value="${esc(c?.topic||'My own cards')}"/></div><div class="field"><label for="ed-kind">Card type</label><select class="select" id="ed-kind">${['vocab','action','sentence','grammar','speaking'].map(t=>`<option ${c?.kind===t?'selected':''}>${t}</option>`).join('')}</select></div></div><div class="field"><label>Choose a picture for the FRONT</label><div class="image-chooser">${sceneKeys.map(key=>`<button class="${editScene===key?'selected':''}" data-choose-scene="${key}" title="${key}">${sceneSVG(key)}<span>${key.replace(/-/g,' ')}</span></button>`).join('')}</div><small style="margin-top:5px">Pick an illustration or upload a photo below.</small></div><div class="field"><label for="own-image">Upload your own image (optional)</label><input id="own-image" type="file" accept="image/*" class="input"/><small>Images are compressed on your device to fit local storage. A custom image replaces the illustration.</small></div><div id="uploaded-preview">${editImage?`<img alt="User image" src="${esc(editImage)}" style="max-height:110px;max-width:160px;border-radius:10px"/> <button class="btn btn-white" data-action="clear-upload">Remove image</button>`:''}</div>${fields.map(x=>f(...x)).join('')}<div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:18px">${c?`<button class="btn btn-danger" data-action="delete-card" data-card-id="${esc(c.id)}">${icon('trash')} Delete</button>`:'<span></span>'}<div style="display:flex;gap:9px"><button class="btn btn-white" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-card">${icon('check')} Save card</button></div></div></div></div>`;document.body.insertAdjacentHTML('beforeend',html);}
function modalClose(){document.querySelector('#modal-backdrop')?.remove();modalOpen=false;}
function profileModal(){
 modalClose();
 const html=`<div class="modal-backdrop" id="modal-backdrop">
 <div class="modal profile-dialog" role="dialog" aria-modal="true" aria-labelledby="profile-dialog-title">
   <div class="modal-header">
     <div><div class="eyebrow">PERSONAL STUDY SPACES</div><h2 id="profile-dialog-title" style="margin-top:8px">Who's studying today?</h2></div>
     <button class="round-btn" type="button" data-action="close-modal" aria-label="Close profiles">${icon('close')}</button>
   </div>
   <p class="small muted" style="line-height:1.65">Each profile has independent progress, review schedules and practice history. The vocabulary cards are shared.</p>
   <div class="profile-list">${state.profiles.map(p=>`<div class="profile-row ${p.id===state.activeProfileId?'current':''}">
     <span class="profile-bubble large" style="background:${esc(p.color)}">${esc(p.name.charAt(0).toUpperCase())}</span>
     <div class="profile-row-main"><label for="profile-name-${esc(p.id)}" class="small muted">Profile name${p.id===state.activeProfileId?' · Current':''}</label><input id="profile-name-${esc(p.id)}" class="input" maxlength="30" data-profile-name="${esc(p.id)}" value="${esc(p.name)}"/></div>
     <div class="profile-row-actions">
       <button class="btn btn-white" type="button" data-action="rename-profile" data-profile-id="${esc(p.id)}">Save name</button>
       ${p.id===state.activeProfileId?'<span class="mini-step">Active</span>':`<button class="btn btn-primary" type="button" data-action="switch-profile" data-profile-id="${esc(p.id)}">Study as ${esc(p.name)}</button>`}
       ${state.profiles.length>1?`<button class="btn btn-danger profile-remove" type="button" data-action="delete-profile" data-profile-id="${esc(p.id)}" aria-label="Delete ${esc(p.name)} profile">Delete</button>`:''}
     </div>
   </div>`).join('')}</div>
   <div class="profile-add">
      <label for="new-profile-name">Add another learner</label>
      <div class="profile-add-controls"><input id="new-profile-name" class="input" maxlength="30" placeholder="Name" autocomplete="off"/>
      <button class="btn btn-primary" type="button" data-action="create-profile">${icon('plus')} Create profile</button></div>
   </div>
   <div class="notice profile-notice">${icon('info')} These are local profiles, not online accounts. If you study on separate phones, your progress won't sync automatically. You can export and import a full backup manually.</div>
 </div></div>`;
 document.body.insertAdjacentHTML('beforeend',html);
 $('#new-profile-name')?.focus();
}
function profileNameAvailable(name,exceptId=null){
 return !!name && name.length<=30 && !state.profiles.some(p=>p.id!==exceptId&&p.name.toLocaleLowerCase()===name.toLocaleLowerCase());
}
function switchProfile(id){
 if(!state.profiles.some(p=>p.id===id))return;
 state.activeProfileId=id;
 if(!persist())return;
 reviewSession=null;revealed=false;hint=false;hintLevel=0;englishHint=false;speakShown=false;speakHint=false;speakResponse='';
 modalClose();navigate('home');
 toast('Switched to '+activeProfile().name+'. Review progress is separate.');
}
function saveCard(){const french=$('#ed-frenchAnswer')?.value?.trim();if(!french){toast('Please add a French answer.');$('#ed-frenchAnswer')?.focus();return;}let c=state.cards.find(c=>c.id===editId);if(!c){c=C('own-'+Date.now()+'-'+Math.random().toString(16).slice(2),'vocab','My own cards','wake','','','');state.cards.push(c);}['sceneHint','startHint','englishPrompt','frenchAnswer','pronunciation','frenchExample','mnemonic','grammarNote'].forEach(k=>c[k]=$('#ed-'+k).value.trim());c.kind=$('#ed-kind').value;c.topic=$('#ed-topic').value.trim()||'My own cards';c.scene=editScene;c.customImage=editImage;if(persist()){modalClose();render();toast('Card saved.');}}
function uploadImage(file){if(!file)return;if(!file.type.startsWith('image/')){toast('Choose a picture file.');return;}if(file.size>10*1024*1024){toast('Choose an image under 10 MB.');return;}const r=new FileReader();r.onload=()=>{const image=new Image();image.onload=()=>{let max=500,scale=Math.min(1,max/Math.max(image.width,image.height)),canvas=document.createElement('canvas');canvas.width=Math.round(image.width*scale);canvas.height=Math.round(image.height*scale);canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);const data=canvas.toDataURL('image/jpeg',.72);if(data.length>260000){toast('Image remains too large. Choose a smaller picture.');return;}editImage=data;$('#uploaded-preview').innerHTML=`<img alt="Uploaded card image" src="${data}" style="max-height:110px;max-width:160px;border-radius:10px"/> <button class="btn btn-white" data-action="clear-upload">Remove image</button>`;};image.onerror=()=>toast('Could not read that image.');image.src=r.result;};r.readAsDataURL(file);}
function exportData(type){let text,filename,mime;if(type==='json'){text=JSON.stringify(state,null,2);filename='parlez-all-profiles-'+todayKey()+'.json';mime='application/json';}else{const keys=['kind','topic','sceneHint','startHint','englishPrompt','frenchAnswer','pronunciation','frenchExample','mnemonic','grammarNote'];text=[keys.join(','),...state.cards.map(c=>keys.map(k=>'"'+String(c[k]||'').replace(/"/g,'""')+'"').join(','))].join('\r\n');filename='parlez-cards-'+todayKey()+'.csv';mime='text/csv;charset=utf-8';}const blob=new Blob([text],{type:mime}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Backup downloaded.');}
function importData(file){
 if(!file)return;
 file.text().then(t=>{
  let d;
  try{d=JSON.parse(t);}catch{toast('That file is not valid JSON.');return;}
  if(![2,3].includes(d?.version)||!Array.isArray(d.cards)||d.cards.some(c=>typeof c.frenchAnswer!=='string'||typeof c.id!=='string')||(d.version===3&&(!Array.isArray(d.profiles)||!d.profiles.length))){
   toast('This is not a compatible Parlez backup.');return;
  }
  if(!confirm('Replace the shared cards and ALL profiles with this backup? Export a backup of your existing data first.'))return;
  const previous=state;
  state=migrate(d);
  if(!persist()){state=previous;return;}
  reviewSession=null;render();toast('All profiles and cards restored.');
 }).catch(()=>toast('Could not read this backup.'));
}
function say(text){if(!('speechSynthesis' in window)){toast('Speech playback is not supported in this browser.');return;}window.speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.rate=.83;const voices=window.speechSynthesis.getVoices();const v=voices.find(v=>v.lang.toLowerCase().startsWith('fr'));if(v)u.voice=v;window.speechSynthesis.speak(u);}
function page(){switch(view){case 'review':return reviewPage();case 'grammar':return grammarPage();case 'speak':return speakPage();case 'library':return libraryPage();case 'settings':return settingsPage();default:return homePage();}}
function render(){document.querySelector('#modal-backdrop')?.remove();modalOpen=false;$('#app').innerHTML=shell(page());if(view==='library'&&libSearch){const i=$('#lib-search');if(i)i.setSelectionRange(i.value.length,i.value.length);}}
function navigate(to){view=to;window.location.hash=to;reviewSession=null;speakShown=false;speakHint=false;speakResponse='';render();scrollTo({top:0,behavior:'instant'});}
function startPracticeCard(id){view='review';reviewSession={ids:[id],index:0,done:0,again:0};reviewFilter='All cards';revealed=false;hint=false;hintLevel=0;englishHint=false;window.location.hash='review';render();scrollTo(0,0);}
// Delegated controls: stable even when cards and views re-render.
document.addEventListener('click',e=>{const el=e.target.closest('button');if(!el)return;if(el.dataset.view){navigate(el.dataset.view);return;}if(el.dataset.rate){rateCard(el.dataset.rate);return;}if(el.dataset.edit){cardModal(state.cards.find(c=>c.id===el.dataset.edit));return;}if(el.dataset.practice){startPracticeCard(el.dataset.practice);return;}if(el.dataset.chooseScene){editScene=el.dataset.chooseScene;editImage=null;$('#uploaded-preview').innerHTML='';document.querySelectorAll('[data-choose-scene]').forEach(b=>b.classList.toggle('selected',b.dataset.chooseScene===editScene));return;}if(el.dataset.gramtab){gramTab=el.dataset.gramtab;render();return;}if(el.dataset.checkGrammar!==undefined){let i=Number(el.dataset.checkGrammar),g=grammarExercises[i],v=$('#gr-'+i)?.value||'',correct=textNormalized(v)===textNormalized(g.answer);activeProfile().grammarHistory.push({time:Date.now(),item:i,correct});persist();$('#res-'+i).innerHTML=`<div class="result ${correct?'correct':'incorrect'}">${correct?'Correct!':'Answer: '+esc(g.answer)}<br/>${esc(g.explain)}</div>`;return;}let action=el.dataset.action;if(!action)return;switch(action){case 'open-profiles':profileModal();break;case 'create-profile':{const name=$('#new-profile-name')?.value.trim().replace(/\s+/g,' ');if(!profileNameAvailable(name)){toast('Enter a unique name, up to 30 characters.');return;}const p=makeProfile(name);p.color=PROFILE_COLORS[state.profiles.length%PROFILE_COLORS.length];state.profiles.push(p);state.activeProfileId=p.id;if(!persist())return;modalClose();reviewSession=null;navigate('home');toast('Created '+name+'. Ready to study!');break;}case 'rename-profile':{const id=el.dataset.profileId,p=state.profiles.find(x=>x.id===id);const name=document.getElementById('profile-name-'+id)?.value.trim().replace(/\s+/g,' ');if(!p)return;if(!profileNameAvailable(name,id)){toast('Enter a unique name, up to 30 characters.');return;}p.name=name;if(persist()){render();profileModal();toast('Profile name updated.');}break;}case 'switch-profile':switchProfile(el.dataset.profileId);break;case 'delete-profile':{if(state.profiles.length<2){toast('Keep at least one learner profile.');return;}const p=state.profiles.find(x=>x.id===el.dataset.profileId);if(!p)return;if(!confirm('Delete '+p.name+' and their study progress on this device? Shared cards will remain. This cannot be undone.'))return;state.profiles=state.profiles.filter(x=>x.id!==p.id);if(state.activeProfileId===p.id)state.activeProfileId=state.profiles[0].id;if(!persist())return;reviewSession=null;modalClose();navigate('home');profileModal();toast('Profile deleted.');break;}case 'start-review':reviewFilter='Due now';view='review';initReview();window.location.hash='review';render();break;case 'practice-all':reviewFilter='All cards';initReview();render();break;case 'toggle-english':englishHint=!englishHint;render();break;case 'next-hint':hintLevel=hintLevel===0&&!cardHints(currentReviewCard()).mnemonic?2:(hintLevel+1)%4;render();break;case 'toggle-hint':hint=!hint;render();break;case 'reveal':revealed=true;render();break;case 'speak-french':{let c=currentReviewCard();if(c)say(c.frenchAnswer);break;}case 'speech-example':say(speakExercises[speakAt].suggested);break;case 'speak-hint':speakResponse=$('#speaking-answer')?.value||'';speakHint=!speakHint;render();break;case 'speak-reveal':speakResponse=$('#speaking-answer')?.value||'';speakShown=true;render();break;case 'speak-retry':speakShown=false;render();break;case 'speak-done':activeProfile().speakingHistory.push({time:Date.now(),item:speakAt,spoken:true});persist();speakAt=(speakAt+1)%speakExercises.length;speakShown=false;speakHint=false;speakResponse='';render();break;case 'add-card':cardModal(null);break;case 'close-modal':modalClose();break;case 'clear-upload':editImage=null;$('#uploaded-preview').innerHTML='';break;case 'save-card':saveCard();break;case 'delete-card':if(confirm('Delete this card and its history? This cannot be undone.')){const id=el.dataset.cardId;state.cards=state.cards.filter(c=>c.id!==id);for(const p of state.profiles){p.history=p.history.filter(h=>h.id!==id);delete p.progress[id];}persist();modalClose();render();toast('Card deleted.');}break;case 'export-json':exportData('json');break;case 'export-csv':exportData('csv');break;case 'import-json':$('#import-input')?.click();break;case 'reset-data':if(confirm('Reset ALL profiles, shared cards, and review history on this device? Export a backup first.'))if(confirm('Second confirmation: erase every learner\'s local progress?')){state=initial();persist();reviewSession=null;render();toast('Data reset.');}break;}});
document.addEventListener('change',e=>{const el=e.target;if(el.id==='review-filter'){reviewFilter=el.value;initReview();render();}if(el.id==='lib-topic'){libTopic=el.value;render();}if(el.id==='lib-type'){libType=el.value;render();}if(el.id==='front-mode'){activeProfile().prefs.frontMode=el.value;persist();toast('Flashcard prompt mode updated.');}if(el.id==='own-image')uploadImage(el.files[0]);if(el.id==='import-input')importData(el.files[0]);});
document.addEventListener('input',e=>{if(e.target.id==='lib-search'){const el=e.target;let pos=el.selectionStart;libSearch=el.value;const grid=$('.library-grid'),cards=libCards();if(grid){grid.outerHTML=`<div class="library-grid">${cards.map(c=>`<div class="lib-card hover-card"><div class="lib-scene">${visual(c)}</div><div class="lib-content"><span class="meta">${esc(c.topic)}</span><h3>${esc(c.frenchAnswer)}</h3><p>${esc(c.englishPrompt)}</p><div class="lib-footer"><button class="btn btn-secondary" data-edit="${esc(c.id)}">${icon('edit')} Edit</button><button class="btn btn-white" data-practice="${esc(c.id)}">Practice ${icon('arrow')}</button></div></div></div>`).join('')}</div>`;}}});
window.addEventListener('hashchange',()=>{const hash=location.hash.slice(1);if(['home','review','grammar','speak','library','settings'].includes(hash)&&view!==hash){view=hash;reviewSession=null;render();}});
const initialHash=location.hash.slice(1);if(['home','review','grammar','speak','library','settings'].includes(initialHash))view=initialHash;render();
if('serviceWorker' in navigator && location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
