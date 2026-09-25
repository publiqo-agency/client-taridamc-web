import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { localeHref, routePaths, serviceHref } from "@/lib/routes";
import { SERVICE_IMAGES } from "@/lib/services";
import { catalogue } from "@/lib/properties";
import { proposalFormHref } from "@/lib/whatsapp";
import { FRAME, SECTION } from "@/lib/styles";
import { PageTransition } from "@/components/site/page-transition";
import { HomeHero } from "@/components/site/home-hero";
import { Manifesto } from "@/components/site/manifesto";
import { SectionHeader } from "@/components/site/section-header";
import { ServiceStack } from "@/components/site/service-stack";
import { ProcessGrid } from "@/components/site/process-grid";
import { PropertyRail } from "@/components/site/property-rail";
import { CatalogueEmpty } from "@/components/site/catalogue-empty";
import { ValuesGrid } from "@/components/site/values-grid";
import { ClosingBand } from "@/components/site/closing-band";
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

const HERO_IMAGE = "/hero/home.webp";
const CLOSING_IMAGE = "/cta/sell.webp";

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  const { home, common, services } = dict;

  const sellHref = serviceHref(locale, "purchase");
  const rentHref = serviceHref(locale, "rental");
  const contactHref = localeHref(locale, "contact");
  const { items: listings, sample } = catalogue();

  return (
    <PageTransition>
      <div data-placement="home-hero">
        <HomeHero
          eyebrow={home.hero.eyebrow}
          titleTop={home.hero.titleTop}
          titleBottom={home.hero.titleBottom}
          intro={home.hero.intro}
          image={{ src: HERO_IMAGE, alt: home.hero.imageAlt }}
        >
          <PillButton href={sellHref} tone="white" seed delay={1}>
            {home.hero.ctaPrimary}
          </PillButton>
          <PillButton href={rentHref} tone="outline" seed delay={1.1}>
            {home.hero.ctaSecondary}
          </PillButton>
        </HomeHero>
      </div>

      <Manifesto
        index="01"
        eyebrow={home.manifesto.eyebrow}
        text={home.manifesto.text}
        years={40}
        yearsLabel={common.brand.yearsLabel}
        yearsCaption={common.brand.yearsCaption}
        signature={home.manifesto.signature}
        role={home.manifesto.role}
        cta={{ href: localeHref(locale, "about"), label: home.manifesto.cta }}
      />

      <section className="pb-16 md:pb-24">
        <SectionHeader index="02" eyebrow={home.lines.eyebrow} title={home.lines.title} className={FRAME} />
      </section>
      <ServiceStack
        items={[
          {
            id: "purchase",
            index: "01",
            kicker: home.lines.purchaseKicker,
            title: home.lines.purchaseTitle,
            body: services.items.purchase.teaser,
            href: sellHref,
            cta: common.cta.learnMore,
            image: { src: SERVICE_IMAGES.purchase, alt: services.items.purchase.imageAlt },
            tone: "light",
          },
          {
            id: "rental",
            index: "02",
            kicker: home.lines.rentalKicker,
            title: home.lines.rentalTitle,
            body: services.items.rental.teaser,
            href: rentHref,
            cta: common.cta.learnMore,
            image: { src: SERVICE_IMAGES.rental, alt: services.items.rental.imageAlt },
            tone: "dark",
          },
        ]}
      />

      <section data-placement="home-process" className={`band-dark grain relative bg-stock text-ink ${SECTION}`}>
        <div className={FRAME}>
          <SectionHeader index="03" eyebrow={home.process.eyebrow} title={home.process.title} intro={home.process.intro} />
          <div className="mt-20 md:mt-28">
            <ProcessGrid steps={services.items.purchase.sections} />
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            <PillButton href={proposalFormHref(contactHref, "purchase")} tone="white" cta="form" service="purchase" seed>
              {services.items.purchase.cta}
            </PillButton>
            <WhatsAppCta
              label={common.cta.whatsapp}
              message={services.items.purchase.whatsappMessage}
              service="purchase"
              tone="outline"
            />
          </div>
        </div>
      </section>

      {listings.length > 0 ? (
        <PropertyRail
          index="04"
          items={listings}
          sample={sample}
          locale={locale}
          copy={common.catalogue}
          catalogueHref={rentHref}
          formHref={proposalFormHref(contactHref, "rental")}
        />
      ) : (
        <section data-placement="home-catalogue" className={SECTION}>
          <div className={FRAME}>
            <SectionHeader index="04" eyebrow={common.catalogue.eyebrow} title={common.catalogue.title} intro={common.catalogue.intro} />
            <div className="mt-16">
              <CatalogueEmpty title={common.catalogue.empty.title} body={common.catalogue.empty.body}>
                <PillButton href={proposalFormHref(contactHref, "rental")} cta="form" service="rental">
                  {common.catalogue.empty.cta}
                </PillButton>
              </CatalogueEmpty>
            </div>
          </div>
        </section>
      )}

      <section className={`${SECTION} bg-stock-2`}>
        <div className={FRAME}>
          <SectionHeader index="05" eyebrow={common.values.eyebrow} title={common.values.title} />
          <div className="mt-20 md:mt-28">
            <ValuesGrid items={common.values.items} />
          </div>
        </div>
      </section>

      <ClosingBand
        eyebrow={common.closing.eyebrow}
        title={common.closing.title}
        body={common.closing.body}
        image={{ src: CLOSING_IMAGE, alt: common.closing.imageAlt }}
      >
        <PillButton href={proposalFormHref(contactHref, "purchase")} tone="white" cta="form" service="purchase" seed>
          {services.items.purchase.cta}
        </PillButton>
        <WhatsAppCta
          label={common.cta.whatsapp}
          message={services.items.purchase.whatsappMessage}
          service="purchase"
          tone="outline"
        />
      </ClosingBand>
    </PageTransition>
  );
}
