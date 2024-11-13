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

  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  colorMode: {
    preference: "dark",
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
})
