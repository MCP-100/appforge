import Image from 'next/image';
import Link from 'next/link';

interface TemplateCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function TemplateCard({ id, title, description, image, tags }: TemplateCardProps) {
  return (
    <Link href={`/templates/${id}`} className="group">
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-md">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-card-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
} 