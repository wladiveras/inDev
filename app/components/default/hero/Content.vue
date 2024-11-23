<template>
    <AnimateElement
        animation="fadeInTopLeft"
        :duration="600"
        :delay="100"
        repeat-once
        mobile-animation="none"
    >
        <div class="relative group">
            <div
                class="absolute -inset-2 bg-gradient-to-r from-slate-600 dark:from-white to-primary-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"
            />
            <div
                class="absolute -inset-1 bg-gradient-to-r from-primary to-primary-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"
            ></div>
            <div
                class="relative mt-20 md:mt-0 animate__animated animate__bounceIn float"
            >
                <NuxtImg
                    format="webp"
                    :src="hero.image"
                    :alt="hero.title"
                    loading="lazy"
                    class="w-64 h-110 rounded-md m-auto object-cover border-4 border-white/50 shadow-xl md:transform -translate-x-4 -translate-y-4 md:hover:translate-x-0 md:hover:translate-y-0 transition duration-300"
                />
            </div>
        </div>
    </AnimateElement>
</template>

<script lang="ts" setup>
    import type { Hero } from '~/types'

    defineProps<{
        hero: Hero
    }>()
</script>

<style></style>
