// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/eslint', '@nuxthub/core'],

    ssr: true,

    hub: {
        remote: false,
        ai: false,
        blob: true,
        database: true
    },

    typescript: {
        strict: false
    },

    nitro: {
        prerender: {
            routes: ['/'],
            crawlLinks: true
        }
    },

    routeRules: {
        '/': { prerender: true }
    },

    future: {
        compatibilityVersion: 4
    },

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs'
            }
        }
    },

    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },

    colorMode: {
        preference: 'dark'
    },

    compatibilityDate: '2024-04-03'
})
