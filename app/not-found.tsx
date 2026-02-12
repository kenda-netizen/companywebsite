import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-page py-16 text-center">
      <h1 className="text-3xl font-bold text-text-primary">העמוד לא נמצא</h1>
      <p className="mt-3 text-sm text-text-secondary">ייתכן שהקישור שגוי או שהעמוד הוסר.</p>
      <Link
        href="/"
        className="focus-ring mt-6 inline-flex rounded-brand bg-brand-accent px-5 py-3 text-sm font-semibold text-text-onLight hover:bg-brand-accentSoft"
      >
        חזרה לדף הבית
      </Link>
    </section>
  );
}
