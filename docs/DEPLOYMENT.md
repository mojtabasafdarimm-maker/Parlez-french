# GitHub / Cloudflare Workers deployment guidance

GitHub source: https://github.com/mojtabasafdarimm-maker/Parlez-french, main.
User-provided live site: https://parlez-french.mojtaba-safdari-mm.workers.dev/

**Verify the actual Cloudflare configuration**. This is a `workers.dev` hostname, so earlier generic Cloudflare Pages instructions may not describe the real Worker/static asset deployment. Do not assume GitHub-to-Cloudflare automatic deployment is working without checking the Cloudflare project, build settings and latest deployment.

Next actions:
1. Inspect Workers & Pages project matching `parlez-french`, identify the build asset directory and Git provider link.
2. Confirm that `main` pushes actually update the Worker, or document an authorized setup with secrets stored in Cloudflare/GitHub secrets rather than in public repo.
3. Confirm cache update/service worker correctness across new versions.
4. Test Safari → Share → Add to Home Screen, offline load, profile persistence and TTS on iPhone.

Repo is PUBLIC. Never store user backups, API keys, Cloudflare account tokens or sensitive photos in GitHub.
