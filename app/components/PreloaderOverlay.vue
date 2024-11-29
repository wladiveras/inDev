<template>
    <div :class="[customClass, 'min-h-screen transition-colors duration-200']">
        <div
            v-if="show"
            class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900"
        >
            <div
                class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"
            ></div>
        </div>
        <div :class="{ 'opacity-50': show }">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps<{
        show: boolean
        customClass?: string
    }>()
</script>
