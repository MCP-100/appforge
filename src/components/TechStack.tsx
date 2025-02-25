import Image from 'next/image';

const technologies = [
  { name: 'React', logo: '/tech/react.svg' },
  { name: 'Next.js', logo: '/tech/nextjs.svg' },
  { name: 'Vue.js', logo: '/tech/vue.svg' },
  { name: 'Angular', logo: '/tech/angular.svg' },
  { name: 'Svelte', logo: '/tech/svelte.svg' },
  { name: 'Node.js', logo: '/tech/nodejs.svg' },
  { name: 'Express', logo: '/tech/express.svg' },
  { name: 'MongoDB', logo: '/tech/mongodb.svg' },
  { name: 'PostgreSQL', logo: '/tech/postgresql.svg' },
  { name: 'Tailwind CSS', logo: '/tech/tailwind.svg' },
  { name: 'TypeScript', logo: '/tech/typescript.svg' },
  { name: 'Firebase', logo: '/tech/firebase.svg' },
];

export default function TechStack() {
  return (
    <div className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Supported Technologies
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <div className="w-16 h-16 relative mb-2">
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-muted-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 