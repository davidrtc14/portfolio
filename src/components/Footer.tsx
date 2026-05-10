export default function Footer() {
  return (
    <footer className="border-t border-[#1E293B] py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-sora font-bold text-[#F8FAFC]">
          david<span className="text-[#22D3EE]">.</span>dev
        </span>
        <span className="text-xs text-[#94A3B8] font-mono">
          © {new Date().getFullYear()} David Ramalho · Feito com Next.js & Tailwind
        </span>
      </div>
    </footer>
  );
}