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

    ssr: true,

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
        '/**': {
            prerender: true
        }
    },

    future: {
        compatibilityVersion: 4
    },

    experimental: {
        payloadExtraction: true,
        treeshakeClientOnly: true,
        viewTransition: true,
        renderJsonPayloads: true
    },

    compatibilityDate: '2024-04-03',

    nitro: {
        compressPublicAssets: true,
        minify: true,
        timing: true,
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

    vite: {
        build: {
            cssMinify: true
        },
        optimizeDeps: {
            include: ['vue', 'vue-router', '@vueuse/core'],
            exclude: ['nuxt/app']
        }
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
        provider: 'ipx',
        format: ['webp', 'avif'],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536
        },
        presets: {
            avatar: {
                modifiers: {
                    format: 'webp',
                    width: 80,
                    height: 80
                }
            }
        }
    }
})
