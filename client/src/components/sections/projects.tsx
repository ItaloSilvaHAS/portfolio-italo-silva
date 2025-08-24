import ProjectCard from "@/components/ui/project-card";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    icon: "⭐",
    title: "Impulso Vida",
    subtitle: "Plataforma de Impacto Social",
    description: "Revolucionando a forma como as pessoas se conectam com oportunidades de impacto social através da tecnologia.",
    technologies: ["React", "Node.js", "MongoDB"],
    colors: {
      primary: "cyan",
      secondary: "blue",
      tertiary: "green"
    },
    delay: 0.1
  },
  {
    id: 2,
    icon: "📱",
    title: "Projeto EVE",
    subtitle: "Narrativa Interativa Web",
    description: "Experiência narrativa imersiva que mistura storytelling interativo com tecnologia de ponta.",
    technologies: ["JavaScript", "WebGL", "Animation"],
    colors: {
      primary: "yellow",
      secondary: "purple",
      tertiary: "red"
    },
    delay: 0.2
  },
  {
    id: 3,
    icon: "🌟",
    title: "SuperNova Flow",
    subtitle: "Navegador Educacional",
    description: "Ferramenta educacional inovadora que transforma a forma como estudantes navegam pelo conhecimento.",
    technologies: ["React", "Electron", "AI/ML"],
    colors: {
      primary: "cyan",
      secondary: "orange",
      tertiary: "indigo"
    },
    delay: 0.3
  },
  {
    id: 4,
    icon: "🔥",
    title: "GIPS PANORAMA",
    subtitle: "Prevenção de Desastres",
    description: "Sistema inteligente de monitoramento e prevenção de desastres naturais usando IoT e análise preditiva.",
    technologies: ["IoT", "Python", "Data Science"],
    colors: {
      primary: "green",
      secondary: "blue",
      tertiary: "red"
    },
    delay: 0.4
  },
  {
    id: 5,
    icon: "🐍",
    title: "Snake Game Retro",
    subtitle: "Clássico Arcade",
    description: "Reimaginação moderna do clássico jogo da cobrinha com visual retro e mecânicas inovadoras.",
    technologies: ["JavaScript", "Canvas", "Game Logic"],
    colors: {
      primary: "yellow",
      secondary: "green",
      tertiary: "purple"
    },
    delay: 0.5
  },
  {
    id: 6,
    icon: "📚",
    title: "Visual Novel",
    subtitle: "Crossover Interativo",
    description: "História interativa épica misturando fantasia e ficção científica com escolhas que impactam o universo.",
    technologies: ["Ren'Py", "Python", "Storytelling"],
    colors: {
      primary: "pink",
      secondary: "purple",
      tertiary: "indigo"
    },
    delay: 0.6
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-trigger">
          <h2 className="text-4xl md:text-5xl font-thin mb-4 text-primary">
            Meus <span className="font-bold">Projetos</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Cada projeto é uma jornada de inovação, criatividade e impacto social
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-trigger">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-black transition-all duration-300"
            data-testid="link-github-all"
          >
            <Github className="mr-2" size={20} />
            Ver Todos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
