/**
 * FAQ with native <details>/<summary>. No JS, no state: opens, closes, is
 * keyboard-navigable and the search engine indexes the answer even folded.
 *
 * A shared `name` makes the group an exclusive accordion (native since
 * 2024); where unsupported, several can open at once — harmless.
 *
 * The answer text is the SAME one emitted in faqSchema.
 */
type Props = {
  items: { question: string; answer: string }[];
  /** Groups the accordion. Unique per page when there are several FAQ blocks. */
  name?: string;
  className?: string;
};

export function FaqList({ items, name = "faq", className = "" }: Props) {
  return (
    <div className={`divide-y divide-line border-y border-line ${className}`}>
      {items.map((item) => (
        <details key={item.question} name={name} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center gap-4 text-left font-semibold [&::-webkit-details-marker]:hidden">
            <span className="flex-1">{item.question}</span>
            <span
              aria-hidden
              className="grid size-8 shrink-0 place-items-center rounded-full border border-ink/15 text-lg leading-none transition-[rotate,background-color,color] duration-300 group-open:rotate-45 group-open:border-ink group-open:bg-ink group-open:text-stock"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
