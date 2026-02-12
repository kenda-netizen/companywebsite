import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: "ג'י.אן.זד שיווק והפצה בע\"מ",
    template: "%s | ג'י.אן.זד שיווק והפצה בע\"מ",
  },
  description: 'אתר תדמית עסקי להפצת גבינות, מוצרי חלב, קפואים ומוצרים נוספים לעסקים ולקוחות פרטיים.',
  keywords: ['שיווק', 'הפצה', 'גבינות', 'מוצרי חלב', 'קפואים', 'עסקי B2B', 'ג׳י.אן.זד'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
