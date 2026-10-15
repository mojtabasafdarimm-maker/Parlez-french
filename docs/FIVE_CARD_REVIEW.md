# Five-card draft — awaiting user review

Update: the user subsequently explicitly requested pushing **all changes so far**. This supersedes the publication hold below. The full working tree is included as requested, including earlier content outside the five-card batch; those other cards have not received the same user review.

The user rejected the bulk mnemonic rewrite. This batch tests a different rule: a short, familiar word connection where useful; no mnemonic otherwise. An unfamiliar pronunciation spelling is not a connection. No publishing is authorized until the user reviews the actual draft.

| Card | Draft memory hook | Picture |
| --- | --- | --- |
| Je me brosse les dents. | brosse ↔ برس (brush). DENTist → dents (teeth). | Brush touches visible teeth. |
| Je me douche. | douche ↔ دوش (shower). | Water falls from a showerhead onto the person. |
| Je me coiffe. | coiffe ↔ کوافور / coiffeur (hairdresser) → doing your hair. | Hand holds comb against hair. |
| Je me couche. | None. | Awake person getting under the blanket at night. |
| Je fais mon lit. | None. | Standing person grips two sheet corners and pulls it across the bed. |

The makebed illustration is replaced in `public/illustrations.js`. The five cues are in `public/hints.js`. `public/app.js` skips the missing memory stage and omits its answer label; scene and starter hints still work. Personal mnemonics remain available for any card. The cache version changes in `public/sw.js`.

Run `scripts/verify-five-cards.cjs` with Playwright available via Node module resolution. It starts and closes its own loopback server, checks these five cards at 320, 375, 390, 430 and 1280px, and captures `artifacts/five-card-review.png` and five mobile hint screenshots. It tests initial hidden hints, optional memory stages, reveal/hide, overflow, and personal override for a card without a curated mnemonic. These screenshots are local review artifacts, not deployed pages.

The earlier unreviewed bulk edits remain in the local working tree. Do not publish that working tree wholesale. After approval, isolate the accepted five-card content and required support changes from all unreviewed hints and artwork, test that release, then publish it. Physical iPhone recognition and recall have not been tested.
