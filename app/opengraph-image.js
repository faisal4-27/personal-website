import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Faisal Abuosbeh | Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [antonData, dmSansData] = await Promise.all([
    readFile(join(process.cwd(), "app/_fonts/Anton-Regular.ttf")),
    readFile(join(process.cwd(), "app/_fonts/DMSans-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f4efe4",
          padding: "72px 88px",
          position: "relative",
        }}
      >
        {/* Subtle top nav strip to echo the site chrome */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 88px",
            borderBottom: "1px solid rgba(17, 17, 17, 0.15)",
            fontFamily: "DM Sans",
            fontSize: 18,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#111111",
          }}
        >
          <span>Home</span>
          <div style={{ display: "flex", gap: 28 }}>
            <span>Experiences</span>
            <span>Projects</span>
            <span>About Me</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 24,
          }}
        >
          <div
            style={{
              width: 14,
              height: 88,
              background: "#c41e1e",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              display: "flex",
              fontFamily: "Anton",
              fontSize: 96,
              lineHeight: 1,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#111111",
            }}
          >
            Faisal Abuosbeh
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            marginLeft: 34,
            fontFamily: "DM Sans",
            fontSize: 28,
            lineHeight: 1.4,
            color: "#555555",
          }}
        >
          Systems Design Engineering @ University of Waterloo
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            marginLeft: 34,
            fontFamily: "DM Sans",
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#555555",
          }}
        >
          faisalab.ca
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Anton", data: antonData, style: "normal", weight: 400 },
        { name: "DM Sans", data: dmSansData, style: "normal", weight: 400 },
      ],
    }
  );
}
