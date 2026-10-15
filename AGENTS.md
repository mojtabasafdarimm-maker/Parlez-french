# Codex instructions — Parlez

You are working on **Parlez**, a visual-first French learning Progressive Web App for two adult beginner learners. Keep this file succinct; read additional docs only as needed for the task.

## Core product contract

- Front of a flashcard = a CLEAR picture/action/scenario, **no French, English or Persian answer text by default**. Learner recalls and says French aloud before reveal. No hint controls.
- Back = correct French answer, pronunciation/audio, relevant example, helpful explanations. Keep accents, articles, gender, conjugations, and semantics accurate.
- Latest user direction: no hints or mnemonics. Keep vocabulary study to a clear picture, French word/expression, English meaning, and a short example using the grammar already taught in these lessons. Show the example's English translation. Keep picture-first recall and reveal, audio and review scheduling.
- Hint/mnemonic fields from old backups may remain stored for compatibility but must not appear in review or card editing.
- Preserve learner profiles: independent schedules/streaks/history/preferences and shared library on the **same device**. This is **not** cross-device sync. Never silently reset local data or change storage keys without tested migration.
- Maintain offline functionality, JSON export/import, and no in-app AI API by default.
- Grammar now opens the Verb game: 10 rounds choosing and building sentences in présent, présent continu, passé récent, passé composé and futur proche. Keep explanations short and game sessions/results per profile. Do not equate passé récent with passé composé or reject the ordinary present as an invalid continuous translation.

## Engineering boundaries

- Start from latest `main` of `https://github.com/mojtabasafdarimm-maker/Parlez-french` — not from the old pre-migration ZIP.
- Current app is static: `public/index.html`, `app.js`, `styles.css`, `sw.js`, `manifest.webmanifest`, `assets/`. No existing Node build system. Inspect real code before proposing refactors; incremental work and tests over wholesale rewrite.
- The user's top priority is a premium, clear **phone-first design**. Test at widths around 320, 375, 390, 430 px with iOS safe areas and at desktop. Do not claim visual QA without actually checking screenshots/browser behavior.
- Image semantics: meaningful object/action, recognizable gesture, correct object placement. Illustrations must distinguish close concepts (wake vs get out of bed; comb hair vs brush teeth; just ate vs eating vs about to eat; mittens vs gloves).
- Keep GitHub public-repo safe: no credentials, private user backups, sensitive photos, or secrets. Do not introduce cloud sync/auth without explicit design approval.
- The live address uses `workers.dev`; do not assume Git-connected Pages vs Workers deployment until inspected.
- For any change: state files changed, tests run, deployment status **verified vs unverified**, and any follow-up risk.

## Where to read more

- Mobile/design issue: `docs/MOBILE_DESIGN_BRIEF.md`
- Feature detail and target journey: `docs/PRODUCT_REQUIREMENTS.md`
- Current technical/data structure: `docs/TECHNICAL_ARCHITECTURE.md`, `docs/PROFILES_AND_STORAGE.md`
- Tests and expected behavior: `docs/TESTING_AND_ACCEPTANCE.md`
- Deployment: `docs/DEPLOYMENT.md`
- Curated first task: `prompts/FIRST_CODEX_TASK.md`
