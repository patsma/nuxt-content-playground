// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
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
  },
  compatibilityDate: '2024-04-03',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  content: {
    documentDriven: true,
    preview: {
      api: 'https://api.nuxt.studio',
      port: 3000,
      host: '0.0.0.0',
      dev: true,
    },
    renderer: {
      anchorLinks: false,
    },
  
  },
  
})
