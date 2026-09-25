import Image from "next/image";
import { hasPublicImage } from "@/lib/images";
import { COORDS_PARTS } from "./coords";

/**
 * The page's one signature moment: a circular photo of the coast revealed
 * by a single conic sweep, like the shadow of a sundial turning once, while
 * a hairline hand travels with it and the coordinates of Castelldefels
 * count into place. Without motion it is simply the photo, the hand at rest
 * and the coordinates written.
 */
export function Sundial({ src, alt }: { src: string; alt: string }) {
  return (
    <figure data-m="sundial" className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <span aria-hidden className="absolute -inset-4 rounded-full border border-line md:-inset-6" />
      <div className="sundial-photo absolute inset-0 overflow-hidden rounded-full bg-stock-2">
        {hasPublicImage(src) && (
          <Image src={src} alt={alt} fill sizes="(min-width: 768px) 34rem, 90vw" className="object-cover" />
        )}
      </div>
      <span
        aria-hidden
        className="sundial-hand absolute bottom-1/2 left-[calc(50%-0.5px)] z-[2] h-[calc(50%+1.5rem)] w-px bg-ink md:h-[calc(50%+2rem)]"
      />
      <span aria-hidden className="absolute top-1/2 left-1/2 z-[3] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
      <figcaption className="label tnum absolute -bottom-14 left-1/2 flex -translate-x-1/2 gap-1 whitespace-nowrap text-ink-soft">
        {COORDS_PARTS.map((part, i) => (
          <span key={i} className={i === 2 ? "ml-3" : ""}>
            <span data-m="count" data-to={part.value} data-pad={part.pad}>
              {String(part.value).padStart(part.pad, "0")}
            </span>
            {part.unit}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
