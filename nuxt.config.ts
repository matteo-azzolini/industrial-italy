// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],

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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // {
        //   rel: 'stylesheet',
        //   href: 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css',
        // },

        // {
        //   rel: 'stylesheet',
        //   href: 'leaflet/dist/leaflet.css',
        // },
      ],
    },

    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in',
    //   // duration: 300,
    // },
  },
});
