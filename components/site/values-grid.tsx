import { ACCENT } from "@/lib/styles";

type Value = { title: string; body: string };

/**
 * Three values as editorial rows: the word large and thin on the left, what
 * it means on the right, one hairline above each. A different shape from
 * the process grid on purpose, so the two never read as the same block.
 */
export function ValuesGrid({ items }: { items: Value[] }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li
          key={item.title}
          className="group grid grid-cols-12 gap-x-8 gap-y-4 border-t border-line py-10 last:border-b md:py-14"
          data-m="fade"
          data-delay={String(0.06 * i)}
        >
          <p
            className={`${ACCENT} col-span-12 text-[clamp(2.5rem,4.4vw,4.25rem)] leading-none transition-colors duration-200 ease-(--ease-out) group-hover:text-accent md:col-span-5`}
          >
            {item.title}
          </p>
          <p className="col-span-12 max-w-[46ch] text-lg text-ink-soft md:col-span-6 md:col-start-7 md:pt-2">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
