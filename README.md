# Direct Stage

Direct Stage builds custom websites for musicians to sell music and merchandise
directly to fans — no middleman, no label gatekeeping. This repository is the
full archive of the business workspace, exported before migrating off the
CTO.new platform.

## Repository layout

| Path | What it is |
| --- | --- |
| (repo root) | **Kristal Black** artist site — a Vite + React + TypeScript direct-to-fan storefront (music + merch + cart + Stripe checkout). Deployed on Vercel from `main`. |
| `kristal-black-brand/` | Brand assets: the Kristal Black style guide and moodboard. |
| `site/` | The Direct Stage business site (TanStack Start: React + Vite + Tailwind). Includes Vercel build/deploy scripts for optional external hosting. |
| `WORKFLOW.md` | The team's git/branch/deploy workflow (historical reference). |
| `README.md` | This file. |

## Kristal Black artist site (repo root)

- Stack: Vite + React + TypeScript
- Features: music section, merch section, cart (localStorage), Stripe Checkout
  (publishable key wired via `VITE_STRIPE_PUBLISHABLE_KEY`), responsive layout.
- Genre/branding: Rap / Hip-Hop, red/black/white identity.

### Run locally

```bash
npm install
npm run dev
```

### Environment

Copy `.env.example` to `.env` and set:

- `VITE_STRIPE_PUBLISHABLE_KEY` — Stripe publishable key (test or live)
- `VITE_CHECKOUT_ENDPOINT` — backend endpoint that creates a Stripe Checkout session

## Business site (`site/`)

TanStack Start app (React + Vite + Tailwind), served on port 3000. See
`site/SITE.md` for structure and `site/go-live.sh` + `site/build-vercel.sh` for
optional Vercel deployment.

## Notes

- No secrets are committed: credentials (Stripe, Vercel, database) live in
  environment variables only (`.env.example` is a blank template).
