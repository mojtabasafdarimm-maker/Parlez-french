# Verb game

Open Grammar → Verb game. Ten rounds practise five forms using manger, travailler and regarder un film: one sentence choice and one word-tile question per form. The verbs already occur in the vocabulary library. The user explicitly requested present perfect as well as continuous; passé composé is included for completed actions alongside the existing present/continuous, recent past and near future forms.

Correct answers earn one point during the initial ten rounds. A missed question returns once as an extra build question; extra practice does not change the score out of ten. Feedback gives the right sentence, a short formation rule and French audio. There is no timer or lives limit. The “Other practice” tab retains the existing exercises.

Progress is stored at `profile.grammarGame`, including question order, tile selection and displayed feedback, so reload and offline use resume the same round. Attempts append to the existing profile's `grammarHistory` with `kind: 'verb-game'`. Export/import already carries profile fields; no storage-key change or reset. Unknown or structurally invalid saved game sessions fall back to the Play screen.

## Language accuracy

- Présent: habits are made explicit with *tous les jours*.
- Présent continu: *Je suis en train de + infinitive*. The ordinary present can also express an ongoing action, so it is excluded from the continuous question's distractors.
- Passé récent: *Je viens de + infinitive*, meaning an action has just happened.
- Passé composé: *J’ai + past participle* for the three regular verbs in this game. It may translate as “I did” or “I have done”; it is not universally equivalent to English present perfect. These examples do not teach the separate être-auxiliary pattern.
- Futur proche: *Je vais + infinitive*.

Accuracy references: University of Texas, [passé composé with avoir](https://www.laits.utexas.edu/tex/gr/tap2.html) and [recent past](https://www.laits.utexas.edu/tex/gr/tap1.html). The app retains the established beginner labels for the periphrastic forms.

## Verification

Serve `public/` on localhost:8000, then run `node scripts/verify-grammar-game.cjs` with Playwright in NODE_PATH (Edge by default). The test covers the 15 exact French sentences, balanced choice/build rounds, scoring and missed-question practice, tile removal, saved feedback/selection on reload, profile isolation, 320/375/390/430/768/1280px layouts, existing grammar exercises and offline completion. Screenshots are written to ignored `artifacts/` for visual inspection. Run `scripts/verify-content.cjs` for the vocabulary and storage regression checks.
