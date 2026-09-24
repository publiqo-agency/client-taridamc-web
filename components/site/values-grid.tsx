import { ITALIC } from "@/lib/styles";

type Value = { title: string; body: string };

/**
 * Three values in a hairline grid. On hover the cell fills with espresso and
 * the type inverts (after the OrnaVillas services grid); the text is always
 * visible, so touch loses nothing.
 */
export function ValuesGrid({ items }: { items: Value[] }) {
  return (
    <ul className="relative grid border-line md:grid-cols-3">
      <span aria-hidden data-m="draw-x" className="absolute inset-x-0 top-0 h-px bg-line" />
      {items.map((item, i) => (
        <li
          key={item.title}
          className="group relative isolate border-b border-line md:border-b-0"
        >
          {i > 0 && (
            <span aria-hidden data-m="draw-y" data-origin="50% 0%" className="absolute inset-y-0 left-0 hidden w-px bg-line md:block" />
          )}
          <span
            aria-hidden
            className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
          />
          <div
            data-m="fade"
            data-delay={String(0.12 * i)}
            className="flex min-h-[22rem] flex-col justify-between gap-16 px-0 py-10 transition-colors duration-500 group-hover:text-stock md:min-h-[30rem] md:px-8 lg:px-10"
          >
            <span className="label tnum text-ink-soft transition-colors duration-500 group-hover:text-stock/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className={`${ITALIC} text-[clamp(3rem,5vw,5.25rem)] leading-none`}>{item.title}</p>
              <p className="mt-6 max-w-xs text-ink-soft transition-colors duration-500 group-hover:text-stock/75">{item.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
