import { SectionHeader } from "./SectionHeader";

const deliverables = [
  {
    icon: "📐",
    code: "ENT-01",
    title: "Planta Baixa Elétrica",
    desc: "Pontos de iluminação, TUGs, TUEs e interruptores com simbologia padronizada.",
  },
  {
    icon: "⚡",
    code: "ENT-02",
    title: "Quadro de Previsão de Cargas",
    desc: "Potências instaladas, correntes nominais e divisão de circuitos por ambiente.",
  },
  {
    icon: "🔌",
    code: "ENT-03",
    title: "Diagrama Unifilar",
    desc: "Representação técnica do QDC com proteções, condutores e identificação de circuitos.",
  },
  {
    icon: "🧮",
    code: "ENT-04",
    title: "Memória de Cálculo",
    desc: "Dimensionamento de condutores, queda de tensão e seleção de dispositivos de proteção.",
  },
  {
    icon: "📄",
    code: "ENT-05",
    title: "Relatório Técnico",
    desc: "Justificativa das escolhas técnicas, redigido em Markdown ou LaTeX.",
  },
];

export const Tarefa = () => {
  return (
    <section id="tarefa" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
      <div className="container relative">
        <SectionHeader
          number="02"
          eyebrow="A Tarefa"
          title="O Dossiê Técnico de Projeto"
          description="A partir da planta arquitetônica presente no repositório webquest, desenvolva cinco entregáveis que compõem o pacote final. Cada peça é avaliada individualmente e em conjunto — a coerência entre os documentos é parte da nota."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((d, i) => (
            <article
              key={d.code}
              className="reveal group relative bg-surface border border-border border-l-4 border-l-primary p-6 hover:border-l-primary-glow hover:bg-surface-elevated transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl leading-none" aria-hidden>{d.icon}</span>
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5">
                  {d.code}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                {d.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-wider">
                <span className="text-muted-foreground">Entregável</span>
                <span className="text-primary">●  obrigatório</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
