// Generator for 110+ Pedagogically Chained Grammar Flashcards
// Each card belongs to an intentional Pedagogical Chain with a clear purpose,
// contrastive pairings, subject shifts, deceptive distractors, and purposeful progression.

const fs = require('fs');
const path = require('path');

const CHAINS = [
  // 1. CAUSE CONTRAST CHAIN
  {
    chain: 'cause_contrast',
    chainTitle: '⚡ Cause: Positif (Grâce à) vs Négatif (À cause de) vs Neutre (En raison de) vs Verbe (Parce que)',
    chainType: 'contrast',
    cards: [
      {
        id: 'cause_grâce_prof',
        topic: 'cause',
        structureId: 'cause',
        topicLabel: 'Cause · Grâce à (Positif)',
        scene: 'work',
        english: 'I passed my exam thanks to my teacher.',
        targetWords: ['J’ai', 'réussi', 'mon', 'examen', 'grâce', 'à', 'mon', 'professeur'],
        fullSentence: 'J’ai réussi mon examen grâce à mon professeur.',
        distractors: [
          { word: 'à cause de', trap: 'cause_polarity', tip: 'Polarity Error: "À cause de" is only for negative obstacles or faults! For positive help, use "Grâce à"!' },
          { word: 'parce que', trap: 'syntax_error', tip: 'Syntax Error: "Parce que" requires a subject + verb clause. For a noun phrase ("mon professeur"), use "Grâce à"!' }
        ],
        purpose: '🎯 Positive Cause · Expressing successful help with Grâce à',
        purposeNote: 'Starting the Cause Chain: When the cause is POSITIVE and helped you succeed, French requires "Grâce à" (never "À cause de").',
        rule: 'Use "grâce à + nom" exclusively for positive, favorable causes that produce a good result.',
        nextPreview: 'Next card: See what changes when the cause is an obstacle, problem, or delay!'
      },
      {
        id: 'cause_acause_train',
        topic: 'cause',
        structureId: 'cause',
        topicLabel: 'Cause · À cause de (Négatif)',
        scene: 'train-station',
        english: 'The train is late because of the snow.',
        targetWords: ['Le', 'train', 'est', 'en', 'retard', 'à', 'cause', 'de', 'la', 'neige'],
        fullSentence: 'Le train est en retard à cause de la neige.',
        distractors: [
          { word: 'grâce à', trap: 'cause_polarity', tip: 'Polarity Error: Snow delaying a train is an obstacle/problem! Use "à cause de", never "grâce à"!' },
          { word: 'parce que', trap: 'syntax_error', tip: 'Syntax Error: "la neige" is a noun phrase, so use the preposition "à cause de", not "parce que"!' }
        ],
        purpose: '⚖️ Negative Cause · Expressing an obstacle or delay with À cause de',
        purposeNote: 'Contrast with Card 1: In the previous card we used "Grâce à" for a good outcome. Here, the train is late (a problem), so you must use "À cause de"!',
        rule: 'Use "à cause de + nom" for negative, unfavorable causes, problems, or obstacles.',
        nextPreview: 'Next card: How to announce a neutral or official reason (like construction or flight notices)?'
      },
      {
        id: 'cause_enraison_musee',
        topic: 'cause',
        structureId: 'cause',
        topicLabel: 'Cause · En raison de (Neutre/Officiel)',
        scene: 'museum-visit',
        english: 'The museum is closed due to construction work.',
        targetWords: ['Le', 'musée', 'est', 'fermé', 'en', 'raison', 'des', 'travaux'],
        fullSentence: 'Le musée est fermé en raison des travaux.',
        distractors: [
          { word: 'à cause de', trap: 'style_register', tip: 'Register Error: In formal public signs and announcements, "en raison de" is preferred over "à cause de"!' },
          { word: 'grâce aux', trap: 'cause_polarity', tip: 'Polarity Error: Construction shutting down a museum is an inconvenience, not a blessing! Do not use "grâce à"!' }
        ],
        purpose: '📋 Neutral / Official Cause · Formal announcements with En raison de',
        purposeNote: 'Contrast with Cards 1 & 2: When an administration, airport, or public institution states a neutral/official reason without assigning blame, French prefers "En raison de". Notice de + les = des.',
        rule: 'Use "en raison de + nom" in formal, administrative, or neutral notices (transport, museum, flights).',
        nextPreview: 'Next card: How do you express cause when you have a full sentence with a conjugated verb?'
      },
      {
        id: 'cause_parceque_malade',
        topic: 'cause',
        structureId: 'cause',
        topicLabel: 'Cause · Parce que + Verbe Conjugué',
        scene: 'bedtime',
        english: 'I stayed in bed because I was sick.',
        targetWords: ['Je', 'suis', 'resté', 'au', 'lit', 'parce', 'que', 'j’étais', 'malade'],
        fullSentence: 'Je suis resté au lit parce que j’étais malade.',
        distractors: [
          { word: 'à cause de', trap: 'syntax_error', tip: 'Syntax Error: "j’étais malade" contains a conjugated verb! "À cause de" cannot precede a conjugated clause!' },
          { word: 'grâce à', trap: 'cause_polarity', tip: 'Polarity & Syntax Error: Illness is negative, and it cannot take a conjugated clause!' }
        ],
        purpose: '🔗 Verbal Cause Clause · Connecting a full conjugated verb with Parce que',
        purposeNote: 'Contrast with Cards 1–3: "Grâce à", "À cause de", and "En raison de" take NOUNS. To introduce a full sentence with a conjugated verb, you must use "Parce que"!',
        rule: 'Use "parce que + sujet + verbe" when explaining cause with a clause. Use "grâce à / à cause de + nom" with noun phrases.',
        nextPreview: 'Chain Complete! You have mastered all 4 faces of expressing cause in French.'
      }
    ]
  },

  // 2. NEGATION CONTRAST CHAIN
  {
    chain: 'neque_contrast',
    chainTitle: '🚫 Négation: Restriction (Ne ... que) vs Négation Totale (Ne ... pas) vs Fréquence (Ne ... jamais)',
    chainType: 'contrast',
    cards: [
      {
        id: 'neque_boire_eau',
        topic: 'neque',
        structureId: 'neque',
        topicLabel: 'Négation Restrictive · Ne ... que (Only)',
        scene: 'cafe-terrasse',
        english: 'I only drink water during meals.',
        targetWords: ['Je', 'ne', 'bois', 'que', 'de', 'l’eau', 'pendant', 'les', 'repas'],
        fullSentence: 'Je ne bois que de l’eau pendant les repas.',
        distractors: [
          { word: 'pas', trap: 'negation_type', tip: 'Negation Error: "ne ... pas" means "I do NOT drink water at all". For "only water", use "ne ... que"!' },
          { word: 'seulement', trap: 'anglicism', tip: 'Structure Tip: French prefers "ne ... que" wrapping the verb over using "seulement"!' }
        ],
        purpose: '🎯 Restrictive Negation · Expressing "only" with Ne ... que',
        purposeNote: 'Starting Negation Chain: "Ne ... que" does NOT negate an action—it RESTRICTS it to "only/nothing but". "Que" is placed directly in front of the restricted element.',
        rule: 'Use "ne + verbe + que + élément restreint" to say "only / just / nothing but".',
        nextPreview: 'Next card: Contrast with absolute negation (not at all) using "ne ... pas"!'
      },
      {
        id: 'nepas_boire_cafe',
        topic: 'neque',
        structureId: 'neque',
        topicLabel: 'Négation Totale · Ne ... pas (Not)',
        scene: 'coffee',
        english: 'I do not drink coffee during meals.',
        targetWords: ['Je', 'ne', 'bois', 'pas', 'de', 'café', 'pendant', 'les', 'repas'],
        fullSentence: 'Je ne bois pas de café pendant les repas.',
        distractors: [
          { word: 'que', trap: 'negation_type', tip: 'Negation Error: "ne ... que" means "I ONLY drink coffee"! For "I do not drink", use "ne ... pas"!' },
          { word: 'du', trap: 'partitive_negation', tip: 'Partitive Trap: In negative sentences with "pas", partitives (du/de la/des) become simple "de"!' }
        ],
        purpose: '⚖️ Absolute Negation · Rejecting an action with Ne ... pas',
        purposeNote: 'Contrast with Card 1: In the previous card, "ne ... que" meant "only". Here, you do NOT drink coffee at all, so use "ne ... pas"! Notice "du café" becomes "de café".',
        rule: 'Use "ne + verbe + pas" for standard negation. Indefinite and partitive articles (un, une, des, du) become "de" after "pas".',
        nextPreview: 'Next card: How to express zero frequency ("never") using "ne ... jamais"!'
      },
      {
        id: 'nejamais_boire_alcool',
        topic: 'neque',
        structureId: 'neque',
        topicLabel: 'Négation de Fréquence · Ne ... jamais (Never)',
        scene: 'bistro-payment',
        english: 'I never drink alcohol on weekdays.',
        targetWords: ['Je', 'ne', 'bois', 'jamais', 'd’alcool', 'en', 'semaine'],
        fullSentence: 'Je ne bois jamais d’alcool en semaine.',
        distractors: [
          { word: 'pas', trap: 'redundancy', tip: 'Redundancy Error: Never combine "pas" and "jamais"! Say "ne bois jamais", never "ne bois pas jamais"!' },
          { word: 'que', trap: 'negation_type', tip: 'Meaning Error: "ne ... que" would mean "I only drink alcohol"! For "never", use "jamais"!' }
        ],
        purpose: '⚖️ Frequency Negation · Expressing zero frequency with Ne ... jamais',
        purposeNote: 'Contrast with Cards 1 & 2: "Ne ... pas" = not now/generally. "Ne ... jamais" = never, at no time. Never say "ne ... pas jamais"!',
        rule: '"Ne ... jamais" replaces "ne ... pas" entirely to mean "never". The article reduces to "d’" before vowels.',
        nextPreview: 'Next card: How does "Ne ... que" behave in the Passé Composé? (Watch where "que" lands!)'
      },
      {
        id: 'neque_passe_compose_dormir',
        topic: 'neque',
        structureId: 'neque',
        topicLabel: 'Négation Restrictive · Passé Composé',
        scene: 'sleep',
        english: 'She only slept four hours last night.',
        targetWords: ['Elle', 'n’a', 'dormi', 'que', 'quatre', 'heures', 'cette', 'nuit'],
        fullSentence: 'Elle n’a dormi que quatre heures cette nuit.',
        distractors: [
          { word: 'n’a que dormi', trap: 'que_placement', tip: 'Placement Error: "que" does NOT go before the participle! It goes directly before the restricted object: "n’a dormi que quatre heures"!' },
          { word: 'pas', trap: 'negation_type', tip: 'Meaning Error: "n’a pas dormi" means she didn’t sleep at all! For "only 4 hours", use "que"!' }
        ],
        purpose: '⚠️ Word Placement Trap · "Que" in Passé Composé lands before the noun!',
        purposeNote: 'Critical Contrast: Unlike "pas" which sandwiches the auxiliary (Elle n’a PAS dormi), "que" goes directly before the thing restricted (Elle n’a dormi QUE quatre heures)!',
        rule: 'In compound tenses (Passé Composé), "ne" precedes the auxiliary, but "que" stays before the restricted item: Sujet + ne + auxiliaire + participe + QUE + complément.',
        nextPreview: 'Chain Complete! You have mastered the full negation contrast spectrum.'
      }
    ]
  },

  // 3. SE FAIRE + INFINITIF VS REFLEXIVE VS CAUSATIVE FAIRE
  {
    chain: 'se_faire_contrast',
    chainTitle: '🔒 Causatif: Se faire + Infinitif (Service) vs Réflexif Simple vs Faire + Infinitif',
    chainType: 'contrast',
    cards: [
      {
        id: 'sefaire_cheveux_coiffeur',
        topic: 'se_faire',
        structureId: 'se_faire',
        topicLabel: 'Se faire + Infinitif · Service Reçu',
        scene: 'coiffeur-haircut',
        english: 'I am getting my hair cut at the hairdresser.',
        targetWords: ['Je', 'me', 'fais', 'couper', 'les', 'cheveux', 'chez', 'le', 'coiffeur'],
        fullSentence: 'Je me fais couper les cheveux chez le coiffeur.',
        distractors: [
          { word: 'coupe', trap: 'meaning_shift', tip: 'Meaning Trap: "Je me coupe les cheveux" means you hold the scissors yourself! For a salon service, use "Je me fais couper"!' },
          { word: 'fais couper', trap: 'missing_reflexive', tip: 'Missing Pronoun: You need the reflexive pronoun "me" to indicate the service is done to you: "Je me fais couper"!' }
        ],
        purpose: '🎯 Causative Service · Having an action performed on you by a professional',
        purposeNote: 'Starting Se Faire Chain: In French, if someone else cuts your hair or massages your back, you cannot say "Je me coupe". You say "Je me fais couper" (I have it done to me).',
        rule: 'Use "se faire + infinitif" when a professional or someone else performs an action or service onto you.',
        nextPreview: 'Next card: Contrast this with an action you perform on yourself with your own hands!'
      },
      {
        id: 'reflexive_ongles_maison',
        topic: 'se_faire',
        structureId: 'se_faire',
        topicLabel: 'Verbe Réflexif Simple · Fait par Soi-même',
        scene: 'brush',
        english: 'I cut my own nails at home.',
        targetWords: ['Je', 'me', 'coupe', 'les', 'ongles', 'à', 'la', 'maison'],
        fullSentence: 'Je me coupe les ongles à la maison.',
        distractors: [
          { word: 'fais couper', trap: 'unneeded_causative', tip: 'Meaning Shift: "Je me fais couper" implies a salon or someone else does it! You do it yourself, so use simple "Je me coupe"!' },
          { word: 'coupe mes', trap: 'possessive_trap', tip: 'Body Part Trap: In French with reflexive verbs, use definite articles (les ongles), not possessive adjectives (mes ongles)!' }
        ],
        purpose: '⚖️ Direct Reflexive · Performing an action on yourself with your own hands',
        purposeNote: 'Contrast with Card 1: In Card 1, the hairdresser did it ("Je me fais couper"). Here, YOU hold the clippers yourself, so use ordinary reflexive "Je me coupe les ongles"!',
        rule: 'Use simple reflexive "Je me + verbe" when you perform the action on yourself. Use definite articles (les ongles) with body parts.',
        nextPreview: 'Next card: What if you have an external object repaired (without the reflexive "me")?'
      },
      {
        id: 'faire_chaudiere_plombier',
        topic: 'se_faire',
        structureId: 'se_faire',
        topicLabel: 'Faire + Infinitif · Objet Réparé (Non-réflexif)',
        scene: 'plumber-repair',
        english: 'I am having the boiler repaired by a technician.',
        targetWords: ['Je', 'fais', 'réparer', 'la', 'chaudière', 'par', 'un', 'technicien'],
        fullSentence: 'Je fais réparer la chaudière par un technicien.',
        distractors: [
          { word: 'me fais', trap: 'unneeded_reflexive', tip: 'Reflexive Error: The boiler is being repaired, not your body! Do not use "me fais réparer"!' },
          { word: 'répare', trap: 'meaning_shift', tip: 'Meaning Shift: "Je répare" means you are fixing the plumbing yourself! Use "fais réparer" for hiring a professional!' }
        ],
        purpose: '⚖️ Non-Reflexive Causative · Having an object or machine repaired',
        purposeNote: 'Contrast with Cards 1 & 2: When an external object (boiler, car, appliance) is being worked on, do NOT use reflexive "me". Use standard "faire + infinitif"!',
        rule: 'Use "faire + infinitif" (without reflexive pronoun) when hiring someone to work on an object or appliance: "Je fais réparer la chaudière".',
        nextPreview: 'Next card: The Master Trap of Se Faire in Passé Composé! (Does "fait" agree with Elle?)'
      },
      {
        id: 'sefaire_passe_invariable',
        topic: 'se_faire',
        structureId: 'se_faire',
        topicLabel: 'Se faire + Infinitif · Règle d’Invariabilité',
        scene: 'doctor-office',
        english: 'She had her blood pressure checked by the doctor.',
        targetWords: ['Elle', 's’est', 'fait', 'examiner', 'par', 'le', 'médecin'],
        fullSentence: 'Elle s’est fait examiner par le médecin.',
        distractors: [
          { word: 'faite', trap: 'invariable_agreement', tip: 'Major Trap: The participle "fait" in "se faire + infinitif" is 100% INVARIABLE! Never write "s’est faite"!' },
          { word: 'a fait', trap: 'auxiliary_trap', tip: 'Auxiliary Error: Reflexive "s’est" requires ÊTRE, not AVOIR!' }
        ],
        purpose: '⚠️ Master Agreement Trap · "Fait" is always INVARIABLE before an infinitive!',
        purposeNote: 'Critical Rule: Even though the subject is "Elle" and the auxiliary is "Être", the participle "fait" followed by an infinitive NEVER agrees! It is always "s’est fait", never "s’est faite"!',
        rule: 'In "se faire + infinitif", the participle "fait" is strictly invariable: always "fait", never "faite" or "faits".',
        nextPreview: 'Chain Complete! You master causative structures and the "fait" invariability rule.'
      }
    ]
  },

  // 4. MOVEMENT (ÊTRE) VS TRANSITIVE (AVOIR)
  {
    chain: 'etre_movement_vs_avoir_transitive',
    chainTitle: '🏠 Maison d’Être: Mouvement Intransitif (Être) vs Transitif avec COD (Avoir)',
    chainType: 'contrast',
    cards: [
      {
        id: 'sortir_intransitif_etre',
        topic: 'maison',
        structureId: 'maison',
        topicLabel: 'Maison d’Être · Mouvement Intransitif (ÊTRE)',
        scene: 'walk',
        english: 'She went out with her friends yesterday evening.',
        targetWords: ['Elle', 'est', 'sortie', 'avec', 'ses', 'amies', 'hier', 'soir'],
        fullSentence: 'Elle est sortie avec ses amies hier soir.',
        distractors: [
          { word: 'a', trap: 'auxiliary_shift', tip: 'Auxiliary Error: When "sortir" means going out (intransitive), it takes ÊTRE (est sortie)!' },
          { word: 'sorti', trap: 'agreement_missing', tip: 'Agreement Error: With ÊTRE, "Elle" demands feminine agreement (+e = sortie)!' }
        ],
        purpose: '🎯 Intransitive Movement · Subject moves herself (ÊTRE + accord +e)',
        purposeNote: 'Starting Être vs Avoir Movement Chain: When a movement verb like sortir, monter, or descendre describes the subject moving herself, use ÊTRE and agree with the subject!',
        rule: 'Movement verbs of "La Maison d’Être" take ÊTRE when intransitive. The participle agrees with the subject (Elle ➜ sortie).',
        nextPreview: 'Next card: What happens when the subject takes an object OUT of a bag or house?'
      },
      {
        id: 'sortir_transitif_avoir',
        topic: 'maison',
        structureId: 'maison',
        topicLabel: 'Transitif Direct · AVOIR (Pas d’accord)',
        scene: 'rain',
        english: 'She took out her umbrella because of the rain.',
        targetWords: ['Elle', 'a', 'sorti', 'son', 'parapluie', 'à', 'cause', 'de', 'la', 'pluie'],
        fullSentence: 'Elle a sorti son parapluie à cause de la pluie.',
        distractors: [
          { word: 'est', trap: 'auxiliary_shift', tip: 'Auxiliary Flip: "son parapluie" is a direct object! When sortir has a direct object, auxiliary flips to AVOIR (a sorti)!' },
          { word: 'sortie', trap: 'wrong_agreement', tip: 'Agreement Error: With AVOIR, the participle does NOT agree with the subject "Elle"! It is "a sorti", not "a sortie"!' }
        ],
        purpose: '⚖️ Transitive Action · Taking an object out flips auxiliary to AVOIR',
        purposeNote: 'Contrast with Card 1: In Card 1, "Elle est sortie" (she went out). Here, she took an OBJECT out (son parapluie). The auxiliary FLIPS to AVOIR ("a sorti") and does NOT agree with Elle!',
        rule: 'When movement verbs take a direct object (COD), they conjugate with AVOIR: "Elle a sorti son parapluie". The participle does not agree with the subject.',
        nextPreview: 'Next card: Compare "monter" (going upstairs vs carrying suitcases up)!'
      },
      {
        id: 'monter_intransitif_etre',
        topic: 'maison',
        structureId: 'maison',
        topicLabel: 'Maison d’Être · Mouvement (ÊTRE)',
        scene: 'apartment-living',
        english: 'He went up to the third floor on foot.',
        targetWords: ['Il', 'est', 'monté', 'au', 'troisième', 'étage', 'à', 'pied'],
        fullSentence: 'Il est monté au troisième étage à pied.',
        distractors: [
          { word: 'a', trap: 'auxiliary_shift', tip: 'Auxiliary Error: Climbing the stairs yourself is intransitive movement: use ÊTRE (est monté)!' },
          { word: 'montée', trap: 'wrong_gender', tip: 'Gender Error: "Il" is masculine singular, so no +e!' }
        ],
        purpose: '🎯 Intransitive Movement · Climbing upstairs with ÊTRE',
        purposeNote: 'In this card, "Il" moves himself up to the 3rd floor. Intransitive movement uses ÊTRE ("est monté").',
        rule: 'Intransitive "monter" (to go up) uses ÊTRE.',
        nextPreview: 'Next card: Carrying suitcases up the stairs—which auxiliary does it take?'
      },
      {
        id: 'monter_transitif_avoir',
        topic: 'maison',
        structureId: 'maison',
        topicLabel: 'Transitif Direct · Porter un Objet (AVOIR)',
        scene: 'apartment-living',
        english: 'He carried the suitcases up into the room.',
        targetWords: ['Il', 'a', 'monté', 'les', 'valises', 'dans', 'la', 'chambre'],
        fullSentence: 'Il a monté les valises dans la chambre.',
        distractors: [
          { word: 'est', trap: 'auxiliary_shift', tip: 'Auxiliary Flip: "les valises" is a direct object! When monter takes a COD, use AVOIR (a monté)!' },
          { word: 'montés', trap: 'wrong_agreement', tip: 'Agreement Error: With AVOIR, the participle does not agree with a COD placed after the verb!' }
        ],
        purpose: '⚖️ Transitive Action · Carrying objects up flips auxiliary to AVOIR',
        purposeNote: 'Contrast with Card 3: In Card 3, "Il est monté" (he climbed up). Here he carried "les valises" (direct object), so the auxiliary flips to AVOIR ("Il a monté")!',
        rule: 'Transitive "monter" (to carry something up) uses AVOIR.',
        nextPreview: 'Chain Complete! You have mastered the Être vs Avoir movement verb duality.'
      }
    ]
  },

  // 5. SUBJECT SHIFTS & AGREEMENT IN REFLEXIVE PASSÉ COMPOSÉ
  {
    chain: 'refl_subject_shifts',
    chainTitle: '🔄 Verbes Réflexifs: Subject Shift & Agreement Spectrum (Je ➜ Elle ➜ Nous ➜ Elles ➜ Tu ➜ Vous)',
    chainType: 'subject_shift',
    cards: [
      {
        id: 'refl_shift_je_masc',
        topic: 'reflexive',
        structureId: 'reflexive',
        topicLabel: 'Verbe Réflexif · Sujet Je (Masc)',
        scene: 'rise',
        english: 'I got up early this morning. (speaker is male)',
        targetWords: ['Je', 'me', 'suis', 'levé', 'tôt', 'ce', 'matin'],
        fullSentence: 'Je me suis levé tôt ce matin.',
        distractors: [
          { word: 'ai', trap: 'auxiliary_error', tip: 'Auxiliary Error: Reflexive verbs always take ÊTRE (suis), never AVOIR (ai)!' },
          { word: 'levée', trap: 'gender_agreement', tip: 'Gender Agreement: Male speaker does not add feminine +e!' }
        ],
        purpose: '🌱 Base Subject: Je (masculine singular · no extra ending)',
        purposeNote: 'Starting the Subject Shift Chain: Observe the base reflexive structure: "Je me suis levé" (auxiliary suis, masculine participle levé).',
        rule: 'Sujet + [me/te/se] + ÊTRE + Participe passé. Masculine singular has no added ending.',
        nextPreview: 'Next card: Shift subject to "Elle" (feminine singular)—watch the ending mutate!'
      },
      {
        id: 'refl_shift_elle_fem',
        topic: 'reflexive',
        structureId: 'reflexive',
        topicLabel: 'Verbe Réflexif · Sujet Elle (Fém sing: +e)',
        scene: 'rise',
        english: 'She got up early this morning.',
        targetWords: ['Elle', 's’est', 'levée', 'tôt', 'ce', 'matin'],
        fullSentence: 'Elle s’est levée tôt ce matin.',
        distractors: [
          { word: 'a', trap: 'auxiliary_error', tip: 'Auxiliary Error: Reflexive verbs use ÊTRE (s’est), not AVOIR (a)!' },
          { word: 'levé', trap: 'missing_agreement', tip: 'Agreement Error: "Elle" is feminine singular, so ÊTRE demands +e (levée)!' }
        ],
        purpose: '🔄 Subject Shift: Je (masc) ➜ Elle (fém sing: +e agreement)',
        purposeNote: 'Notice the mutation from Card 1: "Je me suis levé" becomes "Elle s’est levée". The past participle MUST take +e for feminine singular!',
        rule: 'With feminine singular subject "Elle", add +e to the past participle with ÊTRE: "Elle s’est levée".',
        nextPreview: 'Next card: Shift subject to "Nous" (plural)—watch the auxiliary and +s appear!'
      },
      {
        id: 'refl_shift_nous_plur',
        topic: 'reflexive',
        structureId: 'reflexive',
        topicLabel: 'Verbe Réflexif · Sujet Nous (Pluriel: +s)',
        scene: 'walk',
        english: 'We got up early this morning.',
        targetWords: ['Nous', 'nous', 'sommes', 'levés', 'tôt', 'ce', 'matin'],
        fullSentence: 'Nous nous sommes levés tôt ce matin.',
        distractors: [
          { word: 'avons', trap: 'auxiliary_error', tip: 'Auxiliary Error: Reflexive verbs use ÊTRE (nous sommes), not AVOIR (nous avons)!' },
          { word: 'levé', trap: 'missing_plural', tip: 'Plural Agreement: "Nous" is plural, so add +s to the participle (levés)!' }
        ],
        purpose: '🔄 Subject Shift: Elle ➜ Nous (auxiliary sommes + plural agreement +s)',
        purposeNote: 'Notice the shift from Card 2: Auxiliary changes from "est" to "sommes", and the participle takes plural +s: "Nous nous sommes levés".',
        rule: 'With plural subject "Nous", auxiliary is "sommes" and past participle takes +s: "Nous nous sommes levés".',
        nextPreview: 'Next card: Shift subject to "Elles" (feminine plural)—both +e AND +s!'
      },
      {
        id: 'refl_shift_elles_femplur',
        topic: 'reflexive',
        structureId: 'reflexive',
        topicLabel: 'Verbe Réflexif · Sujet Elles (Fém pluriel: +es)',
        scene: 'walk',
        english: 'They got up early this morning. (all women)',
        targetWords: ['Elles', 'se', 'sont', 'levées', 'tôt', 'ce', 'matin'],
        fullSentence: 'Elles se sont levées tôt ce matin.',
        distractors: [
          { word: 'ont', trap: 'auxiliary_error', tip: 'Auxiliary Error: Reflexive verbs use ÊTRE (se sont), not AVOIR (ont)!' },
          { word: 'levés', trap: 'gender_trap', tip: 'Gender Agreement: "Elles" is feminine plural, so add +e AND +s = levées!' }
        ],
        purpose: '🔄 Subject Shift: Nous ➜ Elles (feminine plural agreement: +es)',
        purposeNote: 'Notice the shift: With "Elles", the auxiliary is "sont", and the participle agrees in BOTH feminine (+e) and plural (+s) = "levées"!',
        rule: 'With feminine plural subject "Elles", the past participle ends in +es: "Elles se sont levées".',
        nextPreview: 'Next card: Question with "Tu" (female friend)—watch the elision (t’es)!'
      },
      {
        id: 'refl_shift_tu_question',
        topic: 'reflexive',
        structureId: 'reflexive',
        topicLabel: 'Verbe Réflexif · Question avec Tu (Féminin)',
        scene: 'shower',
        english: 'Did you shower yesterday evening? (to a female friend)',
        targetWords: ['Tu', 't’es', 'douchée', 'hier', 'soir', '?'],
        fullSentence: 'Tu t’es douchée hier soir ?',
        distractors: [
          { word: 'as', trap: 'auxiliary_error', tip: 'Auxiliary Error: Reflexive uses ÊTRE (t’es), never AVOIR (tu as)!' },
          { word: 'douché', trap: 'missing_agreement', tip: 'Agreement Error: Speaking to a female listener demands feminine +e (douchée)!' }
        ],
        purpose: '🔄 Subject Shift: Question form with Tu + Elision (t’es) + accord (+e)',
        purposeNote: 'In questions with "tu", "te + es" elides to "t’es", and speaking to a female requires the +e agreement: "Tu t’es douchée ?".',
        rule: 'Te + es becomes t’es. Agreement reflects the gender of the person addressed.',
        nextPreview: 'Next card: Polite "Vous" addressed to ONE gentleman—does it take +s?'
      },
      {
        id: 'refl_shift_vous_polite',
        topic: 'reflexive',
        structureId: 'reflexive',
        topicLabel: 'Verbe Réflexif · Vous de Politesse (Singulier)',
        scene: 'bedtime',
        english: 'Sir, did you rest well during the weekend?',
        targetWords: ['Monsieur', 'vous', 'vous', 'êtes', 'bien', 'reposé', 'pendant', 'le', 'week-end', '?'],
        fullSentence: 'Monsieur vous vous êtes bien reposé pendant le week-end ?',
        distractors: [
          { word: 'reposés', trap: 'polite_plural_trap', tip: 'Singular Trap: "Monsieur" is ONE person addressed politely! Do NOT add plural +s to the participle!' },
          { word: 'avez reposé', trap: 'auxiliary_error', tip: 'Auxiliary Error: Reflexive "se reposer" uses ÊTRE (vous vous êtes), not AVOIR!' }
        ],
        purpose: '⚠️ Politeness Nuance: Polite "Vous" to one man has NO plural +s!',
        purposeNote: 'Critical Nuance: When "vous" is used for formal politeness to a single person (Monsieur), the participle agrees with that ONE person: "reposé" (no +s)!',
        rule: 'Polite "vous" to a single person takes singular agreement (reposé for male, reposée for female, NO plural +s).',
        nextPreview: 'Chain Complete! You have mastered all 6 subject variations and agreements.'
      }
    ]
  },

  // 6. REFLEXIVE BODY PART AGREEMENT TRAP CHAIN
  {
    chain: 'refl_body_part_traps',
    chainTitle: '⚠️ Verbes Réflexifs: Le Piège Majeur de l’Accord (Parties du Corps & COD placé Après)',
    chainType: 'rule_trap',
    cards: [
      {
        id: 'refl_trap_base_accord',
        topic: 'reflexive',
        structureId: 'reflexive',
        topicLabel: 'Accord Réflexif Normal · Pronom COD',
        scene: 'shower',
        english: 'She washed herself thoroughly.',
        targetWords: ['Elle', 's’est', 'lavée', 'soigneusement'],
        fullSentence: 'Elle s’est lavée soigneusement.',
        distractors: [
          { word: 'lavé', trap: 'missing_agreement', tip: 'Agreement Error: "se" is the direct object (she washed herself), so it agrees with Elle (+e = lavée)!' },
          { word: 'a lavé', trap: 'auxiliary_error', tip: 'Auxiliary Error: Reflexive verbs always take ÊTRE!' }
        ],
        purpose: '🌱 Base Rule: Reflexive pronoun "se" is COD ➜ agrees with Elle (+e)',
        purposeNote: 'Starting the Agreement Trap Chain: Here, WHO is being washed? "Herself" (se). The reflexive pronoun is the direct object placed before, so "lavée" agrees (+e).',
        rule: 'When the reflexive pronoun is the direct object, the participle agrees with the subject: "Elle s’est lavée".',
        nextPreview: 'Next card: What happens when she washes a specific body part (les mains)?'
      },
      {
        id: 'refl_trap_mains_no_accord',
        topic: 'reflexive',
        structureId: 'reflexive',
        topicLabel: 'Piège de l’Accord · Partie du Corps Après (Pas d’accord)',
        scene: 'brush',
        english: 'She washed her hands before dinner.',
        targetWords: ['Elle', 's’est', 'lavé', 'les', 'mains', 'avant', 'le', 'dîner'],
        fullSentence: 'Elle s’est lavé les mains avant le dîner.',
        distractors: [
          { word: 'lavée', trap: 'false_agreement', tip: 'Classic French Trap: "les mains" is a direct object placed AFTER the verb! The participle "lavé" does NOT agree with Elle!' },
          { word: 'ses mains', trap: 'possessive_trap', tip: 'Body Part Trap: In French with reflexive verbs, say "les mains", never "ses mains"!' }
        ],
        purpose: '⚠️ Master Trap: Direct object placed AFTER the verb ➜ NO agreement!',
        purposeNote: 'Shocking Contrast with Card 1: In Card 1, "Elle s’est lavée" had +e. But here, WHAT is she washing? "Les mains" (direct object placed AFTER)! Therefore, "lavé" does NOT agree with Elle!',
        rule: 'If the direct object (COD) is placed AFTER the reflexive verb, there is NO agreement: "Elle s’est lavé les mains" (never lavée).',
        nextPreview: 'Next card: Plural subject with brushing teeth—does "brossé" take +s?'
      },
      {
        id: 'refl_trap_dents_plur_no_accord',
        topic: 'reflexive',
        structureId: 'reflexive',
        topicLabel: 'Piège de l’Accord · Brosser les Dents (Pas de s)',
        scene: 'brush',
        english: 'They brushed their teeth before going to sleep.',
        targetWords: ['Ils', 'se', 'sont', 'brossé', 'les', 'dents', 'avant', 'de', 'dormir'],
        fullSentence: 'Ils se sont brossé les dents avant de dormir.',
        distractors: [
          { word: 'brossés', trap: 'false_agreement', tip: 'Trap: Even though "Ils" is plural, "les dents" is a COD placed AFTER the verb, so "brossé" takes NO +s!' },
          { word: 'ont brossé', trap: 'auxiliary_error', tip: 'Auxiliary Error: Reflexive "se brosser" requires ÊTRE (se sont), not AVOIR!' }
        ],
        purpose: '⚠️ Plural Trap: Plural subject but body part after ➜ NO +s on participle!',
        purposeNote: 'Look at this: Even though "Ils" is plural masculine, because "les dents" is placed after the verb, the participle is "brossé" (NO +s)!',
        rule: '"Ils se sont brossé les dents": COD is "les dents" placed after, so no plural agreement on the participle.',
        nextPreview: 'Next card: Reciprocal verb with "à" (se téléphoner)—why is there no agreement?'
      },
      {
        id: 'refl_trap_telephoner_coi',
        topic: 'reflexive',
        structureId: 'reflexive',
        topicLabel: 'Verbe Réciprocité COI · Téléphoner à (Invariable)',
        scene: 'cinema',
        english: 'They called each other yesterday evening. (two women)',
        targetWords: ['Elles', 'se', 'sont', 'téléphoné', 'hier', 'soir'],
        fullSentence: 'Elles se sont téléphoné hier soir.',
        distractors: [
          { word: 'téléphonées', trap: 'coi_agreement_trap', tip: 'COI Trap: One says "téléphoner À quelqu’un" (indirect object)! Because "se" is indirect (COI), "téléphoné" NEVER agrees!' },
          { word: 'ont téléphoné', trap: 'auxiliary_error', tip: 'Auxiliary Error: Reciprocal actions take ÊTRE (se sont)!' }
        ],
        purpose: '⚠️ Indirect Reciprocal Trap: Verbs taking "à" (COI) have NO agreement!',
        purposeNote: 'In French, you say "téléphoner À quelqu’un" (COI). Since "se" is an indirect object, the participle NEVER agrees, even with "Elles": "téléphoné" (no +es)!',
        rule: 'Verbs that take indirect objects with "à" (se téléphoner, se parler, se sourire) never agree in the past participle: "Elles se sont téléphoné".',
        nextPreview: 'Chain Complete! You have mastered the most sophisticated agreement traps in French.'
      }
    ]
  },

  // 7. COD VS COI PRONOUNS CHAIN
  {
    chain: 'cod_vs_coi_pronouns',
    chainTitle: '🎯 Pronoms Personnels: COD Direct (le/la/les) vs COI Indirect (lui/leur) & Accords',
    chainType: 'contrast',
    cards: [
      {
        id: 'cod_direct_passeport',
        topic: 'cod_coi',
        structureId: 'cod_coi',
        topicLabel: 'Pronom COD · Objet Direct (le)',
        scene: 'train-station',
        english: 'My passport? I am taking it with me.',
        targetWords: ['Mon', 'passeport', '?', 'Je', 'le', 'prends', 'avec', 'moi'],
        fullSentence: 'Mon passeport ? Je le prends avec moi.',
        distractors: [
          { word: 'lui', trap: 'coi_for_cod', tip: 'Pronoun Error: "Mon passeport" is a direct object (COD). Use "le", not indirect "lui"!' },
          { word: 'prends le', trap: 'word_order', tip: 'Word Order: In French affirmative sentences, object pronouns go BEFORE the conjugated verb: "Je le prends"!' }
        ],
        purpose: '🎯 Direct Object (COD): Replacing a masculine noun with "le"',
        purposeNote: 'Starting COD vs COI Chain: "Prendre" takes a direct object without preposition ("prendre quelque chose"). Therefore, "mon passeport" is replaced by COD "le" placed before the verb.',
        rule: 'COD pronouns (le, la, l’, les) replace direct objects and go directly before the conjugated verb.',
        nextPreview: 'Next card: Contrast with an indirect object requiring "à" (COI lui)!'
      },
      {
        id: 'coi_indirect_soeur',
        topic: 'cod_coi',
        structureId: 'cod_coi',
        topicLabel: 'Pronom COI · Objet Indirect (lui)',
        scene: 'cinema',
        english: 'My sister? I call her every Sunday.',
        targetWords: ['Ma', 'sœur', '?', 'Je', 'lui', 'téléphone', 'tous', 'les', 'dimanches'],
        fullSentence: 'Ma sœur ? Je lui téléphone tous les dimanches.',
        distractors: [
          { word: 'la', trap: 'cod_for_coi', tip: 'Pronoun Error: One says "téléphoner À quelqu’un" (indirect object)! Use COI "lui", never COD "la"!' },
          { word: 'à elle', trap: 'disjunctive_trap', tip: 'Syntax Tip: French replaces "à ma sœur" with the clitic pronoun "lui" before the verb, not "à elle" after!' }
        ],
        purpose: '⚖️ Indirect Object (COI): Verbs with "à" replace person with "lui"',
        purposeNote: 'Contrast with Card 1: In Card 1, "prendre" had no preposition (COD le). But "téléphoner" requires "À" (téléphoner à ma sœur). Therefore, use indirect COI "lui" (for both him AND her)!',
        rule: 'COI pronouns (lui for singular, leur for plural) replace "à + personne": "Je lui téléphone". "Lui" is used for both male and female.',
        nextPreview: 'Next card: Passé Composé with preceding COD—the famous participle agreement!'
      },
      {
        id: 'cod_passe_accord_photos',
        topic: 'cod_coi',
        structureId: 'cod_coi',
        topicLabel: 'Accord COD Précédent · Passé Composé (AVOIR)',
        scene: 'museum-visit',
        english: 'These photos? I took them during the vacation.',
        targetWords: ['Ces', 'photos', '?', 'Je', 'les', 'ai', 'prises', 'pendant', 'les', 'vacances'],
        fullSentence: 'Ces photos ? Je les ai prises pendant les vacances.',
        distractors: [
          { word: 'pris', trap: 'missing_cod_agreement', tip: 'Agreement Error: "les" (ces photos = feminine plural) is placed BEFORE "ai pris"! With AVOIR, the participle agrees with a preceding COD (+es = prises)!' },
          { word: 'leur', trap: 'pronoun_choice', tip: 'Pronoun Error: "photos" is a direct object (COD). Use "les", not "leur"!' }
        ],
        purpose: '⚠️ Preceding COD Agreement: "Les" placed before Avoir demands agreement!',
        purposeNote: 'Essential French Rule: When a direct object pronoun (les photos, fem pl) precedes the auxiliary AVOIR, the past participle MUST agree: "prises" (+es)!',
        rule: 'With AVOIR, if a direct object (COD) is placed BEFORE the verb (le, la, les, que), the participle agrees with it: "Je les ai prises".',
        nextPreview: 'Next card: What about COI in Passé Composé? Does "leur" trigger agreement?'
      },
      {
        id: 'coi_passe_no_accord_parents',
        topic: 'cod_coi',
        structureId: 'cod_coi',
        topicLabel: 'COI au Passé Composé · Pas d’accord avec AVOIR',
        scene: 'bistro-payment',
        english: 'My parents? I spoke to them yesterday evening.',
        targetWords: ['Mes', 'parents', '?', 'Je', 'leur', 'ai', 'parlé', 'hier', 'soir'],
        fullSentence: 'Mes parents ? Je leur ai parlé hier soir.',
        distractors: [
          { word: 'parlés', trap: 'false_coi_agreement', tip: 'COI Agreement Trap: Indirect object pronouns (leur) NEVER trigger agreement with AVOIR! It is "ai parlé", not "ai parlés"!' },
          { word: 'les', trap: 'cod_for_coi', tip: 'Pronoun Error: "parler À quelqu’un" takes indirect COI "leur", not direct "les"!' }
        ],
        purpose: '⚖️ COI Contrast: "Leur" NEVER triggers agreement with AVOIR!',
        purposeNote: 'Contrast with Card 3: In Card 3, COD "les" triggered agreement (prises). But "leur" is an INDIRECT object pronoun (parler à). COI NEVER triggers agreement: "ai parlé" (no +s)!',
        rule: 'COI pronouns (lui, leur) NEVER trigger agreement on the past participle with AVOIR: "Je leur ai parlé".',
        nextPreview: 'Chain Complete! You have mastered COD vs COI pronouns and participle agreement.'
      }
    ]
  },

  // 8. CONNAÎTRE VS SAVOIR CHAIN
  {
    chain: 'savoir_vs_connaitre',
    chainTitle: '💡 Savoir vs Connaître: Savoir-faire & Faits vs Familiarité avec Personnes & Lieux',
    chainType: 'contrast',
    cards: [
      {
        id: 'savoir_infinitif_cuisiner',
        topic: 'connaitre_savoir',
        structureId: 'connaitre_savoir',
        topicLabel: 'Savoir + Infinitif · Compétence / Savoir-faire',
        scene: 'bakery-croissant',
        english: 'I know how to cook delicious crêpes.',
        targetWords: ['Je', 'sais', 'cuisiner', 'de', 'délicieuses', 'crêpes'],
        fullSentence: 'Je sais cuisiner de délicieuses crêpes.',
        distractors: [
          { word: 'connais', trap: 'connaitre_with_verb', tip: 'Verb Error: "Connaître" is NEVER followed by a verb or infinitive! Use "Savoir" for skills and knowledge of doing!' },
          { word: 'sais de', trap: 'preposition_error', tip: 'Preposition Error: "Savoir" is directly followed by the infinitive without "de": "Je sais cuisiner"!' }
        ],
        purpose: '🎯 Savoir + Infinitif: Expressing skills and knowing how to do something',
        purposeNote: 'Starting Savoir vs Connaître Chain: When followed by an infinitive verb (know HOW to do something), French exclusively uses "SAVOIR". "Connaître" is never followed by a verb!',
        rule: 'Use "savoir + infinitif" to express knowing how to do an action (skills, abilities).',
        nextPreview: 'Next card: How do you express familiarity with a place or recipe (using a noun)?'
      },
      {
        id: 'connaitre_nom_recette',
        topic: 'connaitre_savoir',
        structureId: 'connaitre_savoir',
        topicLabel: 'Connaître + Nom · Familiarité',
        scene: 'bakery-croissant',
        english: 'I know a very good traditional recipe.',
        targetWords: ['Je', 'connais', 'une', 'très', 'bonne', 'recette', 'traditionnelle'],
        fullSentence: 'Je connais une très bonne recette traditionnelle.',
        distractors: [
          { word: 'sais', trap: 'savoir_with_noun', tip: 'Noun Error: For familiarity with a person, place, or thing (+ noun), use "Connaître", not "Savoir"!' },
          { word: 'sais une', trap: 'savoir_with_noun', tip: 'Usage Trap: "Savoir" cannot be directly followed by a noun phrase like "une recette"!' }
        ],
        purpose: '⚖️ Connaître + Nom: Expressing familiarity with a noun (person, place, thing)',
        purposeNote: 'Contrast with Card 1: In Card 1, it was followed by a verb (cuisiner ➜ savoir). Here, it is followed by a NOUN (une recette). Familiarity with a noun demands "CONNAÎTRE"!',
        rule: 'Use "connaître + nom" to express familiarity or acquaintance with a person, place, or thing.',
        nextPreview: 'Next card: Knowing a factual clause with "où", "que", or "quand"—which verb applies?'
      },
      {
        id: 'savoir_clause_gare',
        topic: 'connaitre_savoir',
        structureId: 'connaitre_savoir',
        topicLabel: 'Savoir + Proposition · Information / Fait',
        scene: 'train-station',
        english: 'Do you know where the train station is located?',
        targetWords: ['Tu', 'sais', 'où', 'se', 'trouve', 'la', 'gare', '?'],
        fullSentence: 'Tu sais où se trouve la gare ?',
        distractors: [
          { word: 'connais', trap: 'connaitre_with_clause', tip: 'Clause Error: "Connaître" cannot introduce a subclause (où, que, si, quand)! Use "Savoir" for factual information!' },
          { word: 'sais que', trap: 'redundancy', tip: 'Syntax Error: "où" already introduces the question clause, do not add "que"!' }
        ],
        purpose: '🎯 Savoir + Fait: Knowing factual information introduced by où / que / quand',
        purposeNote: 'Contrast: Whenever a clause is introduced by a question word (où, quand, comment, qui, si, que), the verb is ALWAYS "SAVOIR"!',
        rule: 'Use "savoir + où / quand / que / si / comment" to express knowledge of facts and information.',
        nextPreview: 'Next card: Knowing a specific person (neighbor, doctor, colleague)—which verb?'
      },
      {
        id: 'connaitre_personne_voisin',
        topic: 'connaitre_savoir',
        structureId: 'connaitre_savoir',
        topicLabel: 'Connaître + Personne · Être familier avec',
        scene: 'apartment-living',
        english: 'Do you know the new neighbor on the second floor?',
        targetWords: ['Tu', 'connais', 'le', 'nouveau', 'voisin', 'du', 'deuxième', 'étage', '?'],
        fullSentence: 'Tu connais le nouveau voisin du deuxième étage ?',
        distractors: [
          { word: 'sais', trap: 'savoir_with_person', tip: 'Human Object Trap: You can NEVER "savoir" a person! Knowing a human being is always "CONNAÎTRE"!' },
          { word: 'de le', trap: 'contraction_trap', tip: 'Contraction Trap: "de + le" must contract to "du deuxième étage"!' }
        ],
        purpose: '⚖️ Connaître + Personne: People are ALWAYS "connus", never "sus"!',
        purposeNote: 'Master Rule: You can NEVER use "savoir" with a person. Knowing someone personally is 100% "CONNAÎTRE"!',
        rule: 'Always use "connaître" when talking about knowing or being acquainted with people.',
        nextPreview: 'Chain Complete! You have mastered the Savoir vs Connaître distinction.'
      }
    ]
  },

  // 9. TIME & CHRONOLOGY CONTRAST CHAIN
  {
    chain: 'temps_chronologie',
    chainTitle: '⏱️ Temps & Chronologie: Avant de (Infinitif) vs Depuis (Présent) vs Pendant (Passé) vs Il y a (Passé Révolu)',
    chainType: 'contrast',
    cards: [
      {
        id: 'temps_avant_de_partir',
        topic: 'sequence',
        structureId: 'sequence',
        topicLabel: 'Chronologie · Avant de + Infinitif',
        scene: 'walk',
        english: 'Turn off the lights before leaving the house.',
        targetWords: ['Éteignez', 'la', 'lumière', 'avant', 'de', 'partir', 'de', 'la', 'maison'],
        fullSentence: 'Éteignez la lumière avant de partir de la maison.',
        distractors: [
          { word: 'avant que', trap: 'subjunctive_trap', tip: 'Clause Error: When the subject is the same, use "avant de + infinitif", not "avant que"!' },
          { word: 'après de', trap: 'syntax_error', tip: 'Syntax Error: In French, "après" is followed by a compound infinitive (après être parti), never "après de"!' }
        ],
        purpose: '🎯 Preceding Action: "Avant de + infinitif" before an action',
        purposeNote: 'Starting Chronology Chain: In French, to say "before doing something", use "avant de + infinitif". Never forget the preposition "de"!',
        rule: 'Use "avant de + infinitif" to express an action that happens beforehand.',
        nextPreview: 'Next card: How to express an action that started in the past and is STILL continuing right now?'
      },
      {
        id: 'temps_depuis_present',
        topic: 'sequence',
        structureId: 'sequence',
        topicLabel: 'Durée Continue · Depuis + Présent',
        scene: 'apartment-living',
        english: 'I have been living in this apartment for three years.',
        targetWords: ['J’habite', 'dans', 'cet', 'appartement', 'depuis', 'trois', 'ans'],
        fullSentence: 'J’habite dans cet appartement depuis trois ans.',
        distractors: [
          { word: 'pour', trap: 'anglicism_pour', tip: 'Anglicism Error: Never translate English "for" as "pour" for duration! For an ongoing state, use "depuis" + présent!' },
          { word: 'pendant', trap: 'completed_duration', tip: 'Aspect Error: "Pendant" implies the duration is finished! For an action STILL happening now, use "depuis" + présent!' }
        ],
        purpose: '⚖️ Ongoing Duration: "Depuis + Présent" (still happening now)',
        purposeNote: 'Contrast with Card 1: In French, when an action began in the past and continues in the present, use the PRESENT tense + "depuis" (NOT the past tense, NOT "pour")!',
        rule: 'Use "depuis + présent" for an action that started in the past and continues in the present: "J’habite ici depuis 3 ans".',
        nextPreview: 'Next card: What if the stay is completely finished in the past? Which word replaces "depuis"?'
      },
      {
        id: 'temps_pendant_passe',
        topic: 'sequence',
        structureId: 'sequence',
        topicLabel: 'Durée Achevée · Pendant + Passé Composé',
        scene: 'train-station',
        english: 'I lived in Lyon for two years. (finished past)',
        targetWords: ['J’ai', 'habité', 'à', 'Lyon', 'pendant', 'deux', 'ans'],
        fullSentence: 'J’ai habité à Lyon pendant deux ans.',
        distractors: [
          { word: 'depuis', trap: 'ongoing_trap', tip: 'Aspect Error: "Depuis" means you still live in Lyon today! If you left Lyon, use "pendant" + passé composé!' },
          { word: 'pour', trap: 'anglicism_pour', tip: 'Anglicism Error: Never use "pour" for past duration!' }
        ],
        purpose: '⚖️ Completed Duration: "Pendant + Passé Composé" (finished block of time)',
        purposeNote: 'Contrast with Card 2: In Card 2, you STILL live there ("J’habite depuis"). Here, you NO LONGER live in Lyon (finished action). Therefore, use Passé Composé + "pendant"!',
        rule: 'Use "pendant + passé composé" for an action with a defined start and end that is now finished.',
        nextPreview: 'Next card: Expressing a completed moment in the past ("six months ago") using "Il y a"!'
      },
      {
        id: 'temps_ilya_ago',
        topic: 'sequence',
        structureId: 'sequence',
        topicLabel: 'Moment Passé Révolu · Il y a + Durée',
        scene: 'walk',
        english: 'I arrived in Canada six months ago.',
        targetWords: ['Je', 'suis', 'arrivé', 'au', 'Canada', 'il', 'y', 'a', 'six', 'mois'],
        fullSentence: 'Je suis arrivé au Canada il y a six mois.',
        distractors: [
          { word: 'depuis', trap: 'syntax_error', tip: 'Meaning Error: "Depuis six mois" would mean the action of arriving took 6 continuous months! For "ago", use "il y a"!' },
          { word: 'avant', trap: 'anglicism', tip: 'Anglicism Error: French does not say "six mois avant" for "six months ago". Use "il y a six mois"!' }
        ],
        purpose: '🎯 Past Time Anchor: "Il y a + durée" for English "ago"',
        purposeNote: 'Contrast with Cards 2 & 3: To translate "ago" (a point in past time relative to now), use "il y a + durée" with the passé composé: "Je suis arrivé il y a six mois".',
        rule: 'Use "il y a + durée" with a past tense to say "ago": "Je suis arrivé il y a six mois".',
        nextPreview: 'Chain Complete! You have mastered the entire French time preposition system.'
      }
    ]
  },

  // 10. TENSES TRIAD: PASSÉ RÉCENT VS PRÉSENT CONTINU VS FUTUR PROCHE
  {
    chain: 'tenses_recent_pres_futur',
    chainTitle: '⏱️ Les Trois Temps Rapprochés: Passé Récent (Venir de) vs Présent Continu (Être en train de) vs Futur Proche (Aller)',
    chainType: 'contrast',
    cards: [
      {
        id: 'tense_passe_recent_cafe',
        topic: 'sequence',
        structureId: 'sequence',
        topicLabel: 'Passé Récent · Venir de + Infinitif',
        scene: 'coffee',
        english: 'I have just finished my breakfast.',
        targetWords: ['Je', 'viens', 'de', 'terminer', 'mon', 'petit-déjeuner'],
        fullSentence: 'Je viens de terminer mon petit-déjeuner.',
        distractors: [
          { word: 'vais', trap: 'future_trap', tip: 'Tense Flip: "Je vais terminer" is Futur Proche (about to do)! For an action just completed, use "Je viens de"!' },
          { word: 'suis en train', trap: 'continuous_trap', tip: 'Aspect Error: "Être en train de" means you are eating right now! For just finished, use "venir de"!' }
        ],
        purpose: '🎯 Passé Récent: Action just completed a moment ago (Venir de + inf)',
        purposeNote: 'Starting Tenses Triad Chain: When an action occurred just a moment ago ("just did"), use "venir (au présent) + de + infinitif".',
        rule: 'Passé Récent formula: Sujet + venir (présent) + de + infinitif: "Je viens de terminer".',
        nextPreview: 'Next card: Shift to right now in this very moment (Présent Continu)!'
      },
      {
        id: 'tense_pres_continu_cafe',
        topic: 'sequence',
        structureId: 'sequence',
        topicLabel: 'Présent Continu · Être en train de + Infinitif',
        scene: 'coffee',
        english: 'I am in the middle of drinking my hot coffee.',
        targetWords: ['Je', 'suis', 'en', 'train', 'de', 'boire', 'mon', 'café', 'chaud'],
        fullSentence: 'Je suis en train de boire mon café chaud.',
        distractors: [
          { word: 'viens de', trap: 'recent_trap', tip: 'Tense Error: "Je viens de boire" means you finished drinking! To emphasize being in the middle of it right now, use "en train de"!' },
          { word: 'vais', trap: 'future_trap', tip: 'Tense Error: "Je vais boire" is future!' }
        ],
        purpose: '⚖️ Présent Continu: Action currently in progress right now (Être en train de)',
        purposeNote: 'Contrast with Card 1: In Card 1, you just finished ("viens de"). Here, the cup is at your lips right now. French uses "être en train de + infinitif" to emphasize the ongoing process!',
        rule: 'Présent Continu formula: Sujet + être (présent) + en train de + infinitif: "Je suis en train de boire".',
        nextPreview: 'Next card: Shift to the immediate future ("going to do in 10 minutes")!'
      },
      {
        id: 'tense_futur_proche_metro',
        topic: 'sequence',
        structureId: 'sequence',
        topicLabel: 'Futur Proche · Aller + Infinitif',
        scene: 'metro-ticket',
        english: 'I am going to take the subway in ten minutes.',
        targetWords: ['Je', 'vais', 'prendre', 'le', 'métro', 'dans', 'dix', 'minutes'],
        fullSentence: 'Je vais prendre le métro dans dix minutes.',
        distractors: [
          { word: 'viens de', trap: 'recent_trap', tip: 'Tense Error: "Je viens de prendre" means you already took it! For upcoming future, use "Je vais prendre"!' },
          { word: 'suis en train', trap: 'continuous_trap', tip: 'Aspect Error: You haven’t boarded yet! Use Futur Proche "vais prendre"!' }
        ],
        purpose: '⚖️ Futur Proche: Imminent future action (Aller + inf)',
        purposeNote: 'Contrast with Cards 1 & 2: You just completed (viens de) ➜ you are doing now (en train de) ➜ you are about to do (vais + infinitif)!',
        rule: 'Futur Proche formula: Sujet + aller (présent) + infinitif: "Je vais prendre le métro".',
        nextPreview: 'Chain Complete! You have mastered the 3 near-time aspects of French grammar.'
      }
    ]
  },

  // 11. HOUSING & REPAIRS: TENANT VS LANDLORD RESPONSIBILITIES
  {
    chain: 'logement_reparations',
    chainTitle: '🔧 Logement & Réparations: Obligations du Locataire vs Propriétaire & Fuites d’Eau (A1.3 PDF)',
    chainType: 'contrast',
    cards: [
      {
        id: 'repairs_locataire_joint',
        topic: 'repairs',
        structureId: 'repairs',
        topicLabel: 'Logement · Obligation du Locataire (Entretien)',
        scene: 'plumber-repair',
        english: 'The tenant must replace the leaking gasket.',
        targetWords: ['Le', 'locataire', 'doit', 'remplacer', 'le', 'joint', 'qui', 'fuit'],
        fullSentence: 'Le locataire doit remplacer le joint qui fuit.',
        distractors: [
          { word: 'propriétaire', trap: 'responsibility_trap', tip: 'Responsibility Trap (A1.3 PDF): Replacing worn gaskets and minor seals is the tenant’s duty (locataire), not the owner’s!' },
          { word: 'remplace', trap: 'syntax_error', tip: 'Verb Error: After modal "doit", the following verb must be in the infinitive (remplacer)!' }
        ],
        purpose: '🎯 Tenant Duty: Routine minor maintenance (joint, ampoule, poignée)',
        purposeNote: 'Starting Housing Chain (from your A1.3 PDF): In French rental law, minor wear-and-tear maintenance (changing a leaky gasket, clearing a sink trap) is the responsibility of the tenant ("locataire").',
        rule: 'The tenant (locataire) is legally responsible for routine maintenance (remplacer le joint, détartrer, petites réparations).',
        nextPreview: 'Next card: Contrast with major structural breakdowns—who pays?'
      },
      {
        id: 'repairs_proprietaire_chaudiere',
        topic: 'repairs',
        structureId: 'repairs',
        topicLabel: 'Logement · Obligation du Propriétaire (Gros travaux)',
        scene: 'plumber-repair',
        english: 'The landlord must replace the broken boiler.',
        targetWords: ['Le', 'propriétaire', 'doit', 'remplacer', 'la', 'chaudière', 'en', 'panne'],
        fullSentence: 'Le propriétaire doit remplacer la chaudière en panne.',
        distractors: [
          { word: 'locataire', trap: 'responsibility_trap', tip: 'Responsibility Trap (A1.3 PDF): Replacing obsolete heating equipment or heavy appliances is strictly the landlord’s duty (propriétaire)!' },
          { word: 'change', trap: 'syntax_error', tip: 'Verb Error: Modal "doit" takes the infinitive (remplacer)!' }
        ],
        purpose: '⚖️ Landlord Duty: Major repairs & replacement of equipment (chaudière, toiture)',
        purposeNote: 'Contrast with Card 1: In Card 1, the tenant fixed a small gasket. Here, the entire boiler is broken (heavy heating equipment). This is legally paid by the landlord ("propriétaire")!',
        rule: 'The landlord (propriétaire) is legally responsible for major replacements and structural repairs (chaudière, toiture, canalisations vétustes).',
        nextPreview: 'Next card: Practical emergency vocabulary—reporting a leak under the sink!'
      },
      {
        id: 'repairs_fuite_evier',
        topic: 'repairs',
        structureId: 'repairs',
        topicLabel: 'Logement · Déclarer un Sinistre (Fuite d’eau)',
        scene: 'plumber-repair',
        english: 'I have a water leak under the kitchen sink.',
        targetWords: ['J’ai', 'une', 'fuite', 'd’eau', 'sous', 'l’évier', 'de', 'la', 'cuisine'],
        fullSentence: 'J’ai une fuite d’eau sous l’évier de la cuisine.',
        distractors: [
          { word: 'un fuite', trap: 'gender_error', tip: 'Gender Error: "fuite" is feminine: "une fuite d’eau"!' },
          { word: 'sur', trap: 'preposition_error', tip: 'Preposition Error: A leak under the sink is "sous l’évier", not "sur"!' }
        ],
        purpose: '🔧 Problem Diagnosis: Describing a water leak (fuite d’eau)',
        purposeNote: 'Essential emergency phrase from A1.3 PDF: "une fuite d’eau sous l’évier". Notice "fuite" is feminine and elides to "d’eau".',
        rule: 'Use "avoir une fuite d’eau + lieu" to report a plumbing emergency.',
        nextPreview: 'Next card: Immediate precautionary action—shutting off the main water valve!'
      },
      {
        id: 'repairs_couper_eau_urgence',
        topic: 'repairs',
        structureId: 'repairs',
        topicLabel: 'Logement · Mesure d’Urgence (Couper l’eau)',
        scene: 'plumber-repair',
        english: 'You must shut off the water immediately before the plumber arrives.',
        targetWords: ['Il', 'faut', 'couper', 'l’eau', 'immédiatement', 'avant', 'l’arrivée', 'du', 'plombier'],
        fullSentence: 'Il faut couper l’eau immédiatement avant l’arrivée du plombier.',
        distractors: [
          { word: 'coupe', trap: 'syntax_error', tip: 'Syntax Error: Impersonal "il faut" is always followed by an infinitive (couper)!' },
          { word: 'de le', trap: 'contraction_trap', tip: 'Contraction Error: "de + le plombier" must contract to "du plombier"!' }
        ],
        purpose: '🛑 Emergency Protocol: Impersonal obligation "Il faut couper l’eau"',
        purposeNote: 'Protocol from A1.3 PDF: In case of a leak, the first reaction is "couper l’eau" (shut off the water valve). Combines "il faut + infinitif" and "du plombier" (de+le contraction).',
        rule: 'Formula: "Il faut + infinitif" expresses imperative necessity.',
        nextPreview: 'Chain Complete! You have mastered French apartment repairs and tenant law.'
      }
    ]
  },

  // 12. RULES & OBLIGATIONS: LEVELS OF INTERDICTION & NECESSITY
  {
    chain: 'rules_obligation_interdiction',
    chainTitle: '📋 Règles & Règlements: Obligation (Il faut) vs Interdiction Stricte (Interdit de) vs Politesse (Prière de)',
    chainType: 'contrast',
    cards: [
      {
        id: 'rules_il_faut_trier',
        topic: 'rules',
        structureId: 'rules',
        topicLabel: 'Règlement · Obligation Impersonnelle (Il faut)',
        scene: 'dishes',
        english: 'You must sort the waste in the trash bins.',
        targetWords: ['Il', 'faut', 'trier', 'les', 'déchets', 'dans', 'les', 'poubelles'],
        fullSentence: 'Il faut trier les déchets dans les poubelles.',
        distractors: [
          { word: 'trie', trap: 'syntax_error', tip: 'Syntax Error: After "il faut", use the infinitive (trier)!' },
          { word: 'doit', trap: 'subject_mismatch', tip: 'Impersonal Error: Impersonal formula is "Il faut", not "Il doit" for building rules!' }
        ],
        purpose: '🎯 General Rule: Expressing general civic obligation with "Il faut + inf"',
        purposeNote: 'Starting Rules Chain (A1.3 PDF): In residential buildings, community rules and garbage sorting use impersonal "Il faut + infinitif".',
        rule: 'Use "il faut + infinitif" to state a general requirement or community rule.',
        nextPreview: 'Next card: Contrast with a strict legal prohibition (smoking or loud noise)!'
      },
      {
        id: 'rules_interdit_fumer',
        topic: 'rules',
        structureId: 'rules',
        topicLabel: 'Règlement · Interdiction Stricte (Interdit de)',
        scene: 'apartment-living',
        english: 'It is strictly forbidden to smoke in the building.',
        targetWords: ['Il', 'est', 'strictement', 'interdit', 'de', 'fumer', 'dans', 'l’immeuble'],
        fullSentence: 'Il est strictement interdit de fumer dans l’immeuble.',
        distractors: [
          { word: 'à fumer', trap: 'preposition_error', tip: 'Preposition Error: The formula is "Il est interdit DE + infinitif", never "à"!' },
          { word: 'faut fumer', trap: 'polarity_error', tip: 'Meaning Error: "Il faut" would mean you HAVE to smoke! Use "interdit de"!' }
        ],
        purpose: '⚖️ Strict Prohibition: Legal interdiction with "Il est interdit de + inf"',
        purposeNote: 'Contrast with Card 1: In Card 1, it was an obligation (il faut trier). Here, it is a strict legal PROHIBITION: "Il est interdit de + infinitif". Always use preposition "de"!',
        rule: 'Formula: "Il est (strictement) interdit de + infinitif" states a direct prohibition.',
        nextPreview: 'Next card: How to phrase a polite request on a sign (Prière de ne pas...)?'
      },
      {
        id: 'rules_priere_de_bruit',
        topic: 'rules',
        structureId: 'rules',
        topicLabel: 'Règlement · Demande Polie Formelle (Prière de)',
        scene: 'bedtime',
        english: 'Please do not make noise in the hallway.',
        targetWords: ['Prière', 'de', 'ne', 'pas', 'faire', 'de', 'bruit', 'dans', 'le', 'couloir'],
        fullSentence: 'Prière de ne pas faire de bruit dans le couloir.',
        distractors: [
          { word: 'pas faire', trap: 'missing_ne', tip: 'Negation Error: Before an infinitive, "ne pas" stays together: "ne pas faire"!' },
          { word: 'du bruit', trap: 'partitive_negation', tip: 'Partitive Trap: After negative "ne pas faire de", partitive "du" becomes "de"!' }
        ],
        purpose: '⚖️ Formal Politeness: Polite building notice with "Prière de ne pas + inf"',
        purposeNote: 'Contrast with Card 2: Instead of harsh "interdit de", French notices use courteous "Prière de ne pas + infinitif" (Please refrain from). Notice "ne pas" stays glued together before the infinitive!',
        rule: 'Use "Prière de ne pas + infinitif" for formal polite requests on building signs. Note: "ne pas" stays together before an infinitive.',
        nextPreview: 'Next card: Personal duty addressed directly to you with "Vous devez"!'
      },
      {
        id: 'rules_vous_devez_aerer',
        topic: 'rules',
        structureId: 'rules',
        topicLabel: 'Règlement · Devoir Personnel (Vous devez)',
        scene: 'apartment-living',
        english: 'You must air out the rooms for ten minutes every day.',
        targetWords: ['Vous', 'devez', 'aérer', 'les', 'pièces', 'dix', 'minutes', 'chaque', 'jour'],
        fullSentence: 'Vous devez aérer les pièces dix minutes chaque jour.',
        distractors: [
          { word: 'aérez', trap: 'syntax_error', tip: 'Syntax Error: After conjugated modal "devez", the verb must be in the infinitive (aérer)!' },
          { word: 'devez d’aérer', trap: 'unneeded_preposition', tip: 'Preposition Error: Modal "devoir" connects directly to the infinitive without "de"!' }
        ],
        purpose: '🎯 Personal Obligation: Addressed to a tenant with "devoir + inf"',
        purposeNote: 'Contrast with Card 1: Impersonal "il faut" applies to everyone. Personal "Vous devez + infinitif" targets the tenant directly. Never add "de" after devoir!',
        rule: 'Use "Sujet + devoir + infinitif" for direct personal obligations.',
        nextPreview: 'Chain Complete! You have mastered civic rules and notices in French.'
      }
    ]
  },

  // 13. PREPOSITIONS OF PLACE: COUNTRIES & CITIES
  {
    chain: 'prepositions_countries_cities',
    chainTitle: '📍 Prépositions de Lieu: Pays Féminins (en) vs Masculins (au) vs Pluriels (aux) vs Villes (à)',
    chainType: 'contrast',
    cards: [
      {
        id: 'prep_fem_france',
        topic: 'prepositions',
        structureId: 'prepositions',
        topicLabel: 'Préposition de Lieu · Pays Féminin (en)',
        scene: 'walk',
        english: 'I have been living in France for one year.',
        targetWords: ['J’habite', 'en', 'France', 'depuis', 'un', 'an'],
        fullSentence: 'J’habite en France depuis un an.',
        distractors: [
          { word: 'à la', trap: 'country_preposition', tip: 'Preposition Error: Feminine countries take "en", never "à la"!' },
          { word: 'au', trap: 'country_gender', tip: 'Gender Error: "France" ends in -e and is feminine: use "en", not masculine "au"!' }
        ],
        purpose: '🎯 Feminine Country: Countries ending in -e take "en"',
        purposeNote: 'Starting Prepositions of Place Chain: Countries that end in -e (France, Italie, Espagne, Chine) or start with a vowel (Iran) take preposition "en" (without article).',
        rule: 'Use "en + pays féminin / voyelle": en France, en Espagne, en Iran.',
        nextPreview: 'Next card: Contrast with masculine countries ending in a consonant (Canada, Japon)!'
      },
      {
        id: 'prep_masc_canada',
        topic: 'prepositions',
        structureId: 'prepositions',
        topicLabel: 'Préposition de Lieu · Pays Masculin (au)',
        scene: 'walk',
        english: 'I am going to travel to Canada next month.',
        targetWords: ['Je', 'vais', 'voyager', 'au', 'Canada', 'le', 'mois', 'prochain'],
        fullSentence: 'Je vais voyager au Canada le mois prochain.',
        distractors: [
          { word: 'en', trap: 'country_gender', tip: 'Gender Error: Canada is masculine (ends in consonant)! Use "au" (à+le), not "en"!' },
          { word: 'à', trap: 'city_for_country', tip: 'Category Error: "à" is for cities! For a masculine country, use "au"!' }
        ],
        purpose: '⚖️ Masculine Country: Countries ending in a consonant take "au" (à+le)',
        purposeNote: 'Contrast with Card 1: In Card 1, "en France" (feminine). Here, "Canada" is masculine. "À + le Canada" contracts to "AU Canada"!',
        rule: 'Use "au + pays masculin": au Canada, au Japon, au Mexique (exception: ends in -e but masculine).',
        nextPreview: 'Next card: Plural countries like United States or Netherlands—which preposition?'
      },
      {
        id: 'prep_plur_usa',
        topic: 'prepositions',
        structureId: 'prepositions',
        topicLabel: 'Préposition de Lieu · Pays Pluriel (aux)',
        scene: 'cinema',
        english: 'My cousins live in the United States.',
        targetWords: ['Mes', 'cousins', 'vivent', 'aux', 'États-Unis'],
        fullSentence: 'Mes cousins vivent aux États-Unis.',
        distractors: [
          { word: 'en', trap: 'plural_country_error', tip: 'Plural Error: Plural countries take "aux" (à+les), never "en"!' },
          { word: 'au', trap: 'plural_country_error', tip: 'Plural Error: États-Unis is plural: use "aux", not singular "au"!' }
        ],
        purpose: '⚖️ Plural Country: Plural countries take "aux" (à+les)',
        purposeNote: 'Contrast with Cards 1 & 2: Feminine = "en", Masculine = "au", Plural = "aux" (aux États-Unis, aux Pays-Bas).',
        rule: 'Use "aux + pays pluriel": aux États-Unis, aux Pays-Bas.',
        nextPreview: 'Next card: Contrast with cities (Paris, Montréal, Lyon)—which preposition?'
      },
      {
        id: 'prep_city_lyon',
        topic: 'prepositions',
        structureId: 'prepositions',
        topicLabel: 'Préposition de Lieu · Villes (à)',
        scene: 'cafe-terrasse',
        english: 'We are meeting in Lyon this weekend.',
        targetWords: ['Nous', 'nous', 'retrouvons', 'à', 'Lyon', 'ce', 'week-end'],
        fullSentence: 'Nous nous retrouvons à Lyon ce week-end.',
        distractors: [
          { word: 'en', trap: 'country_for_city', tip: 'Category Error: "en" is for countries or regions! For a city, always use "à"!' },
          { word: 'au', trap: 'country_for_city', tip: 'Category Error: Cities do not take masculine country article "au"!' }
        ],
        purpose: '⚖️ Cities: All cities take simple "à" (no gender distinction)',
        purposeNote: 'Contrast: Regardless of country gender, all cities take simple "à": à Paris, à Montréal, à Lyon, à Téhéran.',
        rule: 'Always use "à + ville": à Paris, à Lyon, à Toronto.',
        nextPreview: 'Chain Complete! You have mastered geographical prepositions in French.'
      }
    ]
  },

  // 14. AVOIR COD PRECEDING AGREEMENT CHAIN
  {
    chain: 'avoir_preceding_cod_shift',
    chainTitle: '🍎 Avoir & Participe Passé: COD Après (Pas d’accord) vs COD Avant (Accord)',
    chainType: 'contrast',
    cards: [
      {
        id: 'avoir_cod_apres_pomme',
        topic: 'avoir',
        structureId: 'avoir',
        topicLabel: 'Participe AVOIR · COD Après le Verbe (Pas d’accord)',
        scene: 'groceries-cart',
        english: 'I ate a delicious red apple.',
        targetWords: ['J’ai', 'mangé', 'une', 'délicieuse', 'pomme', 'rouge'],
        fullSentence: 'J’ai mangé une délicieuse pomme rouge.',
        distractors: [
          { word: 'mangée', trap: 'false_subject_agreement', tip: 'Agreement Error: With AVOIR, the participle does NOT agree with the subject, nor with a COD placed after! It is "mangé", not "mangée"!' },
          { word: 'suis mangé', trap: 'auxiliary_error', tip: 'Auxiliary Error: "manger" uses AVOIR, not ÊTRE!' }
        ],
        purpose: '🌱 Base Rule: COD placed AFTER the verb ➜ NO agreement on participle',
        purposeNote: 'Starting Avoir COD Chain: In standard sentences with AVOIR, what did I eat? "Une pomme" (placed AFTER). When the direct object is placed after, the participle never agrees!',
        rule: 'With auxiliary AVOIR, there is NO agreement when the direct object is placed after the verb.',
        nextPreview: 'Next card: What happens when the same apple is placed BEFORE the verb using "que"?'
      },
      {
        id: 'avoir_cod_avant_que_pomme',
        topic: 'avoir',
        structureId: 'avoir',
        topicLabel: 'Accord COD Précédent · Pronom Relatif "que" (+e)',
        scene: 'groceries-cart',
        english: 'The red apple that I ate was delicious.',
        targetWords: ['La', 'pomme', 'rouge', 'que', 'j’ai', 'mangée', 'était', 'délicieuse'],
        fullSentence: 'La pomme rouge que j’ai mangée était délicieuse.',
        distractors: [
          { word: 'mangé', trap: 'missing_preceding_agreement', tip: 'Agreement Trap: "que" represents "la pomme" (fém sing) placed BEFORE "ai mangé"! With AVOIR, you MUST add +e (mangée)!' },
          { word: 'qui', trap: 'relative_pronoun', tip: 'Relative Pronoun Error: "que" is for direct objects, "qui" is for subjects!' }
        ],
        purpose: '⚠️ Transformation: Preceding "que" (la pomme) forces feminine agreement (+e)!',
        purposeNote: 'Direct Contrast with Card 1: In Card 1, "J’ai mangé une pomme" (no agreement). But here, "la pomme" is placed BEFORE the verb via relative "que". Now the participle MUST agree: "mangée" (+e)!',
        rule: 'When relative "que" represents a direct object placed BEFORE the verb, the past participle agrees with that noun in gender and number.',
        nextPreview: 'Next card: Plural objects—contrast sending letters (after) vs receiving them (before)!'
      },
      {
        id: 'avoir_cod_apres_lettres',
        topic: 'avoir',
        structureId: 'avoir',
        topicLabel: 'Participe AVOIR · COD Pluriel Après (Pas d’accord)',
        scene: 'write',
        english: 'He sent the official letters this morning.',
        targetWords: ['Il', 'a', 'envoyé', 'les', 'lettres', 'officielles', 'ce', 'matin'],
        fullSentence: 'Il a envoyé les lettres officielles ce matin.',
        distractors: [
          { word: 'envoyées', trap: 'false_post_agreement', tip: 'Trap: "les lettres" is placed AFTER the verb, so "envoyé" takes NO feminine plural agreement!' },
          { word: 'est envoyé', trap: 'auxiliary_error', tip: 'Auxiliary Error: "envoyer" uses AVOIR, not ÊTRE!' }
        ],
        purpose: '🌱 Plural Direct Object placed AFTER ➜ NO plural agreement',
        purposeNote: 'Notice again: Even though "les lettres" is feminine plural, it is placed AFTER the verb, so the participle stays base "envoyé" (no +es)!',
        rule: 'COD placed after verb = no agreement.',
        nextPreview: 'Next card: Replace "les lettres" with pronoun "les" placed before the verb!'
      },
      {
        id: 'avoir_cod_avant_pronom_lettres',
        topic: 'avoir',
        structureId: 'avoir',
        topicLabel: 'Accord COD Précédent · Pronom "les" (+es)',
        scene: 'write',
        english: 'The official letters? He sent them this morning.',
        targetWords: ['Les', 'lettres', 'officielles', '?', 'Il', 'les', 'a', 'envoyées', 'ce', 'matin'],
        fullSentence: 'Les lettres officielles ? Il les a envoyées ce matin.',
        distractors: [
          { word: 'envoyé', trap: 'missing_pronoun_agreement', tip: 'Agreement Error: Pronoun "les" represents "les lettres" (fém pl) placed BEFORE the auxiliary! Add +es (envoyées)!' },
          { word: 'leur a', trap: 'pronoun_error', tip: 'Pronoun Error: "lettres" is a direct object (COD). Use "les", not "leur"!' }
        ],
        purpose: '⚠️ Pronoun Shift: Preceding pronoun "les" triggers +es agreement!',
        purposeNote: 'Look at the transformation from Card 3: In Card 3, "a envoyé les lettres" (no +es). Here, "les lettres" becomes pronoun "les" placed BEFORE the verb: "Il les a envoyées" (+es)!',
        rule: 'Preceding direct object pronoun "les" forces agreement on the participle with AVOIR: "Il les a envoyées".',
        nextPreview: 'Chain Complete! You master the Avoir preceding direct object rule.'
      }
    ]
  },

  // 15. MAISON D'ÊTRE OPPOSITE PAIRS CHAIN
  {
    chain: 'maison_etre_opposites',
    chainTitle: '🏠 Maison d’Être: Verbes de Mouvement Opposés & Accords de Sujet',
    chainType: 'contrast',
    cards: [
      {
        id: 'opp_entrer_fem',
        topic: 'maison',
        structureId: 'maison',
        topicLabel: 'Maison d’Être · Entrer (Mouvement)',
        scene: 'apartment-living',
        english: 'She entered into the living room.',
        targetWords: ['Elle', 'est', 'entrée', 'dans', 'le', 'salon'],
        fullSentence: 'Elle est entrée dans le salon.',
        distractors: [
          { word: 'a', trap: 'auxiliary_error', tip: 'Auxiliary Error: "entrer" is a Maison d’Être verb! Use ÊTRE (est), not AVOIR (a)!' },
          { word: 'entré', trap: 'missing_agreement', tip: 'Agreement Error: "Elle" is feminine singular: add +e (entrée)!' }
        ],
        purpose: '🎯 Movement Entry: "Entrer" uses ÊTRE + feminine agreement (+e)',
        purposeNote: 'Starting Opposites Chain: "Entrer" is an intransitive movement verb of La Maison d’Être. It conjugates with ÊTRE and agrees with Elle (+e).',
        rule: '"Entrer" takes auxiliary ÊTRE and agrees with the subject.',
        nextPreview: 'Next card: Contrast with its exact opposite: "Sortir" (leaving the room)!'
      },
      {
        id: 'opp_sortir_fem',
        topic: 'maison',
        structureId: 'maison',
        topicLabel: 'Maison d’Être · Sortir (Opposé d’Entrer)',
        scene: 'walk',
        english: 'She went out of the living room.',
        targetWords: ['Elle', 'est', 'sortie', 'du', 'salon'],
        fullSentence: 'Elle est sortie du salon.',
        distractors: [
          { word: 'a', trap: 'auxiliary_error', tip: 'Auxiliary Error: Intransitive movement uses ÊTRE (est), not AVOIR!' },
          { word: 'de le', trap: 'contraction_trap', tip: 'Contraction Trap: "de + le salon" contracts to "du salon"!' }
        ],
        purpose: '⚖️ Movement Exit: "Sortir" (opposite of entrer) uses ÊTRE + (+e)',
        purposeNote: 'Opposite pair: Entrer (to enter) ➜ Sortir (to exit). Both use auxiliary ÊTRE and agree in gender (+e) with Elle!',
        rule: '"Sortir" is the antonym of "entrer". Both use ÊTRE for intransitive movement.',
        nextPreview: 'Next card: Another vertical pair—Monter (going up) vs Descendre (going down)!'
      },
      {
        id: 'opp_monter_plur',
        topic: 'maison',
        structureId: 'maison',
        topicLabel: 'Maison d’Être · Monter (Monter au sommet)',
        scene: 'walk',
        english: 'They climbed up to the top of the hill. (masculine plural)',
        targetWords: ['Ils', 'sont', 'montés', 'au', 'sommet', 'de', 'la', 'colline'],
        fullSentence: 'Ils sont montés au sommet de la colline.',
        distractors: [
          { word: 'ont', trap: 'auxiliary_error', tip: 'Auxiliary Error: Climbing oneself is movement: use ÊTRE (sont), not AVOIR!' },
          { word: 'monté', trap: 'missing_plural', tip: 'Plural Agreement: "Ils" is plural: add +s (montés)!' }
        ],
        purpose: '🎯 Vertical Ascent: "Monter" uses ÊTRE + plural agreement (+s)',
        purposeNote: 'Monter describes upward movement. With "Ils", auxiliary is "sont" and participle agrees with +s.',
        rule: '"Monter" takes auxiliary ÊTRE when intransitive.',
        nextPreview: 'Next card: The exact opposite: Descendre (coming down)!'
      },
      {
        id: 'opp_descendre_plur',
        topic: 'maison',
        structureId: 'maison',
        topicLabel: 'Maison d’Être · Descendre (Opposé de Monter)',
        scene: 'walk',
        english: 'They came down from the hill.',
        targetWords: ['Ils', 'sont', 'descendus', 'de', 'la', 'colline'],
        fullSentence: 'Ils sont descendus de la colline.',
        distractors: [
          { word: 'ont', trap: 'auxiliary_error', tip: 'Auxiliary Error: Descending oneself uses ÊTRE (sont), not AVOIR!' },
          { word: 'descendu', trap: 'missing_plural', tip: 'Plural Agreement: "Ils" is plural: add +s (descendus)!' }
        ],
        purpose: '⚖️ Vertical Descent: "Descendre" (opposite of monter) uses ÊTRE + (+s)',
        purposeNote: 'Opposite pair: Monter (to ascend) ➜ Descendre (to descend). Notice the irregular participle ending in -u (descendu + s = descendus)!',
        rule: '"Descendre" takes auxiliary ÊTRE and its participle ends in -u.',
        nextPreview: 'Chain Complete! You have mastered opposite movement verb pairs.'
      }
    ]
  },

  // 16. CAUSE CONTRACTIONS & GENDER CHAIN
  {
    chain: 'cause_contractions_gender',
    chainTitle: '⚡ Cause: Contractions Prépositionnelles (À cause du / de la / de l’ / des)',
    chainType: 'contrast',
    cards: [
      {
        id: 'cause_cont_du_travail',
        topic: 'cause',
        structureId: 'cause',
        topicLabel: 'Cause & Contraction · Masculin (du = de + le)',
        scene: 'work',
        english: 'I am exhausted because of the heavy work.',
        targetWords: ['Je', 'suis', 'épuisé', 'à', 'cause', 'du', 'travail', 'lourd'],
        fullSentence: 'Je suis épuisé à cause du travail lourd.',
        distractors: [
          { word: 'de le', trap: 'contraction_error', tip: 'Contraction Error: In French, "de + le" is forbidden! It MUST contract to "du travail"!' },
          { word: 'grâce au', trap: 'polarity_error', tip: 'Polarity Error: Exhaustion is negative: use "à cause de", not "grâce à"!' }
        ],
        purpose: '🎯 Masculine Contraction: "de + le" becomes "du"',
        purposeNote: 'Starting Contractions Chain: "À cause de" combines with the article of the following noun. With masculine "le travail", "de + le" contracts to "DU"!',
        rule: 'de + le = du (à cause du travail). Never write "de le"!',
        nextPreview: 'Next card: Feminine noun (la pluie)—does it contract?'
      },
      {
        id: 'cause_cont_dela_pluie',
        topic: 'cause',
        structureId: 'cause',
        topicLabel: 'Cause & Article · Féminin (de la - pas de contraction)',
        scene: 'rain',
        english: 'The match is canceled because of the rain.',
        targetWords: ['Le', 'match', 'est', 'annulé', 'à', 'cause', 'de', 'la', 'pluie'],
        fullSentence: 'Le match est annulé à cause de la pluie.',
        distractors: [
          { word: 'du', trap: 'gender_mismatch', tip: 'Gender Error: "pluie" is feminine! Use "de la pluie", not masculine "du"!' },
          { word: 'grâce à la', trap: 'polarity_error', tip: 'Polarity Error: Match cancellation is negative: use "à cause de"!' }
        ],
        purpose: '⚖️ Feminine Noun: "de la" remains separate (no contraction)',
        purposeNote: 'Contrast with Card 1: Masculine contracted to "du". Feminine nouns do NOT contract: "de la pluie" stays two separate words!',
        rule: 'Feminine singular remains "de la" (à cause de la pluie).',
        nextPreview: 'Next card: Noun starting with a vowel (l’accident)—watch the elision!'
      },
      {
        id: 'cause_cont_del_accident',
        topic: 'cause',
        structureId: 'cause',
        topicLabel: 'Cause & Élision · Voyelle (de l’)',
        scene: 'train-station',
        english: 'The road is blocked because of the accident.',
        targetWords: ['La', 'route', 'est', 'bloquée', 'à', 'cause', 'de', 'l’accident'],
        fullSentence: 'La route est bloquée à cause de l’accident.',
        distractors: [
          { word: 'du accident', trap: 'elision_missing', tip: 'Elision Error: Before a vowel sound, "de" elides to "de l’accident", not "du"!' },
          { word: 'de le accident', trap: 'syntax_error', tip: 'Syntax Error: Always elide before vowels: "de l’accident"!' }
        ],
        purpose: '⚖️ Vowel Elision: Nouns starting with a vowel take "de l’"',
        purposeNote: 'Contrast with Cards 1 & 2: Before vowels, gender is neutralized: both masculine and feminine take "de l’" (de l’accident, de l’inondation).',
        rule: 'Before vowels and mute h, use "de l’": à cause de l’accident.',
        nextPreview: 'Next card: Plural nouns (les grèves)—what does "de + les" contract to?'
      },
      {
        id: 'cause_cont_des_greves',
        topic: 'cause',
        structureId: 'cause',
        topicLabel: 'Cause & Contraction · Pluriel (des = de + les)',
        scene: 'train-station',
        english: 'The buses are stopped because of the strikes.',
        targetWords: ['Les', 'bus', 'sont', 'arrêtés', 'à', 'cause', 'des', 'grèves'],
        fullSentence: 'Les bus sont arrêtés à cause des grèves.',
        distractors: [
          { word: 'de les', trap: 'contraction_error', tip: 'Contraction Error: "de + les" is strictly forbidden! It MUST contract to "des grèves"!' },
          { word: 'de la', trap: 'number_mismatch', tip: 'Number Error: "grèves" is plural: use "des", not singular "de la"!' }
        ],
        purpose: '⚖️ Plural Contraction: "de + les" becomes "des"',
        purposeNote: 'Contrast: Plural nouns contract "de + les" into "DES": "à cause des grèves". Never write "de les"!',
        rule: 'de + les = des (à cause des grèves / en raison des travaux).',
        nextPreview: 'Chain Complete! You have mastered all prepositional contractions for cause.'
      }
    ]
  },
  {
    "chain": "se_faire_subjects_tenses",
    "chainTitle": "🔒 Se faire + Infinitif: Mutation des Sujets & Tenses (Tu ➜ Nous ➜ Futur ➜ Passé Invariable)",
    "chainType": "subject_shift",
    "cards": [
      {
        "id": "sefaire_tu_masser",
        "topic": "se_faire",
        "structureId": "se_faire",
        "topicLabel": "Se faire + Infinitif · Sujet Tu",
        "scene": "doctor-office",
        "english": "Are you getting your shoulders massaged?",
        "targetWords": [
          "Tu",
          "te",
          "fais",
          "masser",
          "les",
          "épaules",
          "?"
        ],
        "fullSentence": "Tu te fais masser les épaules ?",
        "distractors": [
          {
            "word": "te masses",
            "trap": "reflexive_meaning",
            "tip": "Meaning Trap: \"Tu te masses\" means you massage yourself! With a therapist, use \"Tu te fais masser\"!"
          },
          {
            "word": "fais masser",
            "trap": "missing_reflexive",
            "tip": "Pronoun Error: The reflexive pronoun \"te\" is required: \"Tu te fais masser\"!"
          }
        ],
        "purpose": "🔄 Subject Shift: Tu te fais + infinitif (service received by Tu)",
        "purposeNote": "Starting Se Faire Subject Shift: Notice the pronoun agreement for \"tu\": \"te fais\" + unchanged infinitive (\"masser\").",
        "rule": "Formula: Tu + te + fais + infinitif.",
        "nextPreview": "Next card: Shift to \"Nous\" (first person plural)—notice double nous!"
      },
      {
        "id": "sefaire_nous_courses",
        "topic": "se_faire",
        "structureId": "se_faire",
        "topicLabel": "Se faire + Infinitif · Sujet Nous (Double Nous)",
        "scene": "groceries-cart",
        "english": "We have our healthy groceries delivered.",
        "targetWords": [
          "Nous",
          "nous",
          "faisons",
          "livrer",
          "des",
          "courses",
          "saines"
        ],
        "fullSentence": "Nous nous faisons livrer des courses saines.",
        "distractors": [
          {
            "word": "nous livrons",
            "trap": "reflexive_meaning",
            "tip": "Meaning Trap: \"Nous nous livrons\" does not make sense! For grocery delivery, use \"Nous nous faisons livrer\"!"
          },
          {
            "word": "faisons livrer",
            "trap": "missing_reflexive",
            "tip": "Pronoun Error: Double \"nous\" is required: \"Nous nous faisons livrer\"!"
          }
        ],
        "purpose": "🔄 Subject Shift: Nous nous faisons + infinitif (double pronoun)",
        "purposeNote": "Contrast with Card 1: With \"Nous\", both subject and reflexive pronoun are identical: \"Nous nous faisons livrer\"!",
        "rule": "Formula: Nous + nous + faisons + infinitif.",
        "nextPreview": "Next card: Shift tense to Futur Proche (Je vais me faire...)!"
      },
      {
        "id": "sefaire_futur_vacciner",
        "topic": "se_faire",
        "structureId": "se_faire",
        "topicLabel": "Se faire + Infinitif · Futur Proche (Aller + me faire)",
        "scene": "pharmacy",
        "english": "I am going to get vaccinated at the pharmacy tomorrow.",
        "targetWords": [
          "Je",
          "vais",
          "me",
          "faire",
          "vacciner",
          "à",
          "la",
          "pharmacie",
          "demain"
        ],
        "fullSentence": "Je vais me faire vacciner à la pharmacie demain.",
        "distractors": [
          {
            "word": "me vais faire",
            "trap": "pronoun_placement",
            "tip": "Pronoun Placement: In Futur Proche, the reflexive pronoun goes directly before the infinitive \"faire\": \"vais ME faire\", never \"me vais\"!"
          },
          {
            "word": "vais vacciner",
            "trap": "missing_causative",
            "tip": "Meaning Shift: \"Je vais vacciner\" means you are the nurse injecting someone else!"
          }
        ],
        "purpose": "🔄 Tense Shift: Futur Proche with Se faire (Pronoun placement before faire)",
        "purposeNote": "Critical Placement: In the Futur Proche (aller + infinitif), the reflexive pronoun sits right before \"faire\": \"Je vais ME faire vacciner\", NOT \"Je me vais\"!",
        "rule": "Futur Proche formula: Sujet + aller (présent) + [me/te/se] + faire + infinitif.",
        "nextPreview": "Next card: Shift to Passé Composé plural—does \"fait\" take +es with Elles?"
      },
      {
        "id": "sefaire_passe_invariable_plur",
        "topic": "se_faire",
        "structureId": "se_faire",
        "topicLabel": "Se faire + Infinitif · Passé Composé Pluriel Invariable",
        "scene": "coiffeur-haircut",
        "english": "They had their hair styled for the party. (two women)",
        "targetWords": [
          "Elles",
          "se",
          "sont",
          "fait",
          "coiffer",
          "pour",
          "la",
          "fête"
        ],
        "fullSentence": "Elles se sont fait coiffer pour la fête.",
        "distractors": [
          {
            "word": "faites",
            "trap": "false_agreement",
            "tip": "Trap: Even with \"Elles\", the participle \"fait\" before an infinitive NEVER agrees! It is always \"fait\", never \"faites\"!"
          },
          {
            "word": "ont fait",
            "trap": "auxiliary_error",
            "tip": "Auxiliary Error: Reflexive \"se sont\" requires ÊTRE!"
          }
        ],
        "purpose": "⚠️ Plural Invariability Trap: \"Fait\" is 100% invariable even with Elles!",
        "purposeNote": "Ultimate Rule Test: Even with feminine plural \"Elles\", because \"fait\" is followed by infinitive \"coiffer\", it has ZERO agreement: \"se sont fait coiffer\" (never faites)!",
        "rule": "In \"se faire + infinitif\", \"fait\" is strictly invariable in all circumstances.",
        "nextPreview": "Chain Complete! You have mastered Se Faire across all subjects and tenses."
      }
    ]
  },
  {
    "chain": "neque_shifts",
    "chainTitle": "🚫 Ne ... que: Variation des Sujets & Temps (Je ➜ Nous ➜ Passé ➜ Futur)",
    "chainType": "subject_shift",
    "cards": [
      {
        "id": "neque_shift_je_legumes",
        "topic": "neque",
        "structureId": "neque",
        "topicLabel": "Ne ... que · Présent (Je)",
        "scene": "groceries-cart",
        "english": "I only eat fresh organic vegetables.",
        "targetWords": [
          "Je",
          "ne",
          "mange",
          "que",
          "des",
          "légumes",
          "biologiques",
          "frais"
        ],
        "fullSentence": "Je ne mange que des légumes biologiques frais.",
        "distractors": [
          {
            "word": "pas",
            "trap": "negation_error",
            "tip": "Meaning Error: \"ne mange pas\" means you do not eat vegetables! For \"only vegetables\", use \"que\"!"
          },
          {
            "word": "seulement",
            "trap": "anglicism",
            "tip": "Tip: French prefers \"ne ... que\" wrapping the verb over \"seulement\"!"
          }
        ],
        "purpose": "🌱 Base Form: Je ne mange que ... (first person restriction)",
        "purposeNote": "Starting Ne ... que Shift Chain: Notice how \"ne\" precedes the verb and \"que\" directly precedes the noun: \"Je ne mange que des légumes\".",
        "rule": "Formula: Sujet + ne + verbe + que + complément.",
        "nextPreview": "Next card: Shift subject to \"Nous\" (first person plural)!"
      },
      {
        "id": "neque_shift_nous_train",
        "topic": "neque",
        "structureId": "neque",
        "topicLabel": "Ne ... que · Présent (Nous)",
        "scene": "train-station",
        "english": "We only travel by high-speed train.",
        "targetWords": [
          "Nous",
          "ne",
          "voyageons",
          "qu’en",
          "train",
          "à",
          "grande",
          "vitesse"
        ],
        "fullSentence": "Nous ne voyageons qu’en train à grande vitesse.",
        "distractors": [
          {
            "word": "que en",
            "trap": "elision_missing",
            "tip": "Elision Error: \"que\" elides to \"qu’\" before vowels: \"qu’en train\"!"
          },
          {
            "word": "pas",
            "trap": "negation_error",
            "tip": "Meaning Error: For \"only by train\", use \"qu’en\"!"
          }
        ],
        "purpose": "🔄 Subject Shift: Nous ne voyageons qu’en ... (elision qu’en)",
        "purposeNote": "Notice the mutation from Card 1: Subject is \"Nous\" (voyageons), and before the vowel in \"en\", \"que\" elides to \"qu’\"!",
        "rule": "\"Que\" elides to \"qu’\" before words starting with a vowel: \"qu’en train\".",
        "nextPreview": "Next card: Shift to Passé Composé—observe the placement of \"que\"!"
      },
      {
        "id": "neque_shift_passe_billets",
        "topic": "neque",
        "structureId": "neque",
        "topicLabel": "Ne ... que · Passé Composé (Placement de que)",
        "scene": "cinema",
        "english": "He only bought two cinema tickets.",
        "targetWords": [
          "Il",
          "n’a",
          "acheté",
          "que",
          "deux",
          "billets",
          "de",
          "cinéma"
        ],
        "fullSentence": "Il n’a acheté que deux billets de cinéma.",
        "distractors": [
          {
            "word": "n’a que acheté",
            "trap": "que_placement",
            "tip": "Placement Error: \"que\" does NOT go before the participle! It stays before \"deux billets\"!"
          },
          {
            "word": "pas",
            "trap": "negation_error",
            "tip": "Meaning Error: \"n’a pas acheté\" means he bought nothing! For \"only two\", use \"que\"!"
          }
        ],
        "purpose": "🔄 Tense Shift: Passé Composé placement of \"que\" (after participle)",
        "purposeNote": "Crucial Tense Shift: In the Passé Composé, \"ne\" wraps the auxiliary (\"n’a\"), but \"que\" stays right before the object (\"que deux billets\")!",
        "rule": "Passé Composé: Sujet + ne + auxiliaire + participe + QUE + complément.",
        "nextPreview": "Next card: Shift to Futur Proche—where does \"ne ... que\" wrap?"
      },
      {
        "id": "neque_shift_futur_question",
        "topic": "neque",
        "structureId": "neque",
        "topicLabel": "Ne ... que · Futur Proche (Aller)",
        "scene": "work",
        "english": "She is only going to ask one single question.",
        "targetWords": [
          "Elle",
          "ne",
          "va",
          "poser",
          "qu’une",
          "seule",
          "question"
        ],
        "fullSentence": "Elle ne va poser qu’une seule question.",
        "distractors": [
          {
            "word": "ne va que poser",
            "trap": "que_placement",
            "tip": "Placement Error: \"que\" restricts \"une seule question\", so it goes right before it: \"qu’une seule question\"!"
          },
          {
            "word": "pas",
            "trap": "negation_error",
            "tip": "Meaning Error: For \"only one question\", use \"qu’une\"!"
          }
        ],
        "purpose": "🔄 Tense Shift: Futur Proche placement (ne wraps aller, que precedes object)",
        "purposeNote": "Observe Futur Proche: \"ne\" wraps conjugated \"va\", while \"qu’\" sits before \"une seule question\": \"Elle ne va poser qu’une seule question\"!",
        "rule": "Futur Proche: Sujet + ne + aller + infinitif + QUE + complément.",
        "nextPreview": "Chain Complete! You master Ne ... que across all persons and tenses."
      }
    ]
  },
  {
    "chain": "maison_etre_subject_shifts",
    "chainTitle": "🏠 Maison d’Être: Subject Agreement Cycle avec Aller (Il ➜ Elle ➜ Ils ➜ Elles ➜ Politesse)",
    "chainType": "subject_shift",
    "cards": [
      {
        "id": "maison_shift_il_pharmacie",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Maison d’Être · Sujet Il (Masc sing: -é)",
        "scene": "pharmacy",
        "english": "He went to the pharmacy this morning.",
        "targetWords": [
          "Il",
          "est",
          "allé",
          "à",
          "la",
          "pharmacie",
          "ce",
          "matin"
        ],
        "fullSentence": "Il est allé à la pharmacie ce matin.",
        "distractors": [
          {
            "word": "a",
            "trap": "auxiliary_error",
            "tip": "Auxiliary Error: \"aller\" is a movement verb of La Maison d’Être! Use ÊTRE (est), never AVOIR (a)!"
          },
          {
            "word": "allée",
            "trap": "gender_agreement",
            "tip": "Gender Agreement: \"Il\" is masculine singular: \"allé\" (no +e)!"
          }
        ],
        "purpose": "🌱 Base Subject: Il (masculine singular · base ending -é)",
        "purposeNote": "Starting Maison d’Être Agreement Cycle: \"Aller\" uses ÊTRE. Masculine singular has base participle \"allé\".",
        "rule": "Il + est + allé. Masculine singular takes no added letters.",
        "nextPreview": "Next card: Shift subject to \"Elle\" (feminine singular)—watch the feminine +e appear!"
      },
      {
        "id": "maison_shift_elle_pharmacie",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Maison d’Être · Sujet Elle (Fém sing: +e)",
        "scene": "pharmacy",
        "english": "She went to the pharmacy this morning.",
        "targetWords": [
          "Elle",
          "est",
          "allée",
          "à",
          "la",
          "pharmacie",
          "ce",
          "matin"
        ],
        "fullSentence": "Elle est allée à la pharmacie ce matin.",
        "distractors": [
          {
            "word": "a",
            "trap": "auxiliary_error",
            "tip": "Auxiliary Error: \"aller\" takes ÊTRE (est), not AVOIR!"
          },
          {
            "word": "allé",
            "trap": "missing_agreement",
            "tip": "Agreement Error: \"Elle\" is feminine singular: add +e (allée)!"
          }
        ],
        "purpose": "🔄 Subject Shift: Il ➜ Elle (feminine singular +e agreement)",
        "purposeNote": "Notice the mutation from Card 1: \"Il est allé\" becomes \"Elle est allée\". ÊTRE forces feminine agreement (+e)!",
        "rule": "Elle + est + allée (+e).",
        "nextPreview": "Next card: Shift to \"Ils\" (masculine plural)—notice auxiliary \"sont\" and plural +s!"
      },
      {
        "id": "maison_shift_ils_pharmacie",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Maison d’Être · Sujet Ils (Masc pluriel: +s)",
        "scene": "pharmacy",
        "english": "They went to the pharmacy this morning. (masculine plural)",
        "targetWords": [
          "Ils",
          "sont",
          "allés",
          "à",
          "la",
          "pharmacie",
          "ce",
          "matin"
        ],
        "fullSentence": "Ils sont allés à la pharmacie ce matin.",
        "distractors": [
          {
            "word": "ont",
            "trap": "auxiliary_error",
            "tip": "Auxiliary Error: \"aller\" takes ÊTRE (sont), not AVOIR (ont)!"
          },
          {
            "word": "allé",
            "trap": "missing_plural",
            "tip": "Plural Agreement: \"Ils\" is plural: add +s (allés)!"
          }
        ],
        "purpose": "🔄 Subject Shift: Elle ➜ Ils (auxiliary sont + plural +s agreement)",
        "purposeNote": "Notice the mutation: Auxiliary becomes \"sont\" and participle agrees in number (+s): \"Ils sont allés\".",
        "rule": "Ils + sont + allés (+s).",
        "nextPreview": "Next card: Shift to \"Elles\" (feminine plural)—both +e AND +s!"
      },
      {
        "id": "maison_shift_elles_pharmacie",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Maison d’Être · Sujet Elles (Fém pluriel: +es)",
        "scene": "pharmacy",
        "english": "They went to the pharmacy this morning. (all women)",
        "targetWords": [
          "Elles",
          "sont",
          "allées",
          "à",
          "la",
          "pharmacie",
          "ce",
          "matin"
        ],
        "fullSentence": "Elles sont allées à la pharmacie ce matin.",
        "distractors": [
          {
            "word": "ont",
            "trap": "auxiliary_error",
            "tip": "Auxiliary Error: \"aller\" takes ÊTRE (sont), never AVOIR (ont)!"
          },
          {
            "word": "allés",
            "trap": "gender_agreement",
            "tip": "Gender Agreement: \"Elles\" is feminine plural: add +e AND +s = allées!"
          }
        ],
        "purpose": "🔄 Subject Shift: Ils ➜ Elles (both feminine +e and plural +s = +es)",
        "purposeNote": "Notice the full feminine plural agreement: \"Elles sont allées\" (+es)!",
        "rule": "Elles + sont + allées (+es).",
        "nextPreview": "Next card: Polite \"Vous\" addressed to a lady—does it take +s?"
      },
      {
        "id": "maison_shift_madame_vous",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Maison d’Être · Vous de Politesse Féminin (Singulier)",
        "scene": "doctor-office",
        "english": "Madam, did you go to the doctor yesterday?",
        "targetWords": [
          "Madame",
          "vous",
          "êtes",
          "allée",
          "chez",
          "le",
          "médecin",
          "hier",
          "?"
        ],
        "fullSentence": "Madame vous êtes allée chez le médecin hier ?",
        "distractors": [
          {
            "word": "allées",
            "trap": "polite_plural_trap",
            "tip": "Singular Trap: \"Madame\" is ONE person! Do not add plural +s to polite singular vous!"
          },
          {
            "word": "avez allé",
            "trap": "auxiliary_error",
            "tip": "Auxiliary Error: \"aller\" takes ÊTRE (êtes), not AVOIR!"
          }
        ],
        "purpose": "⚠️ Politeness Nuance: Polite \"Vous\" to a woman has +e but NO plural +s!",
        "purposeNote": "Mastery Check: \"Madame\" is feminine singular. With polite \"vous\", add feminine +e, but DO NOT add plural +s: \"vous êtes allée\"!",
        "rule": "Polite \"vous\" to a female singular takes +e (allée) without plural +s.",
        "nextPreview": "Chain Complete! You have mastered the full Maison d’Être agreement cycle."
      }
    ]
  },
  {
    "chain": "passer_etre_vs_avoir",
    "chainTitle": "🏠 Maison d’Être: Le Verbe \"Passer\" (Mouvement Être vs Temps/Objet Avoir)",
    "chainType": "contrast",
    "cards": [
      {
        "id": "passer_mouvement_etre",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Passer · Mouvement Physique (ÊTRE)",
        "scene": "bakery-croissant",
        "english": "I stopped by the bakery before work.",
        "targetWords": [
          "Je",
          "suis",
          "passé",
          "à",
          "la",
          "boulangerie",
          "avant",
          "le",
          "travail"
        ],
        "fullSentence": "Je suis passé à la boulangerie avant le travail.",
        "distractors": [
          {
            "word": "ai",
            "trap": "auxiliary_shift",
            "tip": "Auxiliary Error: Passing by a place physically (movement) takes ÊTRE (suis passé)!"
          },
          {
            "word": "passée",
            "trap": "gender_agreement",
            "tip": "Gender Agreement: Male speaker does not add +e!"
          }
        ],
        "purpose": "🎯 Movement Passer: Passing by a location takes auxiliary ÊTRE",
        "purposeNote": "Starting Passer Dual Chain: When \"passer\" means physically going by or visiting a place (\"passer par\", \"passer chez\"), it takes auxiliary ÊTRE: \"Je suis passé\"!",
        "rule": "Physical movement \"passer\" takes ÊTRE: \"Je suis passé à la boulangerie\".",
        "nextPreview": "Next card: What happens when \"passer\" means spending time (hours, vacation)?"
      },
      {
        "id": "passer_temps_avoir",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Passer · Passer du Temps (AVOIR)",
        "scene": "cinema",
        "english": "I spent three wonderful hours at the museum.",
        "targetWords": [
          "J’ai",
          "passé",
          "trois",
          "heures",
          "formidables",
          "au",
          "musée"
        ],
        "fullSentence": "J’ai passé trois heures formidables au musée.",
        "distractors": [
          {
            "word": "suis",
            "trap": "auxiliary_shift",
            "tip": "Auxiliary Flip: When \"passer\" means spending time (trois heures), it FLIPS to auxiliary AVOIR (J’ai passé)!"
          },
          {
            "word": "passée",
            "trap": "agreement_error",
            "tip": "Agreement Error: With AVOIR and post-verb object, participle does not agree with subject!"
          }
        ],
        "purpose": "⚖️ Time Passer: Spending time flips auxiliary to AVOIR",
        "purposeNote": "Direct Contrast with Card 1: In Card 1, you moved physically (suis passé). Here, you SPENT TIME (trois heures). When passing time, the auxiliary flips to AVOIR: \"J’ai passé\"!",
        "rule": "When \"passer\" means spending time, it takes AVOIR: \"J’ai passé trois heures\".",
        "nextPreview": "Next card: Taking a test or exam (passer un examen)—which auxiliary?"
      },
      {
        "id": "passer_examen_avoir",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Passer · Passer un Examen (AVOIR)",
        "scene": "work",
        "english": "He took his driving test yesterday morning.",
        "targetWords": [
          "Il",
          "a",
          "passé",
          "son",
          "permis",
          "de",
          "conduire",
          "hier",
          "matin"
        ],
        "fullSentence": "Il a passé son permis de conduire hier matin.",
        "distractors": [
          {
            "word": "est",
            "trap": "auxiliary_shift",
            "tip": "Auxiliary Flip: Taking an exam or test is transitive with AVOIR (a passé son permis)!"
          },
          {
            "word": "passés",
            "trap": "agreement_error",
            "tip": "Agreement Error: Direct object is singular, no +s!"
          }
        ],
        "purpose": "⚖️ Exam Passer: Taking a test/exam takes auxiliary AVOIR",
        "purposeNote": "Transitive Usage: In French, \"passer un examen / son permis\" means sitting for a test. It takes direct object and uses auxiliary AVOIR (\"Il a passé\").",
        "rule": "Transitive \"passer un examen / son permis\" uses AVOIR.",
        "nextPreview": "Chain Complete! You master the multifaceted verb \"passer\"."
      }
    ]
  },
  {
    "chain": "descendre_etre_vs_avoir",
    "chainTitle": "🏠 Maison d’Être: Le Verbe \"Descendre\" (Mouvement Être vs Transitif Avoir)",
    "chainType": "contrast",
    "cards": [
      {
        "id": "descendre_mouvement_etre",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Descendre · Mouvement Intransitif (ÊTRE)",
        "scene": "apartment-living",
        "english": "She went down into the street.",
        "targetWords": [
          "Elle",
          "est",
          "descendue",
          "dans",
          "la",
          "rue"
        ],
        "fullSentence": "Elle est descendue dans la rue.",
        "distractors": [
          {
            "word": "a",
            "trap": "auxiliary_shift",
            "tip": "Auxiliary Error: Going downstairs yourself is movement: use ÊTRE (est descendue)!"
          },
          {
            "word": "descendu",
            "trap": "missing_agreement",
            "tip": "Agreement Error: \"Elle\" is feminine singular: add +e (descendue)!"
          }
        ],
        "purpose": "🎯 Movement Descendre: Going down oneself takes ÊTRE + (+e)",
        "purposeNote": "Starting Descendre Contrast: When the subject moves herself down the stairs or into the street, use auxiliary ÊTRE and agree in gender (+e).",
        "rule": "Intransitive \"descendre\" takes ÊTRE.",
        "nextPreview": "Next card: Taking the trash or luggage DOWN to the street—which auxiliary?"
      },
      {
        "id": "descendre_transitif_avoir",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Descendre · Transitif avec COD (AVOIR)",
        "scene": "dishes",
        "english": "She took down the trash into the street.",
        "targetWords": [
          "Elle",
          "a",
          "descendu",
          "les",
          "poubelles",
          "dans",
          "la",
          "rue"
        ],
        "fullSentence": "Elle a descendu les poubelles dans la rue.",
        "distractors": [
          {
            "word": "est",
            "trap": "auxiliary_shift",
            "tip": "Auxiliary Flip: \"les poubelles\" is a direct object! When descendre carries an object down, auxiliary flips to AVOIR (a descendu)!"
          },
          {
            "word": "descendue",
            "trap": "false_agreement",
            "tip": "Agreement Error: With AVOIR, the participle does NOT agree with the subject \"Elle\"!"
          }
        ],
        "purpose": "⚖️ Transitive Descendre: Carrying an object down flips auxiliary to AVOIR",
        "purposeNote": "Direct Contrast with Card 1: In Card 1, \"Elle est descendue\" (she went down). Here, what did she take down? \"Les poubelles\" (direct object). The auxiliary FLIPS to AVOIR (\"a descendu\") and does not agree with Elle!",
        "rule": "When \"descendre\" takes a direct object (COD), it conjugates with AVOIR: \"Elle a descendu les poubelles\".",
        "nextPreview": "Chain Complete! You have mastered both sides of \"descendre\"."
      }
    ]
  },
  {
    "chain": "negation_spectrum_four",
    "chainTitle": "🚫 Le Spectre des Négations: Pas vs Jamais vs Rien vs Que",
    "chainType": "contrast",
    "cards": [
      {
        "id": "neg_spec_pas",
        "topic": "neque",
        "structureId": "neque",
        "topicLabel": "Négation · Ne ... pas (Simple)",
        "scene": "bakery-croissant",
        "english": "I am not taking dessert after lunch.",
        "targetWords": [
          "Je",
          "ne",
          "prends",
          "pas",
          "de",
          "dessert",
          "après",
          "le",
          "déjeuner"
        ],
        "fullSentence": "Je ne prends pas de dessert après le déjeuner.",
        "distractors": [
          {
            "word": "du",
            "trap": "partitive_trap",
            "tip": "Partitive Trap: After negative \"pas\", partitives become \"de\"!"
          },
          {
            "word": "jamais",
            "trap": "polarity_mismatch",
            "tip": "Aspect Error: For this specific meal (\"not taking\"), use \"pas\", not \"jamais\"!"
          }
        ],
        "purpose": "🌱 Base Negation: Ne ... pas (not at this moment/generally)",
        "purposeNote": "Starting Negation Spectrum: \"Ne ... pas\" negates the action. Notice partitive \"du dessert\" becomes \"de dessert\".",
        "rule": "Sujet + ne + verbe + pas + de + nom.",
        "nextPreview": "Next card: Make it a permanent rule with zero frequency (\"never\")!"
      },
      {
        "id": "neg_spec_jamais",
        "topic": "neque",
        "structureId": "neque",
        "topicLabel": "Négation · Ne ... jamais (Fréquence zéro)",
        "scene": "coffee",
        "english": "I never take sugar in my tea.",
        "targetWords": [
          "Je",
          "ne",
          "prends",
          "jamais",
          "de",
          "sucre",
          "dans",
          "mon",
          "thé"
        ],
        "fullSentence": "Je ne prends jamais de sucre dans mon thé.",
        "distractors": [
          {
            "word": "pas",
            "trap": "frequency_error",
            "tip": "Frequency Error: For zero frequency (never), use \"jamais\", not \"pas\"!"
          },
          {
            "word": "du",
            "trap": "partitive_trap",
            "tip": "Partitive Trap: After negative \"jamais\", use \"de\", not \"du\"!"
          }
        ],
        "purpose": "⚖️ Frequency Negation: Ne ... jamais (at no point in time)",
        "purposeNote": "Contrast with Card 1: \"Ne ... pas\" = not now. \"Ne ... jamais\" = never in my life.",
        "rule": "Use \"ne ... jamais\" for zero frequency. Indefinite/partitives become \"de\".",
        "nextPreview": "Next card: Negating an object entirely to \"nothing\" (Ne ... rien)!"
      },
      {
        "id": "neg_spec_rien",
        "topic": "neque",
        "structureId": "neque",
        "topicLabel": "Négation · Ne ... rien (Zéro objet)",
        "scene": "sport",
        "english": "I take nothing before doing sports.",
        "targetWords": [
          "Je",
          "ne",
          "prends",
          "rien",
          "avant",
          "de",
          "faire",
          "du",
          "sport"
        ],
        "fullSentence": "Je ne prends rien avant de faire du sport.",
        "distractors": [
          {
            "word": "pas",
            "trap": "object_negation",
            "tip": "Meaning Error: For \"nothing\" (zero entity), use \"rien\", not \"pas\"!"
          },
          {
            "word": "de rien",
            "trap": "syntax_error",
            "tip": "Syntax Error: As a direct object, use \"rien\" directly: \"ne prends rien\", not \"de rien\"!"
          }
        ],
        "purpose": "⚖️ Entity Negation: Ne ... rien (nothing at all)",
        "purposeNote": "Contrast: \"Ne ... pas\" = not. \"Ne ... rien\" = nothing at all (replaces the direct object noun completely)!",
        "rule": "Use \"ne ... rien\" to express \"nothing\": \"Je ne prends rien\".",
        "nextPreview": "Next card: Flip from negative to restrictive: \"only\" (Ne ... que)!"
      },
      {
        "id": "neg_spec_que",
        "topic": "neque",
        "structureId": "neque",
        "topicLabel": "Négation Restrictive · Ne ... que (Only)",
        "scene": "groceries-cart",
        "english": "I only take one apple for my afternoon snack.",
        "targetWords": [
          "Je",
          "ne",
          "prends",
          "qu’une",
          "pomme",
          "pour",
          "le",
          "goûter"
        ],
        "fullSentence": "Je ne prends qu’une pomme pour le goûter.",
        "distractors": [
          {
            "word": "pas",
            "trap": "negation_type",
            "tip": "Meaning Error: \"ne prends pas\" means you eat NO apple! For \"only one apple\", use \"qu’une\"!"
          },
          {
            "word": "rien",
            "trap": "negation_type",
            "tip": "Meaning Error: \"rien\" means nothing! For \"only one\", use \"qu’une\"!"
          }
        ],
        "purpose": "⚖️ Restriction: Ne ... que (only / nothing but)",
        "purposeNote": "Spectrum Climax: Contrast with Cards 1–3: pas (not) ➜ jamais (never) ➜ rien (nothing) ➜ que (only / just)! Notice \"qu’une\" keeps the article \"une\", unlike negative \"pas\"!",
        "rule": "\"Ne ... que\" keeps full articles (qu’une pomme, que du pain) because it is a restriction, not an absolute negation.",
        "nextPreview": "Chain Complete! You have mastered the entire 4-part French negation spectrum."
      }
    ]
  },
  {
    "chain": "cod_gender_number_cycle",
    "chainTitle": "🎯 Pronoms COD: Le Cycle Genre & Nombre (le ➜ la ➜ l’ ➜ les)",
    "chainType": "subject_shift",
    "cards": [
      {
        "id": "cod_cycle_masc_le",
        "topic": "cod_coi",
        "structureId": "cod_coi",
        "topicLabel": "Pronom COD · Masculin Singulier (le)",
        "scene": "dress",
        "english": "This warm coat? I wear it every morning.",
        "targetWords": [
          "Ce",
          "manteau",
          "chaud",
          "?",
          "Je",
          "le",
          "mets",
          "tous",
          "les",
          "matins"
        ],
        "fullSentence": "Ce manteau chaud ? Je le mets tous les matins.",
        "distractors": [
          {
            "word": "la",
            "trap": "gender_mismatch",
            "tip": "Gender Error: \"manteau\" is masculine: use COD \"le\", not feminine \"la\"!"
          },
          {
            "word": "lui",
            "trap": "coi_error",
            "tip": "Category Error: \"Mettre\" takes a direct object (COD). Use \"le\", not indirect \"lui\"!"
          }
        ],
        "purpose": "🌱 Base COD: \"le\" for masculine singular noun (manteau)",
        "purposeNote": "Starting COD Pronoun Cycle: \"Manteau\" is masculine singular. The pronoun replacing it is \"le\", placed before the conjugated verb: \"Je le mets\".",
        "rule": "Use \"le\" to replace a masculine singular direct object.",
        "nextPreview": "Next card: Shift to feminine singular (cette écharpe)—which pronoun?"
      },
      {
        "id": "cod_cycle_fem_la",
        "topic": "cod_coi",
        "structureId": "cod_coi",
        "topicLabel": "Pronom COD · Féminin Singulier (la)",
        "scene": "scarf",
        "english": "This wool scarf? I wear it when it is cold.",
        "targetWords": [
          "Cette",
          "écharpe",
          "en",
          "laine",
          "?",
          "Je",
          "la",
          "porte",
          "quand",
          "il",
          "fait",
          "froid"
        ],
        "fullSentence": "Cette écharpe en laine ? Je la porte quand il fait froid.",
        "distractors": [
          {
            "word": "le",
            "trap": "gender_mismatch",
            "tip": "Gender Error: \"écharpe\" is feminine: use COD \"la\", not masculine \"le\"!"
          },
          {
            "word": "lui",
            "trap": "coi_error",
            "tip": "Category Error: \"Porter\" takes a direct object (COD). Use \"la\", not indirect \"lui\"!"
          }
        ],
        "purpose": "🔄 Gender Shift: \"la\" for feminine singular noun (écharpe)",
        "purposeNote": "Notice the mutation from Card 1: \"Ce manteau\" ➜ \"le mets\". \"Cette écharpe\" ➜ \"la porte\". Feminine direct object uses \"la\"!",
        "rule": "Use \"la\" to replace a feminine singular direct object.",
        "nextPreview": "Next card: What happens before a verb starting with a vowel (l’adore)?"
      },
      {
        "id": "cod_cycle_vowel_elision",
        "topic": "cod_coi",
        "structureId": "cod_coi",
        "topicLabel": "Pronom COD · Élision devant Voyelle (l’)",
        "scene": "apartment-living",
        "english": "This bright apartment? I love it.",
        "targetWords": [
          "Cet",
          "appartement",
          "lumineux",
          "?",
          "Je",
          "l’adore"
        ],
        "fullSentence": "Cet appartement lumineux ? Je l’adore.",
        "distractors": [
          {
            "word": "le adore",
            "trap": "elision_missing",
            "tip": "Elision Error: \"le\" and \"la\" MUST elide to \"l’\" before a vowel: \"Je l’adore\"!"
          },
          {
            "word": "lui",
            "trap": "coi_error",
            "tip": "Category Error: Adorer takes a direct object: use \"l’\", not \"lui\"!"
          }
        ],
        "purpose": "🔄 Elision: \"le\" and \"la\" elide to \"l’\" before vowels",
        "purposeNote": "Observe the vowel collision: Before \"adore\", both \"le\" and \"la\" contract into \"l’\": \"Je l’adore\"!",
        "rule": "Before vowels and silent h, \"le\" and \"la\" become \"l’\": \"Je l’adore\".",
        "nextPreview": "Next card: Shift to plural (ces gants / ces clés)—which pronoun replaces both genders?"
      },
      {
        "id": "cod_cycle_plural_les",
        "topic": "cod_coi",
        "structureId": "cod_coi",
        "topicLabel": "Pronom COD · Pluriel (les)",
        "scene": "gloceries-cart",
        "english": "These leather gloves? I put them away in my drawer.",
        "targetWords": [
          "Ces",
          "gants",
          "en",
          "cuir",
          "?",
          "Je",
          "les",
          "range",
          "dans",
          "mon",
          "tiroir"
        ],
        "fullSentence": "Ces gants en cuir ? Je les range dans mon tiroir.",
        "distractors": [
          {
            "word": "leur",
            "trap": "coi_error",
            "tip": "Category Error: \"Ranger\" takes a direct object! Use COD \"les\", not indirect \"leur\"!"
          },
          {
            "word": "le",
            "trap": "number_mismatch",
            "tip": "Number Error: \"gants\" is plural: use \"les\", not singular \"le\"!"
          }
        ],
        "purpose": "🔄 Number Shift: \"les\" replaces both masculine and feminine plurals",
        "purposeNote": "Plural Unification: In the plural, gender distinctions disappear: both masculine and feminine plural nouns are replaced by \"les\": \"Je les range\"!",
        "rule": "Use \"les\" to replace all plural direct objects.",
        "nextPreview": "Chain Complete! You have mastered all 4 COD pronoun forms."
      }
    ]
  },
  {
    "chain": "coi_singular_vs_plural",
    "chainTitle": "🎯 Pronoms COI: Le Cycle Indirect (lui pour homme & femme ➜ leur pour pluriel)",
    "chainType": "contrast",
    "cards": [
      {
        "id": "coi_cycle_pere_lui",
        "topic": "cod_coi",
        "structureId": "cod_coi",
        "topicLabel": "Pronom COI · Homme Singulier (lui)",
        "scene": "cinema",
        "english": "To my father? I send him a message every morning.",
        "targetWords": [
          "À",
          "mon",
          "père",
          "?",
          "Je",
          "lui",
          "envoie",
          "un",
          "message",
          "chaque",
          "matin"
        ],
        "fullSentence": "À mon père ? Je lui envoie un message chaque matin.",
        "distractors": [
          {
            "word": "le",
            "trap": "cod_for_coi",
            "tip": "Category Error: One says \"envoyer À quelqu’un\" (indirect object)! Use COI \"lui\", not COD \"le\"!"
          },
          {
            "word": "à lui",
            "trap": "disjunctive_error",
            "tip": "Syntax Tip: Use the clitic pronoun \"lui\" before the verb, not \"à lui\" after!"
          }
        ],
        "purpose": "🎯 COI Singular Male: \"lui\" for \"à mon père\"",
        "purposeNote": "Starting COI Chain: \"Envoyer un message À quelqu’un\". Because of preposition \"à\", the recipient is replaced by COI pronoun \"lui\" before the verb.",
        "rule": "Use \"lui\" to replace \"à + personne masculine\".",
        "nextPreview": "Next card: What pronoun replaces a woman (à ma mère)? (Prepare to be amazed!)"
      },
      {
        "id": "coi_cycle_mere_lui_same",
        "topic": "cod_coi",
        "structureId": "cod_coi",
        "topicLabel": "Pronom COI · Femme Singulier (lui aussi !)",
        "scene": "cinema",
        "english": "To my mother? I send her a message as well.",
        "targetWords": [
          "À",
          "ma",
          "mère",
          "?",
          "Je",
          "lui",
          "envoie",
          "aussi",
          "un",
          "message"
        ],
        "fullSentence": "À ma mère ? Je lui envoie aussi un message.",
        "distractors": [
          {
            "word": "la",
            "trap": "cod_for_coi",
            "tip": "Classic English Trap: In English we say \"her\", but French COI does not have gender! \"Lui\" is used for BOTH him and her!"
          },
          {
            "word": "à elle",
            "trap": "disjunctive_error",
            "tip": "Syntax Tip: French uses \"lui\" before the verb, never \"à elle\"!"
          }
        ],
        "purpose": "⚠️ Genderless Surprise: \"Lui\" is used for BOTH men and women!",
        "purposeNote": "Shocking English Trap: In English, you say \"to HIM\" vs \"to HER\". But French COI has NO gender! \"Lui\" means both \"to him\" AND \"to her\": \"Je lui envoie\"!",
        "rule": "In French, COI \"lui\" is completely genderless: it replaces both \"à lui\" and \"à elle\".",
        "nextPreview": "Next card: Shift to plural recipients (à mes collègues / à mes parents)—which pronoun?"
      },
      {
        "id": "coi_cycle_collegues_leur",
        "topic": "cod_coi",
        "structureId": "cod_coi",
        "topicLabel": "Pronom COI · Pluriel (leur - invariable)",
        "scene": "work",
        "english": "To my colleagues? I explain the new rule to them.",
        "targetWords": [
          "À",
          "mes",
          "collègues",
          "?",
          "Je",
          "leur",
          "explique",
          "la",
          "nouvelle",
          "règle"
        ],
        "fullSentence": "À mes collègues ? Je leur explique la nouvelle règle.",
        "distractors": [
          {
            "word": "les",
            "trap": "cod_for_coi",
            "tip": "Category Error: One says \"expliquer À quelqu’un\"! Use COI \"leur\", not COD \"les\"!"
          },
          {
            "word": "leurs",
            "trap": "spelling_trap",
            "tip": "Grammar Trap: Pronoun \"leur\" is 100% INVARIABLE! It NEVER takes an \"s\" as a pronoun (only as a possessive adjective)!"
          }
        ],
        "purpose": "🔄 Number Shift: \"leur\" replaces plural recipients (never ends in s!)",
        "purposeNote": "Contrast with Cards 1 & 2: Singular = \"lui\". Plural = \"leur\". And notice: as a pronoun, \"leur\" is strictly INVARIABLE—never write \"leurs\" before a verb!",
        "rule": "Use \"leur\" (never leurs) to replace \"à + personnes au pluriel\": \"Je leur explique\".",
        "nextPreview": "Chain Complete! You have mastered the entire COI pronoun system."
      }
    ]
  },
  {
    "chain": "chronologie_daily_routine",
    "chainTitle": "⏱️ Chronologie du Matin: D’abord ➜ Ensuite ➜ Avant de ➜ Enfin (A1.3 PDF)",
    "chainType": "complexity",
    "cards": [
      {
        "id": "seq_etape1_dabord",
        "topic": "sequence",
        "structureId": "sequence",
        "topicLabel": "Chronologie · Étape 1 (D’abord)",
        "scene": "wake",
        "english": "First, I wake up at six-thirty.",
        "targetWords": [
          "D’abord",
          "je",
          "me",
          "réveille",
          "à",
          "six",
          "heures",
          "et",
          "demie"
        ],
        "fullSentence": "D’abord je me réveille à six heures et demie.",
        "distractors": [
          {
            "word": "ensuite",
            "trap": "sequence_order",
            "tip": "Sequence Error: The chronological opener is \"D’abord\" (First of all)!"
          },
          {
            "word": "enfin",
            "trap": "sequence_order",
            "tip": "Sequence Error: \"Enfin\" is for the final step, not the opening!"
          }
        ],
        "purpose": "🎯 Step 1: Opening chronological sequence with \"D’abord\"",
        "purposeNote": "Starting Daily Chronology Chain (from your A1.3 PDF): To structure a spoken timeline, begin with \"D’abord\" (First of all).",
        "rule": "Use \"D’abord\" to introduce the initial action of a sequence.",
        "nextPreview": "Next card: Step 2—connecting the next action with \"Ensuite\"!"
      },
      {
        "id": "seq_etape2_ensuite",
        "topic": "sequence",
        "structureId": "sequence",
        "topicLabel": "Chronologie · Étape 2 (Ensuite)",
        "scene": "coffee",
        "english": "Then, I drink a good cup of black coffee in the kitchen.",
        "targetWords": [
          "Ensuite",
          "je",
          "bois",
          "un",
          "bon",
          "café",
          "noir",
          "dans",
          "la",
          "cuisine"
        ],
        "fullSentence": "Ensuite je bois un bon café noir dans la cuisine.",
        "distractors": [
          {
            "word": "d’abord",
            "trap": "sequence_order",
            "tip": "Sequence Error: \"D’abord\" was used in Step 1! For the next step, use \"Ensuite\"!"
          },
          {
            "word": "enfin",
            "trap": "sequence_order",
            "tip": "Sequence Error: \"Enfin\" is only for the conclusion!"
          }
        ],
        "purpose": "🔄 Step 2: Progressing the sequence with \"Ensuite\"",
        "purposeNote": "Contrast with Step 1: D’abord (first) ➜ Ensuite / Puis (then, next).",
        "rule": "Use \"Ensuite\" or \"Puis\" to transition to the subsequent action.",
        "nextPreview": "Next card: Step 3—inserting an action that happens beforehand with \"Avant de + infinitif\"!"
      },
      {
        "id": "seq_etape3_avant_de",
        "topic": "sequence",
        "structureId": "sequence",
        "topicLabel": "Chronologie · Étape 3 (Avant de + Infinitif)",
        "scene": "walk",
        "english": "Before leaving for work, I double-check my keys.",
        "targetWords": [
          "Avant",
          "de",
          "partir",
          "au",
          "travail",
          "je",
          "vérifie",
          "mes",
          "clés"
        ],
        "fullSentence": "Avant de partir au travail je vérifie mes clés.",
        "distractors": [
          {
            "word": "avant que",
            "trap": "clause_error",
            "tip": "Syntax Error: Same subject uses \"avant de + infinitif\", not \"avant que\"!"
          },
          {
            "word": "après de",
            "trap": "syntax_error",
            "tip": "Preposition Error: Never say \"après de\"! For before, use \"avant de\"!"
          }
        ],
        "purpose": "🔄 Step 3: Action done beforehand with \"Avant de + infinitif\"",
        "purposeNote": "Notice the connector: \"Avant de + infinitif\" integrates an action performed prior to departure.",
        "rule": "Formula: Avant de + infinitif.",
        "nextPreview": "Next card: Step 4—concluding the journey with \"Enfin\"!"
      },
      {
        "id": "seq_etape4_enfin",
        "topic": "sequence",
        "structureId": "sequence",
        "topicLabel": "Chronologie · Étape 4 (Enfin)",
        "scene": "train-station",
        "english": "Finally, I catch the eight o’clock bus.",
        "targetWords": [
          "Enfin",
          "je",
          "prends",
          "le",
          "bus",
          "de",
          "huit",
          "heures"
        ],
        "fullSentence": "Enfin je prends le bus de huit heures.",
        "distractors": [
          {
            "word": "d’abord",
            "trap": "sequence_order",
            "tip": "Sequence Error: \"D’abord\" is for the beginning!"
          },
          {
            "word": "ensuite",
            "trap": "sequence_order",
            "tip": "Sequence Error: For the final concluding action, use \"Enfin\"!"
          }
        ],
        "purpose": "🏁 Step 4: Concluding the narrative sequence with \"Enfin\"",
        "purposeNote": "Sequence Finale: D’abord ➜ Ensuite ➜ Avant de ➜ Enfin (Finally / At last). You have constructed a complete natural French narrative!",
        "rule": "Use \"Enfin\" to state the concluding action of a timeline.",
        "nextPreview": "Chain Complete! You master chronological discourse connectors."
      }
    ]
  },
  {
    "chain": "repairs_procedure_tenant_law",
    "chainTitle": "🔧 Procédure Sinistre Logement: Constat ➜ Mesure d’Urgence ➜ Répartition Légale (A1.3 PDF)",
    "chainType": "complexity",
    "cards": [
      {
        "id": "proc_etape1_constat",
        "topic": "repairs",
        "structureId": "repairs",
        "topicLabel": "Sinistre Logement · Étape 1 (Constater)",
        "scene": "plumber-repair",
        "english": "There is a major water leak under the bathroom sink.",
        "targetWords": [
          "Il",
          "y",
          "a",
          "une",
          "fuite",
          "d’eau",
          "importante",
          "sous",
          "le",
          "lavabo"
        ],
        "fullSentence": "Il y a une fuite d’eau importante sous le lavabo.",
        "distractors": [
          {
            "word": "un fuite",
            "trap": "gender_error",
            "tip": "Gender Error: \"fuite\" is feminine: \"une fuite d’eau\"!"
          },
          {
            "word": "évier",
            "trap": "vocabulary_precision",
            "tip": "Vocabulary Note: In the bathroom it is \"un lavabo\"; in the kitchen it is \"un évier\"!"
          }
        ],
        "purpose": "🎯 Step 1: Identifying and declaring a leak (lavabo vs évier)",
        "purposeNote": "Starting Repair Protocol Chain: Learn French vocabulary precision from A1.3 PDF: bathroom washbasin = \"le lavabo\"; kitchen sink = \"l’évier\".",
        "rule": "\"Le lavabo\" (bathroom) vs \"l’évier\" (kitchen). \"La fuite d’eau\" is feminine.",
        "nextPreview": "Next card: Step 2—taking immediate preventive action (shutting off the valve)!"
      },
      {
        "id": "proc_etape2_urgence",
        "topic": "repairs",
        "structureId": "repairs",
        "topicLabel": "Sinistre Logement · Étape 2 (Mesure d’Urgence)",
        "scene": "plumber-repair",
        "english": "You must turn off the main water valve immediately.",
        "targetWords": [
          "Il",
          "faut",
          "fermer",
          "la",
          "vanne",
          "générale",
          "immédiatement"
        ],
        "fullSentence": "Il faut fermer la vanne générale immédiatement.",
        "distractors": [
          {
            "word": "ferme",
            "trap": "syntax_error",
            "tip": "Syntax Error: After \"il faut\", use infinitive (fermer)!"
          },
          {
            "word": "le vanne",
            "trap": "gender_error",
            "tip": "Gender Error: \"vanne\" is feminine: \"la vanne générale\"!"
          }
        ],
        "purpose": "🔄 Step 2: Emergency action (fermer la vanne générale)",
        "purposeNote": "Emergency vocabulary from A1.3 PDF: To stop flooding, you must close the main shut-off valve (\"fermer la vanne générale\").",
        "rule": "Use \"fermer la vanne générale\" for emergency water shut-off.",
        "nextPreview": "Next card: Step 3—notifying the landlord in writing!"
      },
      {
        "id": "proc_etape3_prevenir",
        "topic": "repairs",
        "structureId": "repairs",
        "topicLabel": "Sinistre Logement · Étape 3 (Informer)",
        "scene": "write",
        "english": "The tenant must notify the landlord by written email.",
        "targetWords": [
          "Le",
          "locataire",
          "doit",
          "prévenir",
          "le",
          "propriétaire",
          "par",
          "courriel",
          "écrit"
        ],
        "fullSentence": "Le locataire doit prévenir le propriétaire par courriel écrit.",
        "distractors": [
          {
            "word": "propriétaire doit",
            "trap": "role_reversal",
            "tip": "Role Error: The tenant living in the apartment must notify the landlord, not the other way around!"
          },
          {
            "word": "prévient",
            "trap": "syntax_error",
            "tip": "Syntax Error: Modal \"doit\" takes the infinitive (prévenir)!"
          }
        ],
        "purpose": "🔄 Step 3: Legal notification obligation (prévenir le propriétaire)",
        "purposeNote": "Tenant Duty: Rental law requires the tenant to notify the landlord promptly in writing (\"prévenir par courriel\").",
        "rule": "Use \"prévenir quelqu’un par courriel\" for formal notice.",
        "nextPreview": "Next card: Step 4—if the pipe is rusted, who pays the plumber’s quote?"
      },
      {
        "id": "proc_etape4_devis",
        "topic": "repairs",
        "structureId": "repairs",
        "topicLabel": "Sinistre Logement · Étape 4 (Facturation & Responsabilité)",
        "scene": "plumber-repair",
        "english": "If the pipe is rusted, the landlord pays the quote.",
        "targetWords": [
          "Si",
          "la",
          "canalisation",
          "est",
          "rouillée",
          "le",
          "propriétaire",
          "paie",
          "le",
          "devis"
        ],
        "fullSentence": "Si la canalisation est rouillée le propriétaire paie le devis.",
        "distractors": [
          {
            "word": "locataire",
            "trap": "legal_responsibility",
            "tip": "Legal Rule: Rusted, burst, or aged pipes (vétusté) are paid by the landlord (propriétaire), not the tenant!"
          },
          {
            "word": "le facture",
            "trap": "gender_error",
            "tip": "Vocabulary: \"le devis\" is the quote before work; \"la facture\" is feminine!"
          }
        ],
        "purpose": "⚖️ Step 4: Final legal responsibility (vétusté ➜ propriétaire)",
        "purposeNote": "Legal Summary: Rusted pipes (\"canalisation rouillée\") fall under wear-and-tear/vétusté. The owner must pay the plumber’s quote (\"paie le devis\").",
        "rule": "Major plumbing and pipe decay is legally paid by the property owner.",
        "nextPreview": "Chain Complete! You have mastered the full French rental repair procedure."
      }
    ]
  },
  {
    "chain": "refl_tenses_triad",
    "chainTitle": "🛏️ Verbe Réflexif: La Frise des Temps (Présent ➜ Passé Composé ➜ Futur Proche)",
    "chainType": "contrast",
    "cards": [
      {
        "id": "refl_tenses_present",
        "topic": "reflexive",
        "structureId": "reflexive",
        "topicLabel": "Verbe Réflexif · Présent Habituel",
        "scene": "bedtime",
        "english": "I usually go to bed around eleven o’clock.",
        "targetWords": [
          "D’habitude",
          "je",
          "me",
          "couche",
          "vers",
          "onze",
          "heures"
        ],
        "fullSentence": "D’habitude je me couche vers onze heures.",
        "distractors": [
          {
            "word": "me suis couché",
            "trap": "tense_error",
            "tip": "Tense Error: \"D’habitude\" indicates a regular present habit: use present \"me couche\", not past!"
          },
          {
            "word": "vais me coucher",
            "trap": "tense_error",
            "tip": "Tense Error: Habitual action uses simple present!"
          }
        ],
        "purpose": "🌱 Present Habit: \"Je me couche\" (habitual present tense)",
        "purposeNote": "Starting Reflexive Tense Triad: In the present, the reflexive pronoun sits right before the conjugated verb: \"je me couche\".",
        "rule": "Present reflexive: Sujet + [me/te/se] + verbe au présent.",
        "nextPreview": "Next card: Shift to what happened last night in the Passé Composé!"
      },
      {
        "id": "refl_tenses_passe",
        "topic": "reflexive",
        "structureId": "reflexive",
        "topicLabel": "Verbe Réflexif · Passé Composé (ÊTRE)",
        "scene": "bedtime",
        "english": "Yesterday evening, I went to bed around eleven o’clock. (male speaker)",
        "targetWords": [
          "Hier",
          "soir",
          "je",
          "me",
          "suis",
          "couché",
          "vers",
          "onze",
          "heures"
        ],
        "fullSentence": "Hier soir je me suis couché vers onze heures.",
        "distractors": [
          {
            "word": "ai couché",
            "trap": "auxiliary_error",
            "tip": "Auxiliary Error: Reflexive verbs always take ÊTRE (me suis couché), never AVOIR!"
          },
          {
            "word": "couchée",
            "trap": "gender_agreement",
            "tip": "Gender Agreement: Male speaker does not take +e!"
          }
        ],
        "purpose": "🔄 Tense Shift: Present ➜ Passé Composé (Auxiliary ÊTRE inserted)",
        "purposeNote": "Notice the mutation from Card 1: \"je me couche\" becomes \"je me suis couché\". Auxiliary ÊTRE is inserted between pronoun and participle!",
        "rule": "Passé Composé reflexive: Sujet + [me/te/se] + ÊTRE (présent) + participe passé.",
        "nextPreview": "Next card: Shift to tonight’s upcoming plan in the Futur Proche!"
      },
      {
        "id": "refl_tenses_futur",
        "topic": "reflexive",
        "structureId": "reflexive",
        "topicLabel": "Verbe Réflexif · Futur Proche (Aller + me coucher)",
        "scene": "bedtime",
        "english": "Tonight, I am going to go to bed around eleven o’clock.",
        "targetWords": [
          "Ce",
          "soir",
          "je",
          "vais",
          "me",
          "coucher",
          "vers",
          "onze",
          "heures"
        ],
        "fullSentence": "Ce soir je vais me coucher vers onze heures.",
        "distractors": [
          {
            "word": "me vais coucher",
            "trap": "pronoun_placement",
            "tip": "Placement Error: In Futur Proche, the reflexive pronoun goes directly before the INFINITIVE: \"vais ME coucher\", never \"me vais\"!"
          },
          {
            "word": "vais coucher",
            "trap": "missing_reflexive",
            "tip": "Pronoun Error: The reflexive pronoun \"me\" cannot be omitted: \"vais me coucher\"!"
          }
        ],
        "purpose": "🔄 Tense Shift: Passé Composé ➜ Futur Proche (Pronoun sits before infinitive)",
        "purposeNote": "Crucial Comparison: Present: \"je me couche\". Past: \"je me suis couché\". Future: \"je vais ME coucher\"! Notice the pronoun always attaches to its infinitive in compound future!",
        "rule": "Futur Proche reflexive: Sujet + aller (présent) + [me/te/se] + infinitif.",
        "nextPreview": "Chain Complete! You master reflexive verbs across the past, present, and future."
      }
    ]
  },
  {
    "chain": "interdiction_levels",
    "chainTitle": "📋 Niveaux d’Interdiction: Politesse (Prière de) vs Nécessité (Il faut) vs Loi (Interdit)",
    "chainType": "contrast",
    "cards": [
      {
        "id": "interdict_level_priere",
        "topic": "rules",
        "structureId": "rules",
        "topicLabel": "Niveau 1 · Demande Polie (Prière de)",
        "scene": "apartment-living",
        "english": "Please lock the front door with the key.",
        "targetWords": [
          "Prière",
          "de",
          "fermer",
          "la",
          "porte",
          "d’entrée",
          "à",
          "clé"
        ],
        "fullSentence": "Prière de fermer la porte d’entrée à clé.",
        "distractors": [
          {
            "word": "à fermer",
            "trap": "preposition_error",
            "tip": "Preposition Error: The formula is \"Prière DE + infinitif\", never \"à\"!"
          },
          {
            "word": "fermez",
            "trap": "syntax_error",
            "tip": "Syntax Error: After \"Prière de\", the verb must be in the infinitive (fermer)!"
          }
        ],
        "purpose": "🎯 Level 1: Gentle courtesy on signs (\"Prière de + infinitif\")",
        "purposeNote": "Starting Interdiction Intensity Scale: \"Prière de + infinitif\" is polite, respectful, and standard for everyday residential signs.",
        "rule": "Formula: \"Prière de + infinitif\" = courteous request.",
        "nextPreview": "Next card: Level 2—increasing intensity to civic necessity with \"Il faut\"!"
      },
      {
        "id": "interdict_level_il_faut",
        "topic": "rules",
        "structureId": "rules",
        "topicLabel": "Niveau 2 · Obligation Civique (Il faut)",
        "scene": "bedtime",
        "english": "You must respect the peace of the neighbors at night.",
        "targetWords": [
          "Il",
          "faut",
          "respecter",
          "le",
          "repos",
          "des",
          "voisins",
          "la",
          "nuit"
        ],
        "fullSentence": "Il faut respecter le repos des voisins la nuit.",
        "distractors": [
          {
            "word": "respecte",
            "trap": "syntax_error",
            "tip": "Syntax Error: \"Il faut\" takes the infinitive (respecter)!"
          },
          {
            "word": "de les",
            "trap": "contraction_trap",
            "tip": "Contraction Trap: \"de + les voisins\" contracts to \"des voisins\"!"
          }
        ],
        "purpose": "⚖️ Level 2: Civic necessity with \"Il faut + infinitif\"",
        "purposeNote": "Contrast with Level 1: \"Il faut\" moves beyond polite requests into shared community necessity.",
        "rule": "Formula: \"Il faut + infinitif\" = shared necessity.",
        "nextPreview": "Next card: Level 3—maximum intensity with strict legal prohibition!"
      },
      {
        "id": "interdict_level_strictement_interdit",
        "topic": "rules",
        "structureId": "rules",
        "topicLabel": "Niveau 3 · Interdiction Légale Stricte (Strictement Interdit)",
        "scene": "apartment-living",
        "english": "It is strictly forbidden to block the entrance hall with bicycles.",
        "targetWords": [
          "Il",
          "est",
          "strictement",
          "interdit",
          "de",
          "bloquer",
          "le",
          "hall",
          "avec",
          "des",
          "vélos"
        ],
        "fullSentence": "Il est strictement interdit de bloquer le hall avec des vélos.",
        "distractors": [
          {
            "word": "à bloquer",
            "trap": "preposition_error",
            "tip": "Preposition Error: The formula is \"interdit DE + infinitif\", never \"à\"!"
          },
          {
            "word": "bloque",
            "trap": "syntax_error",
            "tip": "Syntax Error: Requires infinitive (bloquer)!"
          }
        ],
        "purpose": "⚖️ Level 3: Strict legal prohibition (\"Il est strictement interdit de\")",
        "purposeNote": "Scale Climax: Prière de (polite) ➜ Il faut (necessary) ➜ Il est strictement interdit de (legal ban with penalties)!",
        "rule": "Formula: \"Il est (strictement) interdit de + infinitif\" = legal prohibition.",
        "nextPreview": "Chain Complete! You have mastered the entire intensity spectrum of French rules."
      }
    ]
  },
  {
    "chain": "connaitre_savoir_subjects_cycle",
    "chainTitle": "💡 Connaître vs Savoir: Alternance des Sujets (Je ➜ Vous ➜ Nom vs Verbe)",
    "chainType": "contrast",
    "cards": [
      {
        "id": "cs_je_connaitre_resto",
        "topic": "connaitre_savoir",
        "structureId": "connaitre_savoir",
        "topicLabel": "Connaître + Lieu · Sujet Je",
        "scene": "resto-ordering",
        "english": "I know this friendly bistro very well.",
        "targetWords": [
          "Je",
          "connais",
          "très",
          "bien",
          "ce",
          "bistro",
          "chaleureux"
        ],
        "fullSentence": "Je connais très bien ce bistro chaleureux.",
        "distractors": [
          {
            "word": "sais",
            "trap": "savoir_for_place",
            "tip": "Place Trap: A restaurant is a place/establishment! Use \"Connaître\", not \"Savoir\"!"
          },
          {
            "word": "connais à",
            "trap": "preposition_error",
            "tip": "Preposition Error: \"Connaître\" connects directly to the noun without \"à\"!"
          }
        ],
        "purpose": "🎯 Connaître + Lieu: Familiarity with a place using \"Je connais\"",
        "purposeNote": "Starting Connaître vs Savoir Cycle: Knowing an establishment or restaurant is always \"Connaître\".",
        "rule": "Formula: Je connais + lieu/établissement.",
        "nextPreview": "Next card: Knowing how to order food in that restaurant (verb/skill)—which verb?"
      },
      {
        "id": "cs_je_savoir_commander",
        "topic": "connaitre_savoir",
        "structureId": "connaitre_savoir",
        "topicLabel": "Savoir + Infinitif · Savoir Commander",
        "scene": "resto-ordering",
        "english": "I know how to order in French without hesitation.",
        "targetWords": [
          "Je",
          "sais",
          "commander",
          "en",
          "français",
          "sans",
          "hésiter"
        ],
        "fullSentence": "Je sais commander en français sans hésiter.",
        "distractors": [
          {
            "word": "connais",
            "trap": "connaitre_with_verb",
            "tip": "Verb Error: \"Connaître\" is NEVER followed by an infinitive verb! Use \"Savoir\" for skills!"
          },
          {
            "word": "sais à",
            "trap": "preposition_error",
            "tip": "Preposition Error: \"Savoir\" connects directly to the infinitive without \"à\"!"
          }
        ],
        "purpose": "⚖️ Savoir + Infinitif: Knowing how to perform an action using \"Je sais\"",
        "purposeNote": "Direct Contrast with Card 1: Card 1 had a noun (ce bistro ➜ je connais). Here you have an INFINITIVE (commander ➜ je sais)!",
        "rule": "Formula: Je sais + infinitif.",
        "nextPreview": "Next card: Shift to \"Vous\"—knowing a person (le directeur)!"
      },
      {
        "id": "cs_vous_connaitre_directeur",
        "topic": "connaitre_savoir",
        "structureId": "connaitre_savoir",
        "topicLabel": "Connaître + Personne · Sujet Vous",
        "scene": "work",
        "english": "Do you know the school principal?",
        "targetWords": [
          "Vous",
          "connaissez",
          "le",
          "directeur",
          "de",
          "l’école",
          "?"
        ],
        "fullSentence": "Vous connaissez le directeur de l’école ?",
        "distractors": [
          {
            "word": "savez",
            "trap": "savoir_with_person",
            "tip": "Human Object Trap: People are NEVER \"sus\"! You must use \"Connaître\" (Vous connaissez)!"
          },
          {
            "word": "connaissez à",
            "trap": "preposition_error",
            "tip": "Preposition Error: Direct object without preposition!"
          }
        ],
        "purpose": "🔄 Person Contrast with Vous: People are always \"connus\"",
        "purposeNote": "Notice the mutation: Subject is \"Vous\" (connaissez), and the object is a person (le directeur ➜ Connaître).",
        "rule": "Formula: Vous connaissez + personne.",
        "nextPreview": "Next card: Shift to \"Vous\"—knowing what time the meeting starts (fact/clause)!"
      },
      {
        "id": "cs_vous_savoir_reunion",
        "topic": "connaitre_savoir",
        "structureId": "connaitre_savoir",
        "topicLabel": "Savoir + Proposition Fait · Sujet Vous",
        "scene": "work",
        "english": "Do you know what time the team meeting begins?",
        "targetWords": [
          "Vous",
          "savez",
          "à",
          "quelle",
          "heure",
          "commence",
          "la",
          "réunion",
          "?"
        ],
        "fullSentence": "Vous savez à quelle heure commence la réunion ?",
        "distractors": [
          {
            "word": "connaissez",
            "trap": "connaitre_with_clause",
            "tip": "Clause Error: Factual question clauses take \"Savoir\" (Vous savez), never \"Connaître\"!"
          },
          {
            "word": "savez que",
            "trap": "redundancy",
            "tip": "Syntax Error: \"à quelle heure\" already introduces the clause!"
          }
        ],
        "purpose": "⚖️ Factual Clause with Vous: Knowing a time/schedule with \"Vous savez\"",
        "purposeNote": "Final Contrast: Card 3 had a person (connaissez le directeur). Here you have a time clause (à quelle heure commence ➜ vous savez)!",
        "rule": "Formula: Vous savez + subordonnée (à quelle heure / quand / où).",
        "nextPreview": "Chain Complete! You have mastered the subject and object dualities of Savoir & Connaître."
      }
    ]
  },
  {
    "chain": "rentrer_etre_vs_avoir",
    "chainTitle": "🏠 Maison d’Être: Le Verbe \"Rentrer\" (Mouvement Être vs Rallier un Objet Avoir)",
    "chainType": "contrast",
    "cards": [
      {
        "id": "rentrer_mouvement_etre",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Rentrer · Mouvement Maison (ÊTRE)",
        "scene": "apartment-living",
        "english": "She came home very late after the concert.",
        "targetWords": [
          "Elle",
          "est",
          "rentrée",
          "très",
          "tard",
          "après",
          "le",
          "concert"
        ],
        "fullSentence": "Elle est rentrée très tard après le concert.",
        "distractors": [
          {
            "word": "a",
            "trap": "auxiliary_error",
            "tip": "Auxiliary Error: Coming home oneself is movement: use ÊTRE (est rentrée)!"
          },
          {
            "word": "rentré",
            "trap": "missing_agreement",
            "tip": "Agreement Error: \"Elle\" is feminine singular: add +e (rentrée)!"
          }
        ],
        "purpose": "🎯 Movement Rentrer: Returning home takes ÊTRE + (+e)",
        "purposeNote": "Starting Rentrer Contrast: When \"rentrer\" means going home, the subject moves herself. It takes ÊTRE and agrees with Elle (+e).",
        "rule": "Intransitive \"rentrer\" takes ÊTRE.",
        "nextPreview": "Next card: Putting the car into the garage—which auxiliary?"
      },
      {
        "id": "rentrer_transitif_avoir",
        "topic": "maison",
        "structureId": "maison",
        "topicLabel": "Rentrer · Transitif avec Objet (AVOIR)",
        "scene": "apartment-living",
        "english": "He put the car into the garage before the rain.",
        "targetWords": [
          "Il",
          "a",
          "rentré",
          "la",
          "voiture",
          "dans",
          "le",
          "garage",
          "avant",
          "la",
          "pluie"
        ],
        "fullSentence": "Il a rentré la voiture dans le garage avant la pluie.",
        "distractors": [
          {
            "word": "est",
            "trap": "auxiliary_shift",
            "tip": "Auxiliary Flip: \"la voiture\" is a direct object! Putting an object inside flips to AVOIR (a rentré)!"
          },
          {
            "word": "rentrée",
            "trap": "false_post_agreement",
            "tip": "Agreement Error: With AVOIR, post-verb object takes no agreement on the participle!"
          }
        ],
        "purpose": "⚖️ Transitive Rentrer: Putting an object inside flips auxiliary to AVOIR",
        "purposeNote": "Direct Contrast with Card 1: In Card 1, \"Elle est rentrée\" (she returned home). Here, what did he bring inside? \"La voiture\" (direct object). The auxiliary FLIPS to AVOIR (\"Il a rentré\")!",
        "rule": "When \"rentrer\" takes a direct object (COD), it conjugates with AVOIR: \"Il a rentré la voiture\".",
        "nextPreview": "Chain Complete! You have mastered intransitive vs transitive movement pairs."
      }
    ]
  }
];

// Helper to flatten chains into a unified, pedagogically linked challenges array
function generateAllChallenges() {
  const all = [];
  CHAINS.forEach(chainDef => {
    const total = chainDef.cards.length;
    chainDef.cards.forEach((card, idx) => {
      all.push({
        ...card,
        chain: chainDef.chain,
        chainTitle: chainDef.chainTitle,
        chainStep: idx + 1,
        chainTotal: total,
        chainType: chainDef.chainType
      });
    });
  });
  return all;
}

const allChallenges = generateAllChallenges();
console.log(`Generated ${allChallenges.length} pedagogically chained grammar challenges across ${CHAINS.length} chains!`);

// Export as CJS module
const fileContent = `// Auto-generated Pedagogically Chained Challenges
// 100+ challenges with purposeful progression, contrastive pairs, subject shifts,
// tricky distractors, and explicit learning purpose metadata.

const CHALLENGES = ${JSON.stringify(allChallenges, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CHALLENGES, CHAINS: ${JSON.stringify(CHAINS.map(c => ({ chain: c.chain, chainTitle: c.chainTitle, chainType: c.chainType, cardCount: c.cards.length })), null, 2)} };
}
`;

fs.writeFileSync(path.join(__dirname, 'grammar-challenges.cjs'), fileContent, 'utf8');
console.log('Saved to scripts/grammar-challenges.cjs successfully!');
