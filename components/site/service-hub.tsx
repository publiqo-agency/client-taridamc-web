import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { localeHref, routePaths, serviceHref } from "@/lib/routes";
import { SERVICE_IMAGES, serviceIdsOf, type ServiceKind } from "@/lib/services";
import { proposalFormHref } from "@/lib/whatsapp";
import { absoluteUrl } from "@/lib/seo";
import { itemListSchema, routeBreadcrumb } from "@/lib/schema";
import { DISPLAY_QUIET, FRAME, SECTION } from "@/lib/styles";
import { JsonLd } from "@/components/seo/json-ld";
import { PageTransition } from "./page-transition";
import { PageHero } from "./page-hero";
import { ServicePanel } from "./service-panel";
import { ClosingBand } from "./closing-band";
import { PillButton } from "./pill-button";
import { WhatsAppCta } from "./whatsapp";
import { RentalCatalogue } from "./rental-catalogue";

type Params = Promise<{ locale: string }>;

/** The two hubs, one per kind of service page. */
export type HubKey = "sale" | "rental";

const HUB_KIND: Record<HubKey, ServiceKind> = { sale: "purchase", rental: "rental" };

/** Hero photo of each hub, under public/. Missing file → no photo. */
const HUB_IMAGES: Record<HubKey, string> = {
  sale: "/services/index.webp",
  rental: "/services/rental/hero.webp",
};

/**
 * The sale CTAs go tagged with the flats-and-houses page, as the old index
 * did. The rental hub covers naves and homes at once, so its CTAs carry no
 * service: either rental id would mislabel half the enquiries.
 */
const HUB_SERVICE: Record<HubKey, "purchase" | undefined> = { sale: "purchase", rental: undefined };

export async function hubMetadata(hub: HubKey, params: Params): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = toLocale(raw);
  const copy = (await getDictionary(locale)).services.hubs[hub];
  return pageMetadata({
    locale,
    paths: routePaths(hub),
    title: copy.title,
    seoTitle: copy.seoTitle,
    description: copy.description,
  });
}

/**
 * A hub page (Venta or Alquiler): the hero, a quiet white introduction, then
 * the split photo/text panel of each service page of its kind. The rental hub
 * adds the whole portfolio; each closes with its own band.
 */
export async function ServiceHub({ hub, params }: { hub: HubKey; params: Params }) {
  const { locale: raw } = await params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  const { services, common } = dict;
  const copy = services.hubs[hub];
  const ids = serviceIdsOf(HUB_KIND[hub]);
  const service = HUB_SERVICE[hub];
  const contactHref = localeHref(locale, "contact");
  const formHref = service ? proposalFormHref(contactHref, service) : contactHref;

  const ctas = (tone: "white" | "ink") => (
    <>
      <PillButton href={formHref} tone={tone} cta="form" service={service} seed>
        {copy.cta}
      </PillButton>
      <WhatsAppCta label={common.cta.whatsapp} message={copy.whatsappMessage} service={service} tone="outline" />
    </>
  );

  return (
    <PageTransition>
      <PageHero eyebrow={copy.eyebrow} title={copy.heroTitle} image={{ src: HUB_IMAGES[hub], alt: copy.imageAlt }} />

      {/* Intro: what this side of the business is, before any service. */}
      <section data-placement={`${hub}-hub`} className={SECTION}>
        <div className={`${FRAME} grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-8`}>
          <div className="col-span-12 md:col-span-3" data-m="fade">
            <span className="label text-ink-soft">{copy.introLabel}</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className={`${DISPLAY_QUIET} text-[clamp(1.75rem,3.2vw,3.25rem)] leading-[1.15]`} data-m="fade">
              {copy.intro}
            </p>
            <div className="mt-12 flex flex-wrap gap-3">{ctas("ink")}</div>
          </div>
        </div>
      </section>

      {ids.map((id, i) => (
        <ServicePanel
          key={id}
          id={id}
          kicker={services.items[id].kicker}
          title={services.items[id].heroTitle}
          teaser={services.items[id].teaser}
          specs={services.items[id].includes.slice(0, 3)}
          href={serviceHref(locale, id)}
          cta={services.items[id].learnMore}
          cursor={common.catalogue.view}
          image={{ src: SERVICE_IMAGES[id], alt: services.items[id].imageAlt }}
          tone={i % 2 === 0 ? "light" : "dark"}
          mirror={i % 2 === 1}
        />
      ))}

      {hub === "rental" && (
        <div className="pt-20 md:pt-28">
          <RentalCatalogue locale={locale} dict={dict} formHref={formHref} />
        </div>
      )}

      <ClosingBand
        title={copy.closing.title}
        body={copy.closing.body}
        image={{ src: "/cta/sell.webp", alt: common.closing.imageAlt }}
      >
        {ctas("white")}
      </ClosingBand>

      <JsonLd
        data={[
          itemListSchema(
            ids.map((id) => ({
              name: services.items[id].title,
              url: absoluteUrl(serviceHref(locale, id)),
            })),
          ),
          routeBreadcrumb(locale, { homeLabel: common.nav.home, name: copy.title, key: hub }),
        ]}
      />
    </PageTransition>
  );
}
