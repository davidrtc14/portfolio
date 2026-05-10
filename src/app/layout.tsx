import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const BASE_URL = "https://portfolio-navy-one-27.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "David Ramalho | Desenvolvedor Full-Stack Júnior",
    template: "%s | David Ramalho",
  },
  description:
    "Portfólio de David Ramalho — Desenvolvedor Full-Stack Júnior com foco em backend. Node.js, NestJS, Java Spring Boot, Docker e React. Baseado em João Pessoa, PB.",
  keywords: [
    "desenvolvedor full-stack",
    "desenvolvedor backend",
    "Node.js",
    "NestJS",
    "Java Spring Boot",
    "React",
    "Docker",
    "João Pessoa",
    "estágio desenvolvedor",
    "vaga júnior",
  ],
  authors: [{ name: "David Ramalho Teixeira de Carvalho" }],
  creator: "David Ramalho Teixeira de Carvalho",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "David Ramalho — Portfólio",
    title: "David Ramalho | Desenvolvedor Full-Stack Júnior",
    description:
      "Portfólio profissional com projetos reais em Node.js, NestJS, Spring Boot e Docker.",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Ramalho | Desenvolvedor Full-Stack Júnior",
    description:
      "Portfólio profissional com projetos reais em Node.js, NestJS, Spring Boot e Docker.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`
          ${sora.variable}
          ${inter.variable}
          ${jetbrains.variable}
          bg-[#0F172A] text-[#F8FAFC] antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}