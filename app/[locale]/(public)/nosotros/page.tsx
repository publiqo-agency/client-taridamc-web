import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import Link from "next/link";
import { localeHref, routePaths, serviceHref } from "@/lib/routes";
import { SERVICE_IDS } from "@/lib/services";
import { aboutPageSchema, routeBreadcrumb } from "@/lib/schema";
import { proposalFormHref } from "@/lib/whatsapp";
import { DISPLAY, DISPLAY_QUIET, DISPLAY_SANS, FRAME, ACCENT, SECTION } from "@/lib/styles";
import { JsonLd } from "@/components/seo/json-ld";
import { PageTransition } from "@/components/site/page-transition";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeader } from "@/components/site/section-header";
import { Media } from "@/components/site/media";
import { Sundial } from "@/components/site/sundial";
import { ValuesGrid } from "@/components/site/values-grid";
import { ClosingBand } from "@/components/site/closing-band";
import { Arrow, PillButton } from "@/components/site/pill-button";
import { WhatsAppCta } from "@/components/site/whatsapp";
import { Lines } from "@/components/site/motion/split";

export async function generateMetadata(props: PageProps<"/[locale]/nosotros">): Promise<Metadata> {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  return pageMetadata({
    locale,
    paths: routePaths("about"),
    title: dict.about.meta.title,
    seoTitle: dict.about.meta.seoTitle,
    description: dict.about.meta.description,
  });
}

export default async function AboutPage(props: PageProps<"/[locale]/nosotros">) {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  const { about, common, services } = dict;
  const contactHref = localeHref(locale, "contact");
  const [story, method] = about.sections;

  return (
    <PageTransition>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        intro={about.hero.intro}
        image={{ src: "/about/interior.webp", alt: about.hero.imageAlt }}
      />

      {/* History: the photo held while the text scrolls past it. */}
      <section className={SECTION}>
        <div className={`${FRAME} grid grid-cols-12 gap-x-5 gap-y-16 md:gap-x-8`}>
          <div className="col-span-12 md:col-span-5">
            <div className="md:sticky md:top-28">
              <Media
                src="/about/story.webp"
                alt={about.storyImageAlt}
                className="aspect-[4/5] w-full"
                parallax={9}
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>
          <div className="col-span-12 flex flex-col gap-24 md:col-span-6 md:col-start-7 md:pt-24">
            {[story, method].filter(Boolean).map((section) => (
              <div key={section.heading}>
                <h2 className={`${DISPLAY} text-[clamp(2.5rem,4.4vw,4.5rem)]`} data-m="lines">
                  <Lines text={section.heading} />
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-6 text-lg text-ink-soft" data-m="fade" data-delay="0.15">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {/* What the company does, linked: the about page is where AI
                answers and searchers land to check who is behind the offer. */}
            <nav aria-label={about.servicesTitle} data-m="fade">
              <p className="label text-ink-soft">{about.servicesTitle}</p>
              <ul className="mt-5 border-t border-line">
                {SERVICE_IDS.map((id) => (
                  <li key={id}>
                    <Link
                      href={serviceHref(locale, id)}
                      className="group flex items-center justify-between gap-6 border-b border-line py-4 text-lg transition-colors hover:text-accent"
                    >
                      {services.items[id].title}
                      <Arrow />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="flex items-end gap-4 border-t border-line pt-10" data-m="fade">
              <span data-m="count" data-to="40" data-pad="2" className={`${DISPLAY_SANS} tnum text-[clamp(6rem,12vw,12rem)] leading-[0.78]`}>
                40
              </span>
              <span className="pb-[0.4em]">
                <span className={`${ACCENT} block text-[clamp(1.75rem,2.8vw,3rem)] leading-none`}>{common.brand.yearsLabel}</span>
                <span className="label mt-3 block text-ink-soft">{common.brand.yearsCaption}</span>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* The person behind it: his portrait, then the name carries the block. */}
      <section className={`band-dark grain relative bg-stock text-ink ${SECTION}`}>
        <div className={`${FRAME} grid grid-cols-12 items-end gap-x-5 gap-y-10 md:gap-x-8`}>
          <div className="col-span-12 sm:col-span-8 md:col-span-4">
            <Media
              src="/about/ramon-seva.webp"
              alt={about.leader.portraitAlt}
              className="aspect-[4/5] w-full"
              parallax={6}
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 66vw, 100vw"
            />
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className={`${ACCENT} text-[clamp(4rem,8vw,9rem)] leading-[0.9]`} data-m="lines">
              <Lines text={about.leader.name} />
            </p>
            <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
              <p className="label text-ink-soft" data-m="fade">
                {about.leader.role}
              </p>
              <p className={`${DISPLAY_QUIET} text-3xl`} data-m="fade" data-delay="0.15">
                {about.leader.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Castelldefels: the signature sundial reveal. */}
      <section className={`${SECTION} overflow-hidden`}>
        <div className={FRAME}>
          <div className="grid grid-cols-12 items-center gap-x-5 gap-y-24 md:gap-x-8">
            <div className="col-span-12 md:col-span-6 md:pr-8">
              <Sundial src="/about/castelldefels.webp" alt={about.place.imageAlt} />
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <p className="label text-ink-soft" data-m="fade">
                {about.place.eyebrow}
              </p>
              <h2 className={`${DISPLAY} mt-6 text-[clamp(3rem,6vw,6.5rem)]`} data-m="lines">
                <Lines text={about.place.title} />
              </h2>
              <p className="mt-8 max-w-md text-lg text-ink-soft" data-m="fade" data-delay="0.2">
                {about.place.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${SECTION} bg-stock-2`}>
        <div className={FRAME}>
          <SectionHeader title={common.values.title} align="start" />
          <div className="mt-12 md:mt-16">
            <ValuesGrid items={common.values.items} />
          </div>
        </div>
      </section>

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
          aboutPageSchema(locale, { name: about.meta.title, path: routePaths("about")[locale] }),
          routeBreadcrumb(locale, { homeLabel: common.nav.home, name: about.meta.title, key: "about" }),
        ]}
      />
    </PageTransition>
  );
}
