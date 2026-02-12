import Link from 'next/link';
import { business } from '@/data/site';

const links = [
  { href: '/', label: 'בית' },
  { href: '/categories', label: 'קטגוריות' },
  { href: '/contact', label: 'יצירת קשר' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-sm font-bold text-brand-900 sm:text-base">
          {business.name}
        </Link>
        <nav aria-label="ניווט ראשי">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
