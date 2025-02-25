'use client';

import PromptInput from './PromptInput';

export default function PromptSection() {
  const handlePromptSubmit = (prompt: string) => {
    // In a real application, this would send the prompt to an API
    console.log('Prompt submitted:', prompt);
  };

  return (
    <section id="generate" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          What do you want to build?
        </h2>
        <PromptInput onSubmit={handlePromptSubmit} />
      </div>
    </section>
  );
} 