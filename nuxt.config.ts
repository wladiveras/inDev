// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxthub/core"],

  baseURL: "/",
  srcDir: "app/",
  preset: "cloudflare-pages",
  serveStatic: true,
  ssr: true,
  pages: true,

  css: ["@nuxt/ui/dist/style.css"],

  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  hub: {
    remote: true,
    ai: false,
    blob: true,
    database: true,
  },

  router: {
    options: {
      strict: false,
    },
  },

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
