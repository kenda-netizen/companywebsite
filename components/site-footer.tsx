import Link from 'next/link';
import { business, quickLinks } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <section>
          <h2 className="text-base font-bold text-slate-900">ג'י.אן.זד שיווק והפצה בע"מ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            פתרונות שיווק והפצה לעסקים וללקוחות פרטיים, עם דגש על שירות אישי, זמינות ועמידה בלוחות זמנים.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">קישורים מהירים</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-700 hover:text-primary-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">יצירת קשר</h2>
          <p className="mt-3 text-sm text-slate-700">
            טלפון:{' '}
            <a href={`tel:${business.phone}`} className="font-semibold text-primary-700 hover:text-primary-900">
              {business.phone}
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-700">
            וואטסאפ:{' '}
            <a href={business.whatsappLink} target="_blank" rel="noreferrer" className="font-semibold text-primary-700 hover:text-primary-900">
              מעבר לצ׳אט
            </a>
          </p>
          <p className="mt-2 text-sm text-slate-700">כתובת: {business.address}</p>
          <Link
            href={business.wazeLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary-700 hover:text-primary-700"
          >
            נווט ב-Waze
          </Link>
        </section>
      </div>
    </footer>
  );
}
