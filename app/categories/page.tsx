import type { Metadata } from 'next';
import Link from 'next/link';
import { categories } from '@/data/site';

export const metadata: Metadata = {
  title: 'קטגוריות',
  description: 'צפייה בקטגוריות המוצרים הזמינות לשיווק והפצה.',
};

export default function CategoriesPage() {
  return (
    <section className="container-page py-12 sm:py-16">
      <h1 className="section-title">קטגוריות</h1>
      <p className="section-subtitle">הקטגוריות הבאות זמינות להזמנות שוטפות עבור עסקים ולקוחות פרטיים.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-card transition hover:border-brand-100"
          >
            <h2 className="text-xl font-bold text-slate-900">{category.name}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
