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
      className="focus-ring group rounded-card border border-brand-500/35 bg-brand-surface/45 p-4 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-700"
    >
      <div className="flex aspect-[16/10] items-center justify-center rounded-brand bg-brand-surface text-xs font-semibold text-brand-500">
        תמונת קטגוריה
      </div>
      <h3 className="mt-4 text-lg font-bold text-brand-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>
    </Link>
  );
}
