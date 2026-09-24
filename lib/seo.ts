import { SITE } from "@/lib/site";

/**
 * Canonical URL, indexability kill-switch and the derived contact hrefs.
 * Everything that appears in the footer, the contact page or the JSON-LD is
 * read from here, never from process.env directly.
 */

const RAW_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";

/**
 * Without NEXT_PUBLIC_SITE_URL the whole site is `noindex` and robots.txt
 * disallows everything: a preview or staging deployment never competes with
 * production in the index. Set it in the Production environment only.
 */
export const IS_INDEXABLE = RAW_SITE_URL.length > 0;

export const SITE_URL = RAW_SITE_URL || "http://localhost:3000";

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

/**
 * Path of the OG card (app/opengraph-image.tsx). Referenced explicitly because
 * the file lives in app/ while the routes hang from app/[locale]/, and the
 * file-convention cascade does not reach across that boundary.
 */
export const OG_IMAGE = "/opengraph-image";

export const ORG = SITE;

/**
 * Real profiles only: a `sameAs` with empty strings in JSON-LD is worse than
 * none. The cast is needed because SITE is `as const` and its empty fields
 * are the literal type `""`.
 */
export const SAME_AS = (
  [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin] as string[]
).filter((url) => url.length > 0);

export const hasPhone = () => SITE.telephone.length > 0;
export const hasEmail = () => SITE.email.length > 0;
export const hasWhatsApp = () => SITE.whatsapp.length > 0;
export const hasPostalAddress = () =>
  SITE.address.street.length > 0 && SITE.address.postalCode.length > 0;
export const hasLegalData = () =>
  SITE.legalName.length > 0 && SITE.taxId.length > 0;

export const TEL_HREF = `tel:${SITE.telephone}`;
export const MAILTO_HREF = `mailto:${SITE.email}`;

/** Bare wa.me link. Prefilled variants live in lib/whatsapp.ts. */
export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}`;
