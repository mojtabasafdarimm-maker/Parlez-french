# Parlez → Codex handoff

Canonical code: https://github.com/mojtabasafdarimm-maker/Parlez-french (main).
Live URL supplied by owner: https://parlez-french.mojtaba-safdari-mm.workers.dev/
The site's actual Cloudflare build/deployment connection is not verified. A workers.dev URL is not a pages.dev URL.

## Main goal
Redesign the existing **iPhone-first** French-learning PWA. Current phone UI isn't good enough. Some pictures are meaningless: a hair-combing card had an empty mirror-like circle and a detached comb. Use immediately understandable action scenes. Use the screenshot in the separately supplied Codex handoff ZIP as the primary reference.

## Learning method
PICTURE → THINK/SPEAK FRENCH → optional hint (good Persian/English memory association, scene clue, partial French beginning) → reveal correct French with pronunciation/example → rate memory.
Do not put written language on card front by default. The owner specifically prefers authentic Persian mnemonic links such as **برس → brosse** over generic wordy English descriptions.

## Current structure
Static files in public/: index.html, app.js (monolithic seed cards/SVG/UI/state), hints.js (50 card cues), styles.css, sw.js, manifest.webmanifest, assets. No backend and no in-app AI API. Two local learner profiles can have separate schedules/streaks/practice; the deck is shared **within one browser**, not synchronized across phones. Preserve old data migration and JSON import/export.

## First engineering assignment
See prompts/FIRST_CODEX_TASK.md. Baseline with screenshots on 375/390px, improve the mobile experience and semantic illustrations, test 50 cards, add browser/unit tests, preserve profile data, then report exact GitHub/Cloudflare deployment verification. Do not claim tests/deploy ran without checking.

## Safety
GitHub is PUBLIC. Never commit personal JSON backups, private images or API credentials.
