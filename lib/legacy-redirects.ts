/**
 * Old URLs that must 308 to the new site — the paths Google still has indexed
 * from the previous website. Empty for a brand new domain.
 *
 * Keys are the OLD pathname (no locale prefix, no trailing slash); values are
 * the NEW public path INCLUDING the locale. The proxy checks this table before
 * anything else, so a migration is a single hop and never chains 308 + 307.
 *
 * Build it from the old sitemap or from Search Console's coverage report,
 * and keep it: entries are cheap and inbound links live for years.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // The single rental page was split into naves and homes (2026-09-29). It
  // was only ever on preview deployments, but links to it may have been
  // shared: the services index lists both new pages.
  "/es/servicios/alquiler": "/es/servicios",
  "/en/services/rentals": "/en/services",
  "/fr/services/location": "/fr/services",
  "/ca/serveis/lloguer": "/ca/serveis",
};
