import type { NextConfig } from "next";

/**
 * Security headers for a static site without sessions. No HSTS: the host
 * sets it, and a wrong preload drags on for months.
 */
const GOOGLE_TAG_HOSTS = [
  "https://www.googletagmanager.com",
  "https://*.google-analytics.com",
  "https://*.analytics.google.com",
  "https://*.googleadservices.com",
  "https://*.g.doubleclick.net",
  "https://www.google.com",
  "https://www.google.es",
].join(" ");

// React dev tooling (Turbopack source maps, stack reconstruction) needs
// eval(); production builds never do, so the directive only exists on `next dev`.
const SCRIPT_EVAL = process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : "";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    // 'unsafe-inline' in script-src: REVEAL_INIT_SCRIPT and GTM_INIT_SCRIPT
    // are injected without nonce/hash. style-src inline for Tailwind and
    // computed styles. Any new third-party embed (maps, video, fonts) needs
    // its host added here or it is blocked silently — check the browser
    // console after adding one.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `img-src 'self' data: ${GOOGLE_TAG_HOSTS}`,
      `script-src 'self' 'unsafe-inline'${SCRIPT_EVAL} https://www.googletagmanager.com`,
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      `connect-src 'self' ${GOOGLE_TAG_HOSTS}`,
      "frame-src https://www.googletagmanager.com https://td.doubleclick.net",
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS },
      {
        // Stable-named /public assets: Next only caches /_next/* aggressively,
        // so hero media would be re-fetched on every visit. One week,
        // revalidating in the background.
        source: "/hero/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
