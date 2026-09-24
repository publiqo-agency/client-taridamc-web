import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { routePaths } from "@/lib/routes";

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

/** Empty on purpose: the content is built from the brief in a later change. */
export default async function FaqPage(props: PageProps<"/[locale]/preguntas-frecuentes">) {
  await props.params;
  return null;
}
