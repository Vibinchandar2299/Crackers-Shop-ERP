// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite AU SA"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
