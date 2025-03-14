
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is this application?",
      answer: "This is a minimalist Notion-style application that helps you organize your notes, tasks, and ideas in one place. It features a clean interface with powerful organization tools."
    },
    {
      question: "Is there a free version available?",
      answer: "Yes, we offer a free plan with basic features that's perfect for individual use. Premium plans with additional features are available for teams and power users."
    },
    {
      question: "Can I use this for team collaboration?",
      answer: "Absolutely! Our platform is designed for both personal and team use. You can easily share pages, assign tasks, and collaborate in real-time with your team members."
    },
    {
      question: "How secure is my data?",
      answer: "We take security seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regular security audits to ensure your information remains private and secure."
    },
    {
      question: "Can I export my data?",
      answer: "Yes, you can export your data in multiple formats including PDF, HTML, and Markdown. This ensures you always have access to your information, even offline."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, we offer mobile apps for both iOS and Android platforms, allowing you to access and update your information on the go."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-notion-50 dark:bg-notion-900/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-notion-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-notion-600 dark:text-notion-300">
            Find answers to common questions about our platform.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white dark:bg-notion-800 rounded-lg shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-notion-100 dark:hover:bg-notion-700/50 text-notion-900 dark:text-white font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-notion-600 dark:text-notion-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
