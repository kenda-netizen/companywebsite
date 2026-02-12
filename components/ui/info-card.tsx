import { ReactNode } from 'react';

type InfoCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export function InfoCard({ title, description, icon }: InfoCardProps) {
  return (
    <article className="rounded-card border border-border bg-bg-surface p-5 shadow-soft sm:p-6">
      {icon ? <div className="mb-4 text-brand-accent">{icon}</div> : null}
      <h3 className="text-lg font-bold text-text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>
    </article>
  );
}
