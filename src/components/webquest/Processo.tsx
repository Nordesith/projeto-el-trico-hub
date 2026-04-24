import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    title: "Análise e Normatização",
    desc: "Identificar áreas (m²), perímetro por compartimento, calcular carga mínima de iluminação e número mínimo de tomadas conforme prescreve a NBR 5410.",
    tag: "NBR 5410 · §9.5",
  },
  {
    title: "Lançamento em CAD",
    desc: "Usar AutoCAD ou Revit para inserir simbologia elétrica padronizada, posicionar o QDC no centro de carga e definir os trajetos de eletrodutos.",
    tag: "AutoCAD · Revit",
  },
  {
    title: "Divisão de Circuitos",
    desc: "Separar circuitos de iluminação dos circuitos de tomadas. Criar circuitos independentes para TUEs como ar-condicionado, chuveiro elétrico e forno.",
    tag: "Circuitos · TUE",
  },
  {
    title: "Dimensionamento e Proteção",
    desc: "Calcular seção dos condutores pelos critérios de capacidade de corrente e queda de tensão. Escolher disjuntores, DR (diferencial residual) e DPS.",
    tag: "Disjuntor · DR · DPS",
  },
];

export const Processo = () => {
  return (
    <section id="processo" className="relative py-24 md:py-32 bg-surface-alt">
      <div className="container relative">
        <SectionHeader
          number="03"
          eyebrow="O Processo"
          title="Fluxo de Trabalho"
          description="Quatro etapas sequenciais. Cada uma valida a anterior — pular fases compromete todo o projeto."
        />

        <ol className="relative max-w-4xl">
          {/* connecting vertical line */}
          <span
            className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent"
            aria-hidden
          />

          {steps.map((s, idx) => (
            <li
              key={s.title}
              className="reveal relative pl-20 md:pl-24 pb-12 last:pb-0"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* numbered circle */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground font-display font-bold text-lg md:text-2xl shadow-glow">
                0{idx + 1}
                <span className="absolute -inset-1 border border-primary/40" aria-hidden />
              </div>

              <div className="bg-surface border border-border p-6 md:p-7 hover:border-primary/40 transition-colors">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono-tech text-[10px] uppercase tracking-wider text-primary">
                    Etapa {idx + 1} / {steps.length}
                  </span>
                  <span className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
