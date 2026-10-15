# Hints and images refinement

Based on `main` at `5ff5c9b`. Changes are local; no push, PR, merge or Cloudflare deployment was performed.

## User clarification: memorable connections, without language preference

The earlier Persian-first interpretation was incorrect. All 50 memory hooks now have English explanations and use whichever familiar anchor fits the word: English, Persian, a word-family connection, or a vivid invented scene. For example, `couche` connects to a couch growing pillows and carrying you to bed; `brosse` connects to برس and an enormous brush shrunk into a toothbrush. Loose sound and spelling hooks are identified as such, rather than presented as etymology or exact pronunciation. The learner can still save a personal hook.

Front, answer and editor labels now say **Memory hook**, without a language preference. English paragraphs containing Persian anchors retain English reading direction; Persian anchors are isolated and marked with their language. Entirely Persian personal hooks still render RTL. `MEMORY_CUES` replaces the previous Persian-only table; the service worker advances to `parlez-v8-memorable-hooks`. The guidance is also recorded in `AGENTS.md`.

## Findings and changes

- All 50 scene clues were unnecessarily wordy. They now focus on the distinguishing object, gesture or time relationship.
- Several Persian cues relied on weak sound matches (rain, cold, heat, clouds, mittens and dishes), an unhelpful train association, or unsupported word-origin assertions. These now use clear visual, word-family or grammar cues. Useful links such as **برس / brosse**, **دوش / douche** and **کوافور / coiffeur** remain.
- Three meal starters previously supplied almost the whole phrase. They now leave more of the construction to recall.
- Refined 13 SVG scenes: waking, getting up, getting into bed, falling asleep, teeth brushing, hair combing, the three eating stages, buttoned shirt, red dress, morning sequence and sports clothing. Hands hold the tools; the fork reaches the mouth; the sports outfit has shorts and trainers; the morning story includes breakfast. Existing mittens, weather and time scenes remain available.
- Persian paragraphs explicitly use RTL and `lang="fa"`; quoted words are isolated for mixed Persian/French reading. Hint controls have a minimum 44px height.
- Built-in hints are used only when both the answer and scene match the seed. Personal hints retain priority. New decks clone seed cards so edits cannot mutate the baseline used to detect personal hints in the first session.
- The new illustration file is precached and the service worker cache version is advanced. Storage keys, existing saved cards, custom images and schedules are retained.

## Files

- `public/illustrations.js`: authored SVG scenes, with the existing scenes as fallbacks.
- `public/hints.js`: clues, memory cues, partial starters and edited-card handling.
- `public/app.js`: illustration hook, bilingual hint rendering and independent seed data.
- `public/index.html`, `public/sw.js`: load and cache the illustration file.
- `public/styles.css`: bilingual wrapping and hint tap targets.
- `scripts/verify-content.cjs`: browser regression checks and screenshot capture.

## Verification

JavaScript syntax checks: `app.js`, `hints.js`, `illustrations.js`, `sw.js`.

The Playwright script runs against a local static server and checks:

- Hint coverage for all 50 cards; no complete seeded answer in French starters; no SVG text elements.
- Thirteen representative cards at 320, 375, 390, 430, 768 and 1280 CSS px: no horizontal overflow; initially hidden hints; all three stages; hide and reveal.
- Personal cue priority, edited-answer/scene fallback, RTL rendering and custom-image retention.
- Two synthetic profiles: rating one leaves the other's schedule intact; reload retains saved data.
- A synthetic v2 migration retains history and scheduling.
- Offline reload serves the new illustration module through the service worker; no page errors.

Screenshots are generated into local `artifacts/` (ignored by Git), including `scene-contact-sheet.png`, `hints-320.png` and individual phone screenshots for grooming, clothing, grammar, weather, time and speaking. The contact sheet and narrow-phone hints were visually inspected, including a second pass to correct the comb grip and fork placement.

To reproduce, provide Playwright and an installed Chromium browser. From `public/`, run `python -m http.server 8000`. From the repository root, run `node scripts/verify-content.cjs`. Set `PARLEZ_BROWSER_CHANNEL=msedge` to use installed Edge; the default uses Playwright Chromium. This session used bundled Playwright via `NODE_PATH` and headless Microsoft Edge. No production build system was added.

## Limits

Desktop browser emulation does not verify physical iPhone Safari or installed Home Screen mode. No independent learner recognition test was performed. Some language and tense distinctions still benefit from the optional scene clue. The remaining illustrations have not all been redrawn. Live deployment is unverified; local changes are not on GitHub.
