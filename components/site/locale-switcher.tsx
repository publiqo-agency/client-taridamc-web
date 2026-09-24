"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LOCALES,
  LOCALE_LABELS,
  LOCALE_SHORT,
  rememberLocale,
  type Locale,
} from "@/lib/i18n/config";
import { translatePath } from "@/lib/i18n/localized-paths";

/**
 * Language switcher. Not a prefix swap: every language has its own slug, so
 * `translatePath` chains public→canonical→public to land on the SAME page in
 * the new language, not on the home. Sending someone to the home on every
 * language change is the fastest way to lose a visitor who had already found
 * what they were looking for.
 *
 * On click it writes the cookie the proxy reads.
 */
export function LocaleSwitcher({
  current,
  aria,
  className = "",
}: {
  current: Locale;
  aria: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={aria} className={`flex items-center gap-1 ${className}`}>
      {LOCALES.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={translatePath(pathname, locale)}
            hrefLang={locale}
            lang={locale}
            onClick={() => rememberLocale(locale)}
            aria-current={active ? "true" : undefined}
            title={LOCALE_LABELS[locale]}
            className={`label rounded-full px-2.5 py-1 transition-colors ${
              active
                ? "bg-ink text-stock"
                : "border border-transparent text-ink-soft hover:border-line hover:text-ink"
            }`}
          >
            {LOCALE_SHORT[locale]}
          </Link>
        );
      })}
    </nav>
  );
}
