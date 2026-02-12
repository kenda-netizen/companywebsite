import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F7F2C3',
          100: '#ECE5B0',
          500: '#747A53',
          700: '#1C3623',
          900: '#122317',
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          accent: 'var(--color-brand-accent)',
          accentSoft: 'var(--color-brand-accent-soft)',
          surface: 'var(--color-brand-surface)',
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
          onDark: 'var(--color-text-on-dark)',
          onLight: 'var(--color-text-on-light)',
        },
        border: {
          DEFAULT: 'var(--color-border-base)',
          strong: 'var(--color-border-strong)',
        },
        link: {
          DEFAULT: 'var(--color-link)',
          hover: 'var(--color-link-hover)',
        },
        focus: 'var(--color-focus-ring)',
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
        'nav-gradient': 'var(--gradient-nav)',
      },
    },
  },
  plugins: [],
};

export default config;
