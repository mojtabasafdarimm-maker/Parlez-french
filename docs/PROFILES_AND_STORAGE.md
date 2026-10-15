# Profiles and storage contract

## Existing behavior
Profile switcher creates, renames, switches and deletes learners. Every learner has independent review history, scheduler, due dates, streaks, grammar practice, speaking practice and preferences. Cards and custom art are shared **only within a single browser/device**.

This is **not** login and not cross-iPhone sync. Each phone's localStorage is independent. Never tell the household their progress syncs until there is an authenticated backend.

## Current structure
Key: `parlez-v3-state`; prior v2 data from `parlez-v2-state` should migrate. Root: version:3, cards, profiles, activeProfileId, createdAt. Profile: id, name, color, progress keyed by card ID, history, grammarHistory, speakingHistory, prefs.

## Required tests
- Review same card as Easy under A and Again under B; due times and histories remain different.
- Switch back to A restores progress and preference exactly.
- Rename and delete B without erasing A; library survives profile deletion.
- A library edit appears for both profiles on one device.
- JSON backup/export and import retains two profiles, edited cards, custom images; legacy v2 migration preserves existing history.
- Reset explicitly warns it wipes *all* device profiles and cards.
- Clearing Safari storage can erase progress; provide honest messaging.

Future cross-device sync requires explicit user approval and private backend/security plan.
