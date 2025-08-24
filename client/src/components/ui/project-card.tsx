import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  delay: number;
}

interface ProjectCardProps {
  project: Project;
}

const colorMap: Record<string, string> = {
  cyan: "bg-cyan-900 text-cyan-300",
  blue: "bg-blue-900 text-blue-300",
  green: "bg-green-900 text-green-300",
  yellow: "bg-yellow-900 text-yellow-300",
  purple: "bg-purple-900 text-purple-300",
  red: "bg-red-900 text-red-300",
  orange: "bg-orange-900 text-orange-300",
  indigo: "bg-indigo-900 text-indigo-300",
  pink: "bg-pink-900 text-pink-300"
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div 
      className="project-card glass-effect rounded-2xl p-6 fade-in-up"
      style={{ animationDelay: `${project.delay}s` }}
    >
      <div className="mb-4">
        <span className="text-2xl">{project.icon}</span>
        <h3 className="text-xl font-bold mt-2 mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
      </div>
      
      <p className="text-gray-300 text-sm mb-6">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => {
          const colors = [project.colors.primary, project.colors.secondary, project.colors.tertiary];
          const colorClass = colorMap[colors[index % colors.length]];
          return (
            <span key={tech} className={`text-xs px-2 py-1 rounded ${colorClass}`}>
              {tech}
            </span>
          );
        })}
      </div>
      
      <div className="flex justify-between items-center">
        <button 
          className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
          data-testid={`button-view-project-${project.id}`}
        >
          <ExternalLink size={16} />
          Ver Projeto
        </button>
        <button 
          className="text-gray-400 hover:text-white transition-colors"
          data-testid={`button-github-project-${project.id}`}
        >
          <Github size={16} />
        </button>
      </div>
    </div>
  );
}
