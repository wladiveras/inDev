<script setup lang="ts">
    import favicon from '~/assets/images/favicon.svg'

    const preloader = usePreloader()
    const preloaderState = preloader.getState()
    const currentLayout = ref('')

    const preloaderClass = computed(() =>
        currentLayout.value === 'default'
            ? 'bg-white dark:bg-slate-900'
            : 'bg-gray-100 dark:bg-slate-800'
    )

    onMounted(() => {
        requestAnimationFrame(() => {
            preloader.hide()
        })
    })

    useHead({
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/svg+xml',
                href: favicon,
                crossorigin: 'anonymous'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
                crossorigin: 'anonymous'
            }
        ],
        htmlAttrs: {
            lang: 'en'
        }
    })

    useSeoMeta({
        titleTemplate: (title) => {
            return title
                ? `Wladi Veras • ${title}`
                : 'Wladi Veras • Desenvolvedor Fullstack'
        },

        contentSecurityPolicy: {},
        keywords:
            'Laravel, Vue.js, Nuxt.js, PHP, Tailwind CSS, Bootstrap, frameworks, bibliotecas, programador, desenvolvedor, fullstack, backend, frontend, back-end, front-end, ia, inteligencia artificial, responsivo, profissional de TI, profissional ',
        description:
            'Desenvolvedor Fullstack com 8 anos experiência em Laravel, Vue.js, Nuxt.js, PHP, Tailwind CSS, Bootstrap, e outros frameworks e bibliotecas.',
        ogDescription:
            'Desenvolvedor Fullstack com 8 anos experiência em Laravel, Vue.js, Nuxt.js, PHP, Tailwind CSS, Bootstrap, e outros frameworks e bibliotecas.',
        ogImage: '/images/seo.png',
        twitterImage: '/images/seo.png',
        twitterCard: 'summary_large_image'
    })
</script>

<template>
    <PreloaderOverlay
        :custom-class="preloaderClass"
        :show="preloaderState.isLoading"
    >
        <UApp>
            <NuxtLayout>
                <NuxtLoadingIndicator />
                <NuxtPage />
                <UNotifications />
            </NuxtLayout>
        </UApp>
    </PreloaderOverlay>
</template>

<style>
    @import './assets/css/main.css';
</style>
