import { Zap } from "lucide-react";

const badges = ["SENAI", "NBR 5410", "Eletrotécnica", "Projeto Integrador"];

export const Footer = () => {
  return (
    <footer className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden />

      <div className="container relative">
        <div className="reveal max-w-3xl mx-auto text-center">
          <Zap
            className="w-10 h-10 text-primary fill-primary animate-bolt mx-auto mb-6"
            strokeWidth={1.5}
          />
          <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-balance leading-tight mb-6">
            Você não vai apenas{" "}
            <span className="text-primary">entregar um projeto</span>. Vai
            assinar uma instalação que outras pessoas vão habitar.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Ao concluir esta WebQuest, você terá consolidado competências
            essenciais: domínio de normas técnicas, fluência em ferramentas CAD
            e visão crítica para projetar sistemas elétricos seguros.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {badges.map((b) => (
              <span key={b} className="tech-tag">
                {b}
              </span>
            ))}
          </div>

          <div className="mt-14 inline-flex items-center gap-3 font-mono-tech text-sm uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            ⚡ Bom trabalho, engenheiros!
            <span className="h-px w-8 bg-primary" />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[11px] uppercase tracking-wider text-muted-foreground">
          <span>© SENAI · WebQuest Eletrotécnica</span>
          <span>Documento técnico-pedagógico · v1.0</span>
        </div>
      </div>
    </footer>
  );
};
