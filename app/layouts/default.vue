<template>
    <LazyPreloaderOverlay
        :custom-class="preloaderClass"
        :show="preloaderState.isLoading"
    >
        <LazyDefaultHeader />
        <LazyUContainer>
            <slot />
        </LazyUContainer>
        <LazyDefaultFooter />
    </LazyPreloaderOverlay>
</template>

<script lang="ts" setup>
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
</script>

<style></style>
