import type { getDictionary } from "@/lib/i18n/get-dictionary";
import { RENTAL_TYPES, type ServiceId } from "@/lib/services";
import { catalogue, PROPERTY_TYPES } from "@/lib/properties";
import { FRAME } from "@/lib/styles";
import { SectionHeader } from "./section-header";
import { PropertyCard } from "./property-card";
import { PropertyCatalogue } from "./property-catalogue";
import { CatalogueEmpty } from "./catalogue-empty";
import { PillButton } from "./pill-button";

/**
 * The rental listings: a filterable grid, or the availability block in
 * production while there are no listings. A rental page shows its own type
 * (naves or homes); the rental hub passes no `id` and shows both. The page's
 * own closing band asks the same question in other words, so the two never
 * repeat each other.
 */
export function RentalCatalogue({
  id,
  locale,
  dict,
  formHref,
}: {
  /** The rental page it sits on; the enquiry CTA is tagged with it. Omitted on the hub. */
  id?: ServiceId;
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
  formHref: string;
}) {
  const copy = dict.common.catalogue;
  const own = (id && RENTAL_TYPES[id]) || PROPERTY_TYPES;
  const { items: all, sample } = catalogue();
  const items = all.filter((p) => own.includes(p.type));
  const types = PROPERTY_TYPES.filter((type) => items.some((p) => p.type === type));

  return (
    <section data-placement="catalogue" className="pb-20 md:pb-28">
      <div className={FRAME}>
        <SectionHeader title={copy.title} intro={copy.intro} />
        <div className="mt-16 md:mt-24">
          {items.length > 0 ? (
            <PropertyCatalogue
              aria={copy.filtersAria}
              labels={copy.filters}
              types={types}
              cards={items.map((property) => ({
                key: property.ref,
                type: property.type,
                node: (
                  <PropertyCard
                    property={property}
                    locale={locale}
                    copy={copy}
                    sample={sample}
                    formHref={formHref}
                    reveal="none"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                  />
                ),
              }))}
            />
          ) : (
            <CatalogueEmpty title={copy.empty.title} body={copy.empty.body}>
              <PillButton href={formHref} cta="form" service={id}>
                {copy.empty.cta}
              </PillButton>
            </CatalogueEmpty>
          )}
        </div>
      </div>
    </section>
  );
}
