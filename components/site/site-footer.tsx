import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { DISPLAY, FRAME } from "@/lib/styles";
import { MAILTO_HREF, ORG, SAME_AS, TEL_HREF, hasEmail, hasPhone, hasPostalAddress } from "@/lib/seo";
import { LocaleSwitcher } from "./locale-switcher";
import { ConsentReopenButton } from "./consent-banner";
import { PendingData } from "./pending";
import { LocalTime } from "./local-time";
import { COORDS, PLACE } from "./coords";
import { Logo } from "./logo";

type LinkItem = { href: string; label: string };

type Props = {
  locale: Locale;
  columns: { title: string; links: LinkItem[] }[];
  legalLinks: LinkItem[];
  copy: {
    tagline: string;
    contactTitle: string;
    followTitle: string;
    localeAria: string;
    localTime: string;
    cookieSettings: string;
    rights: string;
    credit: string;
  };
};

/**
 * Footer: an espresso band. Link columns on the plan grid, the local time in
 * Castelldefels, and the name set across the full width, rising letter by
 * letter as the page ends. Contact data only renders when it exists
 * (lib/site.ts); the consent reopen button is one click away on every page.
 */
export function SiteFooter({ locale, columns, legalLinks, copy }: Props) {
  const year = new Date().getFullYear();
  const hasContact = hasPhone() || hasEmail() || hasPostalAddress();
  const linkClass = "link-line text-ink/85 transition-colors hover:text-ink";

  return (
    <footer data-placement="footer" className="band-dark grain relative overflow-hidden bg-stock text-ink">
      <div className={`${FRAME} grid grid-cols-12 gap-x-8 gap-y-14 pt-24 pb-16 md:pt-32`}>
        <div className="col-span-12 lg:col-span-5">
          <p className={`${DISPLAY} max-w-md text-[clamp(1.9rem,2.8vw,2.75rem)] leading-[1.1]`} data-m="fade">
            {copy.tagline}
          </p>
        </div>

        {columns.map((column, i) => (
          <div key={column.title} className="col-span-6 md:col-span-4 lg:col-span-2" data-m="fade" data-delay={String(0.08 * (i + 1))}>
            <p className="label text-ink-soft">{column.title}</p>
            <ul className="mt-5 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-12 md:col-span-4 lg:col-span-3" data-m="fade" data-delay="0.24">
          <p className="label text-ink-soft">{copy.contactTitle}</p>
          <ul className="mt-5 space-y-2.5">
            {hasPhone() && (
              <li>
                <a href={TEL_HREF} data-cta="call" className={linkClass}>
                  {ORG.telephoneDisplay || ORG.telephone}
                </a>
              </li>
            )}
            {hasEmail() && (
              <li>
                <a href={MAILTO_HREF} data-cta="email" className={linkClass}>
                  {ORG.email}
                </a>
              </li>
            )}
            {hasPostalAddress() && (
              <li className="text-ink-soft">
                {ORG.address.street}, {ORG.address.postalCode} {ORG.address.city}
              </li>
            )}
            {!hasContact && (
              <li>
                <PendingData>Contact data missing</PendingData>
              </li>
            )}
          </ul>
          {SAME_AS.length > 0 && (
            <>
              <p className="label mt-10 text-ink-soft">{copy.followTitle}</p>
              <ul className="mt-5 space-y-2.5">
                {SAME_AS.map((href) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {new URL(href).hostname.replace(/^www\./, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="label tnum mt-10 text-ink-soft">
            {PLACE} · {COORDS}
            <br />
            {copy.localTime} <LocalTime className="text-ink" />
          </p>
        </div>
      </div>

      <div className="relative">
        <span aria-hidden data-m="draw-x" className="absolute inset-x-0 top-0 block h-px bg-line" />
        <div className={`${FRAME} pt-16 pb-12 md:pt-24 md:pb-16`}>
          <Logo variant="compact" animate decorative className="h-auto w-full" />
        </div>
      </div>

      <div className={`${FRAME} relative flex flex-col gap-4 border-t border-line py-6 text-sm text-ink-soft md:flex-row md:items-center md:justify-between`}>
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <p>
            © {year} {ORG.legalName || ORG.name}. {copy.rights}
          </p>
          {/* Agency credit. A followed link (no `nofollow`): it is the backlink
              the agency gets from every site it builds. Brand anchor only;
              vary `credit` per client so footers do not repeat verbatim. */}
          <p>
            {copy.credit}{" "}
            <a href="https://publiqo.es" target="_blank" rel="noopener noreferrer" className="link-line hover:text-ink">
              Publiqo
            </a>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-line hover:text-ink">
              {link.label}
            </Link>
          ))}
          <ConsentReopenButton label={copy.cookieSettings} className="link-line hover:text-ink" />
          <LocaleSwitcher current={locale} aria={copy.localeAria} />
        </div>
      </div>
    </footer>
  );
}
