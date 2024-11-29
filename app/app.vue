<script setup lang="ts">
    import favicon from '~/assets/images/favicon.svg'

    const seoStore = useSeoStore()

    useSeoMeta({
        titleTemplate: (title) => {
            return title
                ? `${seoStore.title} • ${title}`
                : seoStore.titleCallback
        },
        contentSecurityPolicy: {},
        keywords: seoStore.keywords,
        description: seoStore.description,
        ogUrl: seoStore.website,
        ogType: 'website',
        ogDescription: seoStore.description,
        ogImage: seoStore.image,
        twitterTitle: seoStore.title || seoStore.titleCallback,
        twitterDescription: seoStore.description,
        twitterImage: seoStore.image,
        twitterCard: 'summary_large_image'
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
    <NuxtPwaManifest />
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <ClientOnly>
        <UApp>
            <CheckPwa />

            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </UApp>
    </ClientOnly>
    <!-- <UNotifications /> -->
</template>

<style>
    @import './assets/css/main.css';
</style>
