// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxthub/core"],

  srcDir: "app/",

  hub: {
    remote: true,
    ai: false,
    blob: true,
    database: true,
  },

  preset: "cloudflare-pages",
  serveStatic: true,
  ssr: true,

  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  storage: {
    fs: false,
  },

  cloudflare: {
    persistAssetsToStorage: false,
  },
  colorMode: {
    preference: "dark",
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
})
