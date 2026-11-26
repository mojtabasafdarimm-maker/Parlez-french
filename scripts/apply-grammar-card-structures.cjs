const fs = require('fs');
const path = require('path');
const { CARD_STRUCTURE_MAP, NEW_GRAMMAR_STRUCTURES } = require('./card-structure-map.cjs');

// 1. Update public/cards-curriculum.js to include structureId on all grammar cards
const cardsCurriculumPath = path.join(__dirname, '..', 'public', 'cards-curriculum.js');
let curriculumContent = fs.readFileSync(cardsCurriculumPath, 'utf8');

const jsonMatch = curriculumContent.match(/const cards = (\[[\s\S]*?\]);\s*\n/);
if (!jsonMatch) {
  console.error('Could not find "const cards = [...]" in cards-curriculum.js');
  process.exit(1);
}

const cards = JSON.parse(jsonMatch[1]);
let updatedCount = 0;
for (const card of cards) {
  if (card.kind === 'grammar' && CARD_STRUCTURE_MAP[card.id]) {
    card.structureId = CARD_STRUCTURE_MAP[card.id];
    updatedCount++;
  }
}
console.log(`Updated ${updatedCount} grammar cards with structureId.`);

const newCurriculumJson = JSON.stringify(cards, null, 2);
curriculumContent = curriculumContent.replace(jsonMatch[0], `const cards = ${newCurriculumJson};\n`);
fs.writeFileSync(cardsCurriculumPath, curriculumContent, 'utf8');
console.log('✓ Wrote updated public/cards-curriculum.js');

// 2. Update public/sentence-challenge.js with the new structures in GRAMMAR_STRUCTURES
const sentenceChallengePath = path.join(__dirname, '..', 'public', 'sentence-challenge.js');
let scContent = fs.readFileSync(sentenceChallengePath, 'utf8');

const startIdx = scContent.indexOf('const GRAMMAR_STRUCTURES = {');
const endIdx = scContent.indexOf('  const CHALLENGES = [');

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find start/end boundary of GRAMMAR_STRUCTURES in sentence-challenge.js');
  process.exit(1);
}

const rawStructStr = scContent.slice(startIdx + 'const GRAMMAR_STRUCTURES = '.length, endIdx).trim();
const cleanedRaw = rawStructStr.endsWith(';') ? rawStructStr.slice(0, -1).trim() : rawStructStr;
const existingStructures = JSON.parse(cleanedRaw);
const mergedStructures = { ...existingStructures, ...NEW_GRAMMAR_STRUCTURES };
console.log(`Merged structures total count: ${Object.keys(mergedStructures).length}`);

const mergedJson = JSON.stringify(mergedStructures, null, 2);
const replacement = `const GRAMMAR_STRUCTURES = ${mergedJson};\n\n`;
scContent = scContent.slice(0, startIdx) + replacement + scContent.slice(endIdx);
fs.writeFileSync(sentenceChallengePath, scContent, 'utf8');
console.log('✓ Wrote updated public/sentence-challenge.js with all 25 structures');
