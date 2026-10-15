# Codex instructions — Parlez

You are working on **Parlez**, a visual-first French learning Progressive Web App for two adult beginner learners. Keep this file succinct; read additional docs only as needed for the task.

## Core product contract

- Front of a flashcard = a CLEAR picture/action/scenario, **no French, English or Persian answer text by default**. Learner recalls and says French aloud before reveal. Optional hints are user-invoked.
- Back = correct French answer, pronunciation/audio, relevant example, helpful explanations. Keep accents, articles, gender, conjugations, and semantics accurate.
- Memory trick hint: optional useful Persian / English sound or word association; then scene clue; then partial French starter. A hint must not replace an ambiguous image. Review existing cues for false etymology/forced associations.
- Choose each memory hook for memorability, without a Persian-first preference. Explain it in English; use a familiar Persian or English anchor when it makes the stronger connection. Prefer one vivid, concrete association over translation or generic scene description. UI labels are language-neutral.
- Latest user review: reject forced or absurd invented stories. Use a short familiar connection only when strong; omit the mnemonic otherwise. Pronunciation respellings are not mnemonic connections. Review five cards together before publishing the revised batch.
- The user subsequently authorized pushing all changes so far; this supersedes that five-card publication hold for the current release. Continue to use the stronger mnemonic standard for future changes.
- Current review UX is deliberately simple: picture first, one optional picture clue that never contains the French answer, then reveal. Curated memory links appear only after reveal and are omitted when the association is weak.
- Preserve learner profiles: independent schedules/streaks/history/preferences and shared library on the **same device**. This is **not** cross-device sync. Never silently reset local data or change storage keys without tested migration.
- Maintain offline functionality, JSON export/import, and no in-app AI API by default.

## Engineering boundaries

- Start from latest `main` of `https://github.com/mojtabasafdarimm-maker/Parlez-french` — not from the old pre-migration ZIP.
- Current app is static: `public/index.html`, `app.js`, `hints.js`, `styles.css`, `sw.js`, `manifest.webmanifest`, `assets/`. No existing Node build system. Inspect real code before proposing refactors; incremental work and tests over wholesale rewrite.
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
