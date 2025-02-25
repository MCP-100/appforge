export default function Hero() {
  return (
    <div className="relative overflow-hidden py-20 px-6">
      {/* Background gradient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-70" />
      
      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Turn Ideas into Applications in Minutes
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          AppForge helps you build full-stack web and mobile applications with a simple prompt. 
          No coding required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#generate" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Start Building
          </a>
          <a 
            href="#learn-more" 
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            Learn More
          </a>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">100+</span>
            <span className="text-sm text-muted-foreground">Templates</span>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">50k+</span>
            <span className="text-sm text-muted-foreground">Users</span>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">200k+</span>
            <span className="text-sm text-muted-foreground">Apps Created</span>
          </div>
        </div>
      </div>
    </div>
  );
} 