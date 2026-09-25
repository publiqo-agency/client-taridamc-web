import Link from "next/link";
import { ViewTransition } from "react";
import { DISPLAY, FRAME } from "@/lib/styles";
import { Lines } from "./motion/split";
import { Media } from "./media";
import { Arrow } from "./pill-button";

type Props = {
  id: string;
  index: string;
  total: number;
  kicker: string;
  title: string;
  teaser: string;
  specs: string[];
  href: string;
  cta: string;
  image: { src: string; alt: string };
  tone: "light" | "dark";
  /** Photo on the right instead of the left. */
  mirror?: boolean;
};

/**
 * A full-height split panel (the Cala Mira layout): the photo on one half,
 * an annotated plate on the other with its index, title, a hairline spec
 * list and the way in. The photo carries a shared view-transition name, so
 * it morphs into the hero of the service page it links to.
 */
export function ServicePanel({ id, index, total, kicker, title, teaser, specs, href, cta, image, tone, mirror = false }: Props) {
  return (
    <article className={`${tone === "dark" ? "band-dark" : "band-light"} grain relative bg-stock-2 text-ink`}>
      <div className="grid md:min-h-[92svh] md:grid-cols-2">
        <Link href={href} tabIndex={-1} aria-hidden className={`relative block aspect-[4/5] md:aspect-auto ${mirror ? "md:order-2" : ""}`}>
          <ViewTransition name={`service-${id}`} share="morph" default="none">
            <Media src={image.src} alt={image.alt} className="absolute inset-0" parallax={7} sizes="(min-width: 768px) 50vw, 100vw" />
          </ViewTransition>
        </Link>

        <div className={`${FRAME} relative flex flex-col justify-between gap-16 py-14 md:px-12 md:py-16 lg:px-16 xl:px-20`}>
          <div className="flex items-baseline justify-between" data-m="fade">
            <span className="label">{kicker}</span>
            <span className="label tnum text-ink-soft">
              {index} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <div>
            <h2 className={`${DISPLAY} text-[clamp(2.25rem,4vw,4.5rem)]`} data-m="lines">
              <Lines text={title} />
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink-soft" data-m="fade" data-delay="0.2">
              {teaser}
            </p>

            {specs.length > 0 && (
              <ul className="mt-10 max-w-md text-sm" data-m="fade" data-delay="0.3">
                {specs.map((spec, i) => (
                  <li key={spec} className="flex justify-between border-t border-line py-3 last:border-b">
                    <span>{spec}</span>
                    <span className="label tnum text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                  </li>
                ))}
              </ul>
            )}

            <Link href={href} className="group mt-10 inline-flex items-center gap-3 text-sm font-medium" data-m="fade" data-delay="0.4">
              <span className="link-line">{cta}</span>
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
