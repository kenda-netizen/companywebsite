import Link from 'next/link';
import { business } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-slate-200 bg-white">
      <div className="container-page grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        <section>
          <h2 className="text-sm font-bold text-slate-900">יצירת קשר</h2>
          <p className="mt-3 text-sm text-slate-700">
            טלפון:{' '}
            <a className="font-semibold text-brand-700 hover:text-brand-900" href={`tel:${business.phone}`}>
              {business.phone}
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-700">
            וואטסאפ:{' '}
            <a
              className="font-semibold text-brand-700 hover:text-brand-900"
              href={business.whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              מעבר לצ׳אט
            </a>
          </p>
        </section>
        <section>
          <h2 className="text-sm font-bold text-slate-900">כתובת</h2>
          <p className="mt-3 text-sm text-slate-700">{business.address}</p>
        </section>
        <section>
          <h2 className="text-sm font-bold text-slate-900">שעות פעילות</h2>
          <p className="mt-3 text-sm text-slate-500">טרם עודכן</p>
        </section>
        <section>
          <h2 className="text-sm font-bold text-slate-900">ניווט</h2>
          <Link
            href={business.wazeLink}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-700 hover:text-brand-700"
          >
            נווט ב-Waze
          </Link>
        </section>
      </div>
    </footer>
  );
}
