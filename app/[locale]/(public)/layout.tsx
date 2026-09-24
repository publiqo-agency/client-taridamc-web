import { toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { LEGAL_KEYS, NAV_KEYS, localeHref, overlayPathsFor, serviceHref } from "@/lib/routes";
import { SERVICE_IDS } from "@/lib/services";
import { GTM_ID } from "@/lib/analytics";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsAppBubble } from "@/components/site/whatsapp";
import { ConsentBanner } from "@/components/site/consent-banner";
import { RevealObserver } from "@/components/site/reveal-observer";

/**
 * Public site chrome. All copy is resolved HERE, on the server, and goes
 * down to header and footer as props: both are client components (scroll,
 * drawer) and if they read the dictionary every language would end up in
 * the browser bundle.
 *
 * The 404 needs no entry: not-found.tsx hangs from [locale], outside this
 * group, so no header is painted there.
 */
export default async function PublicLayout(props: LayoutProps<"/[locale]">) {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);
  const { nav, cta, whatsapp, footer, localeSwitcher, consent } = dict.common;

  const contactHref = localeHref(locale, "contact");

  // The header menu is a client decision: which entries, in which order.
  const navItems = NAV_KEYS.map((key) => ({ href: localeHref(locale, key), label: nav[key] }));

  const serviceLinks = SERVICE_IDS.map((id) => ({
    href: serviceHref(locale, id),
    label: dict.services.items[id].shortTitle,
  }));

  const legalLinks = LEGAL_KEYS.map((key) => ({
    href: localeHref(locale, key),
    label: footer[key],
  }));

  return (
    <>
      <SiteHeader
        locale={locale}
        overlayPaths={overlayPathsFor(locale)}
        nav={navItems}
        contactHref={contactHref}
        copy={{
          contact: cta.contact,
          menu: nav.menu,
          close: nav.close,
          mainNavAria: nav.mainNavAria,
          localeAria: localeSwitcher.aria,
          skipToContent: nav.skipToContent,
        }}
      />

      <main id="main" className="flex-1">
        {props.children}
      </main>

      <SiteFooter
        locale={locale}
        columns={[
          { title: footer.navTitle, links: [...navItems, { href: contactHref, label: nav.contact }] },
          { title: footer.servicesTitle, links: serviceLinks },
        ]}
        legalLinks={legalLinks}
        copy={{
          tagline: footer.tagline,
          contactTitle: footer.contactTitle,
          followTitle: footer.followTitle,
          localeAria: localeSwitcher.aria,
          cookieSettings: footer.cookieSettings,
          rights: footer.rights,
          credit: footer.credit,
        }}
      />

      <WhatsAppBubble aria={whatsapp.aria} message={whatsapp.messages.general} />

      {/* Without a container there is nothing to consent to: asking permission
          for not measuring would be pure noise. */}
      {GTM_ID && <ConsentBanner labels={consent} policyHref={localeHref(locale, "cookies")} />}

      <RevealObserver />
    </>
  );
}
