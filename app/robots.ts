import type { MetadataRoute } from "next";
import { IS_INDEXABLE, absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Without NEXT_PUBLIC_SITE_URL (previews, staging) the whole site is blocked.
  if (!IS_INDEXABLE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
