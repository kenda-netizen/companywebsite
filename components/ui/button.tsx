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
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  secondary: 'bg-white text-primary-900 hover:bg-slate-100',
  outline: 'border border-white text-white hover:bg-white/10',
};

export function CTAButton({ href, children, variant = 'primary', external = false, className = '' }: CTAButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-xl px-5 text-sm font-bold transition ${variantClass[variant]} ${className}`;

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
