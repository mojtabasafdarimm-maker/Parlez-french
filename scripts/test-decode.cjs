function decodeWord(word) {
  if (!word || word.length === 0) return '';

  // Extract trailing punctuation
  const mPunct = word.match(/([.,?!;:]+)$/);
  const punct = mPunct ? mPunct[1] : '';
  let core = mPunct ? word.slice(0, -punct.length) : word;

  if (core.length === 0) return punct;

  // Check silent verb ending -ent
  let isSilentEnt = false;
  if (core.match(/(parl|mang|regard|habit|couch|douch|coiff|port|finiss|prenn|dorm|part)ent$/i)) {
    isSilentEnt = true;
  }

  // Check silent final consonant
  // Usually d, p, s, t, x, z are silent at the end, unless it's a known exception like sept, huit, est, net, etc.
  let silentFinalIdx = -1;
  const lower = core.toLowerCase();
  const exceptions = new Set(['sept', 'huit', 'est', 'net', 'bus', 'plus', 'ouest', 'sud', 'gaz', 'mars']);
  if (!exceptions.has(lower) && !isSilentEnt && core.length > 1) {
    const lastChar = lower[lower.length - 1];
    if (['d', 'p', 's', 't', 'x', 'z'].includes(lastChar)) {
      // CAREFUL rule: C, R, F, L are pronounced, others silent
      silentFinalIdx = core.length - 1;
    }
  }

  // Scan characters from left to right
  let result = '';
  let i = 0;
  while (i < core.length) {
    if (isSilentEnt && i === core.length - 3) {
      result += `<span class="silent-char" title="Silent verb ending -ent">${core.slice(i)}</span>`;
      break;
    }
    if (i === silentFinalIdx) {
      result += `<span class="silent-char" title="Silent end consonant">${core[i]}</span>`;
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

    // Single 'u' (French whistle sound [y])
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

    if (nextIsVowel && i < words.length - 1) {
      if (['les', 'des', 'mes', 'tes', 'ses', 'nos', 'vos', 'leurs', 'deux', 'trois', 'dix', 'aux', 'ils', 'elles', 'nous', 'vous'].includes(cleanCur)) {
        annotated.push('<span class="liaison-badge">‿[z]</span>');
      } else if (['un', 'mon', 'ton', 'son', 'en', 'on'].includes(cleanCur)) {
        annotated.push('<span class="liaison-badge">‿[n]</span>');
      } else if (['c’est', 'est', 'sont', 'font', 'vont', 'comment', 'tout', 'petit', 'grand', 'quand'].includes(cleanCur)) {
        annotated.push('<span class="liaison-badge">‿[t]</span>');
      }
    }
  }

  return annotated.join(' ');
}

console.log('Sample 1:', annotateFrench('Ils parlent français en classe.'));
console.log('Sample 2:', annotateFrench('Je me douche tous les jours.'));
console.log('Sample 3:', annotateFrench('Ils ont deux amis.'));
console.log('Sample 4:', annotateFrench('Un bonnet chaud et des baskets.'));
console.log('Sample 5:', annotateFrench('Bonjour, comment allez-vous ?'));
