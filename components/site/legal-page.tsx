import { FRAME_NARROW, SECTION, DISPLAY } from "@/lib/styles";

/**
 * Legal page template. The three (notice, privacy, cookies) share a shape,
 * so they share a component.
 *
 * The `pending` block is visible on purpose. Publishing a legal notice with
 * invented company data is not a placeholder: it is an infringement. It
 * shows until the client delivers the registration data (lib/site.ts).
 */
type Props = {
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  pending?: { label: string; body: string };
  updated: string;
};

export function LegalPage({ title, intro, sections, pending, updated }: Props) {
  return (
    <article className={`${FRAME_NARROW} ${SECTION} pt-32 md:pt-40`}>
      <h1 className={`${DISPLAY} text-3xl md:text-4xl`}>{title}</h1>
      <p className="mt-6 text-lg text-ink-soft">{intro}</p>

      {pending && (
        <div className="mt-8 rounded-2xl border border-dashed border-line bg-stock-2 p-5">
          <p className="label text-ink-soft">{pending.label}</p>
          <p className="mt-2 text-sm text-ink-soft">{pending.body}</p>
        </div>
      )}

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-lg font-bold">{section.heading}</h2>
            <div className="mt-3 space-y-3 text-ink-soft">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-14 border-t border-line pt-6 text-sm text-ink-soft">{updated}</p>
    </article>
  );
}
