import Link from 'next/link';

export default function CTA() {
  return (
    <div className="relative py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-90 rounded-3xl" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Build Your Next Application?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of developers and businesses who are already using AppForge to build amazing applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/signup" 
            className="bg-white text-primary px-8 py-3 rounded-full text-lg font-medium hover:bg-white/90 transition-colors"
          >
            Get Started for Free
          </Link>
          <Link 
            href="/demo" 
            className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
          >
            Watch Demo
          </Link>
        </div>
      </div>
    </div>
  );
} 