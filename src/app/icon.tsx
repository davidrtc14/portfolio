import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0F172A",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 700,
          color: "#22D3EE",
          fontFamily: "sans-serif",
          border: "1.5px solid #22D3EE",
        }}
      >
        D
      </div>
    ),
    { ...size }
  );
}