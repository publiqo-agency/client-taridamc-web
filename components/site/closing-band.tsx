import { DISPLAY, FRAME } from "@/lib/styles";
import { Lines } from "./motion/split";
import { Media } from "./media";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  image: { src: string; alt: string };
  children: React.ReactNode;
};

/**
 * The closing call to action every page ends on: an espresso band, a photo
 * framed like a window that opens as it arrives, and the question in large
 * serif. The buttons come in as seeds.
 */
export function ClosingBand({ eyebrow, title, body, image, children }: Props) {
  return (
    <section data-placement="closing" className="band-dark grain relative overflow-hidden bg-stock text-ink">
      <div className={`${FRAME} grid grid-cols-12 items-center gap-x-8 gap-y-14 py-24 md:py-36`}>
        <div className="col-span-12 lg:col-span-7">
          <p className="label text-ink-soft" data-m="fade">
            {eyebrow}
          </p>
          <h2 className={`${DISPLAY} mt-8 text-[clamp(3rem,7vw,8rem)]`} data-m="lines">
            <Lines text={title} />
          </h2>
          <p className="mt-8 max-w-lg text-lg text-ink-soft" data-m="fade" data-delay="0.25">
            {body}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">{children}</div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Media
            src={image.src}
            alt={image.alt}
            reveal="window"
            parallax={8}
            className="aspect-[4/5] w-full"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
