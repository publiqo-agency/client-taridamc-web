# Pending

What the client still owes, what blocks the launch, and what is decided but
not done. Keep it current: it is the list Martí reads before every call.

## Blocks launch

1. **Domain and DNS.** Production domain `www.taridamc.com`; records handed to the
   client's registrar by the `new-client-project` run. Status: pending.
2. **Legal data.** Legal name, tax id and registered address → `lib/site.ts`.
   Until then every legal page shows a visible "pending" block.
3. **Contact data.** WhatsApp number, phone, email → `lib/site.ts`. Until then
   the WhatsApp bubble is a pending chip and the footer shows nothing.
4. **Resend key** (`RESEND_API_KEY`, send-only, scoped to `web.publiqo.es`) and
   `CONTACT_EMAIL` in Vercel Production. Without them the form errors in production.

## Client material

- Logo (transparent PNG or SVG) → `brand/`, then `npm run brand:build`.
- Photos for the heroes (`public/hero/*.webp`) and each service
  (`public/services/<id>/hero.webp`). Missing files render a placeholder.
- Final copy for every page in every language (`dictionaries/`). Placeholder
  sentences describe what goes there.
- Social profile URLs → `lib/site.ts`.

## Measurement

- GTM container and GA4 property: run the `google-setup` skill once the domain
  is live; it fills `MEASUREMENT.md`.
- IndexNow key: generate, publish `public/<KEY>.txt`, add `INDEXNOW_KEY` locally.

## Decided, not done

- (empty)

## Resolved

- (empty)
