<script setup lang="ts">
    import favicon from '~/assets/images/favicon.svg'

    const route = useRoute()
    const colorMode = useColorMode()
    const color = computed(() =>
        colorMode.value === 'dark' ? '#111827' : 'white'
    )

    const preloader = usePreloader()
    const preloaderState = preloader.getState()
    const currentLayout = ref('')

    const preloaderClass = computed(() => {
        return {
            'bg-white dark:bg-gray-900': currentLayout.value === 'default',
            'bg-gray-100 dark:bg-gray-800': currentLayout.value === 'admin'
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
        await new Promise((resolve) => setTimeout(resolve, 1000))
        preloader.hide()
    })

    useHead({
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { key: 'theme-color', name: 'theme-color', content: color }
        ],
        link: [{ rel: 'icon', type: 'image/svg+xml', href: favicon }],
        htmlAttrs: {
            lang: 'en'
        }
    })

    useSeoMeta({
        titleTemplate: 'Wladi Veras  • %s',
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
