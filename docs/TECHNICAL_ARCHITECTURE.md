# Architecture observed in public GitHub main

Source of truth: https://github.com/mojtabasafdarimm-maker/Parlez-french

```
public/index.html
public/app.js          # static app: cards, generated SVG art, views, review, data, profiles
public/hints.js        # 50 per-card scene/starter/Persian associations
public/styles.css
public/sw.js           # offline service worker
public/manifest.webmanifest
public/assets/         # icons
README.md
DEPLOYMENT.md
```

No package.json or build tool was observed. Preview: `python3 -m http.server 8000 --directory public`. Syntax: `node --check public/app.js; node --check public/hints.js`. Real browser tests still needed.

LocalStorage v3 key: `parlez-v3-state` with fallback migration from `parlez-v2-state`. Root has cards, profiles and activeProfileId. `activeProfile().progress[card.id]` holds intervals, dueAt, reviews, ease. The library/card definitions are shared by profiles in the same browser. No remote data sync.

Audio uses browser `speechSynthesis` in fr-FR. Custom photos stored locally in browser. Hints are optional and a partial French starter should not reveal full answer.

The application is monolithic; consider incremental modularization *after tests*. Don't rewrite the entire app to change the UI. Avoid breaking migrations and service-worker updates. No secrets in public repo.
