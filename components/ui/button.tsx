import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-accent text-text-onLight hover:bg-brand-accentSoft border border-brand-accent focus-ring',
  secondary:
    'border border-brand-primary bg-transparent text-brand-primary hover:bg-brand-surface focus-ring',
  outline:
    'border border-brand-surface text-text-onDark hover:bg-brand-surface/15 focus-ring',
};

export function CTAButton({ href, children, variant = 'primary', external = false, className = '' }: CTAButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-brand px-5 text-sm font-bold transition ${variantClass[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href.startsWith('tel:')) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
