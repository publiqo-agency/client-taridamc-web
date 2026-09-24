import type { Metadata } from "next";
import { Suspense } from "react";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { localeHref, routePaths } from "@/lib/routes";
import { SERVICE_IDS } from "@/lib/services";
import { routeBreadcrumb } from "@/lib/schema";
import { MAILTO_HREF, ORG, TEL_HREF, hasEmail, hasPhone } from "@/lib/seo";
import { FRAME, SECTION } from "@/lib/styles";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { ContactFormPrefill } from "@/components/site/contact-form-prefill";
import { WhatsAppCta } from "@/components/site/whatsapp";
import { sendContact } from "./actions";

export async function generateMetadata(props: PageProps<"/[locale]/contacto">): Promise<Metadata> {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  return pageMetadata({
    locale,
    paths: routePaths("contact"),
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
  });
}

export default async function ContactPage(props: PageProps<"/[locale]/contacto">) {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  const { contact, services, common } = dict;

  const serviceOptions = [
    ...SERVICE_IDS.map((id) => ({ value: id, label: services.items[id].shortTitle })),
    { value: "other", label: contact.form.otherOption },
  ];

  return (
    <>
      <PageHero eyebrow={contact.hero.eyebrow} title={contact.hero.title} intro={contact.hero.intro} />

      <section data-placement="contact-page" className={`${FRAME} ${SECTION} grid gap-12 md:grid-cols-[3fr_2fr]`}>
        {/* Suspense: the prefill reads the URL on the client and suspends during prerender. */}
        <Suspense fallback={null}>
          <ContactFormPrefill
            action={sendContact}
            locale={locale}
            labels={contact.form}
            serviceOptions={serviceOptions}
            privacyHref={localeHref(locale, "privacy")}
          />
        </Suspense>

        <aside>
          <h2 className="font-display text-2xl font-bold">{contact.aside.title}</h2>
          <p className="mt-3 text-ink-soft">{contact.aside.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppCta label={contact.aside.whatsappCta} message={common.whatsapp.messages.general} />
          </div>
          <ul className="mt-8 space-y-2">
            {hasPhone() && (
              <li>
                <a href={TEL_HREF} data-cta="call" className="font-semibold underline underline-offset-4">
                  {ORG.telephoneDisplay || ORG.telephone}
                </a>
              </li>
            )}
            {hasEmail() && (
              <li>
                <a href={MAILTO_HREF} data-cta="email" className="font-semibold underline underline-offset-4">
                  {ORG.email}
                </a>
              </li>
            )}
          </ul>
        </aside>
      </section>

      <JsonLd data={routeBreadcrumb(locale, { homeLabel: common.nav.home, name: contact.meta.title, key: "contact" })} />
    </>
  );
}
