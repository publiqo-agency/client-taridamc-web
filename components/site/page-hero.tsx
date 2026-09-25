import Image from "next/image";
import { ViewTransition } from "react";
import { FRAME, DISPLAY } from "@/lib/styles";
import { hasPublicImage } from "@/lib/images";
import { Lines } from "./motion/split";

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
 * Page opener: a deep-sea band, the photo opening like a curtain behind a
 * darkening wash, the headline rising line by line at the bottom-left and
 * the intro stacked under it. `band-dark` inverts the tokens so the
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
        {eyebrow ? (
          <p className="label" data-m="fade" data-delay="0.15">
            {eyebrow}
          </p>
        ) : (
          <span />
        )}

        <div className="max-w-5xl pt-24">
          <h1 className={`${DISPLAY} text-[clamp(2.75rem,6.2vw,7rem)]`} data-m="lines" data-delay="0.2">
            <Lines text={title} />
          </h1>
          {(intro || children) && (
            <div className="mt-8 md:mt-10" data-m="fade" data-delay="0.45">
              {intro && <p className="max-w-[46ch] text-lg text-ink-2">{intro}</p>}
              {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
