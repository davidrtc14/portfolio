const stats = [
  { value: "7º", label: "Período CC" },
  { value: "2+", label: "Anos de estudo" },
  { value: "5+", label: "Tecnologias" },
  { value: "2", label: "Projetos reais" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[#22D3EE] text-sm font-mono mb-2">sobre mim</p>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#F8FAFC]">
              Quem sou eu?
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-[#94A3B8] font-inter leading-relaxed">
            <p>
              Sou estudante do{" "}
              <span className="text-[#F8FAFC]">7º período de Ciência da Computação</span>{" "}
              na Unipê, João Pessoa, com formação complementar em Cybersegurança pela Cruzeiro do Sul.
            </p>
            <p>
              Minha paixão está no{" "}
              <span className="text-[#F8FAFC]">desenvolvimento backend</span>{" "}
              — construir APIs sólidas, arquiteturas modulares e sistemas que escalam. Tenho experiência
              prática com{" "}
              <span className="text-[#22D3EE]">Node.js, NestJS, Java Spring Boot e Docker</span>,
              além de vivência real como estagiário de T.I.
            </p>
            <p>
              Busco uma oportunidade de estágio ou vaga júnior onde eu possa contribuir com times
              de produto e continuar crescendo como desenvolvedor.
            </p>
          </div>

          <a
            href="#contact"
            className="self-start px-6 py-3 rounded-md border border-[#22D3EE] text-[#22D3EE] text-sm font-medium hover:bg-[#22D3EE]/10 transition-all duration-200"
          >
            Vamos conversar →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-1 p-6 rounded-xl border border-[#1E293B] bg-[#1E293B]/30 hover:border-[#22D3EE]/30 transition-all duration-300"
            >
              <span className="font-sora font-bold text-4xl text-gradient">{s.value}</span>
              <span className="text-[#94A3B8] text-sm font-inter">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}