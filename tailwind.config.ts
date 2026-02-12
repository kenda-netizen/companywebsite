import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          accent: 'var(--color-brand-accent)',
        },
        bg: {
          base: 'var(--color-bg-base)',
          surface: 'var(--color-bg-surface)',
          soft: 'var(--color-bg-soft)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
        },
        border: {
          DEFAULT: 'var(--color-border-base)',
          strong: 'var(--color-border-strong)',
        },
      },
      borderRadius: {
        brand: 'var(--radius-brand)',
        card: 'var(--radius-card)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
      },
      backgroundImage: {
        'hero-gradient': 'var(--gradient-hero)',
      },
    },
  },
  plugins: [],
};

export default config;
