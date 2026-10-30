# openay-mic-site

Website for **OpenAY Mic** — publishes every GitHub release for free download.

Kept in its own repository on purpose: nothing website-related lands in the
main repo. Status: **prototypes — nothing deployed yet.**

## Prototypes (`prototypes/`)

All follow the project identity (warm graphite + amber, Chakra Petch for the
wordmark) and read from the same snapshot of the real GitHub releases
(`releases-data.js`, snapshotted 2026-10-31). Every download button points at
the real release asset on GitHub — they are direct file downloads, not links
to GitHub's release pages.

- **`a-studio-rack.html`** — v1 product-story landing. Machined-panel look,
  The Chain as hero with a TEST TONE demo (`?demo=1` auto-arms), technical
  copy. Superseded by C but kept for comparison.
- **`b-session-log.html`** — v1 downloads-first utility page.
- **`c-modern-studio.html`** — modern component direction. Aceternity-style
  effects (spotlight hero, bento features, cursor-spotlight cards, rotating
  glow borders, release timeline, floating navbar), plain-language copy,
  platform auto-detect. Bugfix note: decorative overlays are
  `pointer-events: none` — full-card pseudo-elements otherwise swallow
  clicks on the buttons beneath them.
- **`d-scroll-showcase.html`** — scroll-driven showcase. Aceternity
  "Container Scroll" pattern: the real app console rebuilt in CSS tilts in
  3D and levels out as you scroll; infinite app-compatibility marquee;
  moving-border download rows. The app-window VU/tilt respect
  reduced-motion, and a reveal safety-net guarantees no content stays hidden.
- **`e-daylight.html`** — the daylight direction: same identity on warm
  paper, light cards with soft shadows, a signal-path diagram, ink buttons.
  Tests whether a light site suits the brand.

Open directly in a browser (no build step) or:

```bash
python3 -m http.server 8477 --directory prototypes
# http://127.0.0.1:8477/c-modern-studio.html
```

`preview/` holds rendered screenshots.

## Component sources (for production)

Prototype C hand-builds the effects, but production can adopt the real
libraries — all React + Tailwind based, so the site becomes a Vite/Next
static build (still 100% free to host):

- [Aceternity UI](https://ui.aceternity.com/components) — free tier is
  copy-paste and allows personal & commercial use (paid "all-access" blocks
  excluded). Components mapped in C: Spotlight, Bento Grid, Card Spotlight,
  Hover Border Gradient/Glowing Effect, Timeline, Floating Navbar.
- [Magic UI](https://magicui.design) and [shadcn/ui](https://ui.shadcn.com) —
  same stack, good fallbacks for specific pieces.

## Direct downloads

Buttons use GitHub release asset URLs with the `download` attribute — the
browser saves the file immediately; no GitHub page is ever shown. In
production we additionally generate friendly links on our own domain
(`/dl/android`, `/dl/windows`, `/dl/linux`, `/dl/latest`) that redirect to the
current release assets:

- On Cloudflare Pages: a generated `_redirects` file (clean 302s).
- On GitHub Pages: tiny static stub pages with instant meta-refresh.

Files stay physically on GitHub Releases (unlimited bandwidth, zero cost).
If we ever want downloads fully off GitHub: mirror assets to Cloudflare R2
(10 GB free storage, zero egress fees) from the same workflow.

## Domain & hosting plan

- **Hosting:** Cloudflare Pages (recommended — free, unlimited bandwidth,
  custom domains, clean 302 redirects) or GitHub Pages.
- **Free URL now:** `openay-mic.pages.dev` (instant) or a free developer
  subdomain like `openay-mic.is-a.dev` (PR to [is-a-dev/register](https://github.com/is-a-dev/register)).
- **Real domain:** nothing registrable is free forever; .xyz at-cost is
  ~$9.33/yr via Cloudflare Registrar. Checked via RDAP on 2026-10-31 — all
  available: `openay-mic.xyz`, `openaymic.xyz`, `openaymic.com`, `openaymic.dev`,
  `openay-mic.dev`. GitHub Student Pack gives a free domain for a year if eligible.

## Next steps

1. Approve direction C (or request tweaks).
2. Productionize: Vite/React build with real component libraries, generated
   `releases.json`, `/dl/` redirect generation, meta/OG tags.
3. Push repo, attach host + domain, enable deploys.
