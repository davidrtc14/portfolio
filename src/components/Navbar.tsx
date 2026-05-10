"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A]/90 backdrop-blur-md border-b border-[#1E293B]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-sora font-bold text-lg text-[#F8FAFC] hover:text-[#22D3EE] transition-colors"
        >
          david<span className="text-[#22D3EE]">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#94A3B8] hover:text-[#22D3EE] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/cv-david-ramalho.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#22D3EE] text-[#22D3EE] text-sm font-medium hover:bg-[#22D3EE]/10 transition-all duration-200"
        >
          <span>Download CV</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
        >
          <span className={`block w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 border-b border-[#1E293B]" : "max-h-0"} bg-[#0F172A]/95 backdrop-blur-md`}>
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/cv-david-ramalho.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#22D3EE] text-[#22D3EE] text-sm font-medium hover:bg-[#22D3EE]/10 transition-all"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}