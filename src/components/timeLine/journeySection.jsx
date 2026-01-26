import { TimelineItem } from "./timeline";
import { Reveal } from "../reveal/reveal";

export function JourneySection() {
  return (
    <section className="min-h-screen py-20 relative flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        Minha Jornada
      </h2>

      <div className="relative w-full max-w-4xl px-4">
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-blue-500 timeline-line shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <Reveal direction="up">
          <TimelineItem 
            year="2018" 
            title="O Início" 
            desc="Primeiro contato com hardware e manutenção de computadores aos 12 anos." 
            side="left" 
          />
        </Reveal>
        <Reveal>  
          <TimelineItem 
            year="2022" 
            title="Monetizando conhecimento em Hardware" 
            desc="Comecei a fazer pequenos trabalhos de hardware para conhecidos e amigos" 
            side="right" 
          />
        </Reveal>
        <Reveal>
          <TimelineItem 
            year="2023" 
            title="Colégio Técnico Industrial" 
            desc="Ingressei no curso de informática pelo CTI, onde comecei minha jornada na programação" 
            side="left" 
          />
        </Reveal>
        <Reveal>
          <TimelineItem 
            year="2023" 
            title="ETEC" 
            desc="Ingressei no curso técnico de informática disponibilizado pela ETEC juntamente do ensino médio pela minha escola pública (Ee Dr Luiz Zuiani)" 
            side="right" 
          />
        </Reveal>
        <Reveal>
          <TimelineItem 
            year="2024"
            title="Estágio como HelpDesk"
            desc="Iniciei um estágio em ITOps pela Cetro Máquinas"
            side="left"
          />
        </Reveal>
        <Reveal>
          <TimelineItem 
            year="2025"
            title="Estágio como Desenvolvedor"
            desc="Troquei de função no estágio e passei para DevOps, ainda na mesma empresa"
            side="right"
          />
        </Reveal>
        <Reveal>
          <TimelineItem
            year="2026"
            title="FATEC"
            desc="Iniciei meus estudos como Tecnólogo em Banco de Dados pela FATEC"
            side="left"
          />
        </Reveal>
      </div>
    </section>
  );
}