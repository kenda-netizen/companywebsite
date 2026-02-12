import Link from 'next/link';
import { business, quickLinks } from '@/data/site';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg-surface/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20 sm:gap-6">
        <Link href="/" className="text-sm font-extrabold text-brand-primary sm:text-base">
          {business.name}
        </Link>

        <nav aria-label="ניווט ראשי">
          <ul className="flex items-center gap-1 sm:gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-brand px-3 py-2 text-sm font-semibold text-text-secondary transition hover:bg-bg-soft hover:text-brand-primary"
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
