<template>
    <AnimateElement
        animation="fadeInTopRight"
        :duration="1000"
        :delay="700"
        repeat
        mobile-animation="none"
    >
        <section>
            <span
                v-if="hero.label"
                class="text-primary-400 text-xl md:text-2xl"
            >
                {{ hero.label }}
            </span>

            <h1
                id="main-heading"
                class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl"
            >
                {{ hero.title }}
                <span
                    v-if="hero.subtitle"
                    class="underline decoration-primary-500"
                >
                    {{ hero.subtitle }}
                </span>
            </h1>

            <h2
                id="main-heading"
                class="text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-500 sm:text-6xlp"
            >
                {{ hero.about }}
            </h2>

            <section
                class="text-1xl gap-2 max-w-[40rem] text-slate-600 dark:text-slate-300 mt-10"
            >
                <p>
                    {{ hero.description }}
                </p>
            </section>
        </section>
    </AnimateElement>
</template>

<script lang="ts" setup>
    import type { Hero } from '~/types'

    defineProps<{
        hero: Hero
    }>()
</script>

<style></style>
