# openay-mic-site

Website for **OpenAY Mic** — publishes every GitHub release for free download.

Kept in its own repository on purpose: nothing website-related lands in the
main repo. Status: **prototypes only — nothing deployed yet.**

## Prototypes (`prototypes/`)

Two directions, one design system: both follow the project brief in
OpenAY-Mic's `shared/design.md` ("studio rack at night" — warm graphite,
amber, Chakra Petch + IBM Plex Mono, The Chain). Release data is a snapshot
of the real GitHub releases (2026-10-31) and every download button points at
the real release asset on GitHub.

- **`a-studio-rack.html`** — product-story landing. The Chain
  (MIC ── LINK ── CONSOLE) is the hero with a TEST TONE switch that flips it
  to ON AIR (cables pulse, VU ladder runs); patch-list of features; 3-step
  setup; releases. Append `?demo=1` to auto-arm the demo.
- **`b-session-log.html`** — downloads-first utility page: the latest files
  are in the first screenful, then a release-log ledger, then a
  "before you download" FAQ.

No build step, no dependencies — open either file directly in a browser, or
serve the folder:

```bash
python3 -m http.server 8477 --directory prototypes
# http://127.0.0.1:8477/a-studio-rack.html
```

`preview/` holds rendered screenshots of both directions.

## Deployment plan (free — decided after prototypes are approved)

- **Host:** GitHub Pages, built from this repo (free, HTTPS, free custom
  domain; deploys via Actions). Runner-up: Cloudflare Pages (unlimited
  bandwidth, 500 builds/mo).
- **Data:** a deploy-time workflow runs
  `gh api repos/yadav-aryan18/openay-mic/releases` and bakes a static
  `releases.json` — `prototypes/releases-data.js` already matches that shape.
  No client-side API calls, no rate limits.
- **Downloads:** always served by GitHub Releases itself; the site adds zero
  hosting bandwidth cost.

## Next steps

1. Pick a direction (A, B, or a mix).
2. Productionize: real `releases.json` baking, meta/OG tags, sitemap,
   reduced-motion polish pass.
3. Push this repo to GitHub and enable Pages.
