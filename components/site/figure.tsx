import Image from "next/image";
import { hasPublicImage } from "@/lib/images";
import { ImagePlaceholder } from "./image-placeholder";

type Props = {
  src: string;
  alt: string;
  /** Rendered size hint for next/image. */
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Aspect ratio class, e.g. "aspect-[4/3]". */
  ratio?: string;
};

/**
 * A photo that degrades to <ImagePlaceholder> when the file is not in
 * /public yet. Server Component: `hasPublicImage` reads the filesystem.
 */
export function Figure({
  src,
  alt,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
  className = "",
  ratio = "aspect-[4/3]",
}: Props) {
  return (
    <figure className={`relative overflow-hidden ${ratio} ${className}`}>
      {hasPublicImage(src) ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <ImagePlaceholder label={alt} />
      )}
    </figure>
  );
}
