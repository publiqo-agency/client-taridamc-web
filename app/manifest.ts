import type { MetadataRoute } from "next";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { ORG } from "@/lib/seo";

/**
 * One manifest for the whole site (it does not hang from [locale]): uses the
 * default locale for name and description, like the root <title>.
 */
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const dict = await getDictionary(DEFAULT_LOCALE);
  return {
    name: ORG.name,
    short_name: ORG.shortName,
    description: dict.common.meta.description,
    start_url: "/",
    display: "browser",
    background_color: "#f4f2ec",
    theme_color: "#0a2438",
    icons: [
      { src: "/logo/logo-192.png", sizes: "192x192", type: "image/png" },
      { src: "/logo/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
