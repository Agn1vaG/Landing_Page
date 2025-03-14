
import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface TemplateProps {
  title: string;
  description: string;
  color: string;
  index: number;
}

const Template: React.FC<TemplateProps> = ({ title, description, color, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const templateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (templateRef.current) {
      observer.observe(templateRef.current);
    }

    return () => {
      if (templateRef.current) {
        observer.unobserve(templateRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={templateRef}
      className={`p-6 rounded-lg hover-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 ease-out`}
      style={{ backgroundColor: color }}
    >
      <h3 className="text-xl font-semibold mb-3 text-notion-900">{title}</h3>
      <p className="text-notion-700 mb-4">{description}</p>
      <Button variant="outline" className="bg-white/50 hover:bg-white/80 border-none text-notion-800">
        Use template
      </Button>
    </div>
  );
};

const Templates = () => {
  const templates = [
    { 
      title: 'Project Management', 
      description: 'Manage your projects with tasks, milestones, and team assignments.', 
      color: '#F2FCE2' // Soft Green
    },
    { 
      title: 'Personal Journal', 
      description: 'Keep track of your daily thoughts, goals, and reflections.', 
      color: '#FFDEE2' // Soft Pink
    },
    { 
      title: 'Meeting Notes', 
      description: 'Structured template for capturing meeting minutes and action items.', 
      color: '#D3E4FD' // Soft Blue
    },
    { 
      title: 'Weekly Planner', 
      description: 'Plan your week with this comprehensive scheduling template.', 
      color: '#FEF7CD' // Soft Yellow
    },
    { 
      title: 'Reading List', 
      description: 'Track your reading with summaries, notes, and ratings.', 
      color: '#E5DEFF' // Soft Purple
    },
    { 
      title: 'Content Calendar', 
      description: 'Plan and schedule your content creation across multiple platforms.', 
      color: '#F2FCE2' // Soft Green
    },
  ];

  return (
    <section id="templates" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-notion-900 dark:text-white">Templates for every need</h2>
          <p className="text-lg text-notion-600 dark:text-notion-300">
            Get started instantly with pre-built templates for any use case.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <Template 
              key={index}
              title={template.title}
              description={template.description}
              color={template.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
