import type { Metadata } from 'next';
import { CTAButton } from '@/components/ui/button';
import { business } from '@/data/site';

export const metadata: Metadata = {
  title: 'יצירת קשר',
  description: 'פרטי יצירת קשר עבור ג׳י.אן.זד שיווק והפצה בע"מ.',
};

export default function ContactPage() {
  return (
    <section className="container-page py-12 sm:py-14 lg:py-16">
      <h1 className="section-title">יצירת קשר</h1>
      <p className="section-subtitle">לשאלות, הזמנות ותיאום אספקה ניתן ליצור איתנו קשר ישירות.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-base font-bold text-slate-900">טלפון / וואטסאפ</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <CTAButton href={`tel:${business.phone}`}>{business.phone}</CTAButton>
            <CTAButton href={business.whatsappLink} variant="secondary" external className="border border-primary-600">
              מעבר לוואטסאפ
            </CTAButton>
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-base font-bold text-slate-900">כתובת</h2>
          <p className="mt-4 text-sm text-slate-700">{business.address}</p>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft sm:col-span-2">
          <h2 className="text-base font-bold text-slate-900">שעות פתיחה</h2>
          <p className="mt-4 text-sm text-slate-500">טרם עודכן</p>
        </article>
      </div>
    </section>
  );
}
