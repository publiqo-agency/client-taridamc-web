"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { FRAME } from "@/lib/styles";
import { Logo } from "./logo";
import { LocaleSwitcher } from "./locale-switcher";
import { PillButton } from "./pill-button";

export type NavItem = { href: string; label: string };

type Props = {
  locale: Locale;
  /** Exact paths whose hero sits under a transparent header (lib/routes.ts). */
  overlayPaths: string[];
  nav: NavItem[];
  contactHref: string;
  copy: {
    contact: string;
    menu: string;
    close: string;
    mainNavAria: string;
    localeAria: string;
    skipToContent: string;
  };
};

/**
 * Site header. Transparent over a hero (`band-dark`, so the logo and links
 * turn light) and solid once scrolled or on pages without a hero. All copy
 * arrives resolved as props: this is a client component (scroll, drawer) and
 * reading the dictionary here would ship every language to the browser.
 */
export function SiteHeader({ locale, overlayPaths, nav, contactHref, copy }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overlay = overlayPaths.includes(pathname.replace(/\/+$/, "") || "/");
  const transparent = overlay && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-placement="header"
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        transparent ? "band-dark bg-transparent" : "bg-stock/95 shadow-[0_1px_0_0_var(--line)] backdrop-blur"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-stock"
      >
        {copy.skipToContent}
      </a>

      <div className={`${FRAME} flex h-20 items-center justify-between gap-6`}>
        <Link href={`/${locale}`} className="flex items-center">
          <Logo className="h-9" priority />
        </Link>

        <nav aria-label={copy.mainNavAria} className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="text-sm font-semibold text-ink/80 transition-colors hover:text-ink aria-[current=page]:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitcher current={locale} aria={copy.localeAria} />
          <PillButton href={contactHref} tone={transparent ? "white" : "ink"} cta="form">
            {copy.contact}
          </PillButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="label rounded-full border border-ink/20 px-4 py-2 md:hidden"
        >
          {open ? copy.close : copy.menu}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className={`${FRAME} border-t border-line pb-6 md:hidden`}>
          <nav aria-label={copy.mainNavAria} className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-lg font-semibold hover:bg-stock-2">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between gap-4">
            <LocaleSwitcher current={locale} aria={copy.localeAria} />
            <PillButton href={contactHref} cta="form">
              {copy.contact}
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
