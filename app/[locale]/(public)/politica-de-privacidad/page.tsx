import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { routePaths } from "@/lib/routes";
import { LegalPage } from "@/components/site/legal-page";

export async function generateMetadata(props: PageProps<"/[locale]/politica-de-privacidad">): Promise<Metadata> {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  return pageMetadata({
    locale,
    paths: routePaths("privacy"),
    title: dict.legal.privacy.title,
    description: dict.legal.privacy.intro,
  });
}

export default async function Page(props: PageProps<"/[locale]/politica-de-privacidad">) {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);

  return <LegalPage locale={locale} page={dict.legal.privacy} dict={dict.legal} />;
}
