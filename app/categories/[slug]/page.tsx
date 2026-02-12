import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories } from '@/data/site';

type CategoryPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = categories.find((item) => item.slug === params.slug);

  if (!category) {
    return { title: 'קטגוריה לא נמצאה' };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((item) => item.slug === params.slug);

  if (!category) {
    notFound();
  }

  return (
    <section className="container-page py-12 sm:py-14 lg:py-16">
      <h1 className="section-title">{category.name}</h1>
      <p className="section-subtitle">{category.description}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {category.sampleProducts.map((product, index) => (
          <article key={`${product.name}-${index}`} className="rounded-card border border-border bg-bg-surface p-4 shadow-soft sm:p-5">
            <div className="flex aspect-video items-center justify-center rounded-brand bg-bg-soft text-xs font-semibold text-text-muted">
              תמונת מוצר
            </div>
            <h2 className="mt-4 text-base font-bold text-text-primary">{product.name}</h2>
            {product.note ? <p className="mt-2 text-sm text-text-secondary">{product.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
