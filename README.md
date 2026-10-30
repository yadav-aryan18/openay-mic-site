# openay-mic-site

Website for **OpenAY Mic** — publishes every GitHub release for free download.
Live at `https://openay-mic.pages.dev` (once Cloudflare Pages is connected).

Zero-dependency static site: plain HTML/CSS/JS, no build tooling, no frameworks.
Release data is baked from the GitHub API at deploy time — the site never calls
the API from the visitor's browser, so there are no rate limits.

Design language follows the project brief in OpenAY-Mic's `shared/design.md`
("studio rack at night": warm graphite + amber, Chakra Petch + IBM Plex Mono).
Aceternity-style component patterns are implemented dependency-free; see
`prototypes/` for the exploration history.

## How releases update automatically

1. You publish a release on [`yadav-aryan18/openay-mic`](https://github.com/yadav-aryan18/openay-mic).
2. Hourly, [`update-releases.yml`](.github/workflows/update-releases.yml) runs
   `scripts/generate-releases.mjs`, which bakes `public/releases.js` from the
   GitHub API (labels computed from file extension, notes parsed from the
   release body) and commits it **only if something changed**.
3. That commit triggers the Cloudflare Pages git integration → automatic deploy.

Cloudflare also runs the generator on every deploy, so data is always fresh at
build time regardless of the bot. Prereleases are included by design; drafts
never are. If automation ever fails, the site keeps serving the last baked
data — it can go stale, never down.

## One-time deploy setup (Cloudflare)

1. Create a free account at [dash.cloudflare.com](https://dash.cloudflare.com).
2. **Workers & Pages → Create application → Pages → Connect to Git**, authorize
   GitHub, pick this repo.
3. Build settings: framework preset **None**, build command
   `node scripts/generate-releases.mjs`, build output directory **`/public`**.
4. Deploy → the project name becomes the subdomain: `openay-mic.pages.dev`.

Every push to `main` (including the release bot's) deploys automatically.

### Custom domain

- Real domain (e.g. `openay-mic.xyz`): buy it (Cloudflare Registrar sells at
  cost, ~$9/yr), then in the Pages project: **Custom domains → Set up a custom
  domain** — DNS is automatic since both live on Cloudflare.
- Free subdomain: [`openay-mic.is-a.dev`](https://www.is-a.dev) via a one-file
  PR to [is-a-dev/register](https://github.com/is-a-dev/register) pointing a
  CNAME at `openay-mic.pages.dev`, then add it under Custom domains.

## Repo layout

```
public/index.html    the site (single page, three themes, no build step)
public/releases.js   GENERATED release data — do not edit by hand
scripts/generate-releases.mjs   bakes GitHub releases into releases.js
.github/workflows/update-releases.yml   hourly bake + conditional commit
prototypes/          design exploration history (A–F) with screenshots
```

## Local preview

```bash
node scripts/generate-releases.mjs   # refresh data
python3 -m http.server 8478 --directory public
# http://127.0.0.1:8478
```

MIT © 2026 Aryan Yadav
