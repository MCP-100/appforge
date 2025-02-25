import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    content: "AppForge has completely transformed how I build applications. What used to take weeks now takes hours. The code quality is excellent and the UI is beautiful.",
    author: "Sarah Johnson",
    role: "Founder, TechStart",
    avatar: "/testimonials/avatar1.jpg",
  },
  {
    id: 2,
    content: "As a non-technical founder, AppForge has been a game-changer. I was able to build and launch my MVP in just two days without writing a single line of code.",
    author: "Michael Chen",
    role: "CEO, InnovateCo",
    avatar: "/testimonials/avatar2.jpg",
  },
  {
    id: 3,
    content: "The quality of the generated code is impressive. Clean, well-structured, and follows best practices. It's saved me countless hours of development time.",
    author: "Emily Rodriguez",
    role: "Senior Developer, DevHub",
    avatar: "/testimonials/avatar3.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        What Our Users Say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="p-6 rounded-xl bg-card border border-border flex flex-col"
          >
            <div className="mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="inline-block text-yellow-400 mr-1"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            
            <p className="text-card-foreground mb-6 flex-grow">&ldquo;{testimonial.content}&rdquo;</p>
            
            <div className="flex items-center mt-auto">
              <div className="w-10 h-10 rounded-full overflow-hidden relative mr-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 