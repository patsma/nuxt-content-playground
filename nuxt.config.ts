// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  routeRules: {
    '/': { prerender: true },
    '/**': {
      prerender: true,
    },
    '/__preview/**': { cors: true },
    '/__studio/**': { cors: true }
  },
  compatibilityDate: '2024-04-03',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true
    }
  },
})
