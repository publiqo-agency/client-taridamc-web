import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { LegalDict } from "@/lib/i18n/types";
import { LEGAL_KEYS, localeHref } from "@/lib/routes";
import { FRAME_NARROW, SECTION, DISPLAY } from "@/lib/styles";
import { SHOW_PENDING } from "@/lib/pending";
import { MAILTO_HREF, ORG, TEL_HREF, hasEmail, hasLegalData, hasPhone, hasPostalAddress } from "@/lib/seo";
import { PendingData } from "./pending";

/**
 * Legal page template. The three (notice, privacy, cookies) share a shape,
 * so they share a component.
 *
 * The `pending` block is visible on purpose. Publishing a legal notice with
 * invented company data is not a placeholder: it is an infringement. It
 * shows until the client delivers the registration data (lib/site.ts).
 *
 * A section flagged `owner` is followed by the owner's identification (name,
 * tax id, registered office, registry entry, email, phone), read from
 * lib/site.ts so the legal pages and the footer can never disagree. Empty
 * fields are skipped; a missing registry entry gets a preview-only chip,
 * because LSSI art. 10 requires it.
 *
 * Besides paragraphs, a section may carry bullets (`list`), a table (`table`,
 * the cookie list: a real table from md, one card per row below it, so a
 * phone never scrolls sideways), links out (`external`) and links to the
 * other legal pages (`links`).
 */
type OwnerRow = { label: string; value: React.ReactNode };

type LegalKey = (typeof LEGAL_KEYS)[number];

type Section = {
  heading: string;
  body: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
  external?: { label: string; href: string }[];
  owner?: boolean;
  links?: string[];
};

type Props = {
  locale: Locale;
  page: { title: string; intro: string; sections: Section[] };
  dict: LegalDict;
};

const isLegalKey = (key: string): key is LegalKey => (LEGAL_KEYS as readonly string[]).includes(key);

export function LegalPage({ locale, page, dict }: Props) {
  const { title, intro, sections } = page;
  const { ownerLabels, linkLabels } = dict;
  const { address } = ORG;
  const rows: (OwnerRow | false | "")[] = [
    ORG.legalName && { label: ownerLabels.name, value: ORG.legalName },
    ORG.taxId && { label: ownerLabels.taxId, value: ORG.taxId },
    hasPostalAddress() && {
      label: ownerLabels.address,
      value: `${address.street}, ${address.postalCode} ${address.city} (${address.region})`,
    },
    (ORG.registry || SHOW_PENDING) && {
      label: ownerLabels.registry,
      value: ORG.registry || <PendingData>{dict.registryPending}</PendingData>,
    },
    hasEmail() && {
      label: ownerLabels.email,
      value: (
        <a href={MAILTO_HREF} data-cta="email" className="link-line text-ink">
          {ORG.email}
        </a>
      ),
    },
    hasPhone() && {
      label: ownerLabels.phone,
      value: (
        <a href={TEL_HREF} data-cta="call" className="link-line text-ink">
          {ORG.telephoneDisplay || ORG.telephone}
        </a>
      ),
    },
  ];
  const owner = rows.filter((row): row is OwnerRow => Boolean(row));

  return (
    <article data-placement="legal" className={`${FRAME_NARROW} ${SECTION} pt-32 md:pt-40`}>
      <h1 className={`${DISPLAY} text-5xl md:text-7xl`}>{title}</h1>
      <p className="mt-6 text-lg text-ink-soft">{intro}</p>

      {!hasLegalData() && (
        <div className="mt-8 border border-dashed border-line bg-stock-2 p-5">
          <p className="label text-ink-soft">{dict.pending.label}</p>
          <p className="mt-2 text-sm text-ink-soft">{dict.pending.body}</p>
        </div>
      )}

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl">{section.heading}</h2>
            <div className="mt-3 space-y-3 text-ink-soft">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {section.list && (
              <ul className="mt-4 space-y-2 text-ink-soft">
                {section.list.map((item) => (
                  <li key={item} className="relative pl-5 before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.table && <LegalTable {...section.table} />}

            {section.external && (
              <ul className="mt-4 space-y-2">
                {section.external.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="link-line text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {section.owner && owner.length > 0 && (
              <dl className="mt-5 border-t border-line text-sm">
                {owner.map((row) => (
                  <div key={row.label} className="grid gap-1 border-b border-line py-3 sm:grid-cols-[12rem_1fr] sm:gap-6">
                    <dt className="text-ink-soft">{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {section.links && (
              <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {section.links.filter(isLegalKey).map((key) => (
                  <Link key={key} href={localeHref(locale, key)} className="link-line text-ink">
                    {linkLabels[key]}
                  </Link>
                ))}
              </p>
            )}
          </section>
        ))}
      </div>

      <p className="mt-14 border-t border-line pt-6 text-sm text-ink-soft">{dict.updated}</p>
    </article>
  );
}

function LegalTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <>
      <table className="mt-5 hidden w-full border-t border-line text-left text-sm md:table">
        <thead>
          <tr>
            {head.map((cell) => (
              <th key={cell} scope="col" className="border-b border-line py-3 pr-4 font-normal text-ink-soft">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="align-top">
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className="border-b border-line py-3 pr-4 font-normal">
                    <code className="text-ink">{cell}</code>
                  </th>
                ) : (
                  <td key={i} className="border-b border-line py-3 pr-4 text-ink-soft">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-5 space-y-4 md:hidden">
        {rows.map((row) => (
          <dl key={row[0]} className="border-t border-line text-sm">
            {row.map((cell, i) => (
              <div key={i} className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-line py-2">
                <dt className="text-ink-soft">{head[i]}</dt>
                <dd className={i === 0 ? "text-ink" : "text-ink-soft"}>{i === 0 ? <code>{cell}</code> : cell}</dd>
              </div>
            ))}
          </dl>
        ))}
      </div>
    </>
  );
}
