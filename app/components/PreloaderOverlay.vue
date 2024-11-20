<!-- components/PreloaderOverlay.vue -->
<template>
    <Transition
        enter-active-class="transition-opacity duration-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-500"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
            v-if="show"
            class="fixed inset-0 z-100 flex items-top mt-50 justify-center backdrop-blur bg-white dark:bg-slate-900"
            :class="customClass"
        >
            <div class="text-center">
                <LogoType
                    width="400"
                    height="400"
                />
            </div>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
    import LogoType from './LogoType.vue'

    defineProps<{
        customClass?: string | Record<string, boolean>
        show: boolean
    }>()
</script>
