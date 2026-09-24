import Link from "next/link";
import { CARD, EASE_OUT } from "@/lib/styles";
import { Figure } from "./figure";

type Props = {
  href: string;
  title: string;
  teaser: string;
  image: { src: string; alt: string };
  cta: string;
  className?: string;
};

/** Card linking to a service page. The whole card is the link. */
export function ServiceCard({ href, title, teaser, image, cta, className = "" }: Props) {
  return (
    <Link href={href} className={`${CARD} group block overflow-hidden ${className}`}>
      <Figure src={image.src} alt={image.alt} ratio="aspect-[4/3]" />
      <div className="p-6">
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-2 text-ink-soft">{teaser}</p>
        <p className={`mt-4 text-sm font-semibold transition-transform duration-300 ${EASE_OUT} group-hover:translate-x-0.5`}>
          {cta} →
        </p>
      </div>
    </Link>
  );
}
