const fs = require('fs');

const phonetics = JSON.parse(fs.readFileSync('scripts/full_phonetics.json', 'utf8'));

// 1. Generate public/phonetics-dict.js
const dictContent = `// French Example Sentence Phonetics for Parlez
// Provides authentic English-syllable pronunciation guides for all curriculum and drill sentences
(function () {
  window.ParlezPhonetics = ${JSON.stringify(phonetics, null, 2)};
  window.getExamplePhonetic = function(c) {
    if (!c) return '';
    if (c.examplePhonetic) return c.examplePhonetic;
    if (c.frenchExample && window.ParlezPhonetics && window.ParlezPhonetics[c.frenchExample]) {
      return window.ParlezPhonetics[c.frenchExample];
    }
    return '';
  };
})();
`;
fs.writeFileSync('public/phonetics-dict.js', dictContent, 'utf8');
console.log('Generated public/phonetics-dict.js');

// 2. Inject into public/cards-curriculum.js
let codeC = fs.readFileSync('public/cards-curriculum.js', 'utf8');
// Parse cards by regex or eval
global.window = global;
eval(codeC);
const cards = global.ParlezCurriculumCards.all;

let updatedCardsCount = 0;
for (const card of cards) {
  if (card.frenchExample && phonetics[card.frenchExample]) {
    card.examplePhonetic = phonetics[card.frenchExample];
    updatedCardsCount++;
  }
}

// Re-serialize cards-curriculum.js preserving structure
const newCodeC = `// Parlez Curriculum Cards: Units 1 to 4 (181 curated flashcards)
(function () {
  const cards = ${JSON.stringify(cards, null, 2)};

  window.ParlezCurriculumCards = {
    all: cards,
    byLesson: function (lesson) {
      return cards.filter(c => c.lesson === lesson);
    },
    byTopic: function (topic) {
      return cards.filter(c => c.topic === topic);
    }
  };
})();
`;
fs.writeFileSync('public/cards-curriculum.js', newCodeC, 'utf8');
console.log(`Updated public/cards-curriculum.js (${updatedCardsCount} cards with examplePhonetic)`);

// 3. Inject into public/verb-conjugations.js
let codeV = fs.readFileSync('public/verb-conjugations.js', 'utf8');
eval(codeV);
const verbData = global.ParlezVerbConjugations;

let verbSentencesCount = 0;
for (const v of verbData.verbs) {
  for (const [key, s] of Object.entries(v.sentences)) {
    if (s.sentence && phonetics[s.sentence]) {
      s.phonetic = phonetics[s.sentence];
      verbSentencesCount++;
    }
  }
}

const newCodeV = `// Parlez Comprehensive Verb Conjugation Database
// 21 Key A1/A2 Verbs across 1st, 2nd, and 3rd Groups with Complete 6-Person Sentences & Phonetics
(function () {
  const verbs = ${JSON.stringify(verbData.verbs, null, 2)};
  const pronouns = ${JSON.stringify(verbData.pronouns, null, 2)};

  window.ParlezVerbConjugations = {
    verbs: verbs,
    pronouns: pronouns,
    getVerbById: function(id) {
      return verbs.find(v => v.id === id);
    },
    getVerbsByGroup: function(groupCode) {
      if (!groupCode || groupCode === 'all') return verbs;
      return verbs.filter(v => v.groupCode === groupCode);
    }
  };
})();
`;
fs.writeFileSync('public/verb-conjugations.js', newCodeV, 'utf8');
console.log(`Updated public/verb-conjugations.js (${verbSentencesCount} drill sentences with phonetic)`);
