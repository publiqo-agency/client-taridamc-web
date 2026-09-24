import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { routePaths } from "@/lib/routes";
import { routeBreadcrumb } from "@/lib/schema";
import { reveal } from "@/lib/motion";
import { FRAME_NARROW, SECTION } from "@/lib/styles";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";

export async function generateMetadata(props: PageProps<"/[locale]/nosotros">): Promise<Metadata> {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  return pageMetadata({
    locale,
    paths: routePaths("about"),
    title: dict.about.meta.title,
    description: dict.about.meta.description,
  });
}

export default async function AboutPage(props: PageProps<"/[locale]/nosotros">) {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  const { about, common } = dict;

  return (
    <>
      <PageHero eyebrow={about.hero.eyebrow} title={about.hero.title} intro={about.hero.intro} image={{ src: "/hero/about.webp", alt: "" }} />

      <article className={`${FRAME_NARROW} ${SECTION} space-y-12`}>
        {about.sections.map((section) => (
          <section key={section.heading} className={reveal()}>
            <h2 className="font-display text-2xl font-bold">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-lg text-ink-soft">{paragraph}</p>
            ))}
          </section>
        ))}
      </article>

      <JsonLd data={routeBreadcrumb(locale, { homeLabel: common.nav.home, name: about.meta.title, key: "about" })} />
    </>
  );
}
