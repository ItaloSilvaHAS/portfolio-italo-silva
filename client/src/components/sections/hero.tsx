import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-6">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl font-thin mb-6 tracking-wider text-shadow-glow glow-text">
            ÍTALO <span className="font-bold text-primary">SILVA</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 tracking-wide">
            Full Stack Developer & Innovation Creator
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 glass-effect rounded-full text-sm font-medium">
              🚀 ETEC Graduate
            </span>
            <span className="px-4 py-2 glass-effect rounded-full text-sm font-medium text-primary">
              📚 FATEC Student
            </span>
            <span className="px-4 py-2 glass-effect rounded-full text-sm font-medium">
              💡 Innovation & Social Impact
            </span>
          </div>
          <div className="flex justify-center space-x-6">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary/80 transition-all duration-300 transform hover:scale-105"
              data-testid="button-projects"
            >
              Ver Projetos
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-black transition-all duration-300 transform hover:scale-105"
              data-testid="button-contact"
            >
              Contratar
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary hover:text-primary/80 transition-colors"
        data-testid="scroll-indicator"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
