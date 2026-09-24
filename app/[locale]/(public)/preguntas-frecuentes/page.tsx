import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { routePaths } from "@/lib/routes";
import { faqSchema, routeBreadcrumb } from "@/lib/schema";
import { FRAME_NARROW, SECTION } from "@/lib/styles";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { FaqList } from "@/components/site/faq-list";

export async function generateMetadata(props: PageProps<"/[locale]/preguntas-frecuentes">): Promise<Metadata> {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  return pageMetadata({
    locale,
    paths: routePaths("faq"),
    title: dict.faq.meta.title,
    description: dict.faq.meta.description,
  });
}

export default async function FaqPage(props: PageProps<"/[locale]/preguntas-frecuentes">) {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  const { faq, common } = dict;

  return (
    <>
      <PageHero eyebrow={faq.hero.eyebrow} title={faq.hero.title} intro={faq.hero.intro} />
      <section className={`${FRAME_NARROW} ${SECTION}`}>
        <FaqList items={faq.items} />
      </section>
      <JsonLd data={[faqSchema(faq.items), routeBreadcrumb(locale, { homeLabel: common.nav.home, name: faq.meta.title, key: "faq" })]} />
    </>
  );
}
