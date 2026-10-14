# Parlez — Picture to French

A personal, visual-first French speaking practice PWA. See a picture, say the French word or sentence out loud, then reveal and review using spaced repetition.

## Run locally

Serve the `public` directory using any HTTP server, e.g. `python3 -m http.server 8000 --directory public`. Open http://localhost:8000.

## Deploy with Cloudflare Pages

Connect this GitHub repo in Cloudflare > Workers & Pages > Create > Pages > Connect to Git.

- Production branch: `main`
- Framework preset: None
- Build command: `exit 0` (or leave blank)
- Build output directory: `public`
- Root directory: repository root

The deployed URL will be `https://<project>.pages.dev`. Deployments will update after new commits to `main`.

## Important privacy/data note

Card edits and study progress are stored locally in the browser on that device, **not** in GitHub and **not** synced to Cloudflare. Use the built-in JSON export regularly to back up progress, and import to move data to another device. The repository is PUBLIC, but there are no user accounts, secret tokens, or private data committed.

## Features

- Direct visual concept → spoken French flashcards; English only as an optional hint
- Detailed French answers, pronunciation, examples, optional mnemonics
- Illustrated grammar and conversation practice
- Spaced repetition scheduling, local progress tracking
- Add and edit cards, choose built-in illustrations, or upload your own image
- Installable PWA with service worker for offline study

The starter images are local SVG drawings rendered in the app. The user's uploaded card images are saved only in browser storage.

## License

For personal educational use. No API keys needed.
