## AESTHETIC DIRECTION
Industrial-technical theme. Dark background (#0f1117) with electric yellow accent (#F5C400) and cool white text. Use the font "Syne" for headings and "IBM Plex Mono" for labels/badges (import from Google Fonts). Circuit-board-inspired decorative elements (subtle SVG line patterns or CSS grid dots in the background). Section separators should use diagonal cuts or sharp geometric dividers. Animated entrance for each section using fade-in + slight translateY on scroll. The overall feel: like a technical briefing board for an engineering firm.

## PAGE STRUCTURE

### 1. HERO SECTION
- Large title: "WebQuest: Projeto de Instalações Elétricas Prediais"
- Subtitle: "Você foi contratado por um escritório de engenharia. Sua missão: projetar uma instalação elétrica residencial segura, eficiente e em conformidade com a NBR 5410."
- Two decorative stat badges: "NBR 5410" and "Equipes de 3–5 membros"
- Animated electric bolt icon (SVG or emoji ⚡) as accent
- Background: dark with subtle repeating dot-grid pattern

### 2. INTRODUÇÃO
- Short paragraph setting the scenario (hired engineer, real challenge)
- One highlighted quote block: "O desafio não é apenas 'fazer funcionar' — é garantir segurança, eficiência e conformidade total com a norma."

### 3. A TAREFA (Dossiê Técnico)
- Section title: "O Dossiê Técnico de Projeto"
- Five delivery cards in a responsive grid (2–3 columns):
  1. 📐 Planta Baixa Elétrica — pontos de iluminação, TUGs, TUEs e interruptores
  2. ⚡ Quadro de Previsão de Cargas — potências, correntes e divisão de circuitos
  3. 🔌 Diagrama Unifilar — representação técnica do QDC
  4. 🧮 Memória de Cálculo — dimensionamento de condutores e proteções
  5. 📄 Relatório Técnico — justificativa das escolhas em Markdown ou LaTeX
- Each card has a yellow left border, dark card background, icon, title, and description

### 4. O PROCESSO (Interactive Steps)
- Section title: "Fluxo de Trabalho"
- Four steps as a vertical stepper / timeline with connecting line:
  - Step 1 — Análise e Normatização: Identificar áreas (m²), perímetro por compartimento, carga mínima de iluminação e número mínimo de tomadas conforme NBR 5410
  - Step 2 — Lançamento em CAD: Usar AutoCAD ou Revit para inserir simbologia elétrica e posicionar o QDC no centro de carga
  - Step 3 — Divisão de Circuitos: Separar iluminação de tomadas; criar circuitos independentes para TUEs (ar-condicionado, chuveiro)
  - Step 4 — Dimensionamento e Proteção: Calcular seção dos condutores, queda de tensão, escolher disjuntores, DR e DPS
- Each step has a numbered circle in yellow, title, and description

### 5. RECURSOS
- Section title: "Recursos de Apoio"
- Resource cards in a 2-column grid, each with an icon, title, description, and a "Acessar →" button linking to the URL:
  1. 📚 Estante de Livros SENAI — Recurso 1 → link: https://estantedelivros.senai.br/view/1XoEPkWIe6B6n_MaQpsaxzUE0b2c8OLlv
  2. 📚 Estante de Livros SENAI — Recurso 2 → link: https://estantedelivros.senai.br/view/1ns4ek7G9hteOO28pfSmj_2pdYMCm3gNH
  3. 📁 Repositório de WebQuests → label "Google Drive" (no link, just the label styled as a badge)
  4. 🎥 Tutoriais YouTube — Pesquisar: "Dimensionamento de Circuitos NBR 5410" e "Diagrama Unifilar no CAD"
  5. 🏭 Manuais de Fabricantes — Schneider Electric, WEG, Siemens (tabelas de cabos e disjuntores)
  6. 📋 Norma NBR 5410 — Instalações Elétricas de Baixa Tensão

### 6. AVALIAÇÃO (Rubrica)
- Section title: "Critérios de Avaliação"
- Styled evaluation table with 4 rows:
  | Critério | Descrição | Peso |
  | Rigor Técnico | Cálculos de carga e dimensionamento conforme NBR 5410 | 40% |
  | Qualidade do Desenho | Layers, simbologia, organização do diagrama | 30% |
  | Documentação | Relatório técnico e memória de cálculo | 20% |
  | Trabalho em Equipe | Colaboração e cumprimento dos prazos | 10% |
- Each weight displayed as a horizontal progress bar filled in yellow
- Table rows with alternating dark shades

### 7. FOOTER / CONCLUSÃO
- Short motivational closing paragraph: "Ao concluir esta WebQuest, você terá consolidado competências essenciais: domínio de normas técnicas, ferramentas CAD e visão crítica para projetar sistemas elétricos seguros."
- Badge row: "SENAI" · "NBR 5410" · "Eletrotécnica" · "Projeto Integrador"
- Subtle "⚡ Bom trabalho, engenheiros!" sign-off

## TECHNICAL REQUIREMENTS
- React + Tailwind CSS
- Fully responsive (mobile-first)
- Smooth scroll navigation with a sticky top navbar linking to each section (Introdução, Tarefa, Processo, Recursos, Avaliação)
- No external UI libraries except lucide-react for icons
- All external resource links open in a new tab (target="_blank")
- Scroll-triggered fade-in animations using Intersection Observer API
- No forms required
