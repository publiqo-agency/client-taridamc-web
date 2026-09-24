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
 * The home's catalogue teaser. On wide screens with a mouse the section pins
 * and the rail travels sideways with the scroll, each card at its own depth
 * (after the ELYSE gallery), with an "01 / 06" index and a progress hairline.
 * On touch it is a native snap row you swipe.
 */
export function PropertyRail({ index, items, sample, locale, copy, catalogueHref, formHref }: Props) {
  const depths = [0, 36, -24, 18, -30, 24];
  return (
    <section data-m="hscroll" data-placement="home-catalogue" className="relative overflow-hidden py-24 md:py-32 lg:flex lg:h-[100svh] lg:flex-col lg:justify-center lg:py-0">
      <div className={`${FRAME} grid grid-cols-12 items-end gap-x-8 gap-y-8`}>
        <div className="col-span-12 md:col-span-3" data-m="fade">
          <span className="label tnum text-ink-soft">({index})</span>
          <span className="label ml-4 md:ml-0 md:mt-2 md:block">{copy.eyebrow}</span>
        </div>
        <h2 className={`${DISPLAY} col-span-12 text-[clamp(2.75rem,5.6vw,6rem)] md:col-span-5`} data-m="lines">
          <Lines text={copy.title} />
        </h2>
        <div className="col-span-12 flex items-end justify-between gap-6 md:col-span-4 md:flex-col md:items-end" data-m="fade" data-delay="0.2">
          <p className="label tnum">
            <span data-current>01</span>
            <span className="text-ink-soft"> / {String(items.length).padStart(2, "0")}</span>
          </p>
          <Link href={catalogueHref} className="group inline-flex items-center gap-3 text-sm font-medium">
            <span className="link-line">{copy.seeAll}</span>
            <Arrow />
          </Link>
        </div>
      </div>

      <div className={`${FRAME} mt-10 hidden lg:block`}>
        <span className="relative block h-px w-full bg-line">
          <span data-progress className="absolute inset-0 origin-left scale-x-0 bg-ink" />
        </span>
      </div>

      <div
        data-track
        className="snap-row mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 md:gap-8 md:px-10 lg:mt-14 lg:snap-none lg:overflow-visible xl:px-14"
      >
        {items.map((property, i) => (
          <div
            key={property.ref}
            data-depth={depths[i % depths.length]}
            className="w-[80vw] shrink-0 snap-start sm:w-[46vw] lg:w-[27vw] xl:w-[24vw]"
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
    </section>
  );
}
