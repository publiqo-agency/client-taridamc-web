import { DISPLAY, DISPLAY_QUIET, FRAME, SECTION } from "@/lib/styles";
import type { Faq, ServiceCopy } from "@/lib/i18n/types";
import { SectionHeader } from "./section-header";
import { Lines } from "./motion/split";

/**
 * The reading sections of a service page, in the site's plan-drawing
 * vocabulary: a serif head on the left, the content on hairlines to the
 * right. Every text here is real HTML text (not an image, not collapsed):
 * it is what search engines and AI answers quote.
 */

/** "What we buy": two short paragraphs beside the head. */
export function ServiceScope({ scope }: { scope: NonNullable<ServiceCopy["scope"]> }) {
  return (
    <section className={SECTION}>
      <div className={`${FRAME} grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-8`}>
        <h2 className={`${DISPLAY} col-span-12 text-[clamp(2.75rem,5vw,5.5rem)] lg:col-span-5`} data-m="lines">
          <Lines text={scope.title} />
        </h2>
        <div className="col-span-12 space-y-6 lg:col-span-6 lg:col-start-7">
          {scope.body.map((paragraph, i) => (
            <p
              key={paragraph}
              className={i === 0 ? `${DISPLAY_QUIET} text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.2]` : "text-lg text-ink-soft"}
              data-m="fade"
              data-delay={String(0.1 * i)}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Direct sale vs. an agency, as a real table: two columns, one row per point. */
export function ServiceComparison({ comparison }: { comparison: NonNullable<ServiceCopy["comparison"]> }) {
  return (
    <section className={`${SECTION} bg-stock-2`}>
      <div className={FRAME}>
        <SectionHeader title={comparison.title} intro={comparison.intro} align="start" />
        <div className="mt-14 overflow-x-auto md:mt-20" data-m="fade">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-ink">
                <th scope="col" className="label w-1/4 py-4 pr-6 font-normal text-ink-soft">
                  <span className="sr-only">—</span>
                </th>
                {comparison.columns.map((column, i) => (
                  <th
                    key={column}
                    scope="col"
                    className={`${DISPLAY_QUIET} py-4 pr-6 text-xl font-normal md:text-2xl ${i === 0 ? "text-accent" : ""}`}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label} className="border-b border-line align-top">
                  <th scope="row" className="label py-5 pr-6 font-normal text-ink-soft">
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={i} className={`py-5 pr-6 ${i === 0 ? "text-ink" : "text-ink-soft"}`}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/** The usual documents of a sale, as a numbered hairline list. */
export function ServiceDocuments({ documents }: { documents: NonNullable<ServiceCopy["documents"]> }) {
  return (
    <section className={SECTION}>
      <div className={`${FRAME} grid grid-cols-12 gap-x-5 gap-y-12 md:gap-x-8`}>
        <div className="col-span-12 lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 className={`${DISPLAY} text-[clamp(2.75rem,5vw,5.5rem)]`} data-m="lines">
              <Lines text={documents.title} />
            </h2>
            <p className="mt-8 max-w-md text-lg text-ink-soft" data-m="fade" data-delay="0.2">
              {documents.intro}
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <ol className="border-t border-line">
            {documents.items.map((item, i) => (
              <li key={item} className="flex items-baseline gap-6 border-b border-line py-5 md:gap-10" data-m="fade" data-delay={String(i * 0.04)}>
                <span className="label tnum w-8 shrink-0 text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-lg text-ink-soft" data-m="fade">
            {documents.note}
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * Questions and answers, all open. The same list feeds the FAQPage markup
 * (lib/schema.ts `faqSchema`), so what the page shows and what the markup
 * says can never drift apart.
 */
export function ServiceFaq({ title, items }: { title: string; items: Faq[] }) {
  return (
    <section className={SECTION}>
      <div className={`${FRAME} grid grid-cols-12 gap-x-5 gap-y-12 md:gap-x-8`}>
        <div className="col-span-12 lg:col-span-4">
          <h2 className={`${DISPLAY} text-[clamp(2.75rem,5vw,5.5rem)] lg:sticky lg:top-28`} data-m="lines">
            <Lines text={title} />
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <div className="border-t border-line">
            {items.map((item) => (
              <div key={item.question} className="border-b border-line py-8" data-m="fade">
                <h3 className={`${DISPLAY_QUIET} text-[clamp(1.4rem,2vw,1.9rem)] leading-[1.2]`}>{item.question}</h3>
                <p className="mt-4 max-w-2xl text-lg text-ink-soft">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
