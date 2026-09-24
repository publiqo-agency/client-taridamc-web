import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { localeHref, serviceHref, servicePaths } from "@/lib/routes";
import { SERVICE_IDS, SERVICE_IMAGES, canonicalServiceSlug, serviceFromCanonicalSlug } from "@/lib/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { proposalFormHref } from "@/lib/whatsapp";
import { reveal } from "@/lib/motion";
import { FRAME, SECTION } from "@/lib/styles";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { Figure } from "@/components/site/figure";
import { FaqList } from "@/components/site/faq-list";
import { PillButton } from "@/components/site/pill-button";
import { WhatsAppCta } from "@/components/site/whatsapp";
import { ServiceCard } from "@/components/site/service-card";

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
  const contactHref = localeHref(locale, "contact");
  const others = SERVICE_IDS.filter((other) => other !== id);

  return (
    <>
      <PageHero eyebrow={services.index.eyebrow} title={item.title} intro={item.teaser} image={{ src: SERVICE_IMAGES[id], alt: item.imageAlt }}>
        <div data-placement="hero" className="flex flex-wrap gap-3">
          <WhatsAppCta label={common.cta.whatsapp} message={item.whatsappMessage} service={id} />
          <PillButton href={proposalFormHref(contactHref, id)} tone="white" cta="form" service={id}>
            {item.cta}
          </PillButton>
        </div>
      </PageHero>

      <section className={`${FRAME} ${SECTION} grid gap-12 md:grid-cols-[2fr_1fr]`}>
        <div>
          <p className="text-lg text-ink-soft">{item.intro}</p>
          {item.sections.map((section) => (
            <div key={section.heading} className={`mt-10 ${reveal()}`}>
              <h2 className="font-display text-2xl font-bold">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-ink-soft">{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
        <aside className="space-y-8">
          <Figure src={SERVICE_IMAGES[id]} alt={item.imageAlt} ratio="aspect-square" className="rounded-3xl" />
          <div className="rounded-3xl bg-stock-2 p-6">
            <p className="label text-ink-soft">{services.detail.includesTitle}</p>
            <ul className="mt-4 space-y-2">
              {item.includes.map((line) => (
                <li key={line} className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {item.faq && item.faq.length > 0 && (
        <section className={`${FRAME} pb-16 md:pb-24`}>
          <h2 className="font-display text-2xl font-bold">{services.detail.faqTitle}</h2>
          <FaqList items={item.faq} name={`faq-${id}`} className="mt-6" />
          <JsonLd data={faqSchema(item.faq)} />
        </section>
      )}

      <section className="band-dark bg-stock text-ink">
        <div data-placement="contact-band" className={`${FRAME} ${SECTION} flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between`}>
          <div>
            <h2 className="font-display text-3xl font-bold">{services.detail.requestTitle}</h2>
            <p className="mt-3 max-w-xl text-ink-soft">{services.detail.requestBody}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <WhatsAppCta label={common.cta.whatsapp} message={item.whatsappMessage} service={id} />
            <PillButton href={proposalFormHref(contactHref, id)} tone="white" cta="form" service={id}>
              {item.cta}
            </PillButton>
          </div>
        </div>
      </section>

      <section className={`${FRAME} ${SECTION}`}>
        <h2 className="font-display text-2xl font-bold">{services.detail.otherServices}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {others.map((other, i) => (
            <ServiceCard
              key={other}
              href={serviceHref(locale, other)}
              title={services.items[other].shortTitle}
              teaser={services.items[other].teaser}
              image={{ src: SERVICE_IMAGES[other], alt: services.items[other].imageAlt }}
              cta={common.cta.learnMore}
              className={reveal("up", i)}
            />
          ))}
        </div>
      </section>

      <JsonLd
        data={[
          serviceSchema(locale, { name: item.title, description: item.metaDescription, path: servicePaths(id)[locale] }),
          breadcrumbSchema([
            { name: common.nav.home, path: localeHref(locale) },
            { name: services.meta.title, path: localeHref(locale, "services") },
            { name: item.title, path: serviceHref(locale, id) },
          ]),
        ]}
      />
    </>
  );
}
