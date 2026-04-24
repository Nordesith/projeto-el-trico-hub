import { SectionHeader } from "./SectionHeader";

const criteria = [
  {
    name: "Rigor Técnico",
    desc: "Cálculos de carga e dimensionamento conforme NBR 5410.",
    weight: 40,
  },
  {
    name: "Qualidade do Desenho",
    desc: "Layers organizados, simbologia padronizada, clareza do diagrama.",
    weight: 30,
  },
  {
    name: "Documentação",
    desc: "Relatório técnico completo e memória de cálculo justificada.",
    weight: 20,
  },
  {
    name: "Trabalho em Equipe",
    desc: "Colaboração entre membros e cumprimento dos prazos definidos.",
    weight: 10,
  },
];

export const Avaliacao = () => {
  return (
    <section id="avaliacao" className="relative py-24 md:py-32 bg-surface-alt">
      <div className="container relative">
        <SectionHeader
          number="05"
          eyebrow="Avaliação"
          title="Critérios de Avaliação"
          description="Rubrica oficial. Nota final = soma ponderada dos quatro critérios."
        />

        <div className="reveal max-w-5xl border border-border bg-surface shadow-card overflow-hidden">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-background border-b border-border font-mono-tech text-[11px] uppercase tracking-wider text-muted-foreground">
            <div className="col-span-3">Critério</div>
            <div className="col-span-6">Descrição</div>
            <div className="col-span-3">Peso</div>
          </div>

          {/* Rows */}
          {criteria.map((c, idx) => (
            <div
              key={c.name}
              className={`grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-6 border-b border-border last:border-b-0 ${
                idx % 2 === 1 ? "bg-surface-elevated" : "bg-surface"
              }`}
            >
              <div className="md:col-span-3 flex items-center gap-3">
                <span className="font-mono-tech text-xs text-primary">
                  0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {c.name}
                </h3>
              </div>
              <p className="md:col-span-6 text-sm text-muted-foreground leading-relaxed self-center">
                {c.desc}
              </p>
              <div className="md:col-span-3 flex items-center gap-3">
                <div className="flex-1 h-2 bg-background border border-border overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary-glow transition-[width] duration-1000"
                    style={{ width: `${c.weight}%` }}
                  />
                </div>
                <span className="font-mono-tech text-sm font-semibold text-primary tabular-nums w-12 text-right">
                  {c.weight}%
                </span>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 bg-primary/10 border-t-2 border-primary">
            <div className="md:col-span-9 font-mono-tech text-xs uppercase tracking-wider text-primary">
              Total ponderado
            </div>
            <div className="md:col-span-3 flex items-center justify-end gap-3">
              <span className="font-display font-bold text-lg text-primary">100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
