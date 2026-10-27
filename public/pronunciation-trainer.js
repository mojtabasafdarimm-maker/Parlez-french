/* Parlez Sounds & Pronunciation Lab
   A visual and audio discrimination laboratory for French learners.
   Solves vowel confusion, word connections (liaisons), silent consonants, and reading aloud.
   Zero external dependencies. Works 100% offline.
*/
'use strict';

window.ParlezSounds = (() => {
  // Helper for escaping HTML
  function esc(s = '') {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // Tokenized left-to-right French word decoder
  function decodeWord(word) {
    if (!word || word.length === 0) return '';
    const mPunct = word.match(/([.,?!;:»«"]+)$/);
    const punct = mPunct ? mPunct[1] : '';
    let core = mPunct ? word.slice(0, -punct.length) : word;
    if (core.length === 0) return punct;

    const lower = core.toLowerCase();

    // Check silent verb ending -ent (3rd person plural)
    let isSilentEnt = false;
    if (core.match(/(parl|mang|regard|habit|couch|douch|coiff|port|finiss|prenn|dorm|part|vont|font)ent$/i)) {
      isSilentEnt = true;
    }

    // Check silent final consonant (C-A-R-E-F-U-L rule)
    // d, p, s, t, x, z are silent unless exception
    let silentFinalIdx = -1;
    const exceptions = new Set(['sept', 'huit', 'est', 'net', 'bus', 'plus', 'ouest', 'sud', 'gaz', 'mars', 'film', 'sport', 'short']);
    if (!exceptions.has(lower) && !isSilentEnt && core.length > 1) {
      const lastChar = lower[lower.length - 1];
      if (['d', 'p', 's', 't', 'x', 'z'].includes(lastChar)) {
        silentFinalIdx = core.length - 1;
      }
    }

    let result = '';
    let i = 0;
    while (i < core.length) {
      if (isSilentEnt && i === core.length - 3) {
        result += `<span class="silent-char" title="Silent verb ending -ent">${core.slice(i)}</span>`;
        break;
      }
      if (i === silentFinalIdx) {
        result += `<span class="silent-char" title="Silent final consonant">${core[i]}</span>`;
        break;
      }

      const sub3 = core.slice(i, i + 3).toLowerCase();
      const sub2 = core.slice(i, i + 2).toLowerCase();

      // 3-letter combos
      if (sub3 === 'eau') {
        result += `<span class="v-mark v-o" title="[o] like boat">${core.slice(i, i + 3)}</span>`;
        i += 3;
        continue;
      }
      if (sub3 === 'ain' || sub3 === 'ein') {
        const nextChar = (core[i + 3] || '').toLowerCase();
        if (!'aeiouéèêëàâîïôû'.includes(nextChar)) {
          result += `<span class="v-mark v-in" title="Nasal [ɛ̃]">${core.slice(i, i + 3)}</span>`;
          i += 3;
          continue;
        }
      }

      // 2-letter combos
      if (sub2 === 'ou') {
        result += `<span class="v-mark v-ou" title="[u] like food">${core.slice(i, i + 2)}</span>`;
        i += 2;
        continue;
      }
      if (sub2 === 'oi') {
        result += `<span class="v-mark v-oi" title="[wa] like wash">${core.slice(i, i + 2)}</span>`;
        i += 2;
        continue;
      }
      if (sub2 === 'ui') {
        result += `<span class="v-mark v-ui" title="[ɥi] like wee">${core.slice(i, i + 2)}</span>`;
        i += 2;
        continue;
      }
      if (sub2 === 'au') {
        result += `<span class="v-mark v-o" title="[o] like boat">${core.slice(i, i + 2)}</span>`;
        i += 2;
        continue;
      }
      if (sub2 === 'eu' || sub2 === 'œu') {
        result += `<span class="v-mark v-eu" title="[ø] like hurt">${core.slice(i, i + 2)}</span>`;
        i += 2;
        continue;
      }
      if (sub2 === 'ai' || sub2 === 'ei') {
        result += `<span class="v-mark v-ai" title="[ɛ] like bed">${core.slice(i, i + 2)}</span>`;
        i += 2;
        continue;
      }
      if (sub2 === 'on' || sub2 === 'om') {
        const nextChar = (core[i + 2] || '').toLowerCase();
        if (!'aeiouéèêëàâîïôûmn'.includes(nextChar) || i + 2 === core.length) {
          result += `<span class="v-mark v-on" title="Nasal [ɔ̃]">${core.slice(i, i + 2)}</span>`;
          i += 2;
          continue;
        }
      }
      if (sub2 === 'an' || sub2 === 'en' || sub2 === 'am' || sub2 === 'em') {
        const nextChar = (core[i + 2] || '').toLowerCase();
        if (!'aeiouéèêëàâîïôûmn'.includes(nextChar) || i + 2 === core.length) {
          result += `<span class="v-mark v-an" title="Nasal [ɑ̃]">${core.slice(i, i + 2)}</span>`;
          i += 2;
          continue;
        }
      }
      if (sub2 === 'in' || sub2 === 'im') {
        const nextChar = (core[i + 2] || '').toLowerCase();
        if (!'aeiouéèêëàâîïôûmn'.includes(nextChar) || i + 2 === core.length) {
          result += `<span class="v-mark v-in" title="Nasal [ɛ̃]">${core.slice(i, i + 2)}</span>`;
          i += 2;
          continue;
        }
      }

      // Single French 'u' whistle sound [y]
      if (core[i].toLowerCase() === 'u') {
        result += `<span class="v-mark v-u" title="French [y] whistle lips!">${core[i]}</span>`;
        i++;
        continue;
      }

      result += core[i];
      i++;
    }

    return result + punct;
  }

  // Full sentence annotator with liaison badges
  function annotateFrench(text) {
    if (!text) return '';
    const words = text.split(/\s+/);
    const annotated = [];

    for (let i = 0; i < words.length; i++) {
      const cur = words[i];
      const next = words[i + 1] || '';
      const cleanCur = cur.toLowerCase().replace(/[^a-zàâéèêëîïôùûç]/g, '');
      const nextFirst = next.toLowerCase().charAt(0);
      const nextIsVowel = 'aeiouhàâéèêëîïôùû'.includes(nextFirst);

      annotated.push(decodeWord(cur));

      // Liaison detection between words
      if (nextIsVowel && i < words.length - 1) {
        if (['les', 'des', 'mes', 'tes', 'ses', 'nos', 'vos', 'leurs', 'deux', 'trois', 'dix', 'aux', 'ils', 'elles', 'nous', 'vous'].includes(cleanCur)) {
          annotated.push('<span class="liaison-badge" title="Liaison with [z]">‿[z]</span>');
        } else if (['un', 'mon', 'ton', 'son', 'en', 'on'].includes(cleanCur)) {
          annotated.push('<span class="liaison-badge" title="Liaison with [n]">‿[n]</span>');
        } else if (['c’est', 'est', 'sont', 'font', 'vont', 'comment', 'tout', 'petit', 'grand', 'quand'].includes(cleanCur)) {
          annotated.push('<span class="liaison-badge" title="Liaison with [t]">‿[t]</span>');
        }
      }
    }

    return annotated.join(' ');
  }

  // 26 Curated Ear Trainer discrimination rounds
  const earTrainingRounds = [
    {
      id: 'e1',
      category: 'Word Connection (Liaison)',
      promptText: 'Ils ont un chat.',
      spokenAudio: 'Ils ont un chat.',
      question: 'Which sentence did you hear?',
      options: ['Ils ont un chat.', 'Ils sont un chat.'],
      correctIndex: 0,
      ruleSummary: 'Ils‿ont links with a [z] sound (They have). “Ils sont” starts with an [s] sound (They are).',
      mouthTip: 'Hear the buzzing [z] between “Ils” and “ont”? That confirms avoir (to have)!'
    },
    {
      id: 'e2',
      category: 'Word Connection (Liaison)',
      promptText: 'Ils sont contents.',
      spokenAudio: 'Ils sont contents.',
      question: 'Which sentence did you hear?',
      options: ['Ils ont contents.', 'Ils sont contents.'],
      correctIndex: 1,
      ruleSummary: '“Ils sont” starts with a crisp [s] sound from être (to be). No [z] liaison exists here.',
      mouthTip: 'Crisp hiss [s] = “Ils sont” (They are). Buzzing [z] = “Ils ont” (They have).'
    },
    {
      id: 'e3',
      category: 'Vowel Contrast (u vs ou)',
      promptText: 'Tu as faim ?',
      spokenAudio: 'Tu as faim ?',
      question: 'Which word did you hear at the start?',
      options: ['Tu (you)', 'Tout (all/everything)'],
      correctIndex: 0,
      ruleSummary: '“Tu” uses the pure French [y] sound (whistle lips). “Tout” uses [u] like English “food”.',
      mouthTip: 'Say “ee” with your tongue forward, then round your lips tightly as if whistling: [y]!'
    },
    {
      id: 'e4',
      category: 'Vowel Contrast (u vs ou)',
      promptText: 'Je prends ma douche.',
      spokenAudio: 'Je prends ma douche.',
      question: 'Which vowel sound is in “douche”?',
      options: ['ou [u] (like food / soup)', 'u [y] (whistle lips)'],
      correctIndex: 0,
      ruleSummary: '“ou” in French is always the deep [u] sound, exactly like soup or boot.',
      mouthTip: 'Mouth opens slightly deeper, tongue moves back: [u] as in douche, vous, jour.'
    },
    {
      id: 'e5',
      category: 'Vowel Contrast (oi vs ui)',
      promptText: 'Il fait très froid.',
      spokenAudio: 'Il fait très froid.',
      question: 'Which sound combination is in “froid”?',
      options: ['oi [wa] (like wash)', 'ui [ɥi] (like wee)'],
      correctIndex: 0,
      ruleSummary: '“oi” in French is pronounced [wa] (froid, soir, moi, toi, trois).',
      mouthTip: 'Start with lips rounded and quickly open to “ah”: [wa]!'
    },
    {
      id: 'e6',
      category: 'Vowel Contrast (oi vs ui)',
      promptText: 'Il est huit heures.',
      spokenAudio: 'Il est huit heures.',
      question: 'Which sound combination is in “huit”?',
      options: ['ui [ɥi] (fast tight glide)', 'oi [wa] (open wash sound)'],
      correctIndex: 0,
      ruleSummary: '“ui” produces the tight French glide [ɥi] (huit, nuit, pluie, cuisine).',
      mouthTip: 'Whistle lips [y] immediately gliding into smiling “ee” [i]: [ɥi]!'
    },
    {
      id: 'e7',
      category: 'Nasal Contrast (on vs an)',
      promptText: 'C’est un bonbon.',
      spokenAudio: 'C’est un bonbon.',
      question: 'Which nasal vowel do you hear in “bonbon”?',
      options: ['on [ɔ̃] (deep rounded nasal)', 'an/en [ɑ̃] (open jaw nasal)'],
      correctIndex: 0,
      ruleSummary: '“on / om” is the roundest nasal vowel in French. Lips are rounded like an O.',
      mouthTip: 'Round your lips into an O-shape and let the sound vibrate in your nose!'
    },
    {
      id: 'e8',
      category: 'Nasal Contrast (an vs on)',
      promptText: 'Il y a du vent.',
      spokenAudio: 'Il y a du vent.',
      question: 'Which nasal sound is at the end of “vent”?',
      options: ['an / en [ɑ̃] (drop your lower jaw)', 'on [ɔ̃] (pursed rounded lips)'],
      correctIndex: 0,
      ruleSummary: '“en / an” uses the open [ɑ̃] nasal. Your jaw drops lower and mouth is open.',
      mouthTip: 'Drop your lower jaw wide, keep tongue flat, and let air pass through mouth and nose.'
    },
    {
      id: 'e9',
      category: 'Nasal Contrast (in vs an)',
      promptText: 'Le matin, je me lève.',
      spokenAudio: 'Le matin, je me lève.',
      question: 'Which nasal sound is at the end of “matin”?',
      options: ['in [ɛ̃] (wide smiling nasal)', 'an [ɑ̃] (open throat nasal)'],
      correctIndex: 0,
      ruleSummary: '“in / ain / ein” produces the bright smiling nasal [ɛ̃] (matin, pain, train, plein).',
      mouthTip: 'Make a wide smile with your lips and push the sound through your nose: [ɛ̃]!'
    },
    {
      id: 'e10',
      category: 'Silent Verb Ending (-ent)',
      promptText: 'Ils parlent français.',
      spokenAudio: 'Ils parlent français.',
      question: 'How is “parlent” pronounced?',
      options: ['[parl] (-ent is completely silent)', '[par-lahn] (pronouncing the ent)'],
      correctIndex: 0,
      ruleSummary: 'In 3rd person plural verbs (ils/elles), the ending “-ent” is 100% SILENT!',
      mouthTip: 'Never say “parl-ent” or “parl-on”! Stop your voice immediately at the “l”: [parl]!'
    },
    {
      id: 'e11',
      category: 'Word Connection (Liaison)',
      promptText: 'Nous avons deux enfants.',
      spokenAudio: 'Nous avons deux enfants.',
      question: 'How many [z] liaisons did you hear?',
      options: ['Two [z] liaisons (Nous‿avons, deux‿enfants)', 'Zero liaisons'],
      correctIndex: 0,
      ruleSummary: 'Both “Nous avons” (Nous‿avons) and “deux enfants” (deux‿enfants) trigger mandatory [z] liaisons.',
      mouthTip: 'Listen: [noo-z‿ah-vohn duh-z‿ahn-fahn]. The S and X carry over as a buzzing [z]!'
    },
    {
      id: 'e12',
      category: 'Silent End Consonants',
      promptText: 'Le café est chaud.',
      spokenAudio: 'Le café est chaud.',
      question: 'Is the final “d” in “chaud” pronounced?',
      options: ['Silent (sounds like “shoh”)', 'Pronounced (sounds like “shohd”)'],
      correctIndex: 0,
      ruleSummary: 'Final “d” is silent in masculine adjectives: chaud [ʃo], froid [fʁwa], grand [gʁɑ̃].',
      mouthTip: 'Only pronounce the “d” if it becomes feminine with an “e”: chaude [ʃod], froide [fʁwad]!'
    },
    {
      id: 'e13',
      category: 'Forbidden Liaison Trap',
      promptText: 'Un garçon et une fille.',
      spokenAudio: 'Un garçon et une fille.',
      question: 'Can you make a liaison after the word “et” (and)?',
      options: ['Forbidden: Never link after “et”!', 'Mandatory: Link with a [t]'],
      correctIndex: 0,
      ruleSummary: 'Liaison after the conjunction “et” is strictly forbidden in French! Always pause: [ay ... ewn].',
      mouthTip: 'Never say “é-t-une”! Make a clean pause after “et”.'
    },
    {
      id: 'e14',
      category: 'Vowel Trigraph (eau / au)',
      promptText: 'Il fait très beau.',
      spokenAudio: 'Il fait très beau.',
      question: 'What does “eau” sound like in “beau”?',
      options: ['Pure closed [o] (like boat or go)', 'Open [u] (like boot)'],
      correctIndex: 0,
      ruleSummary: '“eau” and “au” are always pronounced like a clear round [o] (beau, château, auto).',
      mouthTip: 'Round your lips into a firm circle: [o]!'
    },
    {
      id: 'e15',
      category: 'CAREFUL Rule Exception',
      promptText: 'Je viens avec mon ami.',
      spokenAudio: 'Je viens avec mon ami.',
      question: 'Is the final “c” in “avec” pronounced?',
      options: ['Yes [k] (C is in the CAREFUL rule)', 'No (silent final consonant)'],
      correctIndex: 0,
      ruleSummary: 'C-A-R-E-F-U-L rule: Final C, R, F, L are usually PRONOUNCED (avec, sac, hier, chef, neuf, hôtel).',
      mouthTip: 'Remember the English word CAREFUL: C-R-F-L at the end of words are kept alive!'
    },
    {
      id: 'e16',
      category: 'Word Connection (Liaison)',
      promptText: 'C’est un grand ami.',
      spokenAudio: 'C’est un grand ami.',
      question: 'How does “grand ami” connect?',
      options: ['With a [t] sound: [grahn-t‿a-mee]', 'With a [d] sound: [grahn-d‿a-mee]'],
      correctIndex: 0,
      ruleSummary: 'When a silent final “d” links in liaison, it shifts to a crisp [t] sound!',
      mouthTip: '“Quand il” → [kahn-t‿eel]. “Grand ami” → [grahn-t‿a-mee]!'
    }
  ];

  // 4 Masterclass Soundboard & Rule categories
  const pronunciationRules = [
    {
      id: 'vowels',
      title: 'The 5 Essential Vowel Digraphs',
      badge: 'Vowels',
      summary: 'Never read letter-by-letter. French groups vowels into new single sounds.',
      items: [
        {
          symbol: 'ou',
          sound: '[u]',
          englishCue: 'like "food" / "soup"',
          examples: ['la douche', 'vous', 'le jour', 'tout'],
          trap: 'Contrast with French "u"!'
        },
        {
          symbol: 'u',
          sound: '[y]',
          englishCue: 'whistle lips (say "ee", round lips)',
          examples: ['tu', 'une jupe', 'la musique', 'salut'],
          trap: 'Do not pull tongue back into "oo"!'
        },
        {
          symbol: 'oi',
          sound: '[wa]',
          englishCue: 'like "wash" / "water"',
          examples: ['moi', 'le soir', 'froid', 'trois'],
          trap: 'Never read "oy" or "o-ee"!'
        },
        {
          symbol: 'ui',
          sound: '[ɥi]',
          englishCue: 'like "wee" with tight lips',
          examples: ['huit', 'la nuit', 'la pluie', 'suis'],
          trap: 'Tight glide, not "oo-ee"!'
        },
        {
          symbol: 'eau / au',
          sound: '[o]',
          englishCue: 'like "boat" / "go"',
          examples: ['l’eau', 'beau', 'chaud', 'le gâteau'],
          trap: '3 letters become 1 clean sound!'
        },
        {
          symbol: 'eu / œu',
          sound: '[ø / œ]',
          englishCue: 'like "hurt" / "sir"',
          examples: ['deux', 'bleu', 'l’heure', 'la sœur'],
          trap: 'Relax jaw slightly and round lips.'
        }
      ]
    },
    {
      id: 'nasals',
      title: 'The 3 French Nasal Vowels',
      badge: 'Nasals',
      summary: 'Vowels followed by n or m with no vowel after become nasalized through your nose.',
      items: [
        {
          symbol: 'on / om',
          sound: '[ɔ̃]',
          englishCue: 'deep round lips',
          examples: ['un bonbon', 'le pantalon', 'le nom', 'la maison'],
          trap: 'Do not pronounce the "n"! Stop air in nose.'
        },
        {
          symbol: 'an / en / am / em',
          sound: '[ɑ̃]',
          englishCue: 'open mouth, drop lower jaw',
          examples: ['dans', 'manger', 'le vent', 'le temps'],
          trap: 'Keep mouth much more open than "on".'
        },
        {
          symbol: 'in / ain / ein / im',
          sound: '[ɛ̃]',
          englishCue: 'wide smiling lips',
          examples: ['le matin', 'le pain', 'le train', 'plein'],
          trap: 'Smile wide with mouth slightly open.'
        }
      ]
    },
    {
      id: 'silent',
      title: 'Silent End Letters & Verb -ent',
      badge: 'Silent Letters',
      summary: 'French loves silence at the end of words. Know what drops and what stays.',
      items: [
        {
          symbol: 'd, p, s, t, x, z',
          sound: 'Silent',
          englishCue: 'Drop the final letter completely',
          examples: ['froid [fʁwa]', 'trop [tʁo]', 'vous [vu]', 'le lit [li]', 'deux [dø]'],
          trap: 'Only pronounce if feminine -e is added!'
        },
        {
          symbol: 'Verb ending -ent',
          sound: 'Silent',
          englishCue: 'In ils/elles plurals, -ent is 100% silent',
          examples: ['ils parlent [parl]', 'ils mangent [mɑ̃ʒ]', 'elles habitent [abit]'],
          trap: 'Never say "parl-on" or "parl-ent"!'
        },
        {
          symbol: 'C - A - R - E - F - U - L',
          sound: 'Pronounced',
          englishCue: 'Final C, R, F, L are usually spoken',
          examples: ['avec [avɛk]', 'le sac [sak]', 'l’hiver [ivɛʁ]', 'neuf [nœf]', 'l’hôtel [otɛl]'],
          trap: 'Except words ending in -er infinitives (manger = [mɑ̃ʒe]).'
        }
      ]
    },
    {
      id: 'liaisons',
      title: 'Word Connections (Liaisons & Enchaînements)',
      badge: 'Liaisons',
      summary: 'When a word ending in a silent consonant meets a word starting with a vowel, link them!',
      items: [
        {
          symbol: '‿[z] Liaison',
          sound: '[z]',
          englishCue: 's / x before vowel becomes [z]',
          examples: ['ils‿ont [il.zɔ̃] (they have)', 'les‿amis [le.z‿ami]', 'deux‿heures [dø.z‿œʁ]'],
          trap: 'DANGER: “Ils ont” [il.zɔ̃] vs “Ils sont” [il.sɔ̃]!'
        },
        {
          symbol: '‿[n] Liaison',
          sound: '[n]',
          englishCue: 'un / mon / ton / son / en / on carry [n]',
          examples: ['un‿ami [œ̃.n‿ami]', 'en‿hiver [ɑ̃.n‿ivɛʁ]', 'on‿a [ɔ̃.n‿a]'],
          trap: 'Smooth nasal carryover.'
        },
        {
          symbol: '‿[t] Liaison',
          sound: '[t]',
          englishCue: 'd / t before vowel becomes [t]',
          examples: ['c’est‿un [sɛ.t‿œ̃]', 'grand‿arbre [gʁɑ̃.t‿aʁbʁ]', 'quand‿il [kɑ̃.t‿il]'],
          trap: 'Final “d” shifts to a crisp [t].'
        },
        {
          symbol: 'Forbidden Liaison (et)',
          sound: 'NEVER LINK',
          englishCue: 'Always pause after "et" (and)',
          examples: ['un livre et | un cahier', 'un garçon et | une fille'],
          trap: 'Never connect after "et"!'
        }
      ]
    }
  ];

  // 25 Active-Recall Read-Aloud Workout Sentences
  const readAloudCards = [
    {
      id: 'r1',
      sentence: 'Ils ont deux amis en France.',
      english: 'They have two friends in France.',
      targetKeys: ['Ils‿ont [z]', 'deux‿amis [z]', 'en‿France [ɑ̃]'],
      coaching: 'Connect “Ils‿ont” with buzzing [z] (avoir). Do NOT confuse with “ils sont”. Link “deux‿amis” with [z]. Final “s” in amis is silent.',
      focus: 'Liaison [z] + Silent consonants'
    },
    {
      id: 'r2',
      sentence: 'Ils parlent français tous les jours.',
      english: 'They speak French every day.',
      targetKeys: ['parlent (silent -ent)', 'tous (silent s)', 'les‿jours'],
      coaching: '“parlent” ends with silent “-ent”! Say [parl], never “parl-ent”. “tous” here has silent “s”. “français” ends with silent “s”.',
      focus: 'Silent verb -ent + Digraphs'
    },
    {
      id: 'r3',
      sentence: 'Je me douche et je m’habille.',
      english: 'I take a shower and get dressed.',
      targetKeys: ['douche [u]', 'et (pause!)', 'm’habille (silent h)'],
      coaching: '“douche” has “ou” [u] like soup. Pause after “et” (forbidden liaison!). “habille” has silent “h”.',
      focus: 'ou [u] vs forbidden liaison'
    },
    {
      id: 'r4',
      sentence: 'Il fait très froid aujourd’hui.',
      english: 'It is very cold today.',
      targetKeys: ['fait (silent t)', 'froid [wa] (silent d)', 'aujourd’hui [u] & [ɥi]'],
      coaching: '“froid” has “oi” [wa] and silent “d”. “aujourd’hui” combines “ou” [u] and “ui” [ɥi].',
      focus: 'oi [wa] + ui [ɥi] + Silent d/t'
    },
    {
      id: 'r5',
      sentence: 'Tu mets une jupe ou un pantalon ?',
      english: 'Are you wearing a skirt or pants?',
      targetKeys: ['Tu [y]', 'jupe [y]', 'pantalon [ɑ̃] & [ɔ̃]'],
      coaching: '“Tu” and “jupe” have pure French whistle “u” [y]. “pantalon” has two nasals: “an” [ɑ̃] then “on” [ɔ̃].',
      focus: 'u [y] whistle lips + Nasal contrast'
    },
    {
      id: 'r6',
      sentence: 'Nous avons un bonbon au chocolat.',
      english: 'We have a chocolate candy.',
      targetKeys: ['Nous‿avons [z]', 'bonbon [ɔ̃]', 'chocolat (silent t)'],
      coaching: 'Liaison “Nous‿avons” with [z]. “bonbon” has double nasal [ɔ̃]. Final “t” in chocolat is silent.',
      focus: 'Liaison [z] + Nasal on + Silent t'
    },
    {
      id: 'r7',
      sentence: 'Il est huit heures et demie.',
      english: 'It is half past eight.',
      targetKeys: ['est‿huit [t]', 'huit‿heures [t]', 'et (pause!)'],
      coaching: '“huit” has tight glide [ɥi]. Connect “huit‿heures” with [t]. Do not link after “et”!',
      focus: 'ui [ɥi] glide + Liaison [t]'
    },
    {
      id: 'r8',
      sentence: 'Elles mangent du pain le matin.',
      english: 'They eat bread in the morning.',
      targetKeys: ['mangent (silent -ent)', 'pain [ɛ̃]', 'matin [ɛ̃]'],
      coaching: '“mangent” has silent “-ent”. “pain” and “matin” share the bright smiling nasal [ɛ̃].',
      focus: 'Silent verb -ent + Nasal in/ain [ɛ̃]'
    },
    {
      id: 'r9',
      sentence: 'C’est un grand hôtel.',
      english: 'It is a large hotel.',
      targetKeys: ['C’est‿un [t]', 'grand‿hôtel [t]', 'hôtel (silent h, CAREFUL l)'],
      coaching: 'Silent “d” in “grand” turns into a crisp [t] liaison: [gʁɑ̃.t‿otɛl]. Final “l” in hôtel is spoken!',
      focus: 'd → [t] liaison + CAREFUL rule'
    },
    {
      id: 'r10',
      sentence: 'Je vais me coucher vers minuit.',
      english: 'I am going to go to bed around midnight.',
      targetKeys: ['vais (silent s)', 'coucher [e]', 'minuit [ɥi] (silent t)'],
      coaching: 'In verbs ending in “-er” (coucher), the ending is [e]. “minuit” has [ɥi] and silent “t”.',
      focus: '-er [e] ending + ui [ɥi]'
    },
    {
      id: 'r11',
      sentence: 'Un beau chapeau noir et chaud.',
      english: 'A nice black and warm hat.',
      targetKeys: ['beau [o]', 'chapeau [o]', 'noir [wa]', 'chaud (silent d)'],
      coaching: 'Both “beau” and “chapeau” end with clean round [o]. “noir” has [wa]. “chaud” has silent “d”.',
      focus: 'eau [o] + oi [wa] + Silent d'
    },
    {
      id: 'r12',
      sentence: 'Ils sont ici avec leurs enfants.',
      english: 'They are here with their children.',
      targetKeys: ['Ils sont (clean [s]!)', 'avec (pronounced c)', 'leurs‿enfants [z]'],
      coaching: '“Ils sont” starts with crisp [s] (no liaison!). “avec” has pronounced “c”. “leurs‿enfants” has [z] liaison.',
      focus: 'Ils sont [s] vs Liaison [z]'
    }
  ];

  // Component state
  let currentSubView = 'game'; // 'game' | 'rules' | 'workout'
  let gameSession = null;
  let workoutIndex = 0;
  let workoutRevealed = false;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // --- Ear Trainer Game Logic (Adaptive Mistake Memory) ---
  function roundWeakScore(round) {
    let score = Math.random() * 0.5;
    if (typeof window.activeProfile === 'function') {
      const p = window.activeProfile();
      const sh = (p && Array.isArray(p.soundsHistory)) ? p.soundsHistory : [];
      for (const h of sh) {
        if (!h) continue;
        if (h.roundId === round.id) {
          score += h.correct ? -0.6 : 4.0;
        } else if (h.category && h.category === round.category && !h.correct) {
          score += 1.2;
        }
      }
    }
    return score;
  }

  function initGameSession() {
    const ranked = [...earTrainingRounds].sort((a, b) => roundWeakScore(b) - roundWeakScore(a));
    const weakRounds = ranked.filter(r => roundWeakScore(r) >= 1.5);
    const otherRounds = ranked.filter(r => !weakRounds.includes(r));
    const selected = [...shuffle(weakRounds), ...shuffle(otherRounds)].slice(0, 10);
    gameSession = {
      rounds: selected,
      index: 0,
      score: 0,
      feedback: null,
      history: []
    };
  }

  function answerRound(choiceIdx) {
    if (!gameSession || gameSession.feedback) return;
    const round = gameSession.rounds[gameSession.index];
    const isCorrect = choiceIdx === round.correctIndex;
    if (isCorrect) gameSession.score++;
    gameSession.feedback = {
      isCorrect,
      chosen: choiceIdx
    };

    // Save attempt to profile history if activeProfile exists
    if (typeof window.activeProfile === 'function') {
      const p = window.activeProfile();
      if (p) {
        if (!p.soundsHistory) p.soundsHistory = [];
        p.soundsHistory.push({
          time: Date.now(),
          roundId: round.id,
          category: round.category,
          correct: isCorrect
        });
        if (typeof window.persist === 'function') window.persist();
      }
    }

    if (typeof window.render === 'function') window.render();
  }

  function nextRound() {
    if (!gameSession) return;
    gameSession.index++;
    gameSession.feedback = null;
    if (typeof window.render === 'function') window.render();
  }

  // --- Read-Aloud Workout Logic ---
  function rateWorkout(rating) {
    // rating: 'again' | 'hard' | 'good' | 'easy'
    const item = readAloudCards[workoutIndex];
    if (typeof window.activeProfile === 'function') {
      const p = window.activeProfile();
      if (p) {
        if (!p.workoutHistory) p.workoutHistory = [];
        p.workoutHistory.push({
          time: Date.now(),
          cardId: item.id,
          sentence: item.sentence,
          rating
        });
        if (typeof window.persist === 'function') window.persist();
      }
    }
    workoutIndex = (workoutIndex + 1) % readAloudCards.length;
    workoutRevealed = false;
    if (typeof window.render === 'function') window.render();
  }

  // --- Subviews Renderers ---

  // 1. Ear Trainer View
  function renderEarTrainer() {
    if (!gameSession) {
      return `
        <div class="sound-lab-card sound-intro-card">
          <div class="sound-lab-hero-icon">👂</div>
          <h2>Ear Discrimination Trainer</h2>
          <p class="header-desc" style="margin:0 auto 18px;max-width:440px">
            Train your ear to distinguish tricky vowel contrasts (<b>u vs ou</b>), word connections (<b>Ils ont vs Ils sont</b>), and silent verb endings.
          </p>
          <div class="sound-badges-row">
            <span class="sound-badge">10 rounds</span>
            <span class="sound-badge">Normal & 0.6x Slow Audio</span>
            <span class="sound-badge">Mouth & Tongue Tips</span>
          </div>
          <button class="btn btn-primary btn-lg btn-block" data-sound-action="start-game" style="margin-top:20px">
            Start Ear Workout 🎧
          </button>
        </div>
      `;
    }

    // Finished 10 rounds
    if (gameSession.index >= gameSession.rounds.length) {
      const score = gameSession.score;
      const total = gameSession.rounds.length;
      return `
        <div class="sound-lab-card sound-finish-card">
          <div class="game-trophy">${score >= 8 ? '🏆' : '⭐'}</div>
          <h2>Workout Completed!</h2>
          <div class="sound-finish-score">${score} <span>/ ${total}</span></div>
          <p class="muted" style="margin-bottom:20px">
            ${score === 10 ? 'Flawless ear! You distinguished every tricky French sound.' : score >= 7 ? 'Well done! Your ear is getting sharp with French connections.' : 'Good practice! Repeat to master vowel and liaison contrasts.'}
          </p>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary btn-lg" data-sound-action="start-game">Play Again 🎧</button>
            <button class="btn btn-secondary btn-lg" data-sound-tab="rules">Review Rules 🧩</button>
          </div>
        </div>
      `;
    }

    const round = gameSession.rounds[gameSession.index];
    const feedback = gameSession.feedback;

    return `
      <div class="sound-lab-card">
        <div class="sound-lab-header">
          <span class="mini-step">${esc(round.category)}</span>
          <span class="small muted">Round ${gameSession.index + 1} of ${gameSession.rounds.length} · ${gameSession.score} ★</span>
        </div>
        <div class="review-progress" style="margin:12px 0 20px"><div style="width:${100 * gameSession.index / gameSession.rounds.length}%"></div></div>

        <h3 class="sound-question-prompt">${esc(round.question)}</h3>

        <div class="sound-audio-controls">
          <button class="btn btn-primary btn-lg" data-sound-action="play-target" data-audio="${esc(round.spokenAudio)}">
            🔊 Listen
          </button>
          <button class="btn btn-secondary btn-lg slow-btn" data-sound-action="play-target-slow" data-audio="${esc(round.spokenAudio)}">
            🐢 Slow (0.6x)
          </button>
        </div>

        <div class="sound-options-grid">
          ${round.options.map((opt, idx) => {
            let cl = 'sound-option-btn';
            if (feedback) {
              if (idx === round.correctIndex) cl += ' is-correct';
              else if (idx === feedback.chosen) cl += ' is-wrong';
            }
            return `
              <button class="${cl}" data-sound-action="choose-option" data-index="${idx}" ${feedback ? 'disabled' : ''}>
                <span class="opt-label">${idx === 0 ? 'A' : 'B'}</span>
                <span class="opt-text">${esc(opt)}</span>
              </button>
            `;
          }).join('')}
        </div>

        ${feedback ? `
          <div class="sound-feedback-box ${feedback.isCorrect ? 'correct' : 'incorrect'}">
            <div class="sound-feedback-title">
              ${feedback.isCorrect ? '✅ Perfect!' : '💡 Listen carefully:'}
            </div>
            <p class="sound-feedback-rule">${esc(round.ruleSummary)}</p>
            <div class="sound-mouth-tip">
              <b>👄 Mouth Tip:</b> ${esc(round.mouthTip)}
            </div>
            <div style="margin-top:14px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <button class="btn btn-secondary btn-sm" data-sound-action="play-target-slow" data-audio="${esc(round.spokenAudio)}">
                🐢 Replay Slow
              </button>
              <button class="btn btn-primary btn-sm" data-sound-action="next-round" style="margin-left:auto">
                Next Round →
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // 2. Soundboard & Rules View
  function renderRules() {
    return `
      <div class="sound-rules-container">
        <div class="sound-legend-bar">
          <span class="eyebrow">Interactive Decoder Color Key:</span>
          <div class="legend-tags">
            <span class="v-mark v-ou">ou [u]</span>
            <span class="v-mark v-u">u [y]</span>
            <span class="v-mark v-oi">oi [wa]</span>
            <span class="v-mark v-ui">ui [ɥi]</span>
            <span class="v-mark v-o">eau/au [o]</span>
            <span class="v-mark v-on">on [ɔ̃]</span>
            <span class="v-mark v-an">an/en [ɑ̃]</span>
            <span class="v-mark v-in">in/ain [ɛ̃]</span>
            <span class="silent-char" style="opacity:0.8">silent letters</span>
            <span class="liaison-badge">‿[z] liaison</span>
          </div>
        </div>

        ${pronunciationRules.map(cat => `
          <div class="sound-rule-card">
            <div class="sound-rule-head">
              <span class="sound-badge">${esc(cat.badge)}</span>
              <h3>${esc(cat.title)}</h3>
            </div>
            <p class="sound-rule-summary">${esc(cat.summary)}</p>

            <div class="sound-rule-items">
              ${cat.items.map(it => `
                <div class="sound-item-row">
                  <div class="sound-item-symbol">
                    <span class="sym-box">${esc(it.symbol)}</span>
                    <span class="ipa-box">${esc(it.sound)}</span>
                  </div>
                  <div class="sound-item-body">
                    <div class="sound-item-cue">${esc(it.englishCue)}</div>
                    <div class="sound-examples-chips">
                      ${it.examples.map(ex => `
                        <button class="sound-chip-btn" data-sound-action="play-word" data-audio="${esc(ex.replace(/\[.*?\]/g, '').trim())}">
                          🔊 ${annotateFrench(ex)}
                        </button>
                      `).join('')}
                    </div>
                    ${it.trap ? `<div class="sound-trap-note">⚠️ ${esc(it.trap)}</div>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 3. Read-Aloud Workout View
  function renderWorkout() {
    const card = readAloudCards[workoutIndex];
    const total = readAloudCards.length;

    return `
      <div class="sound-lab-card workout-card">
        <div class="sound-lab-header">
          <span class="mini-step">ACTIVE RECALL SPEAKING</span>
          <span class="small muted">Sentence ${workoutIndex + 1} of ${total}</span>
        </div>
        <div class="review-progress" style="margin:12px 0 20px"><div style="width:${100 * workoutIndex / total}%"></div></div>

        <div class="workout-prompt-box">
          <span class="workout-instruction">Read aloud out loud before revealing:</span>
          <div class="workout-target-sentence" lang="fr">
            ${workoutRevealed ? annotateFrench(card.sentence) : esc(card.sentence)}
          </div>
          <div class="workout-meaning">${esc(card.english)}</div>
        </div>

        ${!workoutRevealed ? `
          <div style="margin-top:24px">
            <button class="btn btn-primary btn-lg btn-block" data-sound-action="reveal-workout">
              Reveal Pronunciation Breakdown 🔍
            </button>
          </div>
        ` : `
          <div class="workout-breakdown-box">
            <div class="workout-audio-row">
              <button class="btn btn-secondary btn-sm" data-sound-action="play-target" data-audio="${esc(card.sentence)}">
                🔊 Normal Audio
              </button>
              <button class="btn btn-secondary btn-sm slow-btn" data-sound-action="play-target-slow" data-audio="${esc(card.sentence)}">
                🐢 Slow Audio (0.6x)
              </button>
            </div>

            <div class="workout-coaching-box">
              <div class="coaching-title">🎯 Pronunciation Focus: ${esc(card.focus)}</div>
              <p class="coaching-text">${esc(card.coaching)}</p>
            </div>

            <div class="workout-keys-row">
              ${card.targetKeys.map(k => `<span class="workout-key-tag">⚡ ${esc(k)}</span>`).join('')}
            </div>

            <div class="workout-rating-bar">
              <span class="small muted" style="display:block;margin-bottom:8px">How well did you pronounce it?</span>
              <div class="rating-row">
                <button class="btn btn-white" data-sound-action="rate-workout" data-rate="again">Again <span>Repeat</span></button>
                <button class="btn btn-white" data-sound-action="rate-workout" data-rate="hard">Hard <span>Tricky</span></button>
                <button class="btn btn-primary" data-sound-action="rate-workout" data-rate="good">Good <span>Smooth</span></button>
                <button class="btn btn-white" data-sound-action="rate-workout" data-rate="easy">Easy <span>Mastered</span></button>
              </div>
            </div>
          </div>
        `}
      </div>
    `;
  }

  // Main Page Renderer
  function page() {
    return `
      <div class="sounds-lab-page">
        <div class="eyebrow">FRENCH SOUNDS & PRONUNCIATION LAB</div>
        <h1>Speak clearly. Decode effortlessly.</h1>
        <p class="header-desc">
          Master tricky vowel combinations, liaisons, silent consonants, and reading aloud with ear discrimination games and syllable breakdowns.
        </p>

        <div class="tabline" style="margin:20px 0 24px;flex-wrap:wrap;gap:8px">
          <button class="chip ${currentSubView === 'game' ? 'active' : ''}" data-sound-tab="game">
            🎮 Ear Trainer Game
          </button>
          <button class="chip ${currentSubView === 'rules' ? 'active' : ''}" data-sound-tab="rules">
            🧩 Rules & Soundboard
          </button>
          <button class="chip ${currentSubView === 'workout' ? 'active' : ''}" data-sound-tab="workout">
            🗣️ Read-Aloud Workout
          </button>
        </div>

        ${currentSubView === 'game' ? renderEarTrainer() : (currentSubView === 'rules' ? renderRules() : renderWorkout())}
      </div>
    `;
  }

  // Delegated Click Handlers
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-sound-tab], [data-sound-action]');
    if (!el) return;

    if (el.dataset.soundTab) {
      currentSubView = el.dataset.soundTab;
      if (typeof window.render === 'function') window.render();
      return;
    }

    const action = el.dataset.soundAction;
    if (action === 'start-game') {
      initGameSession();
      if (typeof window.render === 'function') window.render();
      return;
    }
    if (action === 'choose-option') {
      answerRound(Number(el.dataset.index));
      return;
    }
    if (action === 'next-round') {
      nextRound();
      return;
    }
    if (action === 'play-target') {
      const text = el.dataset.audio;
      if (text && typeof window.say === 'function') window.say(text, 0.83);
      return;
    }
    if (action === 'play-target-slow') {
      const text = el.dataset.audio;
      if (text && typeof window.say === 'function') window.say(text, 0.60);
      return;
    }
    if (action === 'play-word') {
      const text = el.dataset.audio;
      if (text && typeof window.say === 'function') window.say(text, 0.83);
      return;
    }
    if (action === 'reveal-workout') {
      workoutRevealed = true;
      if (typeof window.render === 'function') window.render();
      return;
    }
    if (action === 'rate-workout') {
      rateWorkout(el.dataset.rate || 'good');
      return;
    }
  });

  return {
    page,
    decodeWord,
    annotateFrench,
    earTrainingRounds,
    pronunciationRules,
    readAloudCards
  };
})();
