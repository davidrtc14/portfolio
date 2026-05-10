const categories = [
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "NestJS", "Java Spring Boot", "APIs REST", "JWT", "Bcrypt"],
  },
  {
    title: "Banco de Dados",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Prisma ORM", "Mongoose"],
  },
  {
    title: "Infra & DevOps",
    icon: "🐳",
    skills: ["Docker", "Nginx", "Contêinerização", "Proxy Reverso"],
  },
  {
    title: "Frontend",
    icon: "🖥️",
    skills: ["React", "Hooks", "Integração REST", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Segurança",
    icon: "🔒",
    skills: ["Cybersegurança (cursando)", "Segurança em APIs", "Hashing", "Auth JWT"],
  },
  {
    title: "Ferramentas",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Insomnia", "class-validator"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-[#22D3EE] text-sm font-mono mb-2">habilidades</p>
        <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#F8FAFC]">
          Stack Tecnológica
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="p-6 rounded-xl border border-[#1E293B] bg-[#1E293B]/20 hover:border-[#22D3EE]/30 hover:bg-[#1E293B]/40 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="font-sora font-semibold text-[#F8FAFC] text-base group-hover:text-[#22D3EE] transition-colors">
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#0F172A] text-[#94A3B8] border border-[#1E293B]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}