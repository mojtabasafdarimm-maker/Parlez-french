// Parlez Organized Grammar Map & Full-Structure Active Table (v30)
// Shows the ENTIRE grammar structure in one organized place with memory hooks,
// 6-subject tables, Affirmative/Negative flip, and Hide-to-Speak active recall.
(function () {
  const CHAPTERS = [
    {
      id: 'reflexive',
      number: '1',
      shortTitle: 'Se... (Reflexive)',
      subtitle: 'me/te/se + être',
      title: '1. Reflexive Verbs (Se...) in Passé Composé',
      formulaPos: 'SUJET + ME / TE / SE / NOUS / VOUS / SE + ÊTRE + PARTICIPE (+E / +S)',
      formulaNeg: 'SUJET + NE + ME/TE/SE + ÊTRE + PAS + PARTICIPE (+E / +S)',
      memoryHook: 'Mirror Rule: 100% of "se..." verbs use ÊTRE in the past. Because être is a mirror, add +e for a female subject and +s for plural! (Exception: "se rendre compte" → rendu stays invariable).',
      groups: [
        {
          id: 'se_lever',
          label: 'se lever (get up)',
          note: 'Standard -er reflexive verb (levé)',
          rows: [
            { subj: 'Je (masc. / fem.)', pos: 'Je me suis levé(e) à 7h.', neg: 'Je ne me suis pas levé(e) tôt.', rule: 'me suis + levé (+e if fem.)', audioPos: 'Je me suis levé à sept heures.', audioNeg: 'Je ne me suis pas levé tôt.' },
            { subj: 'Tu (masc. / fem.)', pos: 'Tu t’es levé(e) tôt.', neg: 'Tu ne t’es pas levé(e) tôt.', rule: 'te + es → t’es', audioPos: 'Tu t’es levé tôt.', audioNeg: 'Tu ne t’es pas levé tôt.' },
            { subj: 'Il / On', pos: 'Il s’est levé à huit heures.', neg: 'Il ne s’est pas levé tard.', rule: 'se + est → s’est (no +e)', audioPos: 'Il s’est levé à huit heures.', audioNeg: 'Il ne s’est pas levé tard.' },
            { subj: 'Elle (fem. sing.)', pos: 'Elle s’est levée à 7 heures.', neg: 'Elle ne s’est pas levée.', rule: 's’est + levée (+e feminine)', audioPos: 'Elle s’est levée à sept heures.', audioNeg: 'Elle ne s’est pas levée.' },
            { subj: 'Nous (plur.)', pos: 'Nous nous sommes levé(e)s.', neg: 'Nous ne nous sommes pas levé(e)s.', rule: 'double nous + sommes + +s', audioPos: 'Nous nous sommes levés.', audioNeg: 'Nous ne nous sommes pas levés.' },
            { subj: 'Vous (form. / plur.)', pos: 'Vous vous êtes levé(e)(s).', neg: 'Vous ne vous êtes pas levé(e)(s).', rule: 'double vous + êtes', audioPos: 'Vous vous êtes levés.', audioNeg: 'Vous ne vous êtes pas levés.' },
            { subj: 'Ils (masc. plur.)', pos: 'Ils se sont levés à huit heures.', neg: 'Ils ne se sont pas levés.', rule: 'se sont + levés (+s)', audioPos: 'Ils se sont levés à huit heures.', audioNeg: 'Ils ne se sont pas levés.' },
            { subj: 'Elles (fem. plur.)', pos: 'Elles se sont levées tôt.', neg: 'Elles ne se sont pas levées.', rule: 'se sont + levées (+es)', audioPos: 'Elles se sont levées tôt.', audioNeg: 'Elles ne se sont pas levées.' }
          ]
        },
        {
          id: 'se_doucher',
          label: 'se doucher (shower)',
          note: 'Daily routine reflexive (douché)',
          rows: [
            { subj: 'Je (masc. / fem.)', pos: 'Je me suis douché(e) ce matin.', neg: 'Je ne me suis pas douché(e).', rule: 'me suis douché(e)', audioPos: 'Je me suis douché ce matin.', audioNeg: 'Je ne me suis pas douché.' },
            { subj: 'Tu (masc. / fem.)', pos: 'Tu t’es douché(e) hier soir ?', neg: 'Tu ne t’es pas douché(e) ?', rule: 't’es douché(e)', audioPos: 'Tu t’es douchée hier soir ?', audioNeg: 'Tu ne t’es pas douchée ?' },
            { subj: 'Il / Elle', pos: 'Il s’est douché / Elle s’est douchée.', neg: 'Elle ne s’est pas douchée.', rule: '+e for Elle', audioPos: 'Elle s’est douchée.', audioNeg: 'Elle ne s’est pas douchée.' },
            { subj: 'Nous', pos: 'Nous nous sommes douché(e)s.', neg: 'Nous ne nous sommes pas douché(e)s.', rule: 'nous sommes + +s', audioPos: 'Nous nous sommes douchés.', audioNeg: 'Nous ne nous sommes pas douchés.' },
            { subj: 'Vous', pos: 'Vous vous êtes douché(e)(s).', neg: 'Vous ne vous êtes pas douché(e)(s).', rule: 'vous êtes', audioPos: 'Vous vous êtes douchés.', audioNeg: 'Vous ne vous êtes pas douchés.' },
            { subj: 'Ils / Elles', pos: 'Ils se sont douchés / Elles se sont douchées.', neg: 'Ils ne se sont pas douchés.', rule: '+s (masc) / +es (fem)', audioPos: 'Elles se sont douchées.', audioNeg: 'Ils ne se sont pas douchés.' }
          ]
        },
        {
          id: 'se_souvenir',
          label: 'se souvenir (remember)',
          note: 'Irregular -ir like venir → souvenu(e)',
          rows: [
            { subj: 'Je (masc. / fem.)', pos: 'Je me suis souvenu(e) de toi.', neg: 'Je ne me suis pas souvenu(e) de son nom.', rule: 'souvenir → souvenu(e) de', audioPos: 'Je me suis souvenue de toi.', audioNeg: 'Je ne me suis pas souvenu de son nom.' },
            { subj: 'Tu (masc. / fem.)', pos: 'Tu t’es souvenu(e) de mon adresse ?', neg: 'Tu ne t’es pas souvenu(e) de moi ?', rule: 't’es souvenu(e) de', audioPos: 'Tu t’es souvenu de mon adresse ?', audioNeg: 'Tu ne t’es pas souvenu de moi ?' },
            { subj: 'Il / Elle', pos: 'Il s’est souvenu / Elle s’est souvenue.', neg: 'Elle ne s’est pas souvenue de lui.', rule: '+e for Elle', audioPos: 'Elle s’est souvenue de moi.', audioNeg: 'Elle ne s’est pas souvenue de lui.' },
            { subj: 'Nous', pos: 'Nous nous sommes souvenu(e)s de lui.', neg: 'Nous ne nous sommes pas souvenu(e)s.', rule: '+s plural', audioPos: 'Nous nous sommes souvenus de lui.', audioNeg: 'Nous ne nous sommes pas souvenus.' },
            { subj: 'Vous', pos: 'Vous vous êtes souvenu(e)(s) de moi.', neg: 'Vous ne vous êtes pas souvenu(e)(s).', rule: 'vous êtes souvenu(e)(s)', audioPos: 'Vous vous êtes souvenus de moi.', audioNeg: 'Vous ne vous êtes pas souvenus.' },
            { subj: 'Ils / Elles', pos: 'Ils se sont souvenus / Elles se sont souvenues.', neg: 'Ils ne se sont pas souvenus.', rule: '+s / +es', audioPos: 'Elles se sont souvenues de toi.', audioNeg: 'Ils ne se sont pas souvenus.' }
          ]
        },
        {
          id: 'a13_reflexives',
          label: 'A1.3 Key Verbs (s’amuser, se tromper...)',
          note: 'High-frequency A1.3 reflexive expressions',
          rows: [
            { subj: 's’amuser (have fun)', pos: 'Je me suis bien amusé(e) hier soir.', neg: 'Je ne me suis pas amusé(e).', rule: 'bien goes between suis & amusé', audioPos: 'Je me suis bien amusée hier soir.', audioNeg: 'Je ne me suis pas amusée.' },
            { subj: 's’ennuyer (get bored)', pos: 'On s’est ennuyés ici.', neg: 'Les spectateurs ne se sont pas ennuyés.', rule: 'ne se sont pas + ennuyés', audioPos: 'On s’est ennuyés ici.', audioNeg: 'Les spectateurs ne se sont pas ennuyés.' },
            { subj: 'se tromper (mistake)', pos: 'Je me suis trompé(e) de numéro.', neg: 'Je ne me suis pas trompé(e).', rule: 'se tromper de + noun', audioPos: 'Je me suis trompé de numéro.', audioNeg: 'Je ne me suis pas trompé.' },
            { subj: 'se déguiser / déshabiller', pos: 'Je me suis déguisé(e) / déshabillé(e).', neg: 'Elle ne s’est pas déguisée.', rule: '+e for feminine', audioPos: 'Je me suis déshabillée avant d’aller au lit.', audioNeg: 'Elle ne s’est pas déguisée.' },
            { subj: 'se couper les cheveux', pos: 'Vous vous êtes coupé les cheveux ?', neg: 'Elle ne s’est pas coupé les cheveux.', rule: 'No +e/+s when body part follows!', audioPos: 'Est-ce que vous vous êtes coupé les cheveux ?', audioNeg: 'Elle ne s’est pas coupé les cheveux.' },
            { subj: 'se rendre compte (realize)', pos: 'Elle s’est rendu compte de son erreur.', neg: 'Je ne me suis pas rendu compte.', rule: '⚠️ rendu stays INVARIABLE here!', audioPos: 'Elle s’est rendu compte de son erreur.', audioNeg: 'Je ne me suis pas rendu compte.' }
          ]
        }
      ]
    },
    {
      id: 'se_faire',
      number: '2',
      shortTitle: 'Se faire + Inf.',
      subtitle: 'Passive / Invariable fait',
      title: '2. Se faire + Infinitif (Passive & Services — A1.3)',
      formulaPos: 'PASSÉ : SUJET + ME/TE/SE + ÊTRE + FAIT (INVARIABLE) + INFINITIF',
      formulaNeg: 'PRÉSENT : SUJET + ME/TE/SE + FAIS/FAIT/FAISONS/FAITES/FONT + INFINITIF',
      memoryHook: 'Golden Trap Rule: In "se faire + infinitive", FAIT NEVER CHANGES! Never write "elle s’est faite voler" — always "elle s’est FAIT voler / ils se sont FAIT cambrioler".',
      groups: [
        {
          id: 'se_faire_conjugation',
          label: 'Full Conjugation (se faire aider)',
          note: 'Toggle ➕/🚫 to compare Passé Composé vs Présent',
          rows: [
            { subj: 'Je (I)', pos: 'Je me suis fait aider.', neg: 'Présent : Je me fais aider.', rule: 'fait stays invariable', audioPos: 'Je me suis fait aider.', audioNeg: 'Je me fais aider.' },
            { subj: 'Tu (You)', pos: 'Tu t’es fait aider.', neg: 'Présent : Tu te fais aider.', rule: 't’es fait + inf.', audioPos: 'Tu t’es fait aider.', audioNeg: 'Tu te fais aider.' },
            { subj: 'Il / Elle / On', pos: 'Elle s’est fait aider (NO +e!).', neg: 'Présent : Elle se fait aider.', rule: '⚠️ NEVER "faite" before infinitive!', audioPos: 'Elle s’est fait aider.', audioNeg: 'Elle se fait aider.' },
            { subj: 'Nous (We)', pos: 'Nous nous sommes fait aider (NO +s!).', neg: 'Présent : Nous nous faisons aider.', rule: '⚠️ NEVER "faits" before infinitive!', audioPos: 'Nous nous sommes fait aider.', audioNeg: 'Nous nous faisons aider.' },
            { subj: 'Vous (You)', pos: 'Vous vous êtes fait aider.', neg: 'Présent : Vous vous faites aider.', rule: 'vous êtes fait + inf.', audioPos: 'Vous vous êtes fait aider.', audioNeg: 'Vous vous faites aider.' },
            { subj: 'Ils / Elles (They)', pos: 'Ils se sont fait aider (NO +s!).', neg: 'Présent : Ils se font aider.', rule: 'se sont fait + inf.', audioPos: 'Ils se sont fait aider.', audioNeg: 'Ils se font aider.' }
          ]
        },
        {
          id: 'se_faire_services',
          label: 'Everyday Services & Medical',
          note: 'Having someone do something for you',
          rows: [
            { subj: 'Haircut (couper)', pos: 'Je me suis fait couper les cheveux.', neg: 'Je suis là pour me faire couper les cheveux.', rule: 'se faire couper les cheveux', audioPos: 'Je me suis fait couper les cheveux.', audioNeg: 'Je suis là pour me faire couper les cheveux.' },
            { subj: 'Nails (les ongles)', pos: 'Je me suis fait faire les ongles.', neg: 'Je suis là pour me faire faire les ongles.', rule: 'se faire faire les ongles', audioPos: 'Je me suis fait faire les ongles.', audioNeg: 'Je suis là pour me faire faire les ongles.' },
            { subj: 'Refund (rembourser)', pos: 'Je me suis fait rembourser.', neg: 'Elle ne s’est pas fait rembourser.', rule: 'se faire rembourser', audioPos: 'Je me suis fait rembourser.', audioNeg: 'Elle ne s’est pas fait rembourser.' },
            { subj: 'Surgery (opérer)', pos: 'Il s’est fait opérer les genoux.', neg: 'Il va se faire opérer.', rule: 'se faire opérer', audioPos: 'Il s’est fait opérer les genoux il y a trois ans.', audioNeg: 'Il va se faire opérer.' },
            { subj: 'Tooth (arracher)', pos: 'Elle s’est fait arracher la dent de sagesse.', neg: 'Elle doit se faire arracher une dent.', rule: 'fait stays invariable even with Elle!', audioPos: 'Elle s’est fait arracher la dent de sagesse.', audioNeg: 'Elle doit se faire arracher une dent.' }
          ]
        },
        {
          id: 'se_faire_incidents',
          label: 'Incidents & Passive Events',
          note: 'When something happens to the subject (On a volé Léa → Léa s’est fait voler)',
          rows: [
            { subj: 'Stolen (voler)', pos: 'Léa s’est fait voler son portefeuille.', neg: 'Xavier s’est fait voler son portable.', rule: '= On a volé le portefeuille de Léa', audioPos: 'Léa s’est fait voler son portefeuille.', audioNeg: 'Xavier s’est fait voler son téléphone mobile.' },
            { subj: 'Burgled (cambrioler)', pos: 'Tania s’est fait cambrioler.', neg: 'Henri s’est fait cambrioler.', rule: '= On a cambriolé Tania / Henri', audioPos: 'Tania s’est fait cambrioler.', audioNeg: 'Henri s’est fait cambrioler.' },
            { subj: 'Attacked (attaquer)', pos: 'Deux touristes se sont fait attaquer.', neg: 'Le vieux monsieur s’est fait agresser.', rule: 'fait stays invariable in plural!', audioPos: 'Deux touristes se sont fait attaquer.', audioNeg: 'Le vieux monsieur s’est fait agresser dans la rue.' },
            { subj: 'Fired (licencier / virer)', pos: 'Le directeur s’est fait licencier (virer).', neg: 'Il ne s’est pas fait virer.', rule: 'virer = informal for licencier', audioPos: 'Le directeur s’est fait virer de l’entreprise.', audioNeg: 'Il ne s’est pas fait virer.' },
            { subj: 'Dumped (larguer)', pos: 'Il s’est fait larguer par Marie.', neg: 'Elle s’est fait larguer.', rule: 'se faire larguer (informal)', audioPos: 'Il s’est fait larguer par Marie.', audioNeg: 'Elle s’est fait larguer.' }
          ]
        }
      ]
    },
    {
      id: 'maison',
      number: '3',
      shortTitle: 'Maison d’Être',
      subtitle: '15 Movement Pairs',
      title: '3. La Maison d’Être (15 Movement & State Verbs)',
      formulaPos: 'SUJET + ÊTRE (suis / es / est / sommes / êtes / sont) + PARTICIPE (+E / +S)',
      formulaNeg: 'SUJET + NE/N’ + ÊTRE + PAS + PARTICIPE (+E / +S)',
      memoryHook: 'Opposite Pairs Technique: Don’t memorize a random list! Memorize 6 opposite doorway pairs: aller ↔ venir, arriver ↔ partir, entrer ↔ sortir, monter ↔ descendre, naître ↔ mourir, rester ↔ tomber.',
      groups: [
        {
          id: 'pair_conjugation',
          label: 'Full 6-Subject Agreement Table (partir)',
          note: 'Always agrees with subject gender (+e) and number (+s)',
          rows: [
            { subj: 'Je (masc. / fem.)', pos: 'Je suis parti(e) en vacances.', neg: 'Je ne suis pas parti(e) tard.', rule: '+e if speaker is female', audioPos: 'Je suis parti en vacances.', audioNeg: 'Je ne suis pas parti tard.' },
            { subj: 'Tu (masc. / fem.)', pos: 'Tu es arrivé(e) tôt.', neg: 'Tu n’es pas arrivé(e) en retard.', rule: '+e if listener is female', audioPos: 'Tu es arrivée tôt.', audioNeg: 'Tu n’es pas arrivé en retard.' },
            { subj: 'Il (masc. sing.)', pos: 'Il est sorti avec son parapluie.', neg: 'Il n’est pas sorti ce soir.', rule: 'base participle (no +e)', audioPos: 'Il est sorti avec son parapluie.', audioNeg: 'Il n’est pas sorti ce soir.' },
            { subj: 'Elle (fem. sing.)', pos: 'Marie est partie. / Elle est allée à Paris.', neg: 'Elle n’est pas sortie.', rule: 'Always add +e', audioPos: 'Marie est partie.', audioNeg: 'Elle n’est pas sortie.' },
            { subj: 'Nous (plur.)', pos: 'Nous sommes monté(e)s / entré(e)s.', neg: 'Nous ne sommes pas parti(e)s.', rule: 'Always add +s (+es if all fem.)', audioPos: 'Nous sommes entrés par la porte principale.', audioNeg: 'Nous ne sommes pas partis.' },
            { subj: 'Vous (plur. fem.)', pos: 'Vous êtes restées chez vous hier soir ?', neg: 'Vous n’êtes pas resté(e)(s).', rule: '+es for feminine plural', audioPos: 'Vous êtes restées chez vous hier soir ?', audioNeg: 'Vous n’êtes pas restés.' },
            { subj: 'Ils (masc. plur.)', pos: 'Les enfants sont déjà partis en vacances.', neg: 'Ils ne sont pas descendus.', rule: 'Add +s', audioPos: 'Les enfants sont déjà partis en vacances.', audioNeg: 'Ils ne sont pas descendus.' },
            { subj: 'Elles (fem. plur.)', pos: 'Elles sont parties / Elles sont montées.', neg: 'Elles ne sont pas venues.', rule: 'Add +es (feminine + plural)', audioPos: 'Elles sont parties.', audioNeg: 'Elles ne sont pas venues.' }
          ]
        },
        {
          id: 'opposite_pairs',
          label: 'The 6 Opposite Pairs (All 15 Verbs)',
          note: 'Every verb in the House of Être paired with its opposite',
          rows: [
            { subj: '1. aller ↔ venir / revenir', pos: 'Elle est allée à Paris. / Ils sont venus.', neg: 'Elle n’est pas revenue.', rule: 'allé(e) ↔ venu(e) / revenu(e)', audioPos: 'Elle est allée à Paris et ils sont venus nous voir.', audioNeg: 'Elle n’est pas revenue.' },
            { subj: '2. arriver ↔ partir', pos: 'La fille est arrivée à 10h. / Il est parti.', neg: 'Il n’est pas encore arrivé.', rule: 'arrivé(e) ↔ parti(e)', audioPos: 'La fille est arrivée à dix heures.', audioNeg: 'Il n’est pas encore arrivé.' },
            { subj: '3. entrer / rentrer ↔ sortir', pos: 'Sarah est rentrée tard. / Il est sorti.', neg: 'Elle n’est pas sortie.', rule: 'entré(e) / rentré(e) ↔ sorti(e)', audioPos: 'Hier soir, Sarah est rentrée tard.', audioNeg: 'Elle n’est pas sortie.' },
            { subj: '4. monter ↔ descendre', pos: 'Elles sont montées. / Ils sont descendus.', neg: 'Il n’est pas descendu.', rule: 'monté(e) ↔ descendu(e)', audioPos: 'Elles sont montées et ils sont descendus.', audioNeg: 'Il n’est pas descendu.' },
            { subj: '5. naître ↔ mourir (Irreg!)', pos: 'Je suis née à Rasht. / Il est mort.', neg: 'Il est né à Téhéran. / Elle est morte.', rule: '⚠️ naître → né(e) · mourir → mort(e)', audioPos: 'Je suis née à Rasht et il est né à Téhéran.', audioNeg: 'Il est mort. Elle est morte.' },
            { subj: '6. rester ↔ tomber (+ passer)', pos: 'Je suis tombé(e) amoureux/amoureuse.', neg: 'Je suis passé(e) à la banque.', rule: 'resté(e) · tombé(e) · passé(e) · retourné(e)', audioPos: 'Je suis tombée amoureuse.', audioNeg: 'Je suis passé à la banque.' }
          ]
        }
      ]
    },
    {
      id: 'avoir',
      number: '4',
      shortTitle: 'Avoir Rhymes',
      subtitle: '-é, -i, -u, -is, -it',
      title: '4. Passé Composé with Avoir (Sound Rhyme Families)',
      formulaPos: 'SUJET + AVOIR (ai / as / a / avons / avez / ont) + PARTICIPE (NEVER AGREES WITH SUBJECT)',
      formulaNeg: 'SUJET + NE/N’ + AVOIR + PAS + PARTICIPE',
      memoryHook: 'Rhyme Grouping Technique: With AVOIR, the participle is a rock—it never changes for Elle or Ils! Memorize irregulars by their ending sound: -IS (pris, mis), -U (bu, vu, lu, obtenu, pu, voulu), -IT (fait, dit, écrit).',
      groups: [
        {
          id: 'avoir_is_it',
          label: 'Family -IS & -IT (pris, mis, fait, dit)',
          note: 'Short consonant-ending participles',
          rows: [
            { subj: 'prendre → pris', pos: 'Il a pris son parapluie / un café.', neg: 'Je n’ai pas pris de douche.', rule: 'Ends in -is (no +e for Elle a pris)', audioPos: 'Il a pris son parapluie.', audioNeg: 'Je n’ai pas pris de douche.' },
            { subj: 'apprendre / comprendre', pos: 'J’ai appris / Tu as compris.', neg: 'Je n’ai pas compris.', rule: 'Same family as prendre (-is)', audioPos: 'Tu as bien compris la leçon.', audioNeg: 'Je n’ai pas compris.' },
            { subj: 'mettre → mis', pos: 'J’ai mis mon manteau.', neg: 'Elle n’a pas mis sa veste.', rule: 'mettre → mis', audioPos: 'J’ai mis mon manteau.', audioNeg: 'Elle n’a pas mis sa veste.' },
            { subj: 'faire → fait', pos: 'J’ai fait la grasse matinée / deux masters.', neg: 'Je n’ai rien fait de spécial.', rule: 'faire → fait (ne...rien fait)', audioPos: 'Dimanche dernier, j’ai fait la grasse matinée.', audioNeg: 'Je n’ai rien fait de spécial.' },
            { subj: 'dire → dit / écrire → écrit', pos: 'Elle a dit la vérité. / J’ai écrit un mot.', neg: 'Elle n’a pas dit la vérité.', rule: 'Ends in -it', audioPos: 'Elle a dit la vérité.', audioNeg: 'Elle n’a pas dit la vérité.' },
            { subj: 'ouvrir → ouvert / offrir', pos: 'Il a ouvert la porte.', neg: 'Il n’a pas ouvert la fenêtre.', rule: 'Ends in -ert (ouvert, offert)', audioPos: 'Il a ouvert la porte.', audioNeg: 'Il n’a pas ouvert la fenêtre.' }
          ]
        },
        {
          id: 'avoir_u',
          label: 'Family -U (bu, vu, lu, obtenu, voulu, pu)',
          note: 'Pure French [y] sound endings',
          rows: [
            { subj: 'boire → bu', pos: 'Ils ont bu un peu de vin rouge.', neg: 'Je n’ai pas bu de café.', rule: 'boire → bu', audioPos: 'Ils ont bu un peu de vin rouge.', audioNeg: 'Je n’ai pas bu de café.' },
            { subj: 'voir → vu', pos: 'J’ai vu Céline / un vieux film.', neg: 'Je n’ai pas vu mes voisins.', rule: 'voir → vu', audioPos: 'Ils ont vu un vieux film américain.', audioNeg: 'Je n’ai pas vu mes voisins.' },
            { subj: 'lire → lu', pos: 'Après la douche, j’ai lu un peu.', neg: 'Il n’a pas lu le règlement.', rule: 'lire → lu', audioPos: 'Après la douche, j’ai lu un peu.', audioNeg: 'Il n’a pas lu le règlement.' },
            { subj: 'obtenir → obtenu (A1.3)', pos: 'J’ai obtenu une licence en génie mécanique.', neg: 'Vous avez obtenu quelle licence ?', rule: 'obtenir → obtenu (like venir → venu)', audioPos: 'J’ai obtenu une licence en génie mécanique.', audioNeg: 'Vous avez obtenu quelle licence ?' },
            { subj: 'vouloir → voulu / pouvoir → pu', pos: 'Tu as voulu me voir. / J’ai pu venir.', neg: 'Je n’ai même pas pu la regarder.', rule: 'voulu / pu / dû / su', audioPos: 'Tu as voulu me voir.', audioNeg: 'Je n’ai même pas pu la regarder.' },
            { subj: 'perdre → perdu / attendre', pos: 'J’ai perdu la tête / mes clés.', neg: 'Nous n’avons pas attendu.', rule: 'Regular -re → -u', audioPos: 'J’ai perdu mes clés.', audioNeg: 'Nous n’avons pas attendu.' }
          ]
        },
        {
          id: 'avoir_er_ir',
          label: 'Regular -É & -I (oublier, suivre, choisir)',
          note: '1st group (-er → -é), 2nd group (-ir → -i) + être/avoir',
          rows: [
            { subj: 'oublier → oublié (A1.3)', pos: 'J’ai oublié mes clés !', neg: 'Je n’ai pas oublié ton anniversaire.', rule: '-er → -é (pronounced [ay])', audioPos: 'J’ai oublié mes clés !', audioNeg: 'Je n’ai pas oublié ton anniversaire.' },
            { subj: 'manger / changer / discuter', pos: 'Léa a mangé une glace. / On a discuté.', neg: 'Je n’ai pas regardé la télé.', rule: '-er → -é', audioPos: 'Léa a mangé une glace en dessert.', audioNeg: 'Je n’ai pas regardé la télé.' },
            { subj: 'choisir → choisi / finir', pos: 'Elle a choisi un carpaccio.', neg: 'Il n’a pas fini ses devoirs.', rule: '-ir → -i', audioPos: 'Elle a choisi un carpaccio.', audioNeg: 'Il n’a pas fini ses devoirs.' },
            { subj: 'suivre → suivi (A1.3)', pos: 'Avez-vous suivi un master ?', neg: 'Je n’ai pas suivi ce cours.', rule: 'suivre un master → suivi', audioPos: 'Avez-vous suivi un master ?', audioNeg: 'Je n’ai pas suivi ce cours.' },
            { subj: 'être → été / avoir → eu', pos: 'La maison a été cambriolée. / J’ai eu peur.', neg: 'Il n’a pas eu le temps.', rule: 'être → été · avoir → eu [y]', audioPos: 'La maison a été cambriolée.', audioNeg: 'Il n’a pas eu le temps.' }
          ]
        }
      ]
    },
    {
      id: 'obligation',
      number: '5',
      shortTitle: 'Rules & Il faut',
      subtitle: 'Obligation / Interdit',
      title: '5. Obligation, Interdiction & Polite Rules (A1.3)',
      formulaPos: 'OBLIGATION / DEMANDE : IL FAUT / ON DOIT / MERCI DE / PRIÈRE DE + INFINITIF',
      formulaNeg: 'INTERDICTION : IL EST INTERDIT DE / DÉFENSE DE / IL NE FAUT PAS / NE PAS + INFINITIF',
      memoryHook: 'Infinitive Shortcut: Almost every building rule or public sign uses a starter block + INFINITIVE verb! Only Imperative ("Respectez vos voisins !") is conjugated.',
      groups: [
        {
          id: 'interdiction_blocks',
          label: '6 Ways to Forbid (Interdiction)',
          note: 'All 6 expressions from A1.3 Séance 1–2 (followed by infinitive)',
          rows: [
            { subj: '1. Il est interdit de + inf.', pos: 'Il est interdit de faire des barbecues.', neg: 'Il est interdit de faire du bruit.', rule: 'de + vowel → d’ (d’utiliser)', audioPos: 'Il est interdit de faire des barbecues sur les balcons.', audioNeg: 'Il est interdit de faire du bruit.' },
            { subj: '2. Il ne faut pas + inf.', pos: 'Il ne faut pas jeter ses papiers dans la rue.', neg: 'Il ne faut pas faire de feu dans la forêt.', rule: 'Impersonal prohibition', audioPos: 'Il ne faut pas jeter ses papiers dans la rue.', audioNeg: 'Il ne faut pas faire de feu dans la forêt.' },
            { subj: '3. Interdiction de + inf.', pos: 'Interdiction de fumer ou de vapoter.', neg: 'Interdiction de stationner sur les trottoirs.', rule: 'Used on official signs (noun + de)', audioPos: 'Interdiction de fumer ou de vapoter dans l’ascenseur.', audioNeg: 'Interdiction de stationner sur les trottoirs.' },
            { subj: '4. Défense de + inf.', pos: 'Défense de marcher sur la pelouse.', neg: 'Défense de jeter des ordures.', rule: 'Classic French sign formula', audioPos: 'Défense de marcher sur la pelouse.', audioNeg: 'Défense de jeter des ordures.' },
            { subj: '5. Il est défendu de + inf.', pos: 'Il est défendu de fumer ici.', neg: 'Il est défendu de faire du feu.', rule: '= Il est interdit de', audioPos: 'Il est défendu de fumer ici.', audioNeg: 'Il est défendu de faire du feu.' },
            { subj: '6. Ne pas + inf. (Sign)', pos: 'Ne pas laisser votre vélo dans les couloirs.', neg: 'Ne pas utiliser son portable.', rule: 'Ne pas sits together BEFORE infinitive!', audioPos: 'Ne pas laisser votre vélo dans les couloirs.', audioNeg: 'Ne pas utiliser son portable.' }
          ]
        },
        {
          id: 'obligation_demande',
          label: 'Obligation & Polite Requests (Demande)',
          note: 'How to express rules, duties, and polite neighbor requests',
          rows: [
            { subj: '1. Il faut + inf. (Must)', pos: 'Il faut éteindre la lumière quand on quitte une pièce.', neg: 'Il faut mettre les bouteilles dans des poubelles spéciales.', rule: 'Il faut + infinitive', audioPos: 'Il faut éteindre la lumière quand on quitte une pièce.', audioNeg: 'Il faut mettre les bouteilles en plastique dans des poubelles spéciales.' },
            { subj: '2. On doit / Vous devez + inf.', pos: 'On doit tenir son chien en laisse en ville.', neg: 'Vous devez saluer le directeur.', rule: 'devoir (doit / devez) + infinitive', audioPos: 'On doit tenir son chien en laisse quand on est en ville.', audioNeg: 'Vous devez saluer le directeur.' },
            { subj: '3. Merci de + inf. (Polite)', pos: 'Merci de fermer la porte d’entrée.', neg: 'Merci de votre compréhension.', rule: 'Polite request on building notices', audioPos: 'Merci de fermer la porte d’entrée.', audioNeg: 'Merci de votre compréhension.' },
            { subj: '4. Prière de + inf. (Formal)', pos: 'Prière de trier vos déchets.', neg: 'Prière de ne pas photographier.', rule: 'Formal written request ("Please...")', audioPos: 'Prière de trier vos déchets.', audioNeg: 'Prière de ne pas photographier.' },
            { subj: '5. Infinitif / Impératif', pos: 'Tenir les chiens en laisse. / Frapper avant d’entrer.', neg: 'Respectez vos voisins !', rule: 'Direct instruction on signs', audioPos: 'Tenir les chiens en laisse. Respectez vos voisins !', audioNeg: 'Frapper avant d’entrer.' }
          ]
        }
      ]
    },
    {
      id: 'tenses',
      number: '6',
      shortTitle: '5 Tenses & Ne...que',
      subtitle: 'Timeline & Connectors',
      title: '6. All 5 Tenses Side-by-Side & A1.3 Connectors',
      formulaPos: 'TIMELINE : PASSÉ COMPOSÉ → PASSÉ RÉCENT → PRÉSENT → PRÉSENT CONTINU → FUTUR PROCHE',
      formulaNeg: 'SPECIAL NEGATIONS : NE...PAS (not) · NE...PLUS (no longer) · NE...QUE (only/just)',
      memoryHook: 'Timeline & Connectors: See how the exact same verb moves across time, and how "ne...plus" (no longer), "ne...que" (only), and "avant de + inf." (before doing) work in real sentences.',
      groups: [
        {
          id: 'five_tenses_map',
          label: '1 Verb Across All 5 Tenses',
          note: 'Compare how structure changes from Past to Near Future',
          rows: [
            { subj: '1. Passé Composé (Did)', pos: 'J’ai mangé / Je me suis levé(e) / Je suis parti(e).', neg: 'Je n’ai pas mangé / Je ne suis pas parti(e).', rule: 'avoir/être + past participle', audioPos: 'Hier, je me suis levée à sept heures.', audioNeg: 'Je ne suis pas partie.' },
            { subj: '2. Passé Récent (Just did)', pos: 'Je viens de manger / Elle vient de partir.', neg: 'Je ne viens pas de manger.', rule: 'venir de + infinitive (< 5 mins ago)', audioPos: 'Je viens de manger.', audioNeg: 'Je ne viens pas de manger.' },
            { subj: '3. Présent (Do / General)', pos: 'Je mange / Je me lève / Je pars.', neg: 'Je ne mange pas / Mon ordinateur ne marche pas.', rule: 'conjugated present stem', audioPos: 'Mon ordinateur ne marche pas très bien.', audioNeg: 'Je ne mange pas.' },
            { subj: '4. Présent Continu (Right now)', pos: 'Je suis en train de préparer le dîner.', neg: 'Il est en train de réparer la fuite.', rule: 'être en train de + infinitive', audioPos: 'Je suis en train de préparer le dîner.', audioNeg: 'Il est en train de réparer la fuite.' },
            { subj: '5. Futur Proche (Going to)', pos: 'Je vais faire un peu de bruit / regarder ça.', neg: 'Je ne vais pas faire de bruit.', rule: 'aller + infinitive', audioPos: 'Je vais faire un peu de bruit ce soir.', audioNeg: 'Je ne vais pas faire de bruit.' }
          ]
        },
        {
          id: 'a13_connectors',
          label: 'ne...plus, ne...que & avant de (A1.3)',
          note: 'Essential A1.3 negative nuances and time connectors',
          rows: [
            { subj: 'ne ... que (ONLY / JUST)', pos: 'Je ne dors que 3 heures. (= seulement 3h)', neg: 'Elle ne mange que des pâtes.', rule: 'ne + verb + que = only / just!', audioPos: 'Je ne dors que trois heures.', audioNeg: 'Elle ne mange que des pâtes.' },
            { subj: 'ne ... que (Work example)', pos: 'Elle ne travaille que trois jours par semaine.', neg: 'Il ne boit que de l’eau.', rule: 'Not negative in meaning—means "only"', audioPos: 'Elle ne travaille que trois jours par semaine.', audioNeg: 'Il ne boit que de l’eau.' },
            { subj: 'ne ... plus (NO LONGER)', pos: 'Mon chauffage ne fonctionne plus.', neg: 'L’eau ne s’écoule plus du tout.', rule: 'ne + verb + plus = stopped working', audioPos: 'Mon chauffage ne fonctionne plus.', audioNeg: 'L’eau ne s’écoule plus du tout.' },
            { subj: 'avant de + inf. (BEFORE)', pos: 'Frapper avant d’entrer.', neg: 'Je me suis déshabillé(e) avant d’aller au lit.', rule: 'Always followed by INFINITIVE!', audioPos: 'Frapper avant d’entrer.', audioNeg: 'Je me suis déshabillée avant d’aller au lit.' },
            { subj: 'à cause de / en raison de', pos: 'Elle est énervée à cause du bruit.', neg: 'Fermé en raison de travaux.', rule: 'à cause de (negative cause) / en raison de (formal)', audioPos: 'Elle est énervée à cause du bruit.', audioNeg: 'Fermé en raison de travaux.' }
          ]
        }
      ]
    }
  ];

  let activeChapterId = 'reflexive';
  let activeGroupIdx = 0;
  let showNegative = false;
  let practiceHideAll = false;
  let revealedRows = new Set();

  function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }

  function rerender() {
    const root = document.getElementById('grammar-map-root');
    if (root) {
      root.outerHTML = page();
    }
  }

  function selectChapter(chId) {
    activeChapterId = chId;
    activeGroupIdx = 0;
    revealedRows.clear();
    rerender();
  }

  function selectGroup(idx) {
    activeGroupIdx = Number(idx) || 0;
    revealedRows.clear();
    rerender();
  }

  function toggleNegativeMode() {
    showNegative = !showNegative;
    rerender();
  }

  function togglePracticeMode() {
    practiceHideAll = !practiceHideAll;
    revealedRows.clear();
    rerender();
  }

  function toggleRowReveal(idx) {
    const i = Number(idx);
    if (revealedRows.has(i)) revealedRows.delete(i);
    else revealedRows.add(i);
    rerender();
  }

  function page() {
    const chapter = CHAPTERS.find(c => c.id === activeChapterId) || CHAPTERS[0];
    const group = chapter.groups[activeGroupIdx] || chapter.groups[0];

    return `
      <div id="grammar-map-root" class="challenge-container" style="max-width: 720px; margin: 0 auto;">
        <h1 style="font-size: 19px; margin: 0 0 8px;">🗺️ Grammar Map & Full-Structure Table</h1>

        <!-- 6 Organized Chapter Cards (Compact 3x2 Grid) -->
        <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; margin-bottom: 10px;">
          ${CHAPTERS.map(c => {
            const active = c.id === chapter.id;
            return `
              <button type="button"
                      data-gmap-chapter="${esc(c.id)}"
                      style="text-align: left; padding: 7px 9px; border-radius: 10px; cursor: pointer; transition: all 0.15s ease; border: 1.5px solid ${active ? '#4f46e5' : '#e2e8f0'}; background: ${active ? '#4f46e5' : '#ffffff'}; color: ${active ? '#ffffff' : '#1e293b'}; box-shadow: ${active ? '0 3px 10px rgba(79,70,229,0.2)' : 'none'};">
                <div style="font-size: 12px; font-weight: 800; line-height: 1.15; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${esc(c.number)}. ${esc(c.shortTitle)}</div>
                <div style="font-size: 10px; opacity: ${active ? '0.9' : '0.65'}; margin-top: 2px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${esc(c.subtitle)}</div>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Master Formula & Memory Technique Banner -->
        <div style="background: #f5f3ff; border: 1.5px solid #ddd6fe; border-radius: 12px; padding: 9px 12px; margin-bottom: 10px;">
          <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #4338ca; letter-spacing: 0.2px; margin-bottom: 3px;">
            📐 ${esc(showNegative ? chapter.formulaNeg : chapter.formulaPos)}
          </div>
          <div style="font-size: 12px; color: #312e81; line-height: 1.35;">
            💡 <b>Memory Hook:</b> ${esc(chapter.memoryHook)}
          </div>
        </div>

        <!-- Sub-group Pills + Action Controls (Affirmative/Negative & Hide/Show) -->
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 8px;">
          <div style="display: flex; gap: 5px; flex-wrap: wrap;">
            ${chapter.groups.map((g, idx) => `
              <button type="button"
                      class="chip ${idx === activeGroupIdx ? 'active' : ''}"
                      data-gmap-group="${idx}"
                      style="font-size: 11.5px; padding: 5px 9px;">
                ${esc(g.label)}
              </button>
            `).join('')}
          </div>

          <div style="display: flex; gap: 5px; flex-wrap: wrap;">
            <button type="button"
                    class="btn btn-sm ${showNegative ? 'btn-primary' : 'btn-white'}"
                    data-gmap-action="toggle-neg"
                    style="font-size: 11.5px; padding: 5px 9px;">
              ${showNegative ? '🚫 Negative / Alt' : '➕ Affirmative / 🚫 Neg'}
            </button>
            <button type="button"
                    class="btn btn-sm ${practiceHideAll ? 'btn-primary' : 'btn-secondary'}"
                    data-gmap-action="toggle-hide"
                    style="font-size: 11.5px; padding: 5px 9px;">
              ${practiceHideAll ? '👁️ Show All' : '🙈 Hide to Test Yourself'}
            </button>
          </div>
        </div>

        <!-- Full-Structure Table Card -->
        <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
          <div style="background: #f8fafc; padding: 10px 14px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
            <div>
              <strong style="font-size: 14px; color: #0f172a;">${esc(group.label)}</strong>
              <span class="small muted" style="margin-left: 6px;">· ${esc(group.note)}</span>
            </div>
            <span style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase;">
              ${practiceHideAll ? '🎙️ Speak aloud, then tap row' : '🔊 Tap Listen on any row'}
            </span>
          </div>

          <div style="divide-y: 1px solid #f1f5f9;">
            ${group.rows.map((r, idx) => {
              const hidden = practiceHideAll && !revealedRows.has(idx);
              const sentence = showNegative ? r.neg : r.pos;
              const audioText = showNegative ? (r.audioNeg || r.neg) : (r.audioPos || r.pos);
              return `
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 11px 14px; border-bottom: 1px solid #f1f5f9; flex-wrap: wrap; background: ${idx % 2 === 1 ? '#fcfcfd' : '#ffffff'};">
                  <div style="min-width: 125px; flex: 0 0 32%;">
                    <span style="font-size: 13.5px; font-weight: 800; color: #334155;">${esc(r.subj)}</span>
                  </div>

                  <div style="flex: 1; min-width: 180px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                    ${hidden ? `
                      <button type="button"
                              data-gmap-reveal-row="${idx}"
                              style="width: 100%; text-align: left; padding: 8px 12px; border-radius: 10px; border: 1.5px dashed #a5b4fc; background: #eef2ff; color: #4338ca; font-size: 13px; font-weight: 700; cursor: pointer;">
                        🎙️ Say aloud for "${esc(r.subj)}" → Tap to check
                      </button>
                    ` : `
                      <div style="flex: 1;">
                        <div style="font-size: 15px; font-weight: 800; color: #1e1b4b; line-height: 1.3;">
                          ${esc(sentence)}
                        </div>
                        <div style="font-size: 11.5px; font-weight: 600; color: #059669; margin-top: 2px;">
                          ✓ ${esc(r.rule)}
                        </div>
                      </div>
                      <button type="button"
                              class="round-btn btn-sm"
                              data-say="${esc(audioText)}"
                              aria-label="Listen"
                              title="Listen"
                              style="flex-shrink: 0;">
                        🔊
                      </button>
                    `}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    if (btn.dataset.gmapChapter) {
      selectChapter(btn.dataset.gmapChapter);
      return;
    }
    if (btn.dataset.gmapGroup !== undefined) {
      selectGroup(btn.dataset.gmapGroup);
      return;
    }
    if (btn.dataset.gmapAction === 'toggle-neg') {
      toggleNegativeMode();
      return;
    }
    if (btn.dataset.gmapAction === 'toggle-hide') {
      togglePracticeMode();
      return;
    }
    if (btn.dataset.gmapRevealRow !== undefined) {
      toggleRowReveal(btn.dataset.gmapRevealRow);
      return;
    }
  });

  window.ParlezChallenge = {
    page,
    selectChapter,
    selectGroup,
    toggleNegativeMode,
    togglePracticeMode
  };
})();
