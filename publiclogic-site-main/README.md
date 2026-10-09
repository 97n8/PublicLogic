# publiclogic-site

The standalone Next.js app for **publiclogic.org**, extracted from
`97n8/puddlejumper`'s `apps/web/(marketing)` route group.

`lib/site-content.ts` is the single source of truth for all copy on this
site — it is an in-repo mirror of the PublicLogic site content workbook.
Edit copy there, not by hand-editing individual page components.

PuddleJumper, LogicCommons, and 97N8Labs (the code/policy container) live in
`97n8/puddlejumper` — they are not part of this repo. This repo is the
public marketing site only.

DNS for publiclogic.org is managed in GoDaddy; see `docs/DNS.md` in
`97n8/puddlejumper` for the subdomain map (pj / api / commons / os / this
site).

## Stack

- Next.js 15, React 19, TypeScript (App Router, no `src` dir)
- Tailwind CSS v4 via `@tailwindcss/postcss`
- pnpm, Node >= 20

## Local development

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build & verify

```bash
pnpm typecheck
pnpm build
```

## Routes

`/`, `/solutions`, `/products`, `/resources`, `/method`, `/about`,
`/contact`. `/pricing` exists and builds but is intentionally not linked
from the nav.
