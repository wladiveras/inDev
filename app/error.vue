<script setup lang="ts">
    import type { NuxtError } from '#app'

    defineProps({
        error: {
            type: Object as PropType<NuxtError>,
            required: true
        }
    })

    useHead({
        htmlAttrs: {
            lang: 'en'
        }
    })

    useSeoMeta({
        title: 'Pagina não encontrada.',
        description:
            'Nos desculpe, a página que você está procurando não foi encontrada.'
    })
</script>

<template>
    <div>
        <AppHeader />

        <UMain>
            <UContainer>
                <UPage>
                    <UPageError :error="error" />
                </UPage>
            </UContainer>
        </UMain>

        <AppFooter />

        <UNotifications />
    </div>
</template>
