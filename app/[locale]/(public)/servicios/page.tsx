import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { routePaths } from "@/lib/routes";

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

/** Empty on purpose: the content is built from the brief in a later change. */
export default async function ServicesPage(props: PageProps<"/[locale]/servicios">) {
  await props.params;
  return null;
}
