import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE.name;

/**
 * Default OG card, language-neutral. At the root of app/ it cascades to every
 * route. CLIENT-SKIN: espresso plate, bone type, one hairline.
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
          background: "#211a15",
          color: "#f4ede4",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "rgba(244,237,228,0.55)",
          }}
        >
          {SITE.address.city || " "}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 132, fontWeight: 300, lineHeight: 1, letterSpacing: -4 }}>{SITE.name}</div>
          {SITE.claim && (
            <div style={{ marginTop: 24, fontSize: 36, color: "rgba(244,237,228,0.75)" }}>
              {SITE.claim}
            </div>
          )}
        </div>
        <div style={{ display: "flex", height: 1, background: "rgba(244,237,228,0.35)" }} />
      </div>
    ),
    size,
  );
}
