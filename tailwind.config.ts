import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

// https://tailwindcss.nuxtjs.org/tailwind/config
export default <Partial<Config>>{
  // TODO serve?
  content: ['./app.vue', './components/**/*.vue', './pages/**/*.vue'],
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
