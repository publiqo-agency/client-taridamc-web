import Link from "next/link";
import type { Property } from "@/lib/properties";
import type { CommonDict } from "@/lib/i18n/types";
import { DISPLAY, FRAME } from "@/lib/styles";
import { Lines } from "./motion/split";
import { PropertyCard } from "./property-card";
import { Arrow } from "./pill-button";

type Props = {
  index: string;
  items: Property[];
  sample: boolean;
  locale: string;
  copy: CommonDict["catalogue"];
  catalogueHref: string;
  formHref: string;
};

/**
 * The home's catalogue teaser. The heading scrolls in like any other
 * section; then, on wide screens with a mouse, only the rail pins (sized so
 * a whole card fits the viewport) and travels sideways with the scroll, with
 * an "01 / 06" index and a progress hairline. On touch it is a native snap
 * row you swipe.
 */
export function PropertyRail({ index, items, sample, locale, copy, catalogueHref, formHref }: Props) {
  const total = String(items.length).padStart(2, "0");
  return (
    <section data-m="hscroll" data-placement="home-catalogue" className="relative overflow-hidden py-24 md:py-32">
      <div className={`${FRAME} grid grid-cols-12 items-end gap-x-8 gap-y-8`}>
        <div className="col-span-12 md:col-span-3" data-m="fade">
          <span className="label tnum text-ink-soft">({index})</span>
          <span className="label ml-4 md:ml-0 md:mt-2 md:block">{copy.eyebrow}</span>
        </div>
        <h2 className={`${DISPLAY} col-span-12 text-[clamp(2.25rem,4.6vw,4.5rem)] md:col-span-5`} data-m="lines">
          <Lines text={copy.title} />
        </h2>
        <div className="col-span-12 flex md:col-span-4 md:justify-end" data-m="fade" data-delay="0.2">
          <Link href={catalogueHref} className="group inline-flex items-center gap-3 text-sm font-medium">
            <span className="link-line">{copy.seeAll}</span>
            <Arrow />
          </Link>
        </div>
      </div>

      <div data-pin className="mt-12 md:mt-16 lg:mt-0 lg:flex lg:h-[100svh] lg:flex-col lg:justify-center">
        <div className={`${FRAME} hidden items-center gap-6 lg:flex`}>
          <p className="label tnum shrink-0">
            <span data-current>01</span>
            <span className="text-ink-soft"> / {total}</span>
          </p>
          <span className="relative block h-px w-full bg-line">
            <span data-progress className="absolute inset-0 origin-left scale-x-0 bg-ink" />
          </span>
        </div>

        <div
          data-track
          className="snap-row flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 md:gap-8 md:px-10 lg:mt-8 lg:snap-none lg:overflow-visible xl:px-14"
        >
          {items.map((property, i) => (
            <div
              key={property.ref}
              // On desktop the width follows the viewport height too: a 4:5
              // photo plus its spec rows always fit inside the pinned screen.
              className="w-[80vw] shrink-0 snap-start sm:w-[46vw] lg:w-[min(24vw,calc((100svh-19rem)*0.8))]"
            >
              <div data-m="fade" data-delay={String(Math.min(i, 3) * 0.1)}>
                <PropertyCard
                  property={property}
                  locale={locale}
                  copy={copy}
                  sample={sample}
                  formHref={formHref}
                />
              </div>
            </div>
          ))}
          <span aria-hidden className="w-px shrink-0" />
        </div>
      </div>
    </section>
  );
}
