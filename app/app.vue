<script setup lang="ts">
    import favicon from '~/assets/images/favicon.svg'

    const route = useRoute()

    const preloader = usePreloader()
    const preloaderState = preloader.getState()
    const currentLayout = ref('')

    const preloaderClass = computed(() => {
        return {
            'bg-white dark:bg-slate-900': currentLayout.value === 'default',
            'bg-gray-100 dark:bg-slate-800': currentLayout.value === 'admin'
        }
    })

    watch(
        () => route.meta.layout,
        async (newLayout) => {
            if (newLayout !== currentLayout.value) {
                preloader.show()
                currentLayout.value = newLayout as string

                await new Promise((resolve) => setTimeout(resolve, 500))

                preloader.hide()
            }
        }
    )

    onMounted(async () => {
        setupNavigation()
        await new Promise((resolve) => setTimeout(resolve, 1000))
        preloader.hide()
    })

    useHead({
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ],
        link: [{ rel: 'icon', type: 'image/svg+xml', href: favicon }],
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
    <UApp>
        <NuxtLoadingIndicator />
        <NuxtRouteAnnouncer />

        <PreloaderOverlay
            :custom-class="preloaderClass"
            :show="preloaderState.isLoading"
        />

        <NuxtLayout v-if="!preloaderState.isLoading">
            <NuxtPage />
        </NuxtLayout>

        <UNotifications />
    </UApp>
</template>

<style>
    @import './assets/css/main.css';
</style>
