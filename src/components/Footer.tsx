
import { Github, Linkedin, Mail, Gamepad } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-12 px-4 border-t border-slate-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              Agniva<span className="text-primary">.</span>
              <Gamepad className="h-5 w-5 text-primary" />
            </h3>
            <p className="text-gray-400 mb-4">
              Backend developer specializing in Java, Spring Boot, and API design.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:agnivagh000sh@gmail.com" className="text-gray-500 hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/AgniviaG" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Github">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/agniva-ghosh-41ba02308" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#intro" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#background" className="text-gray-400 hover:text-primary transition-colors">Background</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#games" className="text-gray-400 hover:text-primary transition-colors">Games</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Skills</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Java Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Spring Boot</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">API Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Database Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Git</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Game of the Day</h4>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Gamepad className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-white font-medium">Mini Games</div>
                  <div className="text-gray-400 text-sm">
                    <a href="#games" className="text-primary hover:underline">Play Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} <span className="text-primary">Agniva Ghosh</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
