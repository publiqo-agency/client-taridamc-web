import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { routePaths } from "@/lib/routes";

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

/** Empty on purpose: the content is built from the brief in a later change. */
export default async function HomePage(props: PageProps<"/[locale]">) {
  await props.params;
  return null;
}
