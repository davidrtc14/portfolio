"use client";

import { useState } from "react";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const socials = [
  { label: "GitHub", href: "https://github.com/davidrtc14", icon: <GithubIcon />, external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/davidrtc14", icon: <LinkedinIcon />, external: true },
  { label: "E-mail", href: "mailto:davidrtc14@gmail.com", icon: <MailIcon />, external: false },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("davidrtc14@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
        <div>
          <p className="text-[#22D3EE] text-sm font-mono mb-2">contato</p>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#F8FAFC]">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-[#94A3B8] font-inter mt-4 leading-relaxed">
            Estou em busca de oportunidades de estágio ou vaga júnior. Se você tem um projeto
            interessante ou uma vaga em aberto, me manda uma mensagem!
          </p>
        </div>

        <button
          onClick={copyEmail}
          className="flex items-center gap-3 px-6 py-3 rounded-xl border border-[#1E293B] hover:border-[#22D3EE]/40 bg-[#1E293B]/30 transition-all duration-200 group"
        >
          <span className="font-mono text-[#94A3B8] group-hover:text-[#F8FAFC] transition-colors">
            davidrtc14@gmail.com
          </span>
          <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-[#0F172A] text-[#22D3EE] border border-[#22D3EE]/20">
            {copied ? "copiado ✓" : "copiar"}
          </span>
        </button>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="p-3 rounded-xl border border-[#1E293B] text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}