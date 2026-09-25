import { DISPLAY_QUIET } from "@/lib/styles";

type Step = { heading: string; body: string[] };

/**
 * The purchase process: four cells between hairlines, each with its small
 * step number (it is a real sequence), the step and a short body. Cells
 * enter one after another.
 */
export function ProcessGrid({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4">
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-line" />
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line" />
      {steps.map((step, i) => (
        <li key={step.heading} className="group relative px-0 pt-10 pb-14 sm:px-8 lg:min-h-[22rem] lg:first:pl-0">
          {i > 0 && (
            <span aria-hidden className="absolute top-0 bottom-0 left-0 hidden w-px bg-line sm:block" />
          )}
          <div data-m="fade" data-delay={String(0.12 * i)} className="flex h-full flex-col justify-between gap-12">
            <span className="tnum text-sm text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className={`${DISPLAY_QUIET} text-2xl md:text-[1.75rem]`}>{step.heading}</h3>
              {step.body.map((p) => (
                <p key={p} className="mt-4 max-w-xs text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
