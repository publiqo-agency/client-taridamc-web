import Image from "next/image";
import { ViewTransition } from "react";
import { FRAME, DISPLAY } from "@/lib/styles";
import { hasPublicImage } from "@/lib/images";
import { Lines } from "./motion/split";
import { COORDS } from "./coords";

type Props = {
  eyebrow?: string;
  /** Supports "\n" line breaks and *accent* phrases. */
  title: string;
  intro?: string;
  image?: { src: string; alt: string };
  /** Shared view-transition name: the photo morphs from the page that linked here. */
  transitionName?: string;
  /** Shorter hero for utility pages (contact). */
  compact?: boolean;
  children?: React.ReactNode;
};

/**
 * Page opener: an espresso band, the photo opening like a curtain behind a
 * darkening wash, the serif headline rising line by line at the bottom-left
 * and the intro on the right. `band-dark` inverts the tokens so the
 * transparent header above reads light without knowing where it is.
 */
export function PageHero({ eyebrow, title, intro, image, transitionName, compact = false, children }: Props) {
  const photo = image && hasPublicImage(image.src) ? image : undefined;

  const picture = photo && (
    <div data-m="img" className="absolute inset-0">
      <div data-m="parallax" data-speed="6" className="absolute inset-x-0 -top-[6%] h-[112%]">
        <Image src={photo.src} alt={photo.alt} fill priority sizes="100vw" className="object-cover" />
      </div>
    </div>
  );

  return (
    <section
      data-after-intro
      className={`band-dark grain relative flex overflow-hidden bg-stock text-ink ${
        compact ? "min-h-[72svh]" : "min-h-[92svh]"
      }`}
    >
      {picture &&
        (transitionName ? (
          <ViewTransition name={transitionName} share="morph" default="none">
            {picture}
          </ViewTransition>
        ) : (
          picture
        ))}
      {photo && (
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,42,0.55)_0%,rgba(6,26,42,0.15)_35%,rgba(6,26,42,0.35)_60%,rgba(6,26,42,0.88)_100%)]"
        />
      )}

      <div className={`${FRAME} relative z-[2] flex flex-1 flex-col justify-between pt-32 pb-10 md:pb-14`}>
        <div className="flex items-start justify-between gap-6" data-m="fade" data-delay="0.2">
          {eyebrow && <p className="label">{eyebrow}</p>}
          <p className="label tnum hidden text-ink-soft sm:block">{COORDS}</p>
        </div>

        <div className="grid grid-cols-12 items-end gap-x-8 gap-y-8 pt-24">
          <h1 className={`${DISPLAY} col-span-12 text-[clamp(3rem,8.4vw,9.5rem)] lg:col-span-8`} data-m="lines" data-delay="0.25">
            <Lines text={title} />
          </h1>
          {(intro || children) && (
            <div className="col-span-12 lg:col-span-4 lg:pb-3" data-m="fade" data-delay="0.6">
              {intro && <p className="max-w-md text-lg text-ink-2">{intro}</p>}
              {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
