import { FRAME_NARROW, SECTION, DISPLAY } from "@/lib/styles";
import { MAILTO_HREF, ORG, TEL_HREF, hasEmail, hasPhone, hasPostalAddress } from "@/lib/seo";

/**
 * Legal page template. The three (notice, privacy, cookies) share a shape,
 * so they share a component.
 *
 * The `pending` block is visible on purpose. Publishing a legal notice with
 * invented company data is not a placeholder: it is an infringement. It
 * shows until the client delivers the registration data (lib/site.ts).
 *
 * A section flagged `owner` is followed by the owner's identification (name,
 * tax id, registered office, email, phone), read from lib/site.ts so the
 * legal pages and the footer can never disagree. Empty fields are skipped.
 */
type OwnerRow = { label: string; value: React.ReactNode };

type Props = {
  title: string;
  intro: string;
  sections: { heading: string; body: string[]; owner?: boolean }[];
  ownerLabels: { name: string; taxId: string; address: string; email: string; phone: string };
  pending?: { label: string; body: string };
  updated: string;
};

export function LegalPage({ title, intro, sections, ownerLabels, pending, updated }: Props) {
  const { address } = ORG;
  const rows: (OwnerRow | false | "")[] = [
    ORG.legalName && { label: ownerLabels.name, value: ORG.legalName },
    ORG.taxId && { label: ownerLabels.taxId, value: ORG.taxId },
    hasPostalAddress() && {
      label: ownerLabels.address,
      value: `${address.street}, ${address.postalCode} ${address.city} (${address.region})`,
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

      {pending && (
        <div className="mt-8 border border-dashed border-line bg-stock-2 p-5">
          <p className="label text-ink-soft">{pending.label}</p>
          <p className="mt-2 text-sm text-ink-soft">{pending.body}</p>
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
          </section>
        ))}
      </div>

      <p className="mt-14 border-t border-line pt-6 text-sm text-ink-soft">{updated}</p>
    </article>
  );
}
