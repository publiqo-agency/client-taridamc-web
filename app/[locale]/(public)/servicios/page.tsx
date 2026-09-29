import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { localeHref, routePaths, serviceHref } from "@/lib/routes";
import { SERVICE_IDS, SERVICE_IMAGES } from "@/lib/services";
import { proposalFormHref } from "@/lib/whatsapp";
import { absoluteUrl } from "@/lib/seo";
import { itemListSchema, routeBreadcrumb } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { PageTransition } from "@/components/site/page-transition";
import { PageHero } from "@/components/site/page-hero";
import { ServicePanel } from "@/components/site/service-panel";
import { ClosingBand } from "@/components/site/closing-band";
import { PillButton } from "@/components/site/pill-button";
import { WhatsAppCta } from "@/components/site/whatsapp";

export async function generateMetadata(props: PageProps<"/[locale]/servicios">): Promise<Metadata> {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  return pageMetadata({
    locale,
    paths: routePaths("services"),
    title: dict.services.meta.title,
    seoTitle: dict.services.meta.seoTitle,
    description: dict.services.meta.description,
  });
}

export default async function ServicesPage(props: PageProps<"/[locale]/servicios">) {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  const { services, common } = dict;
  const contactHref = localeHref(locale, "contact");

  return (
    <PageTransition>
      <PageHero
        eyebrow={services.index.eyebrow}
        title={services.index.title}
        intro={services.index.intro}
        image={{ src: "/services/index.webp", alt: services.index.imageAlt }}
        compact
      />

      {SERVICE_IDS.map((id, i) => (
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

      <ClosingBand
        title={common.closing.title}
        body={common.closing.body}
        image={{ src: "/cta/sell.webp", alt: common.closing.imageAlt }}
      >
        <PillButton href={proposalFormHref(contactHref, "purchase")} tone="white" cta="form" service="purchase" seed>
          {services.items.purchase.cta}
        </PillButton>
        <WhatsAppCta label={common.cta.whatsapp} message={services.items.purchase.whatsappMessage} service="purchase" tone="outline" />
      </ClosingBand>

      <JsonLd
        data={[
          itemListSchema(
            SERVICE_IDS.map((id) => ({
              name: services.items[id].title,
              url: absoluteUrl(serviceHref(locale, id)),
            })),
          ),
          routeBreadcrumb(locale, { homeLabel: common.nav.home, name: services.meta.title, key: "services" }),
        ]}
      />
    </PageTransition>
  );
}
