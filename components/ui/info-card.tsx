import { ReactNode } from 'react';

type InfoCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export function InfoCard({ title, description, icon }: InfoCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
      {icon ? <div className="mb-4 text-primary-600">{icon}</div> : null}
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
