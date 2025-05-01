import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '87.5rem', 
      },
    },
  },
  plugins: [],
};

export default config;