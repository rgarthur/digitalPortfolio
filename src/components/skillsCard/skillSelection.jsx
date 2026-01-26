import { SkillCard } from "./skillCard";
import { Reveal } from "../reveal/reveal";
import { FaReact } from "react-icons/fa6"
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";

export function SkillsSection() {
  const skills = [
    { name: "React", percentage: 60, icon: <FaReact className="text-blue-400" />, color: "purple" },
    { name: "Next.js", percentage: 50, icon: <RiNextjsFill className="text-white" />, color: "blue" },
    { name: "Nest.js", percentage: 80, icon: <SiNestjs className="text-red-500"/>, color: "purple" },
    { name: "Django", percentage: 50, icon: <SiDjango className="text-teal-500" />, color: "blue" },
    { name: "Java", percentage: 45, icon: <FaJava className="text-orange-500" />, color: "purple" },
    { name: "Git", percentage: 80, icon: <FaGitAlt className="text-red-400" />, color: "blue" },
    { name: "C#", percentage: 20, icon: <TbBrandCSharp className="text-blue-500"/>, color: "purple" },
    { name: "C#", percentage: 30, icon: <FaLaravel className="text-orange-600"/>, color: "blue" }
  ];

  return (
    <section id="habilidades" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]">
          Linguagens e Frameworks
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <Reveal key={index} direction="up">
            <SkillCard {...skill} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}