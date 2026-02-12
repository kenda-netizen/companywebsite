import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4ff',
          100: '#dce9ff',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#1e3a8a',
          900: '#0b1f4d',
        },
        neutralbg: '#f6f8fb',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(15, 23, 42, 0.06)',
        card: '0 12px 32px rgba(2, 12, 27, 0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(140deg, #0b1f4d 0%, #1e3a8a 40%, #1d4ed8 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
