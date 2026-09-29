import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCALES, toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { localeHref, serviceHref, servicePaths } from "@/lib/routes";
import {
  RENTAL_TYPES,
  SERVICE_IDS,
  SERVICE_IMAGES,
  SERVICE_KIND,
  SERVICE_RELATED,
  canonicalServiceSlug,
  serviceFromCanonicalSlug,
  type ServiceId,
} from "@/lib/services";
import { catalogue, PROPERTY_TYPES } from "@/lib/properties";
import { proposalFormHref } from "@/lib/whatsapp";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { DISPLAY, DISPLAY_QUIET, DISPLAY_SANS, FRAME, ACCENT, SECTION } from "@/lib/styles";
import { JsonLd } from "@/components/seo/json-ld";
import { PageTransition } from "@/components/site/page-transition";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeader } from "@/components/site/section-header";
import { ProcessGrid } from "@/components/site/process-grid";
import { PropertyCard } from "@/components/site/property-card";
import { PropertyCatalogue } from "@/components/site/property-catalogue";
import { CatalogueEmpty } from "@/components/site/catalogue-empty";
import { ClosingBand } from "@/components/site/closing-band";
import { Media } from "@/components/site/media";
import { Arrow, PillButton } from "@/components/site/pill-button";
import { WhatsAppCta } from "@/components/site/whatsapp";
import { Lines } from "@/components/site/motion/split";
import { ServiceComparison, ServiceFaq, ServiceScope } from "@/components/site/service-sections";

type Props = PageProps<"/[locale]/servicios/[slug]">;

/**
 * Emits the CANONICAL slug for every locale: the proxy rewrites every public
 * URL to the default-locale folder, so `[slug]` always receives the
 * canonical one. Emitting the translated slug would prerender a route the
 * proxy never asks for (a 404 in every non-default language).
 */
export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    SERVICE_IDS.map((id) => ({ locale, slug: canonicalServiceSlug(id) })),
  );
}

export const dynamicParams = false;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale: raw, slug } = await props.params;
  const locale = toLocale(raw);
  const id = serviceFromCanonicalSlug(slug);
  if (!id) notFound();
  const dict = await getDictionary(locale);
  const item = dict.services.items[id];
  return pageMetadata({
    locale,
    paths: servicePaths(id),
    title: item.title,
    seoTitle: item.seoTitle,
    description: item.metaDescription,
  });
}

export default async function ServicePage(props: Props) {
  const { locale: raw, slug } = await props.params;
  const locale = toLocale(raw);
  const id = serviceFromCanonicalSlug(slug);
  if (!id) notFound();

  const dict = await getDictionary(locale);
  const { services, common } = dict;
  const item = services.items[id];
  const kind = SERVICE_KIND[id];
  const contactHref = localeHref(locale, "contact");
  const formHref = proposalFormHref(contactHref, id);
  const other = SERVICE_RELATED[id];

  const ctas = (tone: "white" | "ink") => (
    <>
      <PillButton href={formHref} tone={tone} cta="form" service={id} seed>
        {item.cta}
      </PillButton>
      <WhatsAppCta label={common.cta.whatsapp} message={item.whatsappMessage} service={id} tone="outline" />
    </>
  );

  return (
    <PageTransition>
      <div data-placement={`service-${id}`}>
        <PageHero
          eyebrow={item.kicker}
          title={item.heroTitle}
          image={{ src: SERVICE_IMAGES[id], alt: item.imageAlt }}
          transitionName={`service-${id}`}
        />

        {/* Intro: the promise of the page in one large paragraph. */}
        <section className={SECTION}>
          <div className={`${FRAME} grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-8`}>
            <div className="col-span-12 md:col-span-3" data-m="fade">
              <span className="label text-ink-soft">{item.title}</span>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className={`${DISPLAY_QUIET} text-[clamp(1.75rem,3.2vw,3.25rem)] leading-[1.15]`} data-m="fade">
                {item.intro}
              </p>
              <div className="mt-12 flex flex-wrap gap-3">{ctas("ink")}</div>
            </div>
          </div>
        </section>

        {kind === "purchase" && item.scope && <ServiceScope scope={item.scope} />}

        {/* What we look at (or offer): a hairline index, the image held beside it. */}
        <section className="pb-20 md:pb-28">
          <div className={`${FRAME} grid grid-cols-12 gap-x-5 gap-y-14 md:gap-x-8`}>
            <div className="col-span-12 lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <h2 className={`${DISPLAY} text-[clamp(2.75rem,5vw,5.5rem)]`} data-m="lines">
                  <Lines text={item.includesTitle} />
                </h2>
                {kind === "purchase" && (
                  <Media
                    src="/about/story.webp"
                    alt={dict.about.storyImageAlt}
                    className="mt-10 hidden aspect-[4/5] w-full max-w-sm lg:block"
                    parallax={8}
                    sizes="(min-width: 1024px) 24rem, 1px"
                  />
                )}
              </div>
            </div>
            <ol className="col-span-12 lg:col-span-7">
              {item.includes.map((line, i) => (
                <li
                  key={line}
                  className="group relative flex items-baseline gap-6 border-b border-line py-7 md:gap-10 md:py-9"
                  data-m="fade"
                  data-delay={String(i * 0.06)}
                >
                  <span className="label tnum w-8 text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`${DISPLAY_QUIET} text-[clamp(1.75rem,3vw,3rem)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3`}>
                    {line}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`band-dark grain relative bg-stock text-ink ${SECTION}`}>
          <div className={FRAME}>
            <SectionHeader title={item.process.title} intro={item.process.intro} />
            <div className="mt-20 md:mt-28">
              <ProcessGrid steps={item.sections} />
            </div>
          </div>
        </section>

        {kind === "rental" && <RentalCatalogue id={id} locale={locale} dict={dict} formHref={formHref} />}

        {item.comparison && <ServiceComparison comparison={item.comparison} />}

        {/* Trust: the one number, and who is behind it. */}
        {kind === "purchase" && (
          <section className={SECTION}>
            <div className={`${FRAME} grid grid-cols-12 items-end gap-x-5 gap-y-10 md:gap-x-8`}>
              <p className="col-span-12 flex items-end gap-4 md:col-span-7" data-m="fade">
                <span data-m="count" data-to="40" data-pad="2" className={`${DISPLAY_SANS} tnum text-[clamp(7rem,17vw,17rem)] leading-[0.78]`}>
                  40
                </span>
                <span className="pb-[0.4em]">
                  <span className={`${ACCENT} block text-[clamp(2rem,3.4vw,3.5rem)] leading-none`}>{common.brand.yearsLabel}</span>
                  <span className="label mt-3 block text-ink-soft">{common.brand.yearsCaption}</span>
                </span>
              </p>
              <div className="col-span-12 md:col-span-5" data-m="fade" data-delay="0.15">
                <p className="label text-ink-soft">{common.brand.family}</p>
                <p className={`${DISPLAY_QUIET} mt-4 text-3xl`}>{dict.about.leader.body}</p>
                <p className={`${ACCENT} mt-8 text-2xl`}>{dict.about.leader.name}</p>
                <p className="label mt-1 text-ink-soft">{dict.about.leader.role}</p>
              </div>
            </div>
          </section>
        )}

        <ServiceFaq title={services.detail.faqTitle} items={item.faq} />

        {/* The other service, as one large link. */}
        <section className="border-t border-line">
          <Link href={serviceHref(locale, other)} className="group block">
            <div className={`${FRAME} grid grid-cols-12 items-center gap-x-5 gap-y-8 md:gap-x-8 py-16 md:py-24`}>
              <span className="label col-span-12 text-ink-soft md:col-span-3">{services.detail.otherServices}</span>
              <span className={`${DISPLAY} col-span-10 text-[clamp(2.5rem,6vw,6.5rem)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 md:col-span-7`}>
                {services.items[other].title}
              </span>
              <span className="col-span-2 justify-self-end text-3xl">
                <Arrow />
              </span>
            </div>
          </Link>
        </section>

        <ClosingBand
          title={item.closing.title}
          body={item.closing.body}
          image={{ src: "/cta/sell.webp", alt: common.closing.imageAlt }}
        >
          {ctas("white")}
        </ClosingBand>
      </div>

      <JsonLd
        data={[
          serviceSchema(locale, {
            name: item.title,
            description: item.metaDescription,
            path: servicePaths(id)[locale],
            serviceType: item.shortTitle,
            local: kind === "rental",
          }),
          faqSchema(item.faq),
          breadcrumbSchema([
            { name: common.nav.home, path: localeHref(locale) },
            { name: services.meta.title, path: localeHref(locale, "services") },
            { name: item.title, path: serviceHref(locale, id) },
          ]),
        ]}
      />
    </PageTransition>
  );
}

/**
 * The listings of this rental page (naves or homes): a filterable grid, or
 * the availability block in production while there are no listings. The
 * page's own closing band asks the same question in other words, so the two
 * never repeat each other.
 */
async function RentalCatalogue({
  id,
  locale,
  dict,
  formHref,
}: {
  id: ServiceId;
  locale: string;
  dict: Awaited<ReturnType<typeof getDictionary>>;
  formHref: string;
}) {
  const copy = dict.common.catalogue;
  const own = RENTAL_TYPES[id] ?? PROPERTY_TYPES;
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
