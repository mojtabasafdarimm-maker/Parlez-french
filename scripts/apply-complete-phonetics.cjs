const fs = require('fs');
const path = require('path');

// 1. Update public/phonetics-dict.js
const phoneticsDictPath = path.resolve(__dirname, '../public/phonetics-dict.js');
let phoneticsCode = fs.readFileSync(phoneticsDictPath, 'utf8');

const missingSentences = {
  "Je me réveille à sept heures et demie.": "[zhuh muh ray-vehy ah seht ur ay duh-mee]",
  "Je me lève le matin.": "[zhuh muh lehv luh mah-tehn]",
  "Je me douche le matin.": "[zhuh muh doosh luh mah-tehn]",
  "Je m’habille le matin.": "[zhuh mah-beey luh mah-tehn]",
  "Je me coiffe le matin.": "[zhuh muh kwahf luh mah-tehn]",
  "Je me couche à dix heures.": "[zhuh muh koosh ah deez ur]",
  "Je m’endors à dix heures.": "[zhuh mahn-dor ah deez ur]",
  "Je fais la vaisselle le soir.": "[zhuh feh lah veh-sel luh swahr]",
  "Je m’occupe de mes plantes.": "[zhuh moh-kewp duh may plahnt]",
  "Je fais une pause café à dix heures.": "[zhuh feh ewn pohz kah-fay ah deez ur]",
  "Je fais du vélo le matin.": "[zhuh feh dew vay-loh luh mah-tehn]",
  "Je porte un bonnet.": "[zhuh port uhn boh-neh]",
  "Je porte des baskets.": "[zhuh port day bahs-ket]",
  "Il porte une chemise.": "[eel port ewn shuh-meez]",
  "Je porte des chaussettes.": "[zhuh port day shoh-set]",
  "Je porte des moufles.": "[zhuh port day moofl]",
  "Je regarde un bon film mexicain.": "[zhuh ruh-gard uhn bohn feelm mek-zee-kehn]",
  "Aujourd’hui, il neige.": "[oh-zhoor-dwee eel nezh]",
  "Il fait froid en hiver.": "[eel feh frwah ahn-n ee-vehr]",
  "Il fait chaud en été.": "[eel feh shoh ahn ay-tay]",
  "Je vais manger à midi.": "[zhuh veh mahn-zhay ah mee-dee]",
  "Je suis en train de manger.": "[zhuh swee ahn trehn duh mahn-zhay]",
  "Je vais me coucher à dix heures.": "[zhuh veh muh koo-shay ah deez ur]",
  "Je porte un short et des baskets.": "[zhuh port uhn short ay day bahs-ket]",
  "Ce soir, je vais aller au cinéma.": "[suh swahr zhuh veh ah-lay oh see-nay-mah]"
};

// Also load all word pronunciations from cards-curriculum.js and starter cards
global.window = {};
require('../public/cards-curriculum.js');
const curriculumCards = window.ParlezCurriculumCards ? window.ParlezCurriculumCards.all : [];

const appJsPath = path.resolve(__dirname, '../public/app.js');
let appJsCode = fs.readFileSync(appJsPath, 'utf8');

function C(id,kind,topic,scene,english,french,pron,example='',mnemonic='',grammar=''){
  return { id, frenchAnswer: french, pronunciation: pron, frenchExample: example };
}
const starterMatch = appJsCode.match(/const starter=\[([\s\S]*?)\n\];/);
const starterCards = eval('[' + starterMatch[1] + ']');
const allCards = [...starterCards, ...curriculumCards];

const wordPhoneticsMap = {};
allCards.forEach(c => {
  if (c.frenchAnswer && c.pronunciation) {
    const pron = c.pronunciation.startsWith('[') ? c.pronunciation : `[${c.pronunciation}]`;
    wordPhoneticsMap[c.frenchAnswer] = pron;
  }
});

// Build complete dictionary file
const allEntries = {};
// 1. Existing entries in ParlezPhonetics
require('../public/phonetics-dict.js');
Object.assign(allEntries, window.ParlezPhonetics || {});
// 2. Add missing sentences
Object.assign(allEntries, missingSentences);
// 3. Add word entries
Object.assign(allEntries, wordPhoneticsMap);

let dictLines = [
  '// French Pronunciation & Phonetics Dictionary for Parlez',
  '// Provides authentic English-syllable pronunciation guides for all curriculum words and example sentences',
  '(function () {',
  '  window.ParlezPhonetics = {'
];

const sortedKeys = Object.keys(allEntries).sort((a, b) => a.localeCompare(b, 'fr'));
sortedKeys.forEach((key, i) => {
  const isLast = i === sortedKeys.length - 1;
  dictLines.push(`  ${JSON.stringify(key)}: ${JSON.stringify(allEntries[key])}${isLast ? '' : ','}`);
});

dictLines.push('  };');
dictLines.push('');
dictLines.push('  window.getWordPhonetic = function (c) {');
dictLines.push('    if (!c) return "";');
dictLines.push('    const raw = c.pronunciation || c.wordPhonetic || c.phonetic || (window.ParlezPhonetics && window.ParlezPhonetics[c.frenchAnswer]) || "";');
dictLines.push('    if (!raw) return "";');
dictLines.push('    return raw.startsWith("[") ? raw : `[${raw}]`;');
dictLines.push('  };');
dictLines.push('');
dictLines.push('  window.getExamplePhonetic = function (c) {');
dictLines.push('    if (!c) return "";');
dictLines.push('    const raw = c.examplePhonetic || (window.ParlezPhonetics && window.ParlezPhonetics[c.frenchExample]) || "";');
dictLines.push('    if (!raw) return "";');
dictLines.push('    return raw.startsWith("[") ? raw : `[${raw}]`;');
dictLines.push('  };');
dictLines.push('');
dictLines.push('  window.getCardPhonetic = function (c) {');
dictLines.push('    return {');
dictLines.push('      word: window.getWordPhonetic(c),');
dictLines.push('      example: window.getExamplePhonetic(c)');
dictLines.push('    };');
dictLines.push('  };');
dictLines.push('})();');

fs.writeFileSync(phoneticsDictPath, dictLines.join('\n'), 'utf8');
console.log(`Updated public/phonetics-dict.js with ${sortedKeys.length} total entries!`);

// 2. Update public/styles.css for .word-phonetic
const stylesPath = path.resolve(__dirname, '../public/styles.css');
let stylesCode = fs.readFileSync(stylesPath, 'utf8');

if (!stylesCode.includes('.word-phonetic')) {
  const wordPhoneticCss = `
.word-phonetic {
  color: var(--purple, #706bbc);
  font-size: 14.5px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  letter-spacing: 0.25px;
  margin: 3px 0 8px !important;
  font-weight: 600;
  background: #f4f1fc;
  display: inline-block;
  padding: 3px 10px;
  border-radius: 6px;
  line-height: 1.4;
}
`;
  stylesCode = stylesCode.replace(
    '.quiet-french-word {',
    `${wordPhoneticCss}\n.quiet-french-word {`
  );
  fs.writeFileSync(stylesPath, stylesCode, 'utf8');
  console.log('Updated public/styles.css with .word-phonetic styling!');
}

console.log('Phonetics dictionary and styles successfully built!');
