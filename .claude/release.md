# Release record

## Strategy

- **Production branch**: `main`
- **Working branch**: `dev` — task branches `claude/*` merge into it (ship skill)
- **Hops**: one, `dev → main`, by PR. No preview/staging branch (client repo).
- **Merge mode**: `--merge`, so `main` keeps a promotion commit per release
- **Protections**: none on `dev` or `main`

## Gates

| Command | What it covers |
|---|---|
| `npm run typecheck` | route types + tsc (also catches a missing dictionary key in any language) |
| `npm run lint` | ESLint |
| `NEXT_PUBLIC_SITE_URL=https://example.invalid npx next build` | every locale and service page prerenders |

## Migrations

None: no database.

## Deploy

- Vercel project `client-taridamc-web` (`prj_YahMEDmU30SPAlikT3qs1ktoxdAO`) on team
  `publiqo` (`team_OnXsO47WP6pF2CPt7DvL1s6u`), framework Next.js, Node 24.x,
  region fra1, Git-connected to `publiqo-agency/client-taridamc-web`, production
  branch `main`.
- Deploy with the CLI from a clean `main`: `npx vercel deploy --prod --yes --scope publiqo`
  (a Git push deployment may be blocked by commit-author seat rules; never add a
  seat to unblock it).
- Production URL until the domain is connected: https://client-taridamc-web.vercel.app
- No environment variables set yet: without `NEXT_PUBLIC_SITE_URL` the site is
  `noindex` and shows preview-only pending chips and sample listings. Set it
  (and `NEXT_PUBLIC_GTM_ID`, `RESEND_API_KEY`, `CONTACT_EMAIL`) only when
  www.taridamc.com is live.

## Traps

- 2026-09-24 — The project did not exist although CLAUDE.md listed it; it was
  created on the first release with `vercel project add`. That leaves the
  **framework unset** ("Other"): the build "succeeds" in ~25 s and every route
  is a 404 (`x-vercel-error: NOT_FOUND`). Fix: PATCH `framework: "nextjs"` and
  redeploy. Check the framework whenever a project is created from the CLI.
