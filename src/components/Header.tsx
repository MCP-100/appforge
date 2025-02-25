import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b border-border">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
          <span className="text-white font-bold text-xl">AF</span>
        </div>
        <Link href="/" className="text-xl font-bold">
          AppForge
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/templates" className="text-sm hover:text-primary transition-colors">
          Templates
        </Link>
        <Link href="/features" className="text-sm hover:text-primary transition-colors">
          Features
        </Link>
        <Link href="/pricing" className="text-sm hover:text-primary transition-colors">
          Pricing
        </Link>
        <Link href="/docs" className="text-sm hover:text-primary transition-colors">
          Documentation
        </Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <Link 
          href="/login" 
          className="text-sm hover:text-primary transition-colors hidden md:block"
        >
          Log in
        </Link>
        <Link 
          href="/signup" 
          className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
} 