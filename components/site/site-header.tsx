"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { DISPLAY, FRAME } from "@/lib/styles";
import { Logo } from "./logo";
import { LocaleSwitcher } from "./locale-switcher";
import { PillButton } from "./pill-button";
import { SCROLL_LOCK_EVENT, SCROLL_UNLOCK_EVENT } from "./motion/motion-root";

export type NavItem = { href: string; label: string };

type Props = {
  locale: Locale;
  /** Exact paths whose hero sits under a transparent header (lib/routes.ts). */
  overlayPaths: string[];
  /** Inline desktop navigation. */
  nav: NavItem[];
  /** The full-screen menu: every page, home and contact included. */
  menu: NavItem[];
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

const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

/**
 * Site header. Transparent over a hero (`band-dark`: logo and links turn
 * light), bone with a hairline once scrolled. It slips away while reading
 * down and comes back on the first scroll up. The menu is a full-screen
 * deep-sea curtain with large light links; the page behind goes `inert`
 * while it is open and Escape closes it.
 *
 * All copy arrives resolved as props: reading the dictionary here would
 * ship every language to the browser.
 */
export function SiteHeader({ locale, overlayPaths, nav, menu, contactHref, copy }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  // The menu is open FOR a path: navigating anywhere closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (value: boolean | ((v: boolean) => boolean)) =>
    setOpenAt((prev) => {
      const next = typeof value === "function" ? value(prev === pathname) : value;
      return next ? pathname : null;
    });
  const toggle = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  const current = normalize(pathname);
  const overlay = overlayPaths.includes(current);
  const transparent = overlay && !scrolled;

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 160);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wasOpen = useRef(false);
  useEffect(() => {
    const outside = [document.getElementById("main"), document.querySelector("footer")];
    if (open) {
      wasOpen.current = true;
      outside.forEach((el) => el?.setAttribute("inert", ""));
      window.dispatchEvent(new Event(SCROLL_LOCK_EVENT));
      firstLink.current?.focus({ preventScroll: true });
      const onKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setOpenAt(null);
          toggle.current?.focus();
        }
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
    if (!wasOpen.current) return;
    wasOpen.current = false;
    outside.forEach((el) => el?.removeAttribute("inert"));
    window.dispatchEvent(new Event(SCROLL_UNLOCK_EVENT));
  }, [open]);

  const dark = transparent || open;

  return (
    <>
      <header
        data-placement="header"
        style={{ viewTransitionName: "site-header" }}
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${dark ? "band-dark bg-transparent text-ink" : "bg-stock/90 text-ink backdrop-blur-md"}`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-stock"
        >
          {copy.skipToContent}
        </a>

        <div className={`${FRAME} grid h-20 grid-cols-[1fr_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]`}>
          <Link href={`/${locale}`} className="justify-self-start">
            <Logo className="h-9 md:h-10" />
          </Link>

          <nav aria-label={copy.mainNavAria} className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current === item.href ? "page" : undefined}
                className="link-line text-[0.8125rem] tracking-[0.02em] text-ink/80 transition-colors hover:text-ink aria-[current=page]:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-5">
            <LocaleSwitcher current={locale} aria={copy.localeAria} className="hidden md:flex" />
            <PillButton
              href={contactHref}
              tone={dark ? "white" : "ink"}
              cta="form"
              className="hidden h-10 px-5 md:inline-flex"
            >
              {copy.contact}
            </PillButton>
            <button
              ref={toggle}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="group flex h-10 items-center gap-3 lg:hidden"
            >
              <span className="label">{open ? copy.close : copy.menu}</span>
              <span aria-hidden className="relative block h-3 w-7">
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    open ? "top-1.5 rotate-[20deg]" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    open ? "top-1.5 w-full -rotate-[20deg]" : "top-3 w-2/3 group-hover:w-full"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <span
          aria-hidden
          className={`absolute inset-x-0 bottom-0 block h-px transition-colors duration-500 ${
            dark ? "bg-ink/20" : "bg-line"
          }`}
        />
      </header>

      <div
        id="site-menu"
        aria-hidden={!open}
        inert={!open}
        className={`band-dark grain fixed inset-0 z-40 flex flex-col bg-stock text-ink transition-[clip-path] duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav aria-label={copy.mainNavAria} className={`${FRAME} flex flex-1 flex-col justify-center gap-1 pt-24`}>
          {menu.map((item, i) => (
            <Link
              key={item.href}
              ref={i === 0 ? firstLink : undefined}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={current === item.href ? "page" : undefined}
              className="group flex items-baseline gap-5 border-b border-line py-3"
            >
              <span className="mask">
                <span
                  className={`${DISPLAY} text-[clamp(2.25rem,8vw,4rem)] transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-aria-[current=page]:text-accent ${
                    open ? "translate-y-0" : "translate-y-[115%]"
                  }`}
                  style={{ transitionDelay: open ? `${0.25 + i * 0.06}s` : "0s" }}
                >
                  {item.label}
                </span>
              </span>
            </Link>
          ))}
        </nav>

        <div
          className={`${FRAME} flex flex-wrap items-center justify-between gap-4 pb-8 transition-opacity duration-700 ${
            open ? "opacity-100 delay-500" : "opacity-0"
          }`}
        >
          <LocaleSwitcher current={locale} aria={copy.localeAria} />
        </div>
      </div>
    </>
  );
}
