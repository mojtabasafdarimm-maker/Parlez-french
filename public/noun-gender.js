/* Parlez Visual Noun Gender System (♂ un/le vs ♀ une/la)
   Color-codes French noun articles (Blue/Indigo for Masculine, Coral/Rose for Feminine),
   provides active-recall gender prompts on flashcard fronts, ending-pattern memory rules,
   gender filtering, and an interactive "un/le vs une/la" Gender Reflex Trainer.
*/
'use strict';

window.ParlezGender = (() => {
  function esc(s = '') {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // Explicit card-level gender & metadata overrides for 100% accuracy across all 192 cards
  // gender: 'm' (Masculine), 'f' (Feminine), 'mf' (Both/Pair)
  const CARD_GENDER_MAP = {
    // Starter cards
    b1: { gender: 'm', article: 'un', bare: 'bonnet', tip: 'Nouns ending in -et (un bonnet, un billet, un secret) are Masculine (♂ un/le).' },
    b2: { gender: 'f', article: 'une', bare: 'écharpe', tip: 'Most clothing items ending in consonant + -e (une écharpe, une robe, une jupe, une chemise) are Feminine (♀ une/la).' },
    b3: { gender: 'f', article: 'une', bare: 'robe', tip: 'Ending in -be / -pe: une robe, une jupe are Feminine (♀ une/la).' },
    b4: { gender: 'f', isPlural: true, article: 'des', singular: 'une basket', bare: 'baskets', tip: 'Plural feminine: des baskets comes from une basket (♀ feminine: des baskets blanches).' },
    b5: { gender: 'f', article: 'une', bare: 'chemise', tip: 'Nouns ending in -ise (une chemise, une valise, une église) are Feminine (♀ une/la).' },
    b6: { gender: 'm', article: 'un', bare: 'pantalon', tip: 'Nouns ending in -on (un pantalon, un salon, un bonbon) are Masculine (♂ un/le), and singular in French!' },
    b7: { gender: 'f', article: 'une', bare: 'jupe', tip: 'Ending in -pe: une jupe, une écharpe, une soupe are Feminine (♀ une/la).' },
    b8: { gender: 'f', isPlural: true, article: 'des', singular: 'une chaussette', bare: 'chaussettes', tip: 'Nouns ending in -ette (une chaussette, une baguette, une fourchette) are 100% Feminine (♀ une → des).' },
    b9: { gender: 'f', isPlural: true, article: 'des', singular: 'une moufle', bare: 'moufles', tip: 'Plural feminine: une moufle → des moufles (♀ feminine), whereas un gant → des gants is masculine.' },
    a10: { gender: 'm', isExpr: true, noun: 'le petit-déjeuner', tip: 'All meals in French are Masculine: le petit-déjeuner, le déjeuner, le dîner (♂).' },
    a11: { gender: 'm', isExpr: true, noun: 'le lit', tip: 'Nouns ending in -it (un lit, un produit) are Masculine (♂ mon lit).' },
    a12: { gender: 'f', isExpr: true, noun: 'la vaisselle', tip: 'Nouns ending in -elle (la vaisselle, la poubelle, la nouvelle) are 100% Feminine (♀ la).' },
    a15: { gender: 'f', isExpr: true, noun: 'une pause café', tip: 'une pause is Feminine (♀ une), while le café is Masculine (♂ le).' },
    a16: { gender: 'm', isExpr: true, noun: 'le vélo', tip: 'faire du vélo: du = de + le, because le vélo is Masculine (♂ un/le).' },
    w5: { gender: 'm', isExpr: true, noun: 'le soleil', tip: 'du soleil = de + le soleil (♂ Masculine).' },
    w6: { gender: 'm', isExpr: true, noun: 'le vent', tip: 'du vent = de + le vent. Nouns ending in -ent are Masculine (♂ un/le).' },
    w7: { gender: 'm', isPlural: true, isExpr: true, noun: 'un nuage', tip: 'Nouns ending in -age (un nuage, un voyage, un fromage) are 99% Masculine (♂ un → des).' },

    // Curriculum A1.1 & A1.2 cards
    c1_musique: { gender: 'f', article: 'la', bare: 'musique', tip: 'Nouns ending in -ique (la musique, la boutique, la politique) are 99% Feminine (♀ une/la).' },
    c1_lecture: { gender: 'f', article: 'la', bare: 'lecture', tip: 'Nouns ending in -ure (la lecture, la nature, la voiture, la garniture) are Feminine (♀ une/la).' },
    c1_sport: { gender: 'm', article: 'le', bare: 'sport', tip: 'le sport is Masculine (♂), which is why we say faire du (de + le) sport.' },
    c1_randonnee: { gender: 'f', article: 'la', bare: 'randonnée', tip: 'Nouns ending in -ée (la randonnée, la journée, la soirée, l’idée) are Feminine (♀ une/la).' },
    c1_chien: { gender: 'm', article: 'le', bare: 'chien', tip: 'Masculine: le chien (♂) → Feminine adds double n + e: la chienne (♀).' },
    c1_chat: { gender: 'm', article: 'le', bare: 'chat', tip: 'Masculine: le chat (♂) → Feminine adds double t + e: la chatte (♀).' },
    c1_cafe: { gender: 'm', article: 'le', bare: 'café', tip: 'le café is Masculine (♂), so "some coffee" is du (de + le) café.' },
    c1_the: { gender: 'm', article: 'le', bare: 'thé', tip: 'Drinks like le thé, le café, le jus, le lait, le vin are Masculine (♂ un/le).' },
    c1_telephone: { gender: 'm', article: 'le', bare: 'numéro de téléphone', tip: 'Both le numéro and le téléphone are Masculine (♂ un/le).' },
    c1_bibliotheque: { gender: 'f', article: 'la', bare: 'bibliothèque', tip: 'Nouns ending in -èque / -ie (la bibliothèque, la mairie, la pharmacie) are Feminine (♀ une/la).' },
    c1_quartier: { gender: 'm', article: 'le', bare: 'quartier', tip: 'Nouns ending in -ier (le quartier, le cahier, l’escalier) are Masculine (♂ un/le).' },
    c1_mairie: { gender: 'f', article: 'la', bare: 'mairie', tip: 'Nouns ending in -ie (la mairie, la boulangerie, la vie) are 100% Feminine (♀ une/la).' },
    c1_traintrain: { gender: 'm', article: 'le', bare: 'train-train quotidien', tip: 'le train and le train-train are Masculine (♂).' },
    c1_parents: { gender: 'm', isPlural: true, article: 'les', singular: 'un parent', bare: 'parents', tip: 'les parents is Masculine Plural (♂ un parent → les parents).' },
    c1_pere: { gender: 'm', article: 'le', bare: 'père', tip: 'Family male members: le père, le frère, l’oncle are Masculine (♂ un/le).' },
    c1_mere: { gender: 'f', article: 'la', bare: 'mère', tip: 'Family female members: la mère, la sœur, la tante are Feminine (♀ une/la).' },
    c1_frere: { gender: 'm', article: 'le', bare: 'frère', tip: 'Masculine family noun: le frère / mon frère (♂).' },
    c1_soeur: { gender: 'f', article: 'la', bare: 'sœur', tip: 'Feminine family noun: la sœur / ma sœur (♀). Note: with possessive + vowel, amie takes mon!' },
    c1_enfants: { gender: 'm', isPlural: true, article: 'les', singular: 'un/une enfant', bare: 'enfants', tip: 'un enfant (♂) / une enfant (♀) have the exact same spelling!' },
    c1_oncle: { gender: 'm', article: 'l’', targetArticle: 'un / le', bare: 'oncle', tip: 'Watch out for l’ before a vowel! l’oncle is Masculine: un oncle (♂).' },
    c1_tante: { gender: 'f', article: 'la', bare: 'tante', tip: 'Feminine family noun: la tante / une tante (♀).' },
    c1_enseignant: { gender: 'mf', article: 'l’', bare: 'enseignant(e)', tip: 'un enseignant (♂ silent t) → une enseignante (♀ pronounced t).' },
    c1_medecin: { gender: 'm', article: 'le', bare: 'médecin', tip: 'Traditionally Masculine: un médecin / le médecin (♂).' },
    c1_avocat: { gender: 'mf', article: 'l’', bare: 'avocat(e)', tip: 'un avocat (♂ silent t) → une avocate (♀ pronounced t).' },
    c1_infirmier: { gender: 'mf', article: 'l’', bare: 'infirmier / infirmière', tip: '-ier (♂ un infirmier) becomes -ière in the Feminine (♀ une infirmière).' },
    c1_coiffeur: { gender: 'mf', article: 'le / la', bare: 'coiffeur / coiffeuse', tip: '-eur (♂ le coiffeur) becomes -euse in the Feminine (♀ la coiffeuse).' },
    c1_architecte: { gender: 'mf', article: 'l’', bare: 'architecte', tip: 'Jobs ending in -e stay identical: un architecte (♂) / une architecte (♀).' },
    c1_pilote: { gender: 'mf', article: 'le', bare: 'pilote d’avion', tip: 'Jobs ending in -e work for both: un pilote (♂) / une pilote (♀).' },

    c2_bus: { gender: 'm', article: 'le', bare: 'bus', tip: 'Most vehicles (le bus, le métro, le train, le tramway, le vélo, l’avion) are Masculine (♂)—except la voiture!' },
    c2_metro: { gender: 'm', article: 'le', bare: 'métro', tip: 'Nouns ending in -o (le métro, le vélo, le stylo, le numéro) are Masculine (♂), except la photo / la moto.' },
    c2_tramway: { gender: 'm', article: 'le', bare: 'tramway', tip: 'le tramway (or le tram) is Masculine (♂ un/le).' },
    c2_velo: { gender: 'm', article: 'le', bare: 'vélo', tip: 'le vélo is Masculine (♂ un vélo).' },
    c2_chemise: { gender: 'f', article: 'la', bare: 'chemise', tip: 'Ending in -ise: la chemise, une chemise is Feminine (♀ une/la).' },
    c2_pantalon: { gender: 'm', article: 'le', bare: 'pantalon', tip: 'Ending in -on: le pantalon / un pantalon is Masculine (♂ un/le).' },
    c2_robe: { gender: 'f', article: 'la', bare: 'robe', tip: 'la robe / une robe is Feminine (♀ une/la).' },
    c2_jupe: { gender: 'f', article: 'la', bare: 'jupe', tip: 'la jupe / une jupe is Feminine (♀ une/la).' },
    c2_pull: { gender: 'm', article: 'le', bare: 'pull', tip: 'Borrowed English clothing words (un pull, un short, un tee-shirt, un jean) are Masculine (♂ un/le)!' },
    c2_manteau: { gender: 'm', article: 'le', bare: 'manteau', tip: 'Nouns ending in -eau (le manteau, le chapeau, le gâteau, le bureau) are 99% Masculine (♂ un/le)!' },
    c2_baskets: { gender: 'f', isPlural: true, article: 'les', singular: 'une basket', bare: 'baskets', tip: 'Attention! une basket is Feminine (♀), so plural adjectives take -es (des baskets blanches).' },
    c2_echarpe_bonnet: { gender: 'mf', article: 'l’ / le', bare: 'écharpe (♀) et bonnet (♂)', tip: 'Contrast pair: une écharpe is Feminine (♀), while un bonnet is Masculine (♂)!' },
    c2_moufles: { gender: 'f', isPlural: true, article: 'les', singular: 'une moufle', bare: 'moufles', tip: 'une moufle → les moufles is Feminine (♀), whereas un gant → les gants is Masculine (♂).' },
    c2_faire_courses: { gender: 'f', isPlural: true, isExpr: true, noun: 'une course', tip: 'les courses comes from une course (♀ Feminine).' },
    c2_faire_cuisine: { gender: 'f', isExpr: true, noun: 'la cuisine', tip: 'Nouns ending in -ine (la cuisine, la piscine, la farine) are Feminine (♀ une/la).' },
    c2_passer_aspirateur: { gender: 'm', isExpr: true, article: 'l’', targetArticle: 'un / le', bare: 'aspirateur', tip: 'Watch out for l’! Objects ending in -teur (un aspirateur, un ordinateur) are Masculine (♂ un/le).' },
    c2_faire_lessive: { gender: 'f', isExpr: true, noun: 'la lessive', tip: 'Nouns ending in -ive (la lessive, une tentative) are Feminine (♀ une/la).' },
    c2_faire_vaisselle: { gender: 'f', isExpr: true, noun: 'la vaisselle', tip: 'Nouns ending in -elle (la vaisselle) are 100% Feminine (♀ une/la).' },
    c2_laitue: { gender: 'f', article: 'une', bare: 'laitue', tip: 'la laitue / une belle laitue is Feminine (♀ une/la).' },
    c2_garniture: { gender: 'f', article: 'la', bare: 'garniture', tip: 'Nouns ending in -ure (la garniture, la facture, la confiture) are Feminine (♀ une/la).' },
    c2_addition: { gender: 'f', isExpr: true, article: 'L’', targetArticle: 'une / la', bare: 'addition', tip: 'Nouns ending in -tion / -sion (une addition, la station, la réservation) are 100% Feminine (♀ une/la)!' },
    c2_immeuble: { gender: 'm', article: 'un', bare: 'immeuble', tip: 'un immeuble (apartment building) and un meuble (piece of furniture) are Masculine (♂ un/le)!' },
    c2_bruit_casque: { gender: 'm', article: 'le', bare: 'bruit / un casque', tip: 'Both le bruit (noise) and un casque (headphones) are Masculine (♂ un/le).' },
    c2_appart_louer: { gender: 'm', article: 'un', bare: 'appartement à louer (un T2)', tip: 'Nouns ending in -ment (un appartement, un logement, un bâtiment) are 100% Masculine (♂ un/le)!' },
    c2_loyer_charges: { gender: 'mf', article: 'le / les', bare: 'loyer (♂) et les charges (♀)', tip: 'le loyer (rent) is Masculine (♂), while une charge → les charges is Feminine (♀).' },
    c2_etage_ascenseur: { gender: 'm', article: 'un', bare: 'étage / un ascenseur', tip: 'Nouns ending in -age (un étage) and -eur for machines (un ascenseur) are Masculine (♂ un/le)!' },
    c2_pieces_logement: { gender: 'mf', article: 'le / la', bare: 'salon (♂), le séjour (♂), la chambre (♀)', tip: 'le salon and le séjour are Masculine (♂); la chambre and la salle à manger are Feminine (♀).' },
    c2_cuisine_sdb: { gender: 'f', article: 'une', bare: 'cuisine équipée et une salle de bains', tip: 'une cuisine, une salle de bains, une douche, and une baignoire are all Feminine (♀ une/la)!' },
    c2_entree_couloir: { gender: 'mf', article: 'une / un', bare: 'entrée (♀), un couloir (♂)', tip: 'une entrée (-ée) is Feminine (♀); un couloir (-oir) and un escalier (-ier) are Masculine (♂).' },
    c2_jardin_terrasse: { gender: 'mf', article: 'un / une', bare: 'jardin (♂), une terrasse (♀), un balcon (♂)', tip: 'un jardin (-in) and un balcon (-on) are Masculine (♂); une terrasse (-asse) is Feminine (♀).' },
    c2_vide_grenier: { gender: 'mf', article: 'un / une', bare: 'vide-grenier (♂) / une brocante (♀)', tip: 'un vide-grenier and un marché aux puces are Masculine (♂); une brocante and une braderie are Feminine (♀).' },
    c2_chiner_friperie: { gender: 'f', isExpr: true, article: 'une', bare: 'friperie', tip: 'Shops ending in -ie (une friperie, la boulangerie) are 100% Feminine (♀ une/la).' },
    c2_lit_armoire: { gender: 'mf', article: 'un / une', bare: 'lit (♂), une armoire (♀), un placard (♂)', tip: 'un lit and un placard are Masculine (♂); une armoire is Feminine (♀ une armoire).' },
    c2_bureau_fauteuil: { gender: 'mf', article: 'un / une', bare: 'bureau (♂), un fauteuil (♂), une chaise (♀)', tip: 'un bureau (-eau) and un fauteuil (-euil) are Masculine (♂); une chaise is Feminine (♀).' },
    c2_canape_table_tapis: { gender: 'mf', article: 'un / une', bare: 'canapé (♂), une table basse (♀), un tapis (♂)', tip: 'un canapé and un tapis are Masculine (♂); une table basse is Feminine (♀).' },
    c2_oreiller_couverture: { gender: 'mf', article: 'un / une', bare: 'oreiller (♂), un coussin (♂), une couverture (♀)', tip: 'un oreiller (-er) and un coussin (-in) are Masculine (♂); une couverture (-ure) is Feminine (♀).' },
    c2_murs_rideaux: { gender: 'm', isPlural: true, article: 'les', singular: 'un mur / un rideau', bare: 'murs, les rideaux et un miroir', tip: 'un mur, un rideau (-eau), and un miroir (-oir) are all Masculine (♂ un/le)!' },
    c2_electromenager: { gender: 'mf', article: 'un / une', bare: 'frigo (♂), un lave-linge (♂), une cuisinière (♀)', tip: 'un frigo, un lave-linge, un four à micro-ondes are Masculine (♂); une cuisinière (-ière) is Feminine (♀).' }
  };

  // Fallback detector for user-created custom cards
  function detectCustomCardGender(card) {
    if (!card || !card.frenchAnswer) return null;
    const ans = card.frenchAnswer.trim();
    const note = (card.grammarNote || '').toLowerCase();

    if (/^(un|le)\s+/i.test(ans) || note.includes('masculine') || note.includes('nom masculin')) {
      return {
        gender: 'm',
        article: ans.split(/\s+/)[0],
        bare: ans.replace(/^(un|le)\s+/i, ''),
        tip: 'Masculine noun (♂): uses un / le.'
      };
    }
    if (/^(une|la)\s+/i.test(ans) || note.includes('feminine') || note.includes('nom féminin')) {
      return {
        gender: 'f',
        article: ans.split(/\s+/)[0],
        bare: ans.replace(/^(une|la)\s+/i, ''),
        tip: 'Feminine noun (♀): uses une / la.'
      };
    }
    return null;
  }

  function getCardGender(card) {
    if (!card) return null;
    const info = CARD_GENDER_MAP[card.id] || detectCustomCardGender(card);
    if (!info) return null;

    let pillLabel = '';
    let shortPill = '';
    let pillClass = '';
    let cardClass = '';

    if (info.gender === 'm') {
      pillClass = 'gender-pill-m';
      cardClass = 'gender-card-m';
      if (info.isPlural) {
        pillLabel = '♂ Pluriel · un → des/les';
        shortPill = '♂ des / les (masc.)';
      } else {
        pillLabel = '♂ Masculin · un / le';
        shortPill = '♂ un / le';
      }
    } else if (info.gender === 'f') {
      pillClass = 'gender-pill-f';
      cardClass = 'gender-card-f';
      if (info.isPlural) {
        pillLabel = '♀ Pluriel fém. · une → des/les';
        shortPill = '♀ des / les (fém.)';
      } else {
        pillLabel = '♀ Féminin · une / la';
        shortPill = '♀ une / la';
      }
    } else if (info.gender === 'mf') {
      pillClass = 'gender-pill-mf';
      cardClass = 'gender-card-mf';
      pillLabel = '♂/♀ Masc. & Fém.';
      shortPill = '♂/♀ un · une';
    }

    return {
      ...info,
      pillLabel,
      shortPill,
      pillClass,
      cardClass
    };
  }

  // Color-codes articles inside the main French answer
  function formatAnswerHTML(card) {
    if (!card || !card.frenchAnswer) return '';
    const raw = card.frenchAnswer;
    const info = getCardGender(card);

    // Special pair card: "l’écharpe et le bonnet"
    if (card.id === 'c2_echarpe_bonnet') {
      return `<span class="gender-art gender-art-f" title="Feminine: une écharpe">l’</span>écharpe et <span class="gender-art gender-art-m" title="Masculine: un bonnet">le</span> bonnet`;
    }
    if (card.id === 'c1_coiffeur') {
      return `<span class="gender-art gender-art-m">le</span> coiffeur / <span class="gender-art gender-art-f">la</span> coiffeuse`;
    }
    if (card.id === 'c1_infirmier') {
      return `<span class="gender-art gender-art-m">l’</span>infirmier / <span class="gender-art gender-art-f">l’</span>infirmière`;
    }

    if (info) {
      const artClass = info.gender === 'm' ? 'gender-art-m' : info.gender === 'f' ? 'gender-art-f' : 'gender-art-mf';
      // Leading article: un, une, le, la, les, des, l', L'
      const leadMatch = raw.match(/^(un|une|le|la|les|des)(\s+)(.*)$/i);
      if (leadMatch) {
        return `<span class="gender-art ${artClass}">${esc(leadMatch[1])}</span>${leadMatch[2]}${esc(leadMatch[3])}`;
      }
      const elidedMatch = raw.match(/^(l’|l'|L’|L')(.*)$/);
      if (elidedMatch) {
        return `<span class="gender-art ${artClass}">${esc(elidedMatch[1])}</span>${esc(elidedMatch[2])}`;
      }
    }

    // Also highlight inline articles inside action/expression cards (like "passer l’aspirateur", "faire la vaisselle", "Je fais du vélo")
    return highlightInlineArticles(raw, info);
  }

  // Highlights masculine/feminine articles inside example sentences or expressions
  function highlightInlineArticles(text, cardInfo = null) {
    if (!text) return '';
    // Split on spaces to safely inspect tokens
    const tokens = text.split(/(\s+)/);
    return tokens.map(tok => {
      if (/^\s+$/.test(tok)) return tok;

      // Check l' / L' on known card nouns
      if (cardInfo && /^(l’|l')/i.test(tok)) {
        const artClass = cardInfo.gender === 'f' ? 'gender-art-f' : 'gender-art-m';
        const prefix = tok.slice(0, 2);
        const rest = tok.slice(2);
        return `<span class="gender-art ${artClass}">${esc(prefix)}</span>${esc(rest)}`;
      }

      const clean = tok.replace(/[.,?!;:]+$/, '');
      const punct = tok.slice(clean.length);
      const lower = clean.toLowerCase();

      if (['un', 'le', 'du', 'au', 'mon', 'ton', 'son'].includes(lower)) {
        return `<span class="gender-inline-m" title="Masculine article">${esc(clean)}</span>${esc(punct)}`;
      }
      if (['une', 'la', 'ma', 'ta', 'sa'].includes(lower)) {
        return `<span class="gender-inline-f" title="Feminine article">${esc(clean)}</span>${esc(punct)}`;
      }
      return esc(tok);
    }).join('');
  }

  // Subtle front-of-card recall prompt for nouns (reminds learner to say un/le or une/la without leaking which one!)
  function frontPromptBadge(card) {
    const info = getCardGender(card);
    if (!info || info.isExpr) return '';
    return `<span class="gender-front-prompt" title="Remember to say the gender article aloud!"><span class="gf-m">♂ un/le</span> <span class="gf-sep">or</span> <span class="gf-f">♀ une/la</span> ?</span>`;
  }

  // --- Interactive "Gender Reflex" (un/le vs une/la) Mini-Drill ---
  const REFLEX_ITEMS = [
    { cardId: 'b1', bare: 'bonnet', english: 'winter hat / beanie', scene: 'hat', gender: 'm', full: 'un bonnet', tip: 'Nouns ending in -et (un bonnet, un billet) are Masculine (♂).' },
    { cardId: 'b2', bare: 'écharpe', english: 'scarf', scene: 'scarf', gender: 'f', full: 'une écharpe', tip: 'une écharpe is Feminine (♀). Watch out when it becomes l’écharpe!' },
    { cardId: 'b3', bare: 'robe', english: 'dress', scene: 'dressobj', gender: 'f', full: 'une robe', tip: 'une robe is Feminine (♀).' },
    { cardId: 'b6', bare: 'pantalon', english: 'trousers / pants', scene: 'pants', gender: 'm', full: 'un pantalon', tip: 'Nouns ending in -on (un pantalon, un salon) are Masculine (♂).' },
    { cardId: 'b5', bare: 'chemise', english: 'shirt', scene: 'shirt', gender: 'f', full: 'une chemise', tip: 'Nouns ending in -ise (une chemise, une valise) are Feminine (♀).' },
    { cardId: 'b7', bare: 'jupe', english: 'skirt', scene: 'skirt', gender: 'f', full: 'une jupe', tip: 'une jupe is Feminine (♀).' },
    { cardId: 'b8', bare: 'chaussette(s)', english: 'sock(s)', scene: 'socks', gender: 'f', full: 'une chaussette (des chaussettes)', tip: 'Nouns ending in -ette are 100% Feminine (♀ une chaussette)!' },
    { cardId: 'c2_manteau', bare: 'manteau', english: 'coat', scene: 'coat-obj', gender: 'm', full: 'un manteau', tip: 'Nouns ending in -eau (un manteau, un chapeau, un gâteau) are 99% Masculine (♂)!' },
    { cardId: 'c2_pull', bare: 'pull', english: 'sweater / jumper', scene: 'sweater-obj', gender: 'm', full: 'un pull', tip: 'Imported clothing words (un pull, un short, un jean) are Masculine (♂).' },
    { cardId: 'c2_baskets', bare: 'basket(s)', english: 'sneaker(s)', scene: 'shoes', gender: 'f', full: 'une basket (des baskets)', tip: 'Surprise! une basket is Feminine (♀): des baskets blanches.' },
    { cardId: 'c1_bibliotheque', bare: 'bibliothèque', english: 'library', scene: 'city-library', gender: 'f', full: 'la bibliothèque', tip: 'Nouns ending in -èque / -ie (la bibliothèque, la mairie) are Feminine (♀).' },
    { cardId: 'c1_quartier', bare: 'quartier', english: 'neighborhood', scene: 'city-district', gender: 'm', full: 'le quartier', tip: 'Nouns ending in -ier (le quartier, le cahier) are Masculine (♂).' },
    { cardId: 'c1_mairie', bare: 'mairie', english: 'city hall', scene: 'city-hall', gender: 'f', full: 'la mairie', tip: 'Nouns ending in -ie (la mairie, la boulangerie) are 100% Feminine (♀).' },
    { cardId: 'c2_passer_aspirateur', bare: 'aspirateur', english: 'vacuum cleaner', scene: 'chore-vacuum', gender: 'm', full: 'un aspirateur (l’aspirateur)', tip: 'Objects ending in -teur (un aspirateur, un ordinateur) are Masculine (♂).' },
    { cardId: 'c2_addition', bare: 'addition', english: 'the bill / check', scene: 'resto-bill', gender: 'f', full: 'une addition (l’addition)', tip: 'Nouns ending in -tion (une addition, la réservation) are 100% Feminine (♀)!' },
    { cardId: 'c1_randonnee', bare: 'randonnée', english: 'hiking / hike', scene: 'hobby-hike', gender: 'f', full: 'la randonnée', tip: 'Nouns ending in -ée (la randonnée, la journée, la soirée) are Feminine (♀).' },
    { cardId: 'c1_musique', bare: 'musique', english: 'music', scene: 'hobby-music', gender: 'f', full: 'la musique', tip: 'Nouns ending in -ique (la musique, la boutique) are Feminine (♀).' },
    { cardId: 'c1_lecture', bare: 'lecture', english: 'reading', scene: 'hobby-read', gender: 'f', full: 'la lecture', tip: 'Nouns ending in -ure (la lecture, la garniture, la voiture) are Feminine (♀).' },
    { cardId: 'c2_bus', bare: 'bus', english: 'bus', scene: 'trans-bus', gender: 'm', full: 'le bus', tip: 'Transports (le bus, le métro, le train, le vélo, le tramway) are Masculine (♂)!' },
    { cardId: 'c2_laitue', bare: 'laitue', english: 'lettuce', scene: 'market-lettuce', gender: 'f', full: 'une laitue', tip: 'Nouns ending in -ue (une laitue, la rue) are Feminine (♀).' },
    { cardId: 'c2_immeuble', bare: 'immeuble', english: 'apartment building', scene: 'home-building', gender: 'm', full: 'un immeuble', tip: 'un immeuble and un meuble are Masculine (♂ un/le)!' },
    { cardId: 'c2_appart_louer', bare: 'appartement', english: 'apartment', scene: 'apt-for-rent', gender: 'm', full: 'un appartement', tip: 'Nouns ending in -ment (un appartement, un logement) are 100% Masculine (♂)!' },
    { cardId: 'c2_chiner_friperie', bare: 'friperie', english: 'thrift shop', scene: 'thrift-shop', gender: 'f', full: 'une friperie', tip: 'Shops ending in -ie (une friperie, la boulangerie) are 100% Feminine (♀).' },
    { cardId: 'c2_lit_armoire', bare: 'armoire', english: 'wardrobe', scene: 'furniture-bed-wardrobe', gender: 'f', full: 'une armoire', tip: 'une armoire is Feminine (♀), while un lit and un placard are Masculine (♂).' }
  ];

  let reflexSession = null;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function itemWeakScore(item) {
    let score = Math.random() * 0.5;
    if (typeof window.activeProfile === 'function') {
      const p = window.activeProfile();
      if (p) {
        const gh = Array.isArray(p.genderHistory) ? p.genderHistory : [];
        for (const h of gh) {
          if (h && (h.cardId === item.cardId || h.bare === item.bare)) {
            score += h.correct ? -0.6 : 4.0;
          }
        }
        const cp = p.progress && p.progress[item.cardId];
        if (cp) {
          if (cp.lapses > 0) score += cp.lapses * 2.5;
          if (cp.genderMisses > 0) score += cp.genderMisses * 3.0;
          if ((cp.difficulty || 0) >= 6.5) score += 2.0;
        }
      }
    }
    return score;
  }

  function startReflex() {
    const ranked = [...REFLEX_ITEMS].sort((a, b) => itemWeakScore(b) - itemWeakScore(a));
    const weakPool = ranked.filter(it => itemWeakScore(it) >= 1.5);
    const restPool = ranked.filter(it => !weakPool.includes(it));
    const chosen = [...shuffle(weakPool), ...shuffle(restPool)].slice(0, 10);
    reflexSession = {
      items: chosen,
      index: 0,
      score: 0,
      feedback: null
    };
  }

  function answerReflex(chosenGender) {
    if (!reflexSession || reflexSession.feedback) return;
    const item = reflexSession.items[reflexSession.index];
    const correct = chosenGender === item.gender;
    if (correct) reflexSession.score++;
    reflexSession.feedback = { correct, chosen: chosenGender };

    if (typeof window.activeProfile === 'function') {
      const p = window.activeProfile();
      if (p) {
        if (!Array.isArray(p.genderHistory)) p.genderHistory = [];
        p.genderHistory.push({
          time: Date.now(),
          cardId: item.cardId,
          bare: item.bare,
          gender: item.gender,
          chosen: chosenGender,
          correct
        });
        if (p.progress && item.cardId) {
          if (!p.progress[item.cardId]) p.progress[item.cardId] = {};
          const cp = p.progress[item.cardId];
          if (!correct) {
            cp.genderMisses = (cp.genderMisses || 0) + 1;
            cp.difficulty = Math.min(10.0, +((cp.difficulty || 4.9) + 0.6).toFixed(2));
          } else if (cp.genderMisses > 0) {
            cp.genderMisses = Math.max(0, cp.genderMisses - 1);
          }
        }
        if (typeof window.persist === 'function') window.persist();
      }
    }

    if (typeof window.say === 'function') window.say(item.full);
    if (typeof window.render === 'function') window.render();
  }

  function nextReflex() {
    if (!reflexSession) return;
    reflexSession.index++;
    reflexSession.feedback = null;
    if (typeof window.render === 'function') window.render();
  }

  function renderReflexView() {
    if (!reflexSession) startReflex();
    const s = reflexSession;

    if (s.index >= s.items.length) {
      return `
        <div class="review-card gender-reflex-card" style="text-align:center;padding:32px 20px">
          <div style="font-size:48px;margin-bottom:8px">${s.score >= 8 ? '🏆' : '🎨'}</div>
          <h2>Gender Reflex Complete!</h2>
          <div class="sound-finish-score">${s.score} <span>/ ${s.items.length}</span></div>
          <p class="muted" style="max-width:380px;margin:0 auto 20px">
            Visualizing <span class="gender-pill gender-pill-m">♂ Blue = un / le</span> and <span class="gender-pill gender-pill-f">♀ Rose = une / la</span> locks noun gender into your long-term memory.
          </p>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary btn-lg" data-gender-action="restart-reflex">Play 10 More Rounds 🔄</button>
            <button class="btn btn-white btn-lg" data-gender-filter="All">Back to Vocab Decks</button>
          </div>
        </div>
      `;
    }

    const item = s.items[s.index];
    const fb = s.feedback;
    const visualHTML = typeof window.sceneSVG === 'function' ? window.sceneSVG(item.scene) : '';

    return `
      <div class="review-layout">
        <div class="review-top">
          <div>
            <div class="eyebrow">VISUAL GENDER REFLEX</div>
            <h2>♂ un / le &nbsp;vs&nbsp; ♀ une / la</h2>
          </div>
          <button class="btn btn-white btn-sm" data-gender-filter="All">Exit Drill ✕</button>
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <span class="small muted">Noun ${s.index + 1} of ${s.items.length}</span>
          <span class="small muted" style="font-weight:700">${s.score} ★</span>
        </div>
        <div class="review-progress"><div style="width:${100 * s.index / s.items.length}%"></div></div>

        <div class="review-card gender-reflex-card ${fb ? (item.gender === 'm' ? 'gender-card-m' : 'gender-card-f') : ''}">
          <div class="review-scene" style="min-height:190px">
            ${visualHTML}
            <span class="corner">${esc(item.english)}</span>
          </div>

          <div class="gender-reflex-prompt-area">
            <div class="gender-reflex-word" lang="fr">
              ${fb
                ? `<span class="gender-art ${item.gender === 'm' ? 'gender-art-m' : 'gender-art-f'}">${esc(item.full.split(' ')[0])}</span> ${esc(item.full.split(' ').slice(1).join(' '))}`
                : `<span class="gender-blank-slot">?</span> ${esc(item.bare)}`
              }
            </div>

            <div class="gender-choice-grid">
              <button type="button" class="gender-choice-btn choice-m ${fb ? (item.gender === 'm' ? 'is-correct' : fb.chosen === 'm' ? 'is-wrong' : '') : ''}" data-gender-action="choose" data-choice="m" ${fb ? 'disabled' : ''}>
                <span class="gc-symbol">♂</span>
                <div>
                  <div class="gc-main">un / le</div>
                  <div class="gc-sub">Masculin</div>
                </div>
              </button>

              <button type="button" class="gender-choice-btn choice-f ${fb ? (item.gender === 'f' ? 'is-correct' : fb.chosen === 'f' ? 'is-wrong' : '') : ''}" data-gender-action="choose" data-choice="f" ${fb ? 'disabled' : ''}>
                <span class="gc-symbol">♀</span>
                <div>
                  <div class="gc-main">une / la</div>
                  <div class="gc-sub">Féminin</div>
                </div>
              </button>
            </div>

            ${fb ? `
              <div class="gender-feedback-banner ${fb.correct ? 'is-correct' : 'is-wrong'}">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px">
                  <b>${fb.correct ? '✅ Exactement !' : `💡 Remember: ${item.full}`}</b>
                  <span class="gender-pill ${item.gender === 'm' ? 'gender-pill-m' : 'gender-pill-f'}">${item.gender === 'm' ? '♂ Masculin' : '♀ Féminin'}</span>
                </div>
                <p style="margin:0 0 12px;font-size:13.5px;line-height:1.45">${esc(item.tip)}</p>
                <div style="display:flex;gap:8px;justify-content:space-between;align-items:center">
                  <button type="button" class="btn btn-secondary btn-sm" data-say-card="${esc(item.full)}">🔊 Listen</button>
                  <button type="button" class="btn btn-primary btn-sm" data-gender-action="next-reflex">
                    ${s.index === s.items.length - 1 ? 'See Score →' : 'Next Noun →'}
                  </button>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  return {
    getCardGender,
    formatAnswerHTML,
    highlightInlineArticles,
    frontPromptBadge,
    startReflex,
    answerReflex,
    nextReflex,
    renderReflexView,
    REFLEX_ITEMS
  };
})();
