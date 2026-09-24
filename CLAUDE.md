@AGENTS.md

`AGENTS.md` above is written and re-added by `next dev`; it stays committed and
is imported here rather than copied. In this project specifically: the
middleware file is `proxy.ts`, page and layout props are the global
`PageProps<"/route">` / `LayoutProps<"/route">` types (never hand-written;
`npm run typecheck` generates them), and `params` is always awaited.

## What this is

Marketing website for **Tarida MC**: static content, a contact form
(Server Action → Resend) and WhatsApp as the main call to action. No database,
no CMS. Every page is prerendered at build time.

Read `docs/SKELETON.md` before touching structure: it says which files are CORE
(shared with every agency site — do not fork them for a client need), which are
CLIENT-DATA (same shape, this client's values) and which are CLIENT-SKIN (the
design, rewritten per client).

Language: code, comments, docs and commit subjects are in **English**. The
site's copy lives in `dictionaries/` in the site's languages; that is content,
not code.

## This client

Tarida MC S.L.: a small family real-estate business in Castelldefels, run by
Ramon Seva, 40 years in the sector. The site presents them as a buyer of
properties (sellers are the main lead) and shows the properties they rent
(industrial units and homes). Tone: serious, elegant, minimalist; the visitor
is addressed formally (usted / vous / vostè). Languages: es (default), en, fr,
ca. The brief lives in GoFeed (see `docs/PENDING.md`).

## Branch flow

```text
main <- dev <- claude/<type>-<slug>
```

The full procedure — branches, types, commits, merge and push — lives in
`.claude/skills/ship/SKILL.md`. **Load it and follow it before editing any
tracked file in this repo.**

`main` is never reached from here. The `dev` → `main` merge is done by Martí by
PR on GitHub, or through the `release` skill when he asks for a release; this
project's strategy and deploy targets are recorded in `.claude/release.md` once
the first release has run. **Client projects have NO `preview` branch.**

## Martí runs the dev server

Never start `npm run dev` or any other Next server. Validate with commands that
end on their own: `npm run typecheck`, `npm run lint`, `npx next build`. If
something has to be seen in a browser, ask him.

## Measurement

This site is measured: GTM container in `lib/analytics.ts`, consent in
`lib/consent.ts`, the delegated click listener in
`components/site/analytics-listener.tsx`. The register lives in
`MEASUREMENT.md`.

Whenever a change touches something measurable — a new form, page or CTA; an
event renamed or removed; what a lead is worth; a new step in the funnel —
**stop and resolve the tracking before calling the change done**:

1. Decide what it means for the events, parameters, key events, custom
   dimensions and conversion actions that already exist.
2. Apply in the same change whatever is code.
3. Whatever needs a console (GA4, GTM, Ads, Search Console) goes into
   `MEASUREMENT.md` as a pending entry. Never leave it only in the conversation.

Do not silently remove an event something counts downstream, and do not add one
without registering the parameter and dimension it needs.

⚠ **Custom dimensions do not backfill.** A parameter GA4 receives before its
dimension exists never shows in any report for those days.

## Nothing invented

Contact data, legal data, prices, testimonials, partner logos: if the client has
not delivered it, it is not on the site. `lib/site.ts` holds empty strings for
what is pending and the components degrade around them (`hasPhone()`,
`PendingData`). Never fill a gap with a plausible value.

## Infrastructure

Filled by the `new-client-project` skill at scaffold time; the `release` skill
reads it on the first release.

| What | Value |
| --- | --- |
| GitHub | `publiqo-agency/client-taridamc-web` (default branch `dev`, production `main`) |
| Vercel project | `client-taridamc-web` on team `publiqo` (`team_OnXsO47WP6pF2CPt7DvL1s6u`), region `fra1`, Node 24 |
| Production domain | `https://www.taridamc.com` |
| Database | none |
| Scaffolded from | `publiqo-agency/template-web-static@d1fdcc6` |
