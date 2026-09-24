import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { localeHref, routePaths, serviceHref } from "@/lib/routes";
import { SERVICE_IDS, SERVICE_IMAGES } from "@/lib/services";
import { faqSchema } from "@/lib/schema";
import { reveal } from "@/lib/motion";
import { FRAME, SECTION } from "@/lib/styles";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeader } from "@/components/site/section-header";
import { ServiceCard } from "@/components/site/service-card";
import { FaqList } from "@/components/site/faq-list";
import { PillButton } from "@/components/site/pill-button";
import { WhatsAppCta } from "@/components/site/whatsapp";

export async function generateMetadata(props: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  return pageMetadata({
    locale,
    paths: routePaths("home"),
    title: dict.home.meta.title,
    seoTitle: dict.home.meta.seoTitle,
    description: dict.home.meta.description,
  });
}

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  const { home, services, faq, common } = dict;
  // The home shows the first three questions; the FAQ page has them all.
  const faqItems = faq.items.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        intro={home.hero.intro}
        image={{ src: "/hero/home.webp", alt: "" }}
      >
        <div data-placement="hero" className="flex flex-wrap gap-3">
          <PillButton href={localeHref(locale, "contact")} tone="accent" cta="form">
            {home.hero.ctaPrimary}
          </PillButton>
          <PillButton href={localeHref(locale, "services")} tone="white">
            {home.hero.ctaSecondary}
          </PillButton>
        </div>
      </PageHero>

      <section className={`${FRAME} ${SECTION}`}>
        <SectionHeader eyebrow={home.services.eyebrow} title={home.services.title} intro={home.services.intro} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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

      <section className="bg-stock-2">
        <div className={`${FRAME} ${SECTION} grid gap-10 md:grid-cols-2`}>
          <SectionHeader eyebrow={home.about.eyebrow} title={home.about.title} />
          <div className={reveal("right")}>
            {home.about.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-lg text-ink-soft first:mt-0">
                {paragraph}
              </p>
            ))}
            <PillButton href={localeHref(locale, "about")} tone="outline" className="mt-8">
              {home.about.cta}
            </PillButton>
          </div>
        </div>
      </section>

      <section className={`${FRAME} ${SECTION}`}>
        <SectionHeader eyebrow={home.faq.eyebrow} title={home.faq.title} />
        <FaqList items={faqItems} className="mt-10" />
        <JsonLd data={faqSchema(faqItems)} />
      </section>

      <section className="band-dark bg-stock text-ink">
        <div data-placement="contact-band" className={`${FRAME} ${SECTION} flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between`}>
          <div>
            <h2 className="font-display text-3xl font-bold">{home.contact.title}</h2>
            <p className="mt-3 max-w-xl text-ink-soft">{home.contact.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <WhatsAppCta label={common.cta.whatsapp} message={common.whatsapp.messages.general} />
            <PillButton href={localeHref(locale, "contact")} tone="white" cta="form">
              {home.contact.cta}
            </PillButton>
          </div>
        </div>
      </section>
    </>
  );
}
