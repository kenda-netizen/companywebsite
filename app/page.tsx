import Link from 'next/link';
import { CategoryCard } from '@/components/ui/category-card';
import { InfoCard } from '@/components/ui/info-card';
import { categories, business, valueProps } from '@/data/site';

export default function HomePage() {
  return (
    <div>
      <section className="container-page py-10 sm:py-14 lg:py-16">
        <div className="rounded-2xl bg-hero-gradient p-6 text-white shadow-card sm:p-10 lg:p-14">
          <p className="text-sm font-semibold text-slate-100">שיווק והפצה לעסקים (B2B) וגם ללקוחות פרטיים</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{business.name}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-100 sm:text-lg">{business.subtitle}</p>
        </div>
      </section>

      <section className="container-page py-8 sm:py-10 lg:py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">קטגוריות מוצרים</h2>
            <p className="section-subtitle">בחרו קטגוריה לצפייה במוצרים לדוגמה ולמידע רלוונטי.</p>
          </div>
          <Link href="/categories" className="text-sm font-semibold text-primary-700 hover:text-primary-900">
            לכל הקטגוריות ←
          </Link>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="container-page py-8 sm:py-10 lg:py-12">
        <h2 className="section-title">למה לעבוד איתנו</h2>
        <p className="section-subtitle">שילוב של שירות מקצועי, אמינות תפעולית וגמישות לצרכים של עסקים בצפון.</p>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {valueProps.map((feature) => (
            <InfoCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>
    </div>
  );
}
