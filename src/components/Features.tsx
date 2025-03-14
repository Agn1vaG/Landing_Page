
import React from 'react';
import { Github } from 'lucide-react';

const Features = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="neon-card p-6 hover-card">
            <h3 className="text-xl font-semibold mb-4 text-primary">E-Commerce Platform</h3>
            <p className="text-gray-400 mb-4">Built a scalable e-commerce platform using React, Node.js, and MongoDB.</p>
            <div className="flex gap-2 mt-4">
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">React</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">Node.js</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">MongoDB</span>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <a 
                href="https://github.com/Agn1vaG/ecommerce-platform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-sm flex items-center"
              >
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="neon-card p-6 hover-card">
            <h3 className="text-xl font-semibold mb-4 text-primary">AI Chatbot</h3>
            <p className="text-gray-400 mb-4">Developed a conversational AI assistant using NLP techniques and machine learning.</p>
            <div className="flex gap-2 mt-4">
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">Python</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">TensorFlow</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">Flask</span>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <a 
                href="https://github.com/Agn1vaG/ai-chatbot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-sm flex items-center"
              >
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="neon-card p-6 hover-card">
            <h3 className="text-xl font-semibold mb-4 text-primary">Game Analytics Dashboard</h3>
            <p className="text-gray-400 mb-4">Created a real-time analytics dashboard for tracking player metrics in gaming platforms.</p>
            <div className="flex gap-2 mt-4">
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">Vue.js</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">Firebase</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">D3.js</span>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <a 
                href="https://github.com/Agn1vaG/game-analytics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-sm flex items-center"
              >
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
          
          {/* Project Card 4 */}
          <div className="neon-card p-6 hover-card">
            <h3 className="text-xl font-semibold mb-4 text-primary">Java Task Manager</h3>
            <p className="text-gray-400 mb-4">A task management application built with Java and Spring Boot with RESTful API endpoints.</p>
            <div className="flex gap-2 mt-4">
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">Java</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">Spring Boot</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">MySQL</span>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <a 
                href="https://github.com/Agn1vaG/java-task-manager" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-sm flex items-center"
              >
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
          
          {/* Project Card 5 */}
          <div className="neon-card p-6 hover-card">
            <h3 className="text-xl font-semibold mb-4 text-primary">API Gateway Service</h3>
            <p className="text-gray-400 mb-4">Developed a microservice API gateway with JWT authentication and rate limiting features.</p>
            <div className="flex gap-2 mt-4">
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">Java</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">Spring Cloud</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">Docker</span>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <a 
                href="https://github.com/Agn1vaG/api-gateway" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-sm flex items-center"
              >
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
          
          {/* Project Card 6 */}
          <div className="neon-card p-6 hover-card">
            <h3 className="text-xl font-semibold mb-4 text-primary">Portfolio Website</h3>
            <p className="text-gray-400 mb-4">Personal portfolio website built with React, Typescript and Tailwind CSS featuring animations.</p>
            <div className="flex gap-2 mt-4">
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">React</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">TypeScript</span>
              <span className="text-xs bg-slate-800 px-2 py-1 rounded text-primary">Tailwind</span>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <a 
                href="https://github.com/Agn1vaG/portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-sm flex items-center"
              >
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
