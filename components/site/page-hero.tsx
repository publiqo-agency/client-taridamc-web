import Image from "next/image";
import { FRAME, DISPLAY } from "@/lib/styles";
import { hasPublicImage } from "@/lib/images";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Full-bleed photo behind the text. Missing file → dark band without photo. */
  image?: { src: string; alt: string };
  children?: React.ReactNode;
};

/**
 * Page opener: a dark band with the h1, an optional photo behind it and a
 * slot for CTAs. `band-dark` inverts the tokens so everything inside (pills,
 * the logo in the transparent header above it) reads correctly without
 * knowing where it is.
 */
export function PageHero({ eyebrow, title, intro, image, children }: Props) {
  const photo = image && hasPublicImage(image.src) ? image : undefined;

  return (
    <section className="band-dark relative overflow-hidden bg-stock text-ink">
      {photo && (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
      )}
      <div className={`${FRAME} relative pt-36 pb-16 md:pt-44 md:pb-24`}>
        {eyebrow && <p className="label text-accent">{eyebrow}</p>}
        <h1 className={`${DISPLAY} mt-4 max-w-4xl text-4xl md:text-6xl`}>{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-ink-soft">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
