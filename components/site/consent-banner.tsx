"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { GTM_ID } from "@/lib/analytics";
import {
  answerConsent,
  getBannerOpen,
  getBannerOpenServer,
  reopenConsent,
  subscribeBanner,
} from "@/lib/consent";
import { pillClass } from "./pill-button";

export type ConsentLabels = {
  title: string;
  body: string;
  accept: string;
  reject: string;
  link: string;
};

type Props = {
  labels: ConsentLabels;
  /** The cookie policy page. */
  policyHref: string;
};

/**
 * Minimal cookie banner: one question, accept or reject. Shown only when
 * there is no stored answer for the current schema (lib/consent.ts) and the
 * container is actually loaded — with no GTM_ID nothing is written, so there
 * is nothing to ask about. Reopens from the footer button, because
 * withdrawing consent has to be as easy as granting it.
 *
 * Renders nothing on the server: the answer lives in localStorage, and the
 * external store hands hydration a closed banner and the client the real one.
 */
export function ConsentBanner({ labels, policyHref }: Props) {
  const open = useSyncExternalStore(subscribeBanner, getBannerOpen, getBannerOpenServer);

  if (!GTM_ID || !open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="band-light fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-line bg-stock p-5 text-ink shadow-lg sm:inset-x-auto sm:left-5 sm:bottom-5"
    >
      <p id="consent-title" className="label text-ink-soft">
        {labels.title}
      </p>
      <p className="mt-2 text-sm text-ink/80">
        {labels.body}{" "}
        <Link href={policyHref} className="underline underline-offset-2 hover:text-ink">
          {labels.link}
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => answerConsent("accepted")} className={pillClass("ink", "pr-6")}>
          {labels.accept}
        </button>
        <button type="button" onClick={() => answerConsent("rejected")} className={pillClass("outline", "pr-6")}>
          {labels.reject}
        </button>
      </div>
    </div>
  );
}

/** Footer control that reopens the banner. A button, not a link: it goes nowhere. */
export function ConsentReopenButton({ label, className = "" }: { label: string; className?: string }) {
  // Without a container there is no banner to reopen; hide the control rather
  // than offer a button that does nothing. GTM_ID is a build-time constant,
  // so server and client agree.
  if (!GTM_ID) return null;

  return (
    <button type="button" onClick={reopenConsent} className={className}>
      {label}
    </button>
  );
}
