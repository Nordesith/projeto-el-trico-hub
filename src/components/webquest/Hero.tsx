import { Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-24 pb-20 overflow-hidden bg-hero-gradient"
    >
      {/* dot-grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" aria-hidden />

      {/* circuit decoration top-right */}
      <svg
        className="absolute top-20 right-0 w-[420px] h-[420px] opacity-20 hidden md:block"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <g stroke="hsl(var(--primary))" strokeWidth="1">
          <path d="M0 80 L160 80 L200 120 L320 120" />
          <path d="M0 200 L120 200 L160 240 L400 240" />
          <path d="M0 320 L240 320 L280 280 L400 280" />
          <circle cx="160" cy="80" r="3" fill="hsl(var(--primary))" />
          <circle cx="200" cy="120" r="3" fill="hsl(var(--primary))" />
          <circle cx="160" cy="240" r="3" fill="hsl(var(--primary))" />
          <circle cx="280" cy="280" r="3" fill="hsl(var(--primary))" />
          <rect x="320" y="110" width="20" height="20" />
          <rect x="100" y="190" width="20" height="20" />
        </g>
      </svg>

      {/* corner brackets */}
      <div className="absolute top-24 left-6 w-8 h-8 border-l-2 border-t-2 border-primary/60" aria-hidden />
      <div className="absolute bottom-8 right-6 w-8 h-8 border-r-2 border-b-2 border-primary/60" aria-hidden />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div className="reveal flex items-center gap-3 mb-8">
            <span className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary">
              SENAI · Eletrotécnica · Projeto Integrador
            </span>
            <span className="hidden sm:block h-px w-16 bg-primary/40" />
          </div>

          <h1 className="reveal font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
            <span className="inline-flex items-center gap-3">
              <Zap
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-primary animate-bolt fill-primary"
                strokeWidth={1.5}
              />
              <span className="font-mono-tech text-base sm:text-lg uppercase tracking-widest text-primary">
                WebQuest
              </span>
            </span>
            <br />
            Projetos {" "}
            <span className="text-primary">Elétricos</span> Prediais
          </h1>

          <p className="reveal mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Você foi contratado por um escritório de engenharia. Sua missão:
            projetar uma instalação elétrica residencial{" "}
            <span className="text-foreground font-medium">segura</span>,{" "}
            <span className="text-foreground font-medium">eficiente</span> e em
            conformidade total com a{" "}
            <span className="text-primary font-medium">NBR 5410</span>.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-3">
            <div className="tech-tag-accent">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              NBR 5410
            </div>
            <div className="tech-tag">Equipes de 3–5 membros</div>
            <div className="tech-tag">Carga horária · Projeto</div>
          </div>

          <div className="reveal mt-14 flex flex-wrap gap-4">
            <a
              href="#introducao"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-mono-tech text-sm uppercase tracking-wider px-6 py-3.5 hover:bg-primary-glow transition-colors"
            >
              Iniciar briefing
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#recursos"
              className="inline-flex items-center gap-3 border border-border-strong text-foreground font-mono-tech text-sm uppercase tracking-wider px-6 py-3.5 hover:border-primary hover:text-primary transition-colors"
            >
              Ver recursos
            </a>
          </div>
        </div>
      </div>

      {/* bottom diagonal accent */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-surface-alt diagonal-divider-top" aria-hidden />
    </section>
  );
};
