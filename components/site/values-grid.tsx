import { ACCENT } from "@/lib/styles";

type Value = { title: string; body: string };

/**
 * Three values in a hairline grid. On hover the cell fills with espresso and
 * the type inverts (after the OrnaVillas services grid); the text is always
 * visible, so touch loses nothing.
 *
 * The word is sized off its own cell (container query), not the viewport:
 * "Transparencia" / "Transparència" is ~6.3em wide, so 15cqi keeps the
 * longest one inside the cell at every width. Below lg the cells stack,
 * because three columns at tablet width leave no room for the word.
 */
export function ValuesGrid({ items }: { items: Value[] }) {
  return (
    <ul className="relative grid border-line lg:grid-cols-3">
      <span aria-hidden data-m="draw-x" className="absolute inset-x-0 top-0 h-px bg-line" />
      {items.map((item, i) => (
        <li
          key={item.title}
          className="group relative isolate border-b border-line lg:border-b-0"
        >
          {i > 0 && (
            <span aria-hidden data-m="draw-y" data-origin="50% 0%" className="absolute inset-y-0 left-0 hidden w-px bg-line lg:block" />
          )}
          <span
            aria-hidden
            className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
          />
          <div
            data-m="fade"
            data-delay={String(0.12 * i)}
            className="@container flex min-h-[16rem] flex-col justify-between gap-10 px-0 py-8 transition-colors duration-500 group-hover:text-stock md:px-8 lg:min-h-[20rem] lg:px-10"
          >
            <span className="label tnum text-ink-soft transition-colors duration-500 group-hover:text-stock/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className={`${ACCENT} text-[length:min(15cqi,5.25rem)] leading-none`}>{item.title}</p>
              <p className="mt-6 max-w-xs text-ink-soft transition-colors duration-500 group-hover:text-stock/75">{item.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
