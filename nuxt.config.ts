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
        preference: 'system'
    },

    routeRules: {
        '/**': {
            prerender: true
        }
    },

    future: {
        compatibilityVersion: 4
    },
    experimental: {
        payloadExtraction: true
    },

    compatibilityDate: '2024-04-03',

    nitro: {
        compressPublicAssets: true,
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
    },
    image: {
        format: ['webp'],
        provider: 'ipx',
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536
        }
    }
})
