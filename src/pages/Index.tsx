
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Features from '@/components/Features';
import Sidebar from '@/components/Sidebar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GameOfTheDay from '@/components/GameOfTheDay';
import { useEffect, useState } from 'react';

const Index = () => {
  // Handle spotlight cursor effect
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleSpotlightCursor = (e: MouseEvent) => {
      const spotlights = document.querySelectorAll('.spotlight');
      spotlights.forEach(spotlight => {
        const spotlightElement = spotlight as HTMLElement;
        spotlightElement.style.setProperty('--x', `${e.clientX}px`);
        spotlightElement.style.setProperty('--y', `${e.clientY}px`);
      });
    };

    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(progress);
    };

    // Add dark class to HTML element
    document.documentElement.classList.add('dark');
    
    window.addEventListener('mousemove', handleSpotlightCursor);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleSpotlightCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Sidebar />
      <Header />
      <div id="projects">
        <Features />
      </div>
      <div id="games">
        <GameOfTheDay />
      </div>
      <div id="background">
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Background</h2>
            <div className="max-w-3xl mx-auto">
              <div className="neon-card p-6 mb-6">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-400 mb-4">St. Thomas College of Engineering and Technology</p>
                <p className="text-gray-500">Bachelor of Technology in Electronics and Communications Engineering, Dec. 2021 – May. 2024</p>
              </div>
              <div className="neon-card p-6">
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-gray-400 mb-4">Software Developer with expertise in Java and Spring Boot</p>
                <p className="text-gray-500">Worked on various projects involving API design, database management, and system integration.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="about">
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto neon-card p-8">
              <p className="text-gray-300 mb-4">
                I'm a passionate backend developer specializing in Java and Spring Boot. My journey in tech started during college, 
                where I discovered my love for creating robust and scalable software solutions.
              </p>
              <p className="text-gray-300 mb-4">
                When I'm not coding, you can find me exploring new game releases, contributing to open-source projects, 
                or experimenting with new technologies to expand my skill set.
              </p>
              <p className="text-gray-300">
                I believe in writing clean, maintainable code and am constantly seeking to improve my craft through continuous learning and collaboration.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
