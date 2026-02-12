import Link from 'next/link';
import { business, quickLinks } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-brand-500/40 bg-brand-surface/35">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <section>
          <h2 className="text-base font-bold text-brand-900">ג׳י.אן.זד שיווק והפצה בע״מ</h2>
          <p className="mt-3 text-sm leading-7 text-brand-700">
            פתרונות שיווק והפצה לעסקים וללקוחות פרטיים, עם דגש על שירות אישי, זמינות ועמידה בלוחות זמנים.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-brand-900">קישורים מהירים</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring text-brand-700 hover:text-brand-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-brand-900">יצירת קשר</h2>
          <p className="mt-3 text-sm text-brand-700">
            טלפון:{' '}
            <a href={`tel:${business.phone}`} className="focus-ring font-semibold text-brand-700 hover:text-brand-accent">
              {business.phone}
            </a>
          </p>
          <p className="mt-2 text-sm text-brand-700">
            וואטסאפ:{' '}
            <a href={business.whatsappLink} target="_blank" rel="noreferrer" className="focus-ring font-semibold text-brand-700 hover:text-brand-accent">
              מעבר לצ׳אט
            </a>
          </p>
          <p className="mt-2 text-sm text-brand-700">כתובת: {business.address}</p>
          <Link
            href={business.wazeLink}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-4 inline-flex rounded-brand border border-brand-500/55 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-700 hover:text-brand-900"
          >
            נווט ב-Waze
          </Link>
        </section>
      </div>
    </footer>
  );
}
