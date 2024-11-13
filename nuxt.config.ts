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
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
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
      crawlLinks: true,
      routes: ["/"],
    },
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
