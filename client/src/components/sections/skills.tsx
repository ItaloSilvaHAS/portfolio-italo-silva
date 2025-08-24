import { Code, Layers, Wrench } from "lucide-react";
import SkillItem from "@/components/ui/skill-item";

const programmingLanguages = [
  { name: "Python", emoji: "🐍" },
  { name: "JavaScript", emoji: "📜" },
  { name: "TypeScript", emoji: "🅣" },
  { name: "HTML5", emoji: "🌐" },
  { name: "CSS3", emoji: "🎨" },
  { name: "React", emoji: "⚛️" }
];

const frameworks = [
  { name: "Node.js", emoji: "🟢" },
  { name: "Express.js", emoji: "⚡" },
  { name: "Django", emoji: "🔥" },
  { name: "Tailwind", emoji: "💨" },
  { name: "Unity", emoji: "🎮" }
];

const tools = [
  { name: "Git", emoji: "📁" },
  { name: "GitHub", emoji: "🐙" },
  { name: "MongoDB", emoji: "🗄️" },
  { name: "PostgreSQL", emoji: "🐘" },
  { name: "Docker", emoji: "🐳" },
  { name: "Figma", emoji: "📱" }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-trigger">
          <h2 className="text-4xl md:text-5xl font-thin mb-4 text-primary">
            Arsenal <span className="font-bold">Tecnológico</span>
          </h2>
          <p className="text-lg text-gray-400">
            Ferramentas que uso para transformar ideias em realidade
          </p>
        </div>
        
        {/* Programming Languages */}
        <div className="mb-12 fade-in-trigger">
          <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <Code className="text-primary" size={24} />
            Linguagens de Programação
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {programmingLanguages.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        
        {/* Frameworks & Libraries */}
        <div className="mb-12 fade-in-trigger">
          <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <Layers className="text-primary" size={24} />
            Frameworks & Bibliotecas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {frameworks.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        
        {/* Development Tools */}
        <div className="fade-in-trigger">
          <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <Wrench className="text-primary" size={24} />
            Ferramentas de Desenvolvimento
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
