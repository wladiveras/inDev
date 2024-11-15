<script setup lang="ts">
    import favicon from '~/assets/images/favicon.svg'

    const colorMode = useColorMode()
    const color = computed(() =>
        colorMode.value === 'dark' ? '#111827' : 'white'
    )

    onMounted(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            {
                threshold: 0.1
            }
        )

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            observer.observe(el)
        })
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
        ogImage: 'https://saas-template.nuxt.dev/social-card.png',
        twitterImage: 'https://saas-template.nuxt.dev/social-card.png',
        twitterCard: 'summary_large_image'
    })
</script>

<template>
    <UApp>
        <NuxtLoadingIndicator />
        <NuxtRouteAnnouncer />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>

        <UNotifications />
    </UApp>
</template>

<style>
    @import './assets/css/main.css';
</style>
