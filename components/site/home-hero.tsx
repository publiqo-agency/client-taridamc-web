import Image from "next/image";
import { DISPLAY_SANS, FRAME, ACCENT } from "@/lib/styles";
import { hasPublicImage } from "@/lib/images";
import { Chars } from "./motion/split";

type Props = {
  titleTop: string;
  titleBottom: string;
  intro: string;
  image: { src: string; alt: string };
  children: React.ReactNode;
};

/**
 * The home opener. The photo starts as a small window between the two words
 * of the headline and grows to full bleed (the "growing window", after the
 * OrnaVillas reference); the thin grotesk word rises letter by letter, the
 * thin accent phrase answers from the right, and on scroll the two halves drift
 * apart while the photo sinks with parallax.
 */
export function HomeHero({ titleTop, titleBottom, intro, image, children }: Props) {
  const photo = hasPublicImage(image.src);

  return (
    <section
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
        {/* Top slot of the three-row frame: empty, it keeps the headline centred. */}
        <div aria-hidden />

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
          </span>{" "}
          <span
            className={`${ACCENT} mt-[0.12em] block text-right text-[clamp(2.75rem,12vw,14rem)] leading-[0.9]`}
            data-m="drift"
            data-x="7"
            data-opacity="0.2"
          >
            <span data-m="blur" data-delay="0.45" className="inline-block pr-[0.06em]">
              {titleBottom}
            </span>
          </span>
        </h1>

        {/* Intro and CTAs share one bottom edge: the paragraph's last line and
            the buttons sit on the same line, pinned to the frame's two sides. */}
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-12">
          <p className="max-w-md text-ink-2 md:max-w-[26rem] lg:max-w-[30rem]" data-m="fade" data-delay="0.9">
            {intro}
          </p>
          <div className="flex shrink-0 flex-wrap gap-3 md:justify-end">{children}</div>
        </div>
      </div>
    </section>
  );
}
