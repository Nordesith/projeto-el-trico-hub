import { useEffect, useState } from "react";
import { Zap, Menu, X } from "lucide-react";

const links = [
  { href: "#introducao", label: "Introdução" },
  { href: "#tarefa", label: "Tarefa" },
  { href: "#processo", label: "Processo" },
  { href: "#recursos", label: "Recursos" },
  { href: "#avaliacao", label: "Avaliação" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-8 h-8 bg-primary text-primary-foreground">
            <Zap className="w-4 h-4" strokeWidth={2.5} />
          </span>
          <span className="font-display font-bold text-sm sm:text-base tracking-tight">
            WebQuest<span className="text-primary">.</span>elétrica
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="container py-3 flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-mono-tech uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
