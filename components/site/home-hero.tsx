import Image from "next/image";
import { DISPLAY_SANS, FRAME, ITALIC } from "@/lib/styles";
import { hasPublicImage } from "@/lib/images";
import { Chars } from "./motion/split";
import { COORDS } from "./coords";
import { LocalTime } from "./local-time";

type Props = {
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  intro: string;
  image: { src: string; alt: string };
  scroll: string;
  children: React.ReactNode;
};

/**
 * The home opener. The photo starts as a small window between the two words
 * of the headline and grows to full bleed (the "growing window", after the
 * OrnaVillas reference); the thin grotesk word rises letter by letter, the
 * serif italic answers from the right, and on scroll the two halves drift
 * apart while the photo sinks with parallax.
 */
export function HomeHero({ eyebrow, titleTop, titleBottom, intro, image, scroll, children }: Props) {
  const photo = hasPublicImage(image.src);

  return (
    <section
      data-after-intro
      data-drift-scope
      className="band-dark relative h-[100svh] min-h-[640px] overflow-hidden bg-stock text-ink"
    >
      <div data-m="window" className="grain absolute inset-0">
        {photo && (
          <div data-m="parallax" data-speed="7" className="absolute inset-x-0 -top-[7%] h-[114%]">
            <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover brightness-[0.86] saturate-[0.9]" />
          </div>
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,42,0.5)_0%,rgba(6,26,42,0.08)_32%,rgba(6,26,42,0.12)_58%,rgba(6,26,42,0.82)_100%)]"
        />
      </div>

      <div className={`${FRAME} relative z-[2] flex h-full flex-col justify-between pt-28 pb-8 md:pb-10`}>
        <div className="flex items-start justify-between gap-6" data-m="fade" data-delay="0.7">
          <p className="label">{eyebrow}</p>
          <p className="label tnum hidden text-ink-2 sm:block">
            {COORDS} · <LocalTime />
          </p>
        </div>

        <h1 className="relative -mx-[0.04em] select-none">
          <span
            className={`${DISPLAY_SANS} block`}
            // Sized by length so the word always spans the frame without
            // overflowing: "Inmuebles" and "L’immobilier" both land edge to edge.
            style={{ fontSize: `min(${(86 / (Array.from(titleTop).length * 0.56)).toFixed(2)}vw, 20rem)` }}
            data-m="drift"
            data-x="-7"
            data-opacity="0.2"
          >
            <span data-m="chars" data-delay="0.05" className="block">
              <Chars text={titleTop} />
            </span>
          </span>
          <span
            className={`${ITALIC} -mt-[0.06em] block text-right text-[clamp(3.25rem,12vw,14rem)] leading-[0.9] tracking-[-0.02em]`}
            data-m="drift"
            data-x="7"
            data-opacity="0.2"
          >
            <span data-m="blur" data-delay="0.45" className="inline-block pr-[0.06em]">
              {titleBottom}
            </span>
          </span>
        </h1>

        <div className="grid grid-cols-12 items-end gap-x-8 gap-y-6">
          <p className="col-span-12 max-w-sm text-ink-2 md:col-span-5 lg:col-span-4" data-m="fade" data-delay="0.9">
            {intro}
          </p>
          <div className="col-span-12 flex flex-wrap gap-3 md:col-span-7 md:justify-end lg:col-span-6 lg:col-start-7">
            {children}
          </div>
          <div className="col-span-2 hidden flex-col items-end gap-3 justify-self-end lg:flex" data-m="fade" data-delay="1.2">
            <span className="label text-ink-soft">{scroll}</span>
            <span aria-hidden className="scroll-hint relative block h-14 w-px overflow-hidden bg-ink/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
