import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Angelic Hair by Angelina Hysko — Luxury Hair Transformations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D0D0D",
          position: "relative",
        }}
      >
        {/* Corner ornaments */}
        <div style={{ position: "absolute", top: 40, left: 40, width: 40, height: 40, borderTop: "1.5px solid rgba(201,169,110,0.3)", borderLeft: "1.5px solid rgba(201,169,110,0.3)", display: "flex" }} />
        <div style={{ position: "absolute", top: 40, right: 40, width: 40, height: 40, borderTop: "1.5px solid rgba(201,169,110,0.3)", borderRight: "1.5px solid rgba(201,169,110,0.3)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 40, left: 40, width: 40, height: 40, borderBottom: "1.5px solid rgba(201,169,110,0.3)", borderLeft: "1.5px solid rgba(201,169,110,0.3)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 40, right: 40, width: 40, height: 40, borderBottom: "1.5px solid rgba(201,169,110,0.3)", borderRight: "1.5px solid rgba(201,169,110,0.3)", display: "flex" }} />

        {/* Inner border */}
        <div style={{ position: "absolute", top: 60, left: 60, right: 60, bottom: 60, border: "1px solid rgba(201,169,110,0.1)", display: "flex" }} />

        {/* Brand name */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          <div style={{ fontSize: 80, fontWeight: 300, color: "#D4B87A", letterSpacing: "16px", fontFamily: "Georgia, serif", display: "flex" }}>
            ANGELIC
          </div>

          {/* Gold line */}
          <div style={{ width: 80, height: 1, background: "linear-gradient(to right, transparent, #C9A96E, transparent)", margin: "12px 0", display: "flex" }} />

          <div style={{ fontSize: 56, fontWeight: 300, color: "#D4B87A", letterSpacing: "24px", fontFamily: "Georgia, serif", display: "flex" }}>
            HAIR
          </div>

          <div style={{ fontSize: 14, fontWeight: 500, color: "rgba(212,184,122,0.6)", letterSpacing: "6px", marginTop: 20, display: "flex" }}>
            BY ANGELINA HYSKO
          </div>

          {/* Bottom accent */}
          <div style={{ width: 120, height: 1, background: "linear-gradient(to right, transparent, rgba(201,169,110,0.4), transparent)", marginTop: 24, display: "flex" }} />

          <div style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.3)", letterSpacing: "4px", marginTop: 20, display: "flex" }}>
            LUXURY HAIR TRANSFORMATIONS
          </div>

          <div style={{ fontSize: 11, fontWeight: 400, color: "rgba(201,169,110,0.4)", letterSpacing: "3px", marginTop: 12, display: "flex" }}>
            LEEDS, UK &bull; DUBAI, UAE
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
