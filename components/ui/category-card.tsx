import Link from 'next/link';

type CategoryCardProps = {
  href: string;
  title: string;
  description: string;
};

export function CategoryCard({ href, title, description }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-card border border-border bg-bg-surface p-4 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-accent"
    >
      <div className="flex aspect-[16/10] items-center justify-center rounded-brand bg-bg-soft text-xs font-semibold text-text-muted">
        תמונת קטגוריה
      </div>
      <h3 className="mt-4 text-lg font-bold text-text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>
    </Link>
  );
}
