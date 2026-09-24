import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE.name;

/**
 * Default OG card, language-neutral. At the root of app/ it cascades to every
 * route. CLIENT-SKIN: redraw with the brand once the palette exists.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111827",
          color: "#ffffff",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {SITE.address.city || " "}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1 }}>{SITE.name}</div>
          {SITE.claim && (
            <div style={{ marginTop: 24, fontSize: 36, color: "rgba(255,255,255,0.75)" }}>
              {SITE.claim}
            </div>
          )}
        </div>
        <div style={{ display: "flex", height: 14, background: "#2563eb" }} />
      </div>
    ),
    size,
  );
}
