import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/webquest/Navbar";
import { Hero } from "@/components/webquest/Hero";
import { Introducao } from "@/components/webquest/Introducao";
import { Tarefa } from "@/components/webquest/Tarefa";
import { Processo } from "@/components/webquest/Processo";
import { Recursos } from "@/components/webquest/Recursos";
import { Avaliacao } from "@/components/webquest/Avaliacao";
import { Footer } from "@/components/webquest/Footer";

const Index = () => {
  useReveal();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Introducao />
      <Tarefa />
      <Processo />
      <Recursos />
      <Avaliacao />
      <Footer />
    </main>
  );
};

export default Index;
