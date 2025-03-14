
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Linkedin, Code, Database, Server } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = spotlightRef.current;
      if (spotlight) {
        spotlight.style.setProperty('--x', `${e.clientX}px`);
        spotlight.style.setProperty('--y', `${e.clientY}px`);
        spotlight.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="intro" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 gradient-bg overflow-hidden">
      <div ref={spotlightRef} className="spotlight cursor-spotlight"></div>
      
      <div className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} z-10`}>
        {/* Profile picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative profile-picture-container">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-70 animate-pulse-slow"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full border-2 border-primary/20 backdrop-blur-sm z-10 profile-image-wrapper">
              <img 
                src="/lovable-uploads/e6721693-d223-48e6-a9a5-d63ebb8bd55d.png" 
                alt="Agniva Ghosh" 
                className="w-full h-full object-cover scale-95 hover:scale-100 transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 rounded-full profile-glow"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="neon-text">Agniva Ghosh</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Backend Developer & Java Specialist
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          B.Tech graduate with strong proficiency in Java, Spring Boot, and API design.
          Building scalable software solutions with passion.
        </p>
        
        <div className="flex justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="mailto:agnivagh000sh@gmail.com" 
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/Agn1vaG" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/agniva-ghosh-41ba02308" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button className="btn-primary">
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent"
            onClick={scrollToProjects}
          >
            View Projects
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center">
            <Code className="skill-icon h-8 w-8 mb-2" />
            <span className="text-gray-400 text-sm">Java</span>
          </div>
          <div className="flex flex-col items-center">
            <Server className="skill-icon h-8 w-8 mb-2" />
            <span className="text-gray-400 text-sm">Spring Boot</span>
          </div>
          <div className="flex flex-col items-center">
            <Database className="skill-icon h-8 w-8 mb-2" />
            <span className="text-gray-400 text-sm">SQL/NoSQL</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-float z-10">
        <button 
          onClick={scrollToProjects}
          className="p-2 rounded-full bg-slate-800/80 border border-slate-700 shadow-md hover:shadow-lg hover:border-primary/50 transition-all duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </button>
      </div>
    </header>
  );
};

export default Header;
