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
  // Preview-only URLs, never on the domain, but links to them may have been
  // shared. 2026-09-29: the single rental page was split into naves and
  // homes; the same day the services index gave way to two hubs (sale,
  // rental) and the service pages moved under them.
  "/es/servicios": "/es/venta",
  "/en/services": "/en/sell",
  "/fr/services": "/fr/vente",
  "/ca/serveis": "/ca/venda",
  "/es/servicios/alquiler": "/es/alquiler",
  "/en/services/rentals": "/en/to-let",
  "/fr/services/location": "/fr/location",
  "/ca/serveis/lloguer": "/ca/lloguer",
  "/es/servicios/compra": "/es/venta/pisos-y-casas",
  "/en/services/we-buy": "/en/sell/homes",
  "/fr/services/achat": "/fr/vente/logements",
  "/ca/serveis/compra": "/ca/venda/pisos-i-cases",
  "/es/servicios/compra-naves-industriales": "/es/venta/naves-industriales",
  "/en/services/we-buy-industrial-units": "/en/sell/industrial-units",
  "/fr/services/achat-entrepots": "/fr/vente/entrepots",
  "/ca/serveis/compra-naus-industrials": "/ca/venda/naus-industrials",
  "/es/servicios/alquiler-naves-industriales": "/es/alquiler/naves-industriales",
  "/en/services/industrial-units-to-let": "/en/to-let/industrial-units",
  "/fr/services/location-entrepots": "/fr/location/entrepots",
  "/ca/serveis/lloguer-naus-industrials": "/ca/lloguer/naus-industrials",
  "/es/servicios/alquiler-viviendas": "/es/alquiler/viviendas",
  "/en/services/homes-to-let": "/en/to-let/homes",
  "/fr/services/location-logements": "/fr/location/logements",
  "/ca/serveis/lloguer-habitatges": "/ca/lloguer/habitatges",
};
