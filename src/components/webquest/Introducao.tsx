import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export const Introducao = () => {
  return (
    <section id="introducao" className="relative py-24 md:py-32 bg-surface-alt">
      <div className="absolute inset-0 bg-circuit opacity-40" aria-hidden />
      <div className="container relative">
        <SectionHeader
          number="01"
          eyebrow="Introdução"
          title="O briefing chegou à sua mesa."
        />

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="reveal md:col-span-3 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Um cliente acaba de adquirir um terreno para construir uma{" "}
              <span className="text-foreground font-medium">residência unifamiliar</span>.
              O escritório de engenharia onde você trabalha foi contratado para
              entregar o <span className="text-foreground font-medium">projeto elétrico completo</span>:
              da planta baixa ao quadro de distribuição, passando por dimensionamento
              de cabos, divisão de circuitos e seleção de proteções.
            </p>
            <p>
              Mais do que cumprir prazo, o desafio é técnico. Cada decisão precisa ser
              justificada por norma, cada escolha precisa estar documentada. O cliente
              vai morar nesta casa por décadas — sua assinatura no projeto é uma
              garantia de que tudo foi feito corretamente.
            </p>
          </div>

          <aside className="reveal md:col-span-2">
            <figure className="relative bg-surface border-l-4 border-primary p-6 md:p-8 shadow-card">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary bg-surface-alt p-1.5" strokeWidth={2} />
              <blockquote className="font-display text-lg md:text-xl leading-snug text-foreground">
                “O desafio não é apenas{" "}
                <span className="text-primary">‘fazer funcionar’</span> — é
                garantir segurança, eficiência e conformidade total com a norma.”
              </blockquote>
              <figcaption className="mt-5 font-mono-tech text-xs uppercase tracking-wider text-muted-foreground">
                — Engenheiro responsável
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
};
