const items = [
  {
    type: "work",
    title: "Estagiário de Suporte Técnico em T.I e Redes",
    org: "Ocupação Atual",
    period: "Atual",
    location: "João Pessoa, PB",
    points: [
      "Prestação de suporte técnico de hardware, software e infraestrutura de T.I.",
      "Manutenção e configuração de redes de computadores.",
      "Diagnóstico e resolução de problemas em ambientes corporativos.",
    ],
  },
  {
    type: "edu",
    title: "Bacharelado em Ciência da Computação",
    org: "Unipê — Centro Universitário de João Pessoa",
    period: "Em andamento · 7º Período",
    location: "João Pessoa, PB",
    points: [
      "Ênfase em estruturas de dados, redes, banco de dados e desenvolvimento de software.",
      "Aplicação prática em projetos backend e full-stack.",
    ],
  },
  {
    type: "edu",
    title: "Tecnólogo em Cybersegurança",
    org: "Universidade Cruzeiro do Sul EAD",
    period: "Em andamento · 1º Período",
    location: "EAD",
    points: [
      "Segurança de redes, proteção de dados e boas práticas em desenvolvimento seguro.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-[#22D3EE] text-sm font-mono mb-2">// trajetória</p>
        <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#F8FAFC]">
          Experiência & Formação
        </h2>
      </div>

      <div className="relative flex flex-col gap-0">
        {/* Linha vertical */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#1E293B]" />

        {items.map((item, i) => (
          <div key={i} className="relative flex gap-8 pb-10 last:pb-0">
            {/* Dot */}
            <div className="relative z-10 mt-1 shrink-0">
              <div className={`w-4 h-4 rounded-full border-2 ${
                item.type === "work"
                  ? "border-[#22D3EE] bg-[#22D3EE]/20"
                  : "border-[#38BDF8] bg-[#38BDF8]/10"
              }`} />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col gap-2 pb-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                  item.type === "work"
                    ? "bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/20"
                    : "bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20"
                }`}>
                  {item.type === "work" ? "Experiência" : "Formação"}
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">{item.period}</span>
              </div>

              <h3 className="font-sora font-semibold text-lg text-[#F8FAFC]">
                {item.title}
              </h3>
              <p className="text-sm text-[#22D3EE] font-inter">{item.org}</p>
              <p className="text-xs text-[#94A3B8] font-mono">{item.location}</p>

              <ul className="flex flex-col gap-1.5 mt-1">
                {item.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <span className="text-[#22D3EE] mt-0.5 shrink-0">▹</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}