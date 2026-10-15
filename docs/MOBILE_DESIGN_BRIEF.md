# Mobile-first redesign — HIGHEST PRIORITY

User feedback: **“The phone version is not good enough.”** User supplied screenshot of hair-combing card: large empty oval/mirror, generic person and an object that does not clearly look like a comb touching hair. User also said the **Farsi mnemonic was better** than the generic English hint. Handoff ZIP contains screenshot `references/unclear-hair-card-iphone.png`.

## Design requirements
- An unlabeled image must convey its object/action in about three seconds. Make hands, props, body pose and context unmistakable. Avoid meaningless floating utensils and generic SVG people.
- Distinguish wake vs leave bed, comb hair vs brush teeth, mittens vs gloves, eating future/now/recent past, pen material/function/notes, weather and time.
- Elegant, native-feeling iPhone design: precise typography and visual hierarchy, safe-area padding, no bottom-nav overlap, efficient vertical space, clear reveal and rating flow, thumb-friendly targets (~44px), responsive profile picker.
- Front: image only (unless hints requested). Hints: authentic Persian or English mnemonic → scene clue → French starter. The user prefers `برس` ↔ `brosse`.
- Persian RTL must render clearly and not be clipped. No fake etymologies.
- Improve artwork *before* explaining away ambiguity with long English text.
- Test widths 320, 375, 390, 430px and desktop, with screenshots of multiple different cards.
- Keep the current app functional: profile independence, saved data, backup, offline PWA, grammar/speak/library, audio.

## Ship criteria
Capture before/after screenshots and actual browser interactions at phone sizes for hair comb, brush teeth, one clothing item, weather/time, grammar tense; demonstrate no hint → hint → reveal → rate. Keep desktop good.
