# Deploy Parlez to Cloudflare Pages

1. Open https://dash.cloudflare.com and sign in or create a free account.
2. Go to **Workers & Pages** > **Create** > **Pages** > **Connect to Git**.
3. Authorize Cloudflare to access GitHub (account: `mojtabasafdarimm-maker`), and select the `Parlez-french` repository. You may need to explicitly grant access to this newly created repository in the GitHub installation settings.
4. Select production branch `main`.
5. Choose **None** for framework preset, set build command to `exit 0` (or leave blank), output directory to `public`, and root directory to repository root (default).
6. Click **Save and Deploy** and wait for a green status; then open the generated `*.pages.dev` URL.
7. On iPhone in Safari, open that URL, tap Share > **Add to Home Screen**, and confirm.

## Continuous deployment

Cloudflare Pages will redeploy automatically when code is pushed to the `main` branch.

## Data and privacy

This is a static public website with no login or backend. Learning progress, newly added flashcards, and uploaded pictures are stored in the **device's browser storage only**. Export your data from Parlez regularly; install progress is not synced across devices. Do not put personal study data, tokens, or passwords into the public GitHub repository.

## Troubleshooting

- If you get a 404, confirm the build output directory is `public` and `public/index.html` exists.
- If offline install fails, check that `public/sw.js` and `public/manifest.webmanifest` are deployed and served from the site origin.
- After a new version, refresh the browser or relaunch the installed PWA to load updated service worker resources.
