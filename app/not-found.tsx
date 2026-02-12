import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-page py-16 text-center">
      <h1 className="text-3xl font-bold text-slate-900">העמוד לא נמצא</h1>
      <p className="mt-3 text-sm text-slate-600">ייתכן שהקישור שגוי או שהעמוד הוסר.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-900"
      >
        חזרה לדף הבית
      </Link>
    </section>
  );
}
