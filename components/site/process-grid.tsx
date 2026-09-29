import { DISPLAY_QUIET, DISPLAY_SANS } from "@/lib/styles";

type Step = { heading: string; body: string[] };

/**
 * The purchase process as a plan drawing: four cells separated by hairlines
 * that draw themselves, a 5px tick at every intersection, the step number
 * in the thin grotesk. Each cell is a subgrid of the list's rows, so every
 * number, heading and body starts on the same line whatever the copy length.
 * Cells enter one after another.
 */
export function ProcessGrid({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid auto-rows-[auto_auto_1fr] sm:grid-cols-2 lg:grid-cols-4">
      <span aria-hidden data-m="draw-x" data-origin="0% 50%" className="absolute inset-x-0 top-0 h-px bg-line" />
      <span aria-hidden data-m="draw-x" data-origin="100% 50%" data-delay="0.2" className="absolute inset-x-0 bottom-0 h-px bg-line" />
      {steps.map((step, i) => (
        <li key={step.heading} className="group relative row-span-3 grid grid-rows-subgrid px-0 pt-8 pb-10 sm:px-8 sm:pt-10 sm:pb-14 lg:first:pl-0">
          {i > 0 && (
            <span
              aria-hidden
              data-m="draw-y"
              data-origin="50% 0%"
              data-delay={String(0.15 * i)}
              className="absolute top-0 bottom-0 left-0 hidden w-px bg-line sm:block"
            />
          )}
          <span aria-hidden className="tick top-0 hidden sm:block" style={{ left: 0 }} />
          <span
            data-m="fade"
            data-delay={String(0.12 * i)}
            className={`${DISPLAY_SANS} tnum text-7xl text-ink-soft transition-colors duration-700 group-hover:text-accent`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 data-m="fade" data-delay={String(0.12 * i)} className={`${DISPLAY_QUIET} mt-6 text-3xl sm:mt-12 md:text-[2.25rem] lg:mt-20`}>
            {step.heading}
          </h3>
          <div data-m="fade" data-delay={String(0.12 * i)}>
            {step.body.map((p) => (
              <p key={p} className="mt-4 max-w-xs text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
