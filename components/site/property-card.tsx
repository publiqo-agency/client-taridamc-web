import { whatsappUrl } from "@/lib/whatsapp";
import { formatArea, type Property } from "@/lib/properties";
import type { CommonDict } from "@/lib/i18n/types";
import { DISPLAY_QUIET } from "@/lib/styles";
import { Media } from "./media";
import { Arrow } from "./pill-button";
import { PendingData } from "./pending";

type Props = {
  property: Property;
  locale: string;
  copy: CommonDict["catalogue"];
  /** Preview sample listing: shows a chip so nobody mistakes it for real. */
  sample?: boolean;
  /** Fallback link when there is no WhatsApp number (the contact form). */
  formHref: string;
  className?: string;
  sizes?: string;
  /** "none" inside the filterable grid, whose cards mount after the engine ran. */
  reveal?: "img" | "none";
};

/**
 * A listing as a plan annotation (the Cala Mira spec table): photo, then
 * hairline rows of type, area and zone, and one action. The action opens
 * WhatsApp with the reference prefilled, or the form when there is no
 * number yet.
 */
export function PropertyCard({ property, locale, copy, sample = false, formHref, className = "", sizes, reveal = "img" }: Props) {
  const type = copy.types[property.type];
  const message = copy.whatsappMessage.replace("{ref}", property.ref);
  const wa = whatsappUrl(message);

  return (
    <article className={`group flex flex-col ${className}`}>
      <Media
        src={property.image}
        alt={`${type} · ${property.zone}`}
        className="aspect-[4/5] w-full"
        reveal={reveal}
        cursor={copy.view}
        sizes={sizes ?? "(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 80vw"}
        imgClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      >
        {sample && (
          <span className="absolute top-3 left-3 z-[3]">
            <PendingData>Sample listing</PendingData>
          </span>
        )}
      </Media>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className={`${DISPLAY_QUIET} text-2xl`}>{type}</h3>
        <span className="label tnum text-ink-soft">
          {copy.specs.ref} {property.ref}
        </span>
      </div>

      <dl className="mt-4 text-sm">
        {[
          [copy.specs.area, formatArea(property.area, locale)],
          [copy.specs.zone, property.zone],
        ].map(([term, value]) => (
          <div key={term} className="flex justify-between border-t border-line py-2.5">
            <dt className="text-ink-soft">{term}</dt>
            <dd className="tnum">{value}</dd>
          </div>
        ))}
      </dl>

      <a
        href={wa ?? formHref}
        {...(wa ? { target: "_blank", rel: "noopener noreferrer", "data-cta": "whatsapp" } : { "data-cta": "form" })}
        data-service="rental"
        className="group/btn mt-1 flex items-center justify-between border-y border-ink py-3 text-sm font-medium transition-colors duration-500 hover:bg-ink hover:px-4 hover:text-stock"
      >
        <span>{copy.enquire}</span>
        <Arrow />
      </a>
    </article>
  );
}
