import type { Metadata } from "next";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { routePaths } from "@/lib/routes";
import { hasLegalData } from "@/lib/seo";
import { LegalPage } from "@/components/site/legal-page";

export async function generateMetadata(props: PageProps<"/[locale]/aviso-legal">): Promise<Metadata> {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  return pageMetadata({
    locale,
    paths: routePaths("legalNotice"),
    title: dict.legal.notice.title,
    description: dict.legal.notice.intro,
  });
}

export default async function Page(props: PageProps<"/[locale]/aviso-legal">) {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  const page = dict.legal.notice;

  return (
    <LegalPage
      title={page.title}
      intro={page.intro}
      sections={page.sections}
      pending={hasLegalData() ? undefined : dict.legal.pending}
      updated={dict.legal.updated}
    />
  );
}
