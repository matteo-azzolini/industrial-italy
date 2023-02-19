const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'gray': colors.neutral,
        'soft-black': 'var(--soft-black)',
      },

    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
