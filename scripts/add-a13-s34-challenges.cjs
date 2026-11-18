// Add A1.3 Séances 3–4 sentence challenges to public/sentence-challenge.js
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../public/sentence-challenge.js');
let content = fs.readFileSync(filePath, 'utf8');

const newChallenges = `    // A1.3 Séances 3–4: Pronoms COD, COI & Connaître vs Savoir
    {
      id: 'cod_semi_aux_voir',
      topic: 'cod_coi',
      topicLabel: 'Pronom COD · Verbe semi-auxiliaire',
      scene: 'pronoun-cod-semi-aux',
      english: 'Tomorrow, I am going to see her.',
      targetWords: ['Demain', 'je', 'vais', 'la', 'voir'],
      fullSentence: 'Demain, je vais la voir.',
      distractors: [
        { word: 'la vais', trap: 'word_order', tip: 'Word Order Error: With a semi-auxiliary (aller, pouvoir, vouloir, devoir), the pronoun goes BEFORE the infinitive ("vais la voir")!' },
        { word: 'lui', trap: 'pronoun_choice', tip: 'Pronoun Error: "Voir" takes a direct object (COD: la), not an indirect object (lui)!' }
      ],
      rule: 'With semi-auxiliaries and futur proche / passé récent, the pronoun is placed directly BEFORE the infinitive.'
    },
    {
      id: 'cod_accord_passe_fem',
      topic: 'cod_coi',
      topicLabel: 'Passé Composé · Accord COD devant Avoir',
      scene: 'pronoun-cod-accord-avoir',
      english: 'Yes, I saw it! (referring to the car / la voiture)',
      targetWords: ['Oui', 'je', 'l’ai', 'vue', '!'],
      fullSentence: 'Oui, je l’ai vue !',
      distractors: [
        { word: 'vu', trap: 'agreement', tip: 'Agreement Error: When a feminine COD (l\' = la voiture) is placed BEFORE avoir, the participle agrees (+e ➜ vue)!' },
        { word: 'la ai', trap: 'elision', tip: 'Elision Error: "la" elides into "l\'" before the vowel of "ai" (l\'ai)!' }
      ],
      rule: 'The past participle with AVOIR agrees in gender (+e) and number (+s) with the direct object (COD) if placed before the verb.'
    },
    {
      id: 'coi_parler_hier',
      topic: 'cod_coi',
      topicLabel: 'Pronom COI · Passé composé sans accord',
      scene: 'pronoun-coi-talk-phone',
      english: 'I spoke to her yesterday evening.',
      targetWords: ['Je', 'lui', 'ai', 'parlé', 'hier', 'soir'],
      fullSentence: 'Je lui ai parlé hier soir.',
      distractors: [
        { word: 'parlée', trap: 'agreement', tip: 'False Agreement Error: Indirect object pronouns (COI: lui) NEVER cause participle agreement with avoir!' },
        { word: 'la', trap: 'pronoun_choice', tip: 'Pronoun Error: "Parler à quelqu\'un" takes an indirect pronoun (COI: lui = to him/her), never COD (la)!' }
      ],
      rule: 'COI pronouns (lui, leur) replace "à + person" and NEVER trigger past participle agreement.'
    },
    {
      id: 'cod_coi_rencontre_bonjour',
      topic: 'cod_coi',
      topicLabel: 'COD & COI · Distinction combinée',
      scene: 'pronoun-cod-coi-meet-greet',
      english: 'When I meet her, I say hello to her.',
      targetWords: ['Quand', 'je', 'la', 'rencontre', 'je', 'lui', 'dis', 'bonjour'],
      fullSentence: 'Quand je la rencontre, je lui dis bonjour.',
      distractors: [
        { word: 'lui rencontre', trap: 'pronoun_choice', tip: 'Pronoun Choice Error: "Rencontrer quelqu\'un" is direct (COD: la rencontre)!' },
        { word: 'la dis', trap: 'pronoun_choice', tip: 'Pronoun Choice Error: "Dire bonjour à quelqu\'un" requires indirect (COI: lui dis)!' }
      ],
      rule: 'Distinguish direct action (rencontrer qqn ➜ COD la/le/les) from indirect transfer (dire bonjour à qqn ➜ COI lui/leur).'
    },
    {
      id: 'connaitre_ce_resto',
      topic: 'connaitre_savoir',
      topicLabel: 'Connaître · Lieu ou Personne',
      scene: 'know-place-person-bistro',
      english: 'I know this restaurant very well.',
      targetWords: ['Je', 'connais', 'très', 'bien', 'ce', 'restaurant'],
      fullSentence: 'Je connais très bien ce restaurant.',
      distractors: [
        { word: 'sais', trap: 'verb_choice', tip: 'Verb Choice Error: Familiarity with a place, person, or thing uses CONNAÎTRE + NOM, never SAVOIR!' },
        { word: 'connaît', trap: 'conjugation', tip: 'Conjugation Error: For "Je", the ending is -s (Je connais), while il/elle takes -t (connaît)!' }
      ],
      rule: 'Use CONNAÎTRE directly with a noun (person, city, restaurant, book). Never use with a verb or clause.'
    },
    {
      id: 'savoir_ou_tu_habites',
      topic: 'connaitre_savoir',
      topicLabel: 'Savoir · Fait ou Information',
      scene: 'know-fact-map-direction',
      english: 'I know where you live.',
      targetWords: ['Je', 'sais', 'où', 'tu', 'habites'],
      fullSentence: 'Je sais où tu habites.',
      distractors: [
        { word: 'connais', trap: 'verb_choice', tip: 'Verb Choice Error: Factual knowledge introduced by where/when/why/how/that uses SAVOIR (où, quand, pourquoi, que)!' },
        { word: 'sait', trap: 'conjugation', tip: 'Conjugation Error: "Je" takes -s (Je sais), "Il/Elle" takes -t (Elle sait)!' }
      ],
      rule: 'Use SAVOIR when followed by a subordinate clause (que, où, quand, comment, pourquoi) or an infinitive (skill).'
    }`;

const targetCRLF = '\r\n  ];\r\n\r\n  const TOPIC_CHIPS = [';
const targetLF = '\n  ];\n\n  const TOPIC_CHIPS = [';

if (content.includes(targetCRLF)) {
  content = content.replace(targetCRLF, ',\r\n' + newChallenges + targetCRLF);
} else if (content.includes(targetLF)) {
  content = content.replace(targetLF, ',\n' + newChallenges.replace(/\r\n/g, '\n') + targetLF);
} else {
  console.error('Target not found in sentence-challenge.js');
  process.exit(1);
}

// Add chips to TOPIC_CHIPS
const chipInsert = `    { id: 'cod_coi', label: '🎯 Pronoms COD & COI' },\r\n    { id: 'connaitre_savoir', label: '💡 Connaître vs Savoir' },\r\n`;
content = content.replace("    { id: 'all', label: 'All Grammar Rules' },\r\n", "    { id: 'all', label: 'All Grammar Rules' },\r\n" + chipInsert);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated sentence-challenge.js with A1.3 Séances 3–4 challenges!');
