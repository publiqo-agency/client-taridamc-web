import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";
import {
  LOGO_HEIGHT,
  LOGO_SUBTITLE,
  LOGO_TITLE,
  LOGO_WAVES,
  LOGO_WIDTH,
} from "@/components/site/logo-paths";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE.name;

/**
 * Default OG card, language-neutral. At the root of app/ it cascades to every
 * route. CLIENT-SKIN: the deep-sea navy of the site's dark bands, the logo in
 * salt white, one hairline and the town as a small annotation.
 */
export default function OgImage() {
  const w = 620;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#0a2438",
          color: "#f3f1ea",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "rgba(243,241,234,0.55)",
          }}
        >
          <span>{SITE.address.city || " "}</span>
          <span>41°16′N 1°58′E</span>
        </div>
        <svg
          width={w}
          height={(w * LOGO_HEIGHT) / LOGO_WIDTH}
          viewBox={`0 0 ${LOGO_WIDTH} ${LOGO_HEIGHT}`}
          fill="#f3f1ea"
        >
          {[...LOGO_WAVES, ...LOGO_TITLE, ...LOGO_SUBTITLE].map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
        <div style={{ display: "flex", width: "100%", height: 1, background: "rgba(243,241,234,0.3)" }} />
      </div>
    ),
    size,
  );
}
