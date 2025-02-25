"use client"
import { useState } from 'react';

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
}

export default function PromptInput({ onSubmit, isLoading = false }: PromptInputProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the application you want to build..."
          className="w-full p-4 pr-24 rounded-xl border border-input bg-background text-foreground resize-none min-h-[120px] focus:outline-none focus:ring-2 focus:ring-ring"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!prompt.trim() || isLoading}
          className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
              <span>Generating...</span>
            </div>
          ) : (
            'Generate'
          )}
        </button>
      </form>
      <div className="mt-2 text-sm text-muted-foreground">
        <p>
          Examples:{' '}
          <button
            type="button"
            onClick={() => setPrompt('Create a task management app with user authentication')}
            className="text-primary hover:underline"
          >
            Task management app
          </button>
          {' • '}
          <button
            type="button"
            onClick={() => setPrompt('Build an e-commerce store with product listings and shopping cart')}
            className="text-primary hover:underline"
          >
            E-commerce store
          </button>
          {' • '}
          <button
            type="button"
            onClick={() => setPrompt('Design a blog with markdown support and comments')}
            className="text-primary hover:underline"
          >
            Blog with comments
          </button>
        </p>
      </div>
    </div>
  );
} 