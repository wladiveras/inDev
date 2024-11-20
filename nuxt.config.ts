// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/ui',
        '@pinia/nuxt',
        '@nuxt/eslint',
        '@nuxthub/core',
        '@nuxt/image',
        '@nuxt/test-utils/module'
    ],

    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },

    colorMode: {
        preference: 'dark'
    },

    routeRules: {
        '/': { prerender: true }
    },

    future: {
        compatibilityVersion: 4
    },

    compatibilityDate: '2024-04-03',

    nitro: {
        prerender: {
            routes: ['/'],
            crawlLinks: true
        }
    },

    hub: {
        remote: false,
        ai: false,
        blob: true,
        database: true
    },

    typescript: {
        strict: false
    },

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs'
            }
        }
    }
})