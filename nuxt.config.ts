// https://nuxt.com/docs/api/configuration/nuxt-config
import wasm from "vite-plugin-wasm"

export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxthub/core"],

  ssr: true,
  pages: true,

  css: ["~/assets/css/main.css"],

  hub: {
    remote: false,
    ai: false,
    blob: true,
    database: true,
  },

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  vite: {
    plugins: [wasm()],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: "",
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  colorMode: {
    preference: "dark",
  },

  compatibilityDate: "2024-04-03",
})
