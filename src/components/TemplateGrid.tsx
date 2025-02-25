import TemplateCard from './TemplateCard';

// Sample template data
const templates = [
  {
    id: 'task-manager',
    title: 'Task Manager',
    description: 'A complete task management application with user authentication, task creation, and organization features.',
    image: '/templates/task-manager.jpg',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Store',
    description: 'A fully functional e-commerce platform with product listings, shopping cart, and checkout process.',
    image: '/templates/e-commerce.jpg',
    tags: ['React', 'Next.js', 'Stripe'],
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support, comments, and user authentication.',
    image: '/templates/blog.jpg',
    tags: ['React', 'Next.js', 'MDX'],
  },
  {
    id: 'dashboard',
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard with charts, data visualization, and reporting features.',
    image: '/templates/dashboard.jpg',
    tags: ['React', 'Next.js', 'Chart.js'],
  },
  {
    id: 'social-network',
    title: 'Social Network',
    description: 'A social networking platform with user profiles, posts, comments, and real-time messaging.',
    image: '/templates/social.jpg',
    tags: ['React', 'Next.js', 'Socket.io'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'A professional portfolio website to showcase your work, skills, and experience.',
    image: '/templates/portfolio.jpg',
    tags: ['React', 'Next.js', 'Framer Motion'],
  },
];

export default function TemplateGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          id={template.id}
          title={template.title}
          description={template.description}
          image={template.image}
          tags={template.tags}
        />
      ))}
    </div>
  );
} 