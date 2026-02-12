import type { Metadata } from 'next';
import { CategoryCard } from '@/components/ui/category-card';
import { categories } from '@/data/site';

export const metadata: Metadata = {
  title: 'קטגוריות',
  description: 'צפייה בקטגוריות המוצרים הזמינות לשיווק והפצה.',
};

export default function CategoriesPage() {
  return (
    <section className="container-page py-12 sm:py-14 lg:py-16">
      <h1 className="section-title">קטגוריות</h1>
      <p className="section-subtitle">הקטגוריות הבאות זמינות להזמנות שוטפות עבור עסקים ולקוחות פרטיים.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            href={`/categories/${category.slug}`}
            title={category.name}
            description={category.description}
          />
        ))}
      </div>
    </section>
  );
}
