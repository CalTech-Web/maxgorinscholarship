import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Max Gorin Scholarship - $1,000 Educational Award";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "linear-gradient(135deg, #0f2744 0%, #1e3a5f 60%, #2563eb 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#f59e0b",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Est. 2021
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Max Gorin
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#fbbf24",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Scholarship
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.7)",
              marginTop: "16px",
              maxWidth: "600px",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            $1,000 Educational Award for Students
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255,255,255,0.5)",
            fontSize: "18px",
          }}
        >
          maxgorinscholarship.com
        </div>
      </div>
    ),
    { ...size }
  );
}
