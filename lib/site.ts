/**
 * Client identity: the single source of every name, contact detail and legal
 * fact the site renders, emails or emits as JSON-LD. Fill it during the
 * scaffold; nothing else in the repo carries a client name.
 *
 * An empty string means "the client has not delivered this yet". The site
 * degrades honestly around it (`hasPhone()`, `hasWhatsApp()`… in lib/seo.ts):
 * no `tel:` link to nowhere, no `telephone: ""` in the structured data, and a
 * visible PENDING chip in previews (lib/pending.ts). Never invent a value to
 * make a section look finished.
 */
export const SITE = {
  /** Public brand name, as it appears in titles and the footer. */
  name: "__CLIENT_NAME__",
  /** Short form for tight spots (title template, manifest short_name). */
  shortName: "__CLIENT_NAME__",
  /** One-line brand claim, optional. Empty = not rendered. */
  claim: "",

  /** Registered company name and tax id, for the legal pages and JSON-LD. */
  legalName: "",
  taxId: "",

  /** E.164 digits only, no "+" — what wa.me expects. Empty = no WhatsApp CTAs. */
  whatsapp: "",
  /** E.164 with "+", for tel: links. Empty = no phone anywhere. */
  telephone: "",
  /** Human-formatted phone, e.g. "+34 600 000 000". */
  telephoneDisplay: "",
  email: "",

  address: {
    street: "",
    postalCode: "",
    city: "",
    region: "",
    /** ISO 3166-1 alpha-2. */
    country: "ES",
  },
  /** Where the business operates, for `areaServed`. Empty = omitted. */
  areaServed: "",

  /** Full profile URLs. Empty ones are filtered out of `sameAs`. */
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
} as const;
