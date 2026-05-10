"use client";

import { useEffect, useState } from "react";

const terminalLines = [
  { prefix: "~", command: "whoami", delay: 500 },
  { prefix: "~", command: "David Ramalho — Dev Full-Stack Júnior", delay: 1200, output: true },
  { prefix: "~", command: "cat stack.txt", delay: 2200 },
  { prefix: "~", command: "Node.js · NestJS · Spring Boot · Docker · React", delay: 2900, output: true },
  { prefix: "~", command: "ls projetos/", delay: 4000 },
  { prefix: "~", command: "estagio-app/   user-api/", delay: 4700, output: true },
];

function TerminalLine({ prefix, command, output, show }: {
  prefix: string;
  command: string;
  output?: boolean;
  show: boolean;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!show) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(command.slice(0, i + 1));
      i++;
      if (i >= command.length) clearInterval(interval);
    }, output ? 10 : 40);
    return () => clearInterval(interval);
  }, [show, command, output]);

  if (!show) return null;

  return (
    <div className={`flex gap-2 ${output ? "text-[#94A3B8]" : "text-[#F8FAFC]"}`}>
      {!output && <span className="text-[#22D3EE] select-none">{prefix} $</span>}
      {output && <span className="select-none ml-4" />}
      <span className="font-mono">{displayed}</span>
    </div>
  );
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="flex flex-col gap-6 animate-slide-up">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
            <span className="text-sm text-[#94A3B8] font-inter">
              Disponível para oportunidades
            </span>
          </div>

          <div>
            <p className="text-[#94A3B8] text-lg font-inter mb-1">Olá, eu sou</p>
            <h1 className="font-sora font-bold text-4xl md:text-5xl text-[#F8FAFC] leading-tight">
              David Ramalho
            </h1>
            <h2 className="font-sora font-bold text-4xl md:text-5xl leading-tight text-gradient">
              Full-Stack Dev
            </h2>
          </div>

          <p className="text-[#94A3B8] font-inter text-base leading-relaxed max-w-md">
            Estudante de Ciência da Computação apaixonado por backend.
            Transformo lógica em APIs robustas com Node.js, NestJS e Spring Boot.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-[#22D3EE] text-[#0F172A] font-semibold text-sm hover:bg-[#38BDF8] transition-all duration-200"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md border border-[#1E293B] text-[#F8FAFC] text-sm hover:border-[#22D3EE] hover:text-[#22D3EE] transition-all duration-200"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        {/* Terminal */}
        <div className="rounded-xl border border-[#1E293B] bg-[#0F172A] overflow-hidden shadow-2xl animate-fade-in">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1E293B] border-b border-[#1E293B]">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-4 text-xs text-[#94A3B8] font-mono">bash — david@portfolio</span>
          </div>

          <div className="p-5 font-mono text-sm flex flex-col gap-2 min-h-[220px]">
            {terminalLines.map((line, i) => (
              <TerminalLine
                key={i}
                prefix={line.prefix}
                command={line.command}
                output={line.output}
                show={visibleLines.includes(i)}
              />
            ))}
            {visibleLines.length >= terminalLines.length && (
              <div className="flex gap-2 text-[#F8FAFC]">
                <span className="text-[#22D3EE]">~ $</span>
                <span className="w-2 h-4 bg-[#22D3EE] animate-blink inline-block" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}