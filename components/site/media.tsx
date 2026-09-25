import Image from "next/image";
import { hasPublicImage } from "@/lib/images";
import { ImagePlaceholder } from "./image-placeholder";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** Frame classes: size, aspect ratio, position. */
  className?: string;
  /** How it enters: a curtain from below (default), the growing window, or none. */
  reveal?: "img" | "window" | "none";
  /** Scrubbed vertical parallax of the photo inside its frame (percent). */
  parallax?: number;
  delay?: number;
  /** Extra classes on the <img> (object position, grading). */
  imgClassName?: string;
  children?: React.ReactNode;
};

/**
 * A photo in a frame. The frame clips; the photo inside can be revealed,
 * scaled and moved with parallax without the layout ever moving. Missing
 * file → placeholder (Server Component: hasPublicImage reads the disk).
 *
 * With parallax the image is 16% taller than the frame, so the travel never
 * uncovers an edge.
 */
export function Media({
  src,
  alt,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  className = "",
  reveal = "img",
  parallax,
  delay,
  imgClassName = "",
  children,
}: Props) {
  const exists = hasPublicImage(src);
  return (
    <div
      className={`relative overflow-hidden bg-stock-2 ${className}`}
      {...(reveal !== "none" && exists ? { "data-m": reveal } : {})}
      {...(delay ? { "data-delay": String(delay) } : {})}
    >
      {exists ? (
        <div
          className={parallax ? "absolute inset-x-0 -top-[8%] h-[116%]" : "absolute inset-0"}
          {...(parallax ? { "data-m": "parallax", "data-speed": String(parallax) } : {})}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover ${imgClassName}`}
          />
        </div>
      ) : (
        <ImagePlaceholder label={alt} className="absolute inset-0" />
      )}
      {children}
    </div>
  );
}
