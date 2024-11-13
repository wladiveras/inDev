// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxthub/core"],

  srcDir: "app",
  rootDir: ".",
  ssr: true,
  pages: true,

  css: ["~/assets/css/main.css"],

  experimental: {
    headNext: true,
    inlineSSRStyles: false,
  },

  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  generate: {
    fallback: true,
  },

  hub: {
    remote: false,
    ai: false,
    blob: true,
    database: true,
  },

  build: {
    transpile: ["@unhead/vue"],
  },

  nitro: {
    preset: "cloudflare-pages",
    experimental: {
      openAPI: true,
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: [
        '/api/**'
      ]
    },

  storage: {
    fs: false,
  },

  colorMode: {
    preference: "dark",
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
})
