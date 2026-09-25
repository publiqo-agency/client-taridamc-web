import type { Metadata } from "next";
import { Suspense } from "react";
import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { pageMetadata } from "@/lib/i18n/metadata";
import { localeHref, routePaths } from "@/lib/routes";
import { SERVICE_IDS } from "@/lib/services";
import { routeBreadcrumb } from "@/lib/schema";
import { MAILTO_HREF, ORG, TEL_HREF, hasEmail, hasPhone } from "@/lib/seo";
import { DISPLAY, FRAME, SECTION } from "@/lib/styles";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { ContactFormPrefill } from "@/components/site/contact-form-prefill";
import { WhatsAppCta } from "@/components/site/whatsapp";
import { PageTransition } from "@/components/site/page-transition";
import { LocalTime } from "@/components/site/local-time";
import { COORDS, PLACE } from "@/components/site/coords";
import { Lines } from "@/components/site/motion/split";
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
    <PageTransition>
      <PageHero eyebrow={contact.hero.eyebrow} title={contact.hero.title} intro={contact.hero.intro} compact />

      <section data-placement="contact-page" className={SECTION}>
        <div className={`${FRAME} grid grid-cols-12 gap-x-8 gap-y-16`}>
          <div className="form-skin col-span-12 lg:col-span-7" data-m="fade">
            <Suspense fallback={null}>
              <ContactFormPrefill
                action={sendContact}
                locale={locale}
                labels={contact.form}
                serviceOptions={serviceOptions}
                privacyHref={localeHref(locale, "privacy")}
              />
            </Suspense>
          </div>

          <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-28">
              <h2 className={`${DISPLAY} text-[clamp(2.25rem,3.4vw,3.5rem)]`} data-m="lines">
                <Lines text={contact.aside.title} />
              </h2>
              <p className="mt-5 text-ink-soft" data-m="fade" data-delay="0.15">
                {contact.aside.body}
              </p>
              <div className="mt-8" data-m="fade" data-delay="0.25">
                <WhatsAppCta label={contact.aside.whatsappCta} message={common.whatsapp.messages.general} />
              </div>

              <dl className="mt-12 text-sm" data-m="fade" data-delay="0.3">
                {hasPhone() && (
                  <div className="flex justify-between gap-6 border-t border-line py-3">
                    <dt className="text-ink-soft">Tel.</dt>
                    <dd>
                      <a href={TEL_HREF} data-cta="call" className="link-line">
                        {ORG.telephoneDisplay || ORG.telephone}
                      </a>
                    </dd>
                  </div>
                )}
                {hasEmail() && (
                  <div className="flex justify-between gap-6 border-t border-line py-3">
                    <dt className="text-ink-soft">Email</dt>
                    <dd>
                      <a href={MAILTO_HREF} data-cta="email" className="link-line">
                        {ORG.email}
                      </a>
                    </dd>
                  </div>
                )}
                <div className="flex justify-between gap-6 border-t border-line py-3">
                  <dt className="text-ink-soft">{PLACE}</dt>
                  <dd className="tnum">{COORDS}</dd>
                </div>
                <div className="flex justify-between gap-6 border-y border-line py-3">
                  <dt className="text-ink-soft">{common.footer.localTime}</dt>
                  <dd>
                    <LocalTime />
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <JsonLd data={routeBreadcrumb(locale, { homeLabel: common.nav.home, name: contact.meta.title, key: "contact" })} />
    </PageTransition>
  );
}
