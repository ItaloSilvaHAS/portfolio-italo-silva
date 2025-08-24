import { useEffect } from "react";
import CursorTrail from "@/components/cursor-trail";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Portfolio() {
  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.fade-in-trigger').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen void-bg text-white font-inter">
      <CursorTrail />
      <Navigation />
      
      {/* Floating geometric elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full floating-element opacity-30" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-6 h-6 border-2 border-blue-400 rotate-45 floating-element opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 border-2 border-primary rounded-full floating-element opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-500 floating-element opacity-50" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
