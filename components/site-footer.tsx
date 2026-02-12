import Link from 'next/link';
import { business, quickLinks } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-border bg-bg-surface">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <section>
          <h2 className="text-base font-bold text-text-primary">ג׳י.אן.זד שיווק והפצה בע״מ</h2>
          <p className="mt-3 text-sm leading-7 text-text-secondary">
            פתרונות שיווק והפצה לעסקים וללקוחות פרטיים, עם דגש על שירות אישי, זמינות ועמידה בלוחות זמנים.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-text-primary">קישורים מהירים</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring text-link hover:text-link-hover">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-text-primary">יצירת קשר</h2>
          <p className="mt-3 text-sm text-text-secondary">
            טלפון:{' '}
            <a href={`tel:${business.phone}`} className="focus-ring font-semibold text-link hover:text-link-hover">
              {business.phone}
            </a>
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            וואטסאפ:{' '}
            <a href={business.whatsappLink} target="_blank" rel="noreferrer" className="focus-ring font-semibold text-link hover:text-link-hover">
              מעבר לצ׳אט
            </a>
          </p>
          <p className="mt-2 text-sm text-text-secondary">כתובת: {business.address}</p>
          <Link
            href={business.wazeLink}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-4 inline-flex rounded-brand border border-border-strong px-4 py-2 text-sm font-semibold text-text-secondary transition hover:border-brand-primary hover:text-brand-primary"
          >
            נווט ב-Waze
          </Link>
        </section>
      </div>
    </footer>
  );
}
