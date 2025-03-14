
import { useState, useEffect } from 'react';
import { Target, Code, Book, User, Mail, Gamepad } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('intro');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'projects', 'games', 'background', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const navItems = [
    { id: 'intro', label: 'Intro', icon: Target },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'games', label: 'Games', icon: Gamepad },
    { id: 'background', label: 'Background', icon: Book },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-slate-900/10 backdrop-blur-sm p-2 rounded-full border border-slate-800/20">
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`group relative transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full ${
                  activeSection === item.id 
                    ? 'bg-primary/10 text-primary ring-1 ring-primary/30' 
                    : 'text-gray-500/70 hover:text-gray-300 hover:bg-slate-800/20'
                }`}
                title={item.label}
              >
                <item.icon className={`w-4 h-4 ${activeSection === item.id ? 'animate-pulse' : ''}`} />
                <span className="absolute left-full ml-2 px-2 py-1 rounded text-xs font-medium bg-slate-800/90 text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <span className="absolute -right-1 -top-1 w-3 h-3 bg-primary rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
