import { DEFAULT_LOCALE, LOCALES, LOCALE_LABELS } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { NAV_KEYS, localeHref, serviceHref } from "@/lib/routes";
import { SERVICE_IDS } from "@/lib/services";
import { IS_INDEXABLE, ORG, SAME_AS, WHATSAPP_URL, absoluteUrl, hasEmail, hasPhone, hasPostalAddress, hasWhatsApp } from "@/lib/seo";

/**
 * `/llms.txt`: the site summarised in plain markdown, for AI search engines
 * that read it before crawling. Google does not use it (its index comes from
 * the sitemap), but several assistants do. Generated from lib/routes.ts,
 * lib/services.ts and the dictionaries so that adding a service never leaves
 * a stale list here. Written in the default locale; an LLM translates.
 */

/** Static: reads nothing from the request; its content changes at build time only. */
export const dynamic = "force-static";

const url = (path: string) => absoluteUrl(path);

export async function GET() {
  // Same guard as robots.ts: without NEXT_PUBLIC_SITE_URL this is a preview.
  if (!IS_INDEXABLE) {
    return new Response("Not found", { status: 404 });
  }

  const dict = await getDictionary(DEFAULT_LOCALE);
  const { address } = ORG;

  const services = SERVICE_IDS.map((id) => {
    const item = dict.services.items[id];
    return `- [${item.title}](${url(serviceHref(DEFAULT_LOCALE, id))}): ${item.metaDescription}`;
  });

  const pages = [...NAV_KEYS, "contact" as const].map(
    (key) => `- [${dict.common.nav[key]}](${url(localeHref(DEFAULT_LOCALE, key))})`,
  );

  const languages = LOCALES.map((l) => `- ${LOCALE_LABELS[l]} (\`${l}\`): ${url(localeHref(l))}`);

  const contact = [
    hasPhone() && `- Phone: ${ORG.telephoneDisplay || ORG.telephone}`,
    hasEmail() && `- Email: ${ORG.email}`,
    hasPostalAddress() && `- Address: ${address.street}, ${address.postalCode} ${address.city}`,
    hasWhatsApp() && `- WhatsApp: ${WHATSAPP_URL}`,
    ...SAME_AS.map((href) => `- ${href}`),
  ].filter(Boolean);

  const body = `# ${ORG.name}

> ${dict.common.meta.description}${ORG.claim ? ` ${ORG.claim}.` : ""}

## Services

${services.join("\n")}

## Pages

${pages.join("\n")}

## Languages

${languages.join("\n")}

## Contact

${contact.join("\n")}

- Sitemap: ${url("/sitemap.xml")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
