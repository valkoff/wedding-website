// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      mailjsApiKey: process.env.MAILJS_API_KEY,
      mailjsServiceId: process.env.MAILJS_SERVICE_ID,
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'A&V 1 Giugno 25',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Matrimonio Antonietta e Valerio, 1 Giugno 2025, La Seminatrice' },
        { name: 'author', content: 'Valerio Cofano' },
        { name: 'theme-color', content: '#a2bd95' },
      ],
    },
  },
})
