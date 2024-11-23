<template>
    <section>
        <LazyDefaultHero />
        <LazyDefaultAbout />
        <LazyDefaultExperience />
        <LazyDefaultProjects />
        <LazyDefaultContact />
    </section>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'default'
    })

    useSeoMeta({
        title: 'Desenvolvedor Fullstack'
    })
</script>
