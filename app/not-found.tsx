import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-page py-16 text-center">
      <h1 className="text-3xl font-bold text-text-primary">העמוד לא נמצא</h1>
      <p className="mt-3 text-sm text-text-secondary">ייתכן שהקישור שגוי או שהעמוד הוסר.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-brand bg-brand-primary px-5 py-3 text-sm font-semibold text-text-inverse hover:bg-brand-secondary"
      >
        חזרה לדף הבית
      </Link>
    </section>
  );
}
