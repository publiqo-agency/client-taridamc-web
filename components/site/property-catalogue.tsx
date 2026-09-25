"use client";

import { useState, type ReactNode } from "react";
import type { PropertyType } from "@/lib/properties";

type Props = {
  aria: string;
  labels: Record<"all" | PropertyType, string>;
  /** Types present in the list, in display order. */
  types: PropertyType[];
  /** One pre-rendered card per listing (Server Components), with its type. */
  cards: { key: string; type: PropertyType; node: ReactNode }[];
};

/**
 * Filterable catalogue grid. The cards are rendered on the server and passed
 * in; this component only decides which ones show. Filtering replays a
 * short rise so the change reads as intentional, not as a jump.
 */
export function PropertyCatalogue({ aria, labels, types, cards }: Props) {
  const [filter, setFilter] = useState<"all" | PropertyType>("all");
  const options: ("all" | PropertyType)[] = ["all", ...types];
  const visible = cards.filter((card) => filter === "all" || card.type === filter);

  return (
    <div>
      {types.length > 1 && (
        <div role="group" aria-label={aria} className="flex flex-wrap gap-x-8 gap-y-3 border-b border-line pb-5">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
              className="link-line text-sm text-ink-soft transition-colors hover:text-ink aria-pressed:text-ink aria-pressed:[background-size:100%_1px]"
            >
              {labels[option]}
              <span className="label tnum ml-2 text-ink-soft">
                {option === "all" ? cards.length : cards.filter((c) => c.type === option).length}
              </span>
            </button>
          ))}
        </div>
      )}

      <div key={filter} className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((card, i) => (
          <div key={card.key} className="catalogue-rise" style={{ animationDelay: `${Math.min(i, 5) * 70}ms` }}>
            {card.node}
          </div>
        ))}
      </div>
    </div>
  );
}
