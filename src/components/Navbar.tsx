
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white flex items-center gap-2">
            Agniva<span className="text-primary">.</span>
            <Code className="h-5 w-5 text-primary" />
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Button 
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-gray-300" /> : <Menu className="h-6 w-6 text-gray-300" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 shadow-lg border-t border-slate-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="py-2 text-gray-300 hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('games')} 
              className="py-2 text-gray-300 hover:text-primary transition-colors"
            >
              Games
            </button>
            <button 
              onClick={() => scrollToSection('background')} 
              className="py-2 text-gray-300 hover:text-primary transition-colors"
            >
              Background
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="py-2 text-gray-300 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="py-2 text-gray-300 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
