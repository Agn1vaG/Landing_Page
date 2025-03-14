
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import { Send, Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for reaching out!", {
        description: "I'll be in touch soon.",
      });
      setEmail('');
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="neon-card p-8 md:p-12 relative overflow-hidden">            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Let's Connect
            </h2>
            
            <p className="text-lg text-gray-400 text-center mb-10">
              Ready to collaborate? Let's build something extraordinary together.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-8 mb-10">
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="https://github.com/Agn1vaG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(167,139,250,0.2)]"
                >
                  <Github className="h-6 w-6 text-primary" />
                </a>
                
                <a 
                  href="mailto:agnivagh000sh@gmail.com"
                  className="bg-slate-800 hover:bg-slate-700 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(167,139,250,0.2)]"
                >
                  <Mail className="h-6 w-6 text-primary" />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/agniva-ghosh-41ba02308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(167,139,250,0.2)]"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="mailto:agnivagh000sh@gmail.com"
                className="inline-flex items-center gap-2 bg-transparent border border-accent text-accent hover:bg-accent/10 px-6 py-3 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(167,139,250,0.3)]"
              >
                <Mail className="h-5 w-5" />
                Send a Message
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800/50 dark:text-white"
                  required
                />
                <Button type="submit" className="btn-primary flex items-center gap-2">
                  Subscribe
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
