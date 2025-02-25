"use client"
import { useState } from 'react';

const faqs = [
  {
    question: "What is AppForge?",
    answer: "AppForge is an AI-powered application generator that helps you build full-stack web and mobile applications with a simple prompt. You describe what you want to build, and our AI generates the complete codebase for you."
  },
  {
    question: "Do I need coding experience to use AppForge?",
    answer: "No, you don't need any coding experience to use AppForge. Our platform is designed to be accessible to everyone, from non-technical founders to experienced developers looking to save time."
  },
  {
    question: "What technologies does AppForge support?",
    answer: "AppForge supports a wide range of modern technologies including React, Next.js, Vue.js, Angular, Svelte, Node.js, Express, MongoDB, PostgreSQL, Firebase, and more. You can specify your preferred tech stack or let our AI choose the best technologies for your application."
  },
  {
    question: "Can I customize the generated code?",
    answer: "Yes, you have full ownership of the generated code. You can download it, modify it, and host it anywhere you want. The code is clean, well-structured, and follows best practices, making it easy to customize and extend."
  },
  {
    question: "How much does AppForge cost?",
    answer: "AppForge offers a free plan that allows you to generate up to 3 applications per month. For more advanced features and unlimited generations, we offer Pro and Enterprise plans. Check our pricing page for more details."
  },
  {
    question: "Can I deploy my application directly from AppForge?",
    answer: "Yes, AppForge offers one-click deployment to popular hosting platforms like Vercel, Netlify, and Heroku. You can also download the code and deploy it manually to any hosting provider of your choice."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="mb-4 border border-border rounded-lg overflow-hidden"
          >
            <button
              className="w-full p-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            <div 
              className={`overflow-hidden transition-all ${
                openIndex === index ? 'max-h-96 p-4 pt-0' : 'max-h-0'
              }`}
            >
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 