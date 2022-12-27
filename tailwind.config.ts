import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

// https://tailwindcss.nuxtjs.org/tailwind/config
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: colors.amber,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
