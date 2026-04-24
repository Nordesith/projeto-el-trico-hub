import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface Resource {
  icon: string;
  title: string;
  desc: string;
  href?: string;
  cta: string;
}

const resources: Resource[] = [
  {
    icon: "📚",
    title: "Estante de Livros SENAI — Recurso 1",
    desc: "Biblioteca digital com obras técnicas curadas para o curso de Eletrotécnica.",
    href: "https://estantedelivros.senai.br/view/1XoEPkWIe6B6n_MaQpsaxzUE0b2c8OLlv",
    cta: "Acessar",
  },
  {
    icon: "📚",
    title: "Estante de Livros SENAI — Recurso 2",
    desc: "Material complementar com estudos de caso e exercícios resolvidos.",
    href: "https://estantedelivros.senai.br/view/1ns4ek7G9hteOO28pfSmj_2pdYMCm3gNH",
    cta: "Acessar",
  },
  {
    icon: "📁",
    title: "Repositório de WebQuests",
    desc: "Pasta compartilhada com modelos, exemplos e arquivos de referência.",
    href: "https://drive.google.com/drive/u/2/folders/1Wq8-SNddjbl7FZXUhlJ-9i9_j3AYbBvJ",
    cta: "Abrir Drive",
  },
  {
    icon: "🎥",
    title: "Tutoriais YouTube",
    desc: "Pesquisar: “Dimensionamento de Circuitos NBR 5410” e “Diagrama Unifilar no CAD”.",
    href: "https://www.youtube.com/results?search_query=Dimensionamento+de+Circuitos+NBR+5410",
    cta: "Buscar vídeos",
  },
  {
    icon: "🏭",
    title: "Manuais de Fabricantes",
    desc: "Schneider Electric, WEG e Siemens — tabelas de cabos, disjuntores e dispositivos DR.",
    cta: "Consulte tabelas",
  },
  {
    icon: "📋",
    title: "Norma NBR 5410",
    desc: "Instalações Elétricas de Baixa Tensão — referência normativa obrigatória.",
    cta: "Consultar norma",
  },
];

export const Recursos = () => {
  return (
    <section id="recursos" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-circuit opacity-40" aria-hidden />
      <div className="container relative">
        <SectionHeader
          number="04"
          eyebrow="Recursos"
          title="Recursos de Apoio"
          description="Material curado para cada etapa do projeto. Use, cite e referencie."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {resources.map((r, i) => {
            const isLink = !!r.href;
            const Wrapper: any = isLink ? "a" : "div";
            const wrapperProps = isLink
              ? {
                  href: r.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Wrapper
                key={r.title}
                {...wrapperProps}
                className={`reveal group relative block bg-surface border border-border p-6 md:p-7 transition-all duration-300 ${
                  isLink ? "hover:border-primary hover:bg-surface-elevated cursor-pointer" : ""
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="grid place-items-center w-14 h-14 bg-background border border-border text-3xl shrink-0 group-hover:border-primary/40 transition-colors">
                    <span aria-hidden>{r.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {r.desc}
                    </p>
                    <span
                      className={`inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider ${
                        isLink ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {r.cta}
                      {isLink && (
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </span>
                  </div>
                </div>
                {/* corner accent */}
                <span
                  className="absolute top-0 right-0 w-3 h-3 border-r border-t border-primary/0 group-hover:border-primary transition-colors"
                  aria-hidden
                />
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
