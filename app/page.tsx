import Link from 'next/link';
import { business, categories, workSteps } from '@/data/site';

export default function HomePage() {
  return (
    <div>
      <section className="container-page py-12 sm:py-16">
        <div className="rounded-2xl bg-white p-6 shadow-card sm:p-10">
          <p className="text-sm font-semibold text-brand-700">שיווק והפצה לעסקים ופרטיים</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">{business.name}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{business.subtitle}</p>
        </div>
      </section>

      <section className="container-page py-8 sm:py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">קטגוריות מובילות</h2>
            <p className="section-subtitle">בחרו קטגוריה לצפייה במוצרים לדוגמה ולמידע רלוונטי.</p>
          </div>
          <Link href="/categories" className="text-sm font-semibold text-brand-700 hover:text-brand-900">
            לכל הקטגוריות ←
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-100"
            >
              <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-8 sm:py-12">
        <h2 className="section-title">איך עובדים איתנו</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {workSteps.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
              <p className="text-sm font-semibold text-brand-700">שלב {index + 1}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page py-10 sm:py-14">
        <div className="rounded-2xl bg-brand-900 p-6 text-white sm:p-10">
          <h2 className="text-2xl font-bold">מוכנים לשיתוף פעולה?</h2>
          <p className="mt-2 text-sm text-slate-100 sm:text-base">נשמח להתאים לכם פתרון הפצה מהיר, זמין ומדויק.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-bold text-brand-900 transition hover:bg-slate-100"
            >
              להתקשר
            </a>
            <a
              href={business.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white px-5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              לעוד פרטים (וואטסאפ)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
