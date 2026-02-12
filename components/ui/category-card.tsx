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
      className="group rounded-xl border border-slate-200 bg-white p-4 shadow-card transition duration-200 hover:-translate-y-1 hover:border-primary-100"
    >
      <div className="flex aspect-[16/10] items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-500">
        תמונת קטגוריה
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}
