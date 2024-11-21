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

    const seo = {
        title: 'Wladi Veras',
        titleCallback: 'Wladi Veras • Desenvolvedor Fullstack',
        website: 'https://wladi.com.br',
        keywords:
            'Laravel, Vue.js, Nuxt.js, PHP, Tailwind CSS, Bootstrap, frameworks, bibliotecas, programador, desenvolvedor, fullstack, backend, frontend, back-end, front-end, ia, inteligencia artificial, responsivo, profissional de TI, profissional',
        description:
            'Desenvolvedor Fullstack com 8 anos experiência em Laravel, Vue.js, Nuxt.js, PHP, Tailwind CSS, Bootstrap, e outros frameworks e bibliotecas.',
        image: '/images/seo.png'
    }

    useSeoMeta({
        titleTemplate: (title) => {
            return title ? `${seo.title} • ${title}` : seo.titleCallback
        },
        contentSecurityPolicy: {},
        keywords: seo.keywords,
        description: seo.description,
        ogUrl: seo.website,
        ogType: 'website',
        ogDescription: seo.description,
        ogImage: seo.image,
        twitterTitle: seo.title || seo.titleCallback,
        twitterDescription: seo.description,
        twitterImage: seo.image,
        twitterCard: 'summary_large_image'
    })

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
</script>

<template>
    <LazyPreloaderOverlay
        :custom-class="preloaderClass"
        :show="preloaderState.isLoading"
    >
        <UApp>
            <NuxtLayout>
                <LazyNuxtLoadingIndicator />
                <LazyNuxtPage />
                <LazyUNotifications />
            </NuxtLayout>
        </UApp>
    </LazyPreloaderOverlay>
</template>

<style>
    @import './assets/css/main.css';
</style>
