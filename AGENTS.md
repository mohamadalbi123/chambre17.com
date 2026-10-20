# Chambre17 workflow

- The user explicitly authorizes this scroll-cue change and future Chambre17 website updates to be published after relevant checks pass. Commit and push intended changes to `main`, then verify Vercel production is READY for the pushed commit and check the affected pages on `https://www.chambre17.com/`.
- Follow newer instructions to pause, avoid deployment, work locally, or use another branch. Read-only audits and discussions do not require a deployment.
- Edit source templates and assets, then run `python3 scripts/build_site.py` to regenerate the public pages and `dist/`. Run `python3 scripts/check_site.py`, `node scripts/check_hero.mjs`, and relevant browser checks before publishing.
- Preserve unrelated local changes and files, branding, existing contact journeys, language support and reduced-motion behavior. Never publish credentials, environment files, or private documents.
