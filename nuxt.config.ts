// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxthub/core"],

  srcDir: "app/",
  rootDir: ".",
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
    preset: "cloudflare-pages",
    experimental: {
      openAPI: true,
    },
    prerender: {
      crawlLinks: true,
      routes: ["/", "/404"],
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
