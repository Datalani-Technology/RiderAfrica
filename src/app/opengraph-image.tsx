import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rider Africa — Namibia's On-Demand Delivery & Transport";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "#090E1A",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(0,115,255,0.18)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(0,195,255,0.12)",
            filter: "blur(80px)",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #0073FF, #00C3FF)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              background: "rgba(0,115,255,0.2)",
              border: "1px solid rgba(0,115,255,0.4)",
              borderRadius: 100,
              padding: "10px 28px",
              color: "#4DA6FF",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 3,
              marginBottom: 32,
              textTransform: "uppercase",
            }}
          >
            🇳🇦 Windhoek, Namibia
          </div>

          {/* Brand name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 96,
              fontWeight: 900,
              letterSpacing: -3,
              color: "#ffffff",
              marginBottom: 20,
            }}
          >
            Rider{" "}
            <span style={{ color: "#4DA6FF" }}>Africa</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: "#9BB8FF",
              textAlign: "center",
              maxWidth: 780,
              lineHeight: 1.4,
              marginBottom: 48,
            }}
          >
            On-Demand Delivery & Transport across Namibia
          </div>

          {/* Pills row */}
          <div style={{ display: "flex", gap: 16 }}>
            {["📦 Parcel Delivery", "🚗 Passenger Rides", "🛒 Grocery Delivery", "📱 Free App"].map((label) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 100,
                  padding: "12px 24px",
                  color: "#cbd5e1",
                  fontSize: 20,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            color: "rgba(255,255,255,0.3)",
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          riderafrica.com
        </div>
      </div>
    ),
    { ...size }
  );
}
