// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],

  app: {
    // keepalive: true,
    head: {
      title: 'Industrial italy',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' },
      ],
    },

    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in',
    //   duration: 1000,
    // },
  },

  // routeRules: {
  //   '/about': { static: true },
  // },

  typescript: {
    strict: true,
  },
});
