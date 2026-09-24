import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { routePaths, serviceHref } from "@/lib/routes";
import { SERVICE_IDS, SERVICE_IMAGES } from "@/lib/services";
import { itemListSchema, routeBreadcrumb } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";
import { reveal } from "@/lib/motion";
import { FRAME, SECTION } from "@/lib/styles";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { ServiceCard } from "@/components/site/service-card";

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

  return (
    <>
      <PageHero
        eyebrow={services.index.eyebrow}
        title={services.index.title}
        intro={services.index.intro}
        image={{ src: "/hero/services.webp", alt: "" }}
      />

      <section className={`${FRAME} ${SECTION}`}>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICE_IDS.map((id, i) => (
            <ServiceCard
              key={id}
              href={serviceHref(locale, id)}
              title={services.items[id].shortTitle}
              teaser={services.items[id].teaser}
              image={{ src: SERVICE_IMAGES[id], alt: services.items[id].imageAlt }}
              cta={common.cta.learnMore}
              className={reveal("up", i)}
            />
          ))}
        </div>
      </section>

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
    </>
  );
}
