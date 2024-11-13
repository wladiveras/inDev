// https://nuxt.com/docs/api/configuration/nuxt-config
import wasm from "vite-plugin-wasm"

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

  typescript: {
    strict: false,
    tsConfig: {
      compilerOptions: {
        types: ["types"],
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
      routes: ["/"],
      ignore: ["/api/**"],
    },
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  storage: {
    fs: false,
  },

  colorMode: {
    preference: "dark",
  },
  vite: {
    plugins: [wasm()],
  },

  compatibilityDate: "2024-04-03",
})
