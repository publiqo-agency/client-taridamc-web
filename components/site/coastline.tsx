/**
 * A single drawn line: the horizon of the coast, sketched like an
 * architect's elevation, with two annotations. It draws itself as it
 * scrolls through (data-m="stroke"). Decorative only.
 */
export function Coastline({ sea, place }: { sea: string; place: string }) {
  return (
    <div aria-hidden className="relative">
      <svg data-m="stroke" viewBox="0 0 1200 160" fill="none" className="h-auto w-full text-ink" preserveAspectRatio="none">
        <path
          pathLength={1}
          d="M0 118 C 120 116, 190 96, 280 92 S 420 70, 520 74 S 640 104, 760 100 S 900 58, 990 52 S 1110 70, 1200 64"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          pathLength={1}
          d="M0 140 L 1200 140"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="label absolute bottom-0 left-0 translate-y-full pt-3 text-ink-soft">{sea}</span>
      <span className="label absolute top-0 right-[16%] -translate-y-full pb-3 text-ink-soft">{place}</span>
    </div>
  );
}
