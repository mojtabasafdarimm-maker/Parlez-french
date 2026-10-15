# Priorities

P0 — Verify and test current app: run mobile browser screenshots, add tests for profile isolation, data migration, hints, review and offline; inspect actual Cloudflare Worker pipeline.

P1 — **User priority: redesign phone UI and meaningful visual flashcards.** The user said phone version isn't good enough, and supplied a confusing hair comb screenshot. Fix semantic illustration, touch layout, navigation safe area and hints with good Persian/English associations. Keep card front free of text by default.

P2 — Audit 50 card visuals, French accuracy, pronunciation and word/gender hints; fix art ambiguity (combing/brushing, objects, gloves/mittens, temporal grammar, clocks); verify Library and backup.

P3 — Gradually refactor monolithic app.js only after tests are established.

P4 — **Proposal only** for separate-device synchronized profiles/auth/backend. No actual cross-device sync today; ask owner before implementation.

Known risks: stale PWA caching, no verified cloud deployment automation, browser localStorage data loss if cleared, public repo secrets, generic SVG drawings. No claim fixes are complete without screen verification.
