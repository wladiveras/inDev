// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  srcDir: "app/",

  colorMode: {
    preference: "light",
  },
  devtools: { enabled: true },

  compatibilityDate: "2024-04-03",
})
