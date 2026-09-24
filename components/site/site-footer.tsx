import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { FRAME } from "@/lib/styles";
import { MAILTO_HREF, ORG, SAME_AS, TEL_HREF, hasEmail, hasPhone, hasPostalAddress } from "@/lib/seo";
import { Logo } from "./logo";
import { LocaleSwitcher } from "./locale-switcher";
import { ConsentReopenButton } from "./consent-banner";
import { PendingData } from "./pending";

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
    cookieSettings: string;
    rights: string;
    credit: string;
  };
};

/**
 * Footer. A dark band (`band-dark`), so every token inverts. Contact data
 * comes from lib/site.ts and only renders when it exists: no `tel:` link to
 * an empty number. The consent reopen button is here because withdrawing
 * consent must be one click away on every page.
 */
export function SiteFooter({ locale, columns, legalLinks, copy }: Props) {
  const year = new Date().getFullYear();
  const hasContact = hasPhone() || hasEmail() || hasPostalAddress();

  return (
    <footer data-placement="footer" className="band-dark bg-stock text-ink">
      <div className={`${FRAME} grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:py-20`}>
        <div>
          <Logo className="h-9" />
          <p className="mt-5 max-w-sm text-ink-soft">{copy.tagline}</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="label text-ink-soft">{column.title}</p>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-semibold hover:text-ink-soft">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="label text-ink-soft">{copy.contactTitle}</p>
          <ul className="mt-4 space-y-2">
            {hasPhone() && (
              <li>
                <a href={TEL_HREF} data-cta="call" className="font-semibold hover:text-ink-soft">
                  {ORG.telephoneDisplay || ORG.telephone}
                </a>
              </li>
            )}
            {hasEmail() && (
              <li>
                <a href={MAILTO_HREF} data-cta="email" className="font-semibold hover:text-ink-soft">
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
              <p className="label mt-8 text-ink-soft">{copy.followTitle}</p>
              <ul className="mt-4 space-y-2">
                {SAME_AS.map((href) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-ink-soft">
                      {new URL(href).hostname.replace(/^www\./, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <div className={`${FRAME} flex flex-col gap-4 border-t border-line py-6 text-sm text-ink-soft md:flex-row md:items-center md:justify-between`}>
        <div className="space-y-1">
          <p>
            © {year} {ORG.legalName || ORG.name}. {copy.rights}
          </p>
          {/* Agency credit. A followed link (no `nofollow`): it is the backlink
              the agency gets from every site it builds. Brand anchor only;
              vary `credit` per client so footers do not repeat verbatim. */}
          <p>
            {copy.credit}{" "}
            <a href="https://publiqo.es" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              Publiqo
            </a>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
          <ConsentReopenButton label={copy.cookieSettings} className="hover:text-ink" />
          <LocaleSwitcher current={locale} aria={copy.localeAria} />
        </div>
      </div>
    </footer>
  );
}
