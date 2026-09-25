import Link from "next/link";
import { DISPLAY, FRAME } from "@/lib/styles";
import { Lines } from "./motion/split";
import { Media } from "./media";
import { PillButton } from "./pill-button";

export type StackItem = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  image: { src: string; alt: string };
  /** Light (salt) or dark (deep-sea) panel. */
  tone: "light" | "dark";
};

/**
 * Sticky stacked panels: each business line fills the screen, and the next
 * one slides up over it while the one underneath recedes (scales down and
 * darkens, scrubbed). On reduced motion they are simply consecutive panels.
 */
export function ServiceStack({ items }: { items: StackItem[] }) {
  return (
    <div data-m="stack" data-placement="home-services" className="relative">
      {items.map((item) => (
        <article key={item.id} data-stack-item className="sticky top-0 h-[100svh] min-h-[680px] overflow-hidden">
          <div
            data-stack-inner
            className={`${item.tone === "dark" ? "band-dark" : "band-light"} grain relative h-full origin-top bg-stock-2 text-ink`}
          >
            <div className="grid h-full grid-rows-[45%_1fr] md:grid-cols-2 md:grid-rows-1">
              <Link
                href={item.href}
                tabIndex={-1}
                aria-hidden
                className={`relative block h-full ${item.tone === "dark" ? "md:order-2" : ""}`}
              >
                <Media
                  src={item.image.src}
                  alt={item.image.alt}
                  className="absolute inset-0"
                  parallax={8}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </Link>

              <div className={`${FRAME} flex flex-col justify-end py-10 md:px-12 md:py-16 lg:px-16 xl:px-20`}>
                <div>
                  <p className="mb-5 text-sm text-ink-soft md:mb-6" data-m="fade">
                    {item.kicker}
                  </p>
                  <h3 className={`${DISPLAY} text-[clamp(2.25rem,4vw,4.5rem)]`} data-m="lines">
                    <Lines text={item.title} />
                  </h3>
                  <p className="mt-6 max-w-md text-lg text-ink-soft md:mt-8" data-m="fade" data-delay="0.2">
                    {item.body}
                  </p>
                  <div className="mt-8 md:mt-10">
                    <PillButton href={item.href} tone={item.tone === "dark" ? "white" : "ink"} rise>
                      {item.cta}
                    </PillButton>
                  </div>
                </div>
              </div>
            </div>
            <div data-stack-shade aria-hidden className="pointer-events-none absolute inset-0 z-[3] bg-[#051726] opacity-0" />
          </div>
        </article>
      ))}
    </div>
  );
}
