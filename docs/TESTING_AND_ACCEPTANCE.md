# Tests and acceptance criteria

Existing repo has no observed E2E test runner. Start by verifying app locally and then add purposeful tests.

```bash
python3 -m http.server 8000 --directory public
node --check public/app.js
node --check public/hints.js
```

## Functional checks
- [ ] Image-only front initially; no French answer or translation shown.
- [ ] Optional Persian/English mnemonic appears ONLY on request, then scene and French starter hints.
- [ ] Reveal shows correct accents, example, pronunciation, listen, four review rating choices.
- [ ] Review changes only active profile, including due sorting and streak.
- [ ] Two-profile migration/JSON backup/import/rename/delete tested with synthetic fixtures.
- [ ] Library images and edits persist; audio, Grammar and Speak work.
- [ ] Offline cache, manifest and service worker do not corrupt learner data.
- [ ] GitHub merge and Cloudflare deployment status are verified, not assumed.

## Visual checks
- [ ] Screenshots at widths 320, 375, 390, 430, 768, 1280 CSS px.
- [ ] No horizontal scroll or bottom-nav overlap, no clipped Persian RTL, tap targets >= ~44px.
- [ ] Every primary object/action is visually inferable WITHOUT a hint.
- [ ] Show 5 different card examples (hair, teeth, mitten/clothes, tense, weather/time).
- [ ] Before/after screenshots for the hair image from handoff ZIP.
- [ ] Show a real Review → hint → Reveal → rate interaction.

Report actual commands, screenshots, test pass/fail, PR/commit, and verified vs unverified deployment.
