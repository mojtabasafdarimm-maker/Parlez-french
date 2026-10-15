# Parlez product contract

Parlez is a beginner French PWA for direct concept→spoken French learning. It is designed for two learners using local profiles and should be beautiful and reliable on iPhone.

## Study flow
1. Choose active profile.
2. Display a clear *picture only* of a single recognizable scene/object/action. No answer/hint words on front by default.
3. Learner says French aloud before reveal.
4. On request: real Persian/English sound-word mnemonic → concise scene clue → partial French start. Avoid generic English explanations of bad pictures.
5. Reveal accented French answer with article/conjugation, pronunciation, speech synthesis and short natural example.
6. Rate Again/Hard/Good/Easy; schedule only current profile's next review.

## Existing modules to preserve
Home (streak/due/progress), Review, Grammar, Speak, Library (CRUD and image upload), Settings (per-profile mode, JSON import/export), profile manager, offline PWA.

## Profiles
The card library is shared in one browser, but reviews, histories, schedules, settings and streaks must be **separate**. No synced accounts or shared progress across different devices yet.

## Curriculum
Visual contrasts include daily routines, clothing/gender/articles, weather, objects/materials, time/clock, reflexive verbs and about-to/ongoing/just-finished tense contrasts. Inspect actual lesson PDF in handoff ZIP before expanding lessons. Review French accuracy and mnemonic validity; avoid invented etymologies.

## Not required
No built-in AI key, cloud backend, login or automatic pronunciation grading without authorization.
