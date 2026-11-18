// Add A1.3 Séances 3–4 nouns to public/noun-gender.js
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../public/noun-gender.js');
let content = fs.readFileSync(filePath, 'utf8');

const newNounEntries = `    // Curriculum A1.3 Séances 3–4
    c12_parc_loisirs: { gender: 'm', article: 'un', bare: 'parc de loisirs', tip: 'un parc is Masculine (♂ un/le parc).' },
    c12_montagne_russe: { gender: 'f', article: 'la', bare: 'montagne russe', tip: 'Nouns ending in -agne (la montagne, la campagne) are Feminine (♀ une/la).' },
    c12_manege: { gender: 'm', article: 'un', bare: 'manège', tip: 'Nouns ending in -ège (un manège, un piège, un privilège) are 100% Masculine (♂).' },
    c12_aire_piquenique: { gender: 'f', article: 'une', bare: 'aire de pique-nique', tip: 'une aire is Feminine (♀ une aire), but le pique-nique is Masculine (♂).' },
    c12_salle_sport: { gender: 'f', article: 'une', bare: 'salle de sport', tip: 'Nouns ending in -alle (une salle, une balle) are Feminine (♀ une/la).' },
    c12_abonnement_sport: { gender: 'm', article: 'un', bare: 'abonnement', tip: 'Nouns ending in -ment (un abonnement, un appartement, un logement) are 100% Masculine (♂).' },
    c12_cours_danse_yoga: { gender: 'm', article: 'un', bare: 'cours de danse / le yoga', tip: 'un cours (silent s) is Masculine (♂); le yoga and le sport are Masculine (♂).' },
    c12_natation: { gender: 'f', article: 'la', bare: 'natation', tip: 'Nouns ending in -tion (la natation, la solution, l’invitation) are 100% Feminine (♀).' },
    c12_armoire_pharmacie: { gender: 'f', article: 'une', bare: 'armoire à pharmacie', tip: 'une armoire is Feminine (♀ une armoire); la pharmacie (-ie) is 100% Feminine (♀).' },
    c12_boite_pansements: { gender: 'f', article: 'une', bare: 'boîte de pansements', tip: 'une boîte is Feminine (♀ une boîte); un pansement (-ment) is Masculine (♂).' },
    c12_thermometre: { gender: 'm', article: 'un', bare: 'thermomètre', tip: 'Nouns ending in -mètre (un thermomètre, un kilomètre) are 100% Masculine (♂).' },
    c12_pommade_muscles: { gender: 'm', article: 'un', bare: 'tube de pommade', tip: 'un tube is Masculine (♂ un/le tube); une pommade is Feminine (♀).' },
    c12_sirop_toux: { gender: 'm', article: 'un', bare: 'sirop pour la toux', tip: 'un sirop is Masculine (♂); la toux is Feminine (♀).' },
    c12_comprimes_dormir: { gender: 'm', isPlural: true, article: 'des', singular: 'un comprimé', bare: 'comprimés pour dormir', tip: 'un comprimé (ending in accented -é) is Masculine (♂ un → des).' },
    c12_aspirine: { gender: 'f', article: 'l’', targetArticle: 'une / la', bare: 'aspirine', tip: 'l’aspirine is Feminine: une aspirine (♀).' },
    c12_pharmacien: { gender: 'mf', article: 'le / la', bare: 'pharmacien / pharmacienne', tip: 'un pharmacien (♂ -ien) becomes une pharmacienne (♀ -ienne).' },
    c12_depanneur_panne: { gender: 'm', article: 'le', bare: 'dépanneur', tip: 'Nouns ending in -eur for professions (le dépanneur, le serveur, le chauffeur) are Masculine (♂).' },
    c12_ticket_metro_composter: { gender: 'm', isExpr: true, noun: 'un ticket de métro', tip: 'Nouns ending in -et (un ticket, un livret, un bonnet) are 100% Masculine (♂).' },
    c12_chemise_repasser_ranger: { gender: 'f', isExpr: true, noun: 'une chemise', tip: 'Nouns ending in -ise (une chemise, une valise, une surprise) are Feminine (♀).' }
`;

const targetCRLF = '\r\n  };\r\n\r\n  // Fallback detector';
const targetLF = '\n  };\n\n  // Fallback detector';

if (content.includes(targetCRLF)) {
  content = content.replace(targetCRLF, ',\r\n' + newNounEntries.trimEnd() + targetCRLF);
} else if (content.includes(targetLF)) {
  content = content.replace(targetLF, ',\n' + newNounEntries.replace(/\r\n/g, '\n').trimEnd() + targetLF);
} else {
  console.error('Target not found in noun-gender.js');
  process.exit(1);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated noun-gender.js with A1.3 Séances 3–4 nouns!');
