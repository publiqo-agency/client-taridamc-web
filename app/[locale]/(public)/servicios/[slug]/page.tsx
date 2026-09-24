import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { servicePaths } from "@/lib/routes";
import { SERVICE_IDS, canonicalServiceSlug, serviceFromCanonicalSlug } from "@/lib/services";

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

/** Empty on purpose: the content is built from the brief in a later change. */
export default async function ServicePage(props: Props) {
  const { slug } = await props.params;
  if (!serviceFromCanonicalSlug(slug)) notFound();
  return null;
}
