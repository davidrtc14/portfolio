import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compressão automática de assets
  compress: true,

  // Headers de segurança e cache para arquivos estáticos
  async headers() {
    return [
      {
        source: "/cv-david-ramalho.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400", // cache de 1 dia
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;