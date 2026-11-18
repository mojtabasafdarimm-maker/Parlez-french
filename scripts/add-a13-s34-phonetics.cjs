// Add A1.3 Séances 3–4 pronunciations to public/phonetics-dict.js
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../public/phonetics-dict.js');
let content = fs.readFileSync(filePath, 'utf8');

const newEntries = {
  "un parc de loisirs": "[uhn park duh lwah-ZEER]",
  "la montagne russe": "[lah mohn-TAHN-yuh ROOS]",
  "un manège": "[uhn mah-NEZH]",
  "une aire de pique-nique": "[ewn air duh peek-NEEK]",
  "J’ai hâte de te voir ! (Il me tarde de te voir)": "[zhay AHT duh tuh VWAHR]",
  "acheter des billets en ligne": "[ahsh-TAY day bee-YEH ahn LEEN-yuh]",
  "une salle de sport": "[ewn SAHL duh SPOR]",
  "se mettre au sport": "[suh MEH-truh oh SPOR]",
  "un abonnement": "[uhn ah-bohn-MAHN]",
  "un cours de danse / le yoga": "[uhn KOOR duh DAHNSS / luh yoh-GAH]",
  "la natation": "[lah nah-tah-SYOHN]",
  "une armoire à pharmacie": "[ewn ar-MWAHR ah far-mah-SEE]",
  "une boîte de pansements": "[ewn BWAHT duh pahnss-MAHN]",
  "un thermomètre": "[uhn tehr-moh-MEH-truh]",
  "un tube de pommade": "[uhn TOE-buh duh poh-MAHD]",
  "un sirop pour la toux": "[uhn see-ROH poor lah TOO]",
  "des comprimés pour dormir": "[day kohm-pree-MAY poor dor-MEER]",
  "l’aspirine (f.) / un tube d’aspirine": "[lahss-pee-REEN]",
  "le pharmacien / la pharmacienne": "[luh far-mah-SYEHN / lah far-mah-SYEHN]",
  "le dépanneur / être en panne": "[luh day-pah-NUR / EH-truh ahn PAHN]",
  "composter son ticket de métro": "[kohm-pohss-TAY sohn tee-KEH duh may-TROH]",
  "repasser et ranger une chemise": "[ruh-pah-SAY ay rahn-ZHAY ewn shuh-MEEZ]",
  "Je connais Danial et je connais ce resto.": "[zhuh koh-NEH dah-NYAHL ay zhuh koh-NEH suh res-TOH]",
  "Je sais nager et je sais danser.": "[zhuh SAY nah-ZHAY ay zhuh SAY dahn-SAY]",
  "Je sais où tu habites et quand arrive le train.": "[zhuh SAY oo tew ah-BEET]",
  "Je le connais et je ne le regarde pas.": "[zhuh luh koh-NEH / zhuh nuh luh ruh-GARD pah]",
  "Je vais la voir et je dois l’acheter.": "[zhuh veh lah VWAHR / zhuh dwah lahsh-TAY]",
  "Tu as vu sa voiture ? — Oui, je l’ai vue !": "[tew ah vew sah vwah-TEWR / wee zhuh lay VEW]",
  "Je lui parle tous les jours.": "[zhuh lwee PARL too lay ZHOOR]",
  "Je leur téléphone et je leur écris.": "[zhuh lur tay-lay-FOHN / zhuh lur ay-KREE]",
  "Elles lui demandent de l’aide et lui offrent un verre.": "[el lwee duh-MAHND duh LED / lwee OHFR uhn VEHR]",
  "Quand je la rencontre, je lui dis bonjour.": "[kahn zhuh lah rahn-KOHNT-ruh zhuh lwee dee bohn-ZHOOR]",
  "Je la trouve magnifique !": "[zhuh lah TROOV mahn-yee-FEEK]",
  "amical(e) / accueillant(e)": "[ah-mee-KAHL / ah-kuh-YAHN]",
  "Cette ville me plaît beaucoup.": "[seht VEEL muh PLEH boh-KOO]"
};

const entriesStr = Object.entries(newEntries)
  .map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)}`)
  .join(',\r\n');

const targetCRLF = '\r\n  };\r\n\r\n  window.getWordPhonetic';
const targetLF = '\n  };\n\n  window.getWordPhonetic';

if (content.includes(targetCRLF)) {
  content = content.replace(targetCRLF, ',\r\n' + entriesStr + targetCRLF);
} else if (content.includes(targetLF)) {
  content = content.replace(targetLF, ',\n' + entriesStr.replace(/\r\n/g, '\n') + targetLF);
} else {
  console.error('Target not found in phonetics-dict.js');
  process.exit(1);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated phonetics-dict.js with A1.3 Séances 3–4 entries!');
