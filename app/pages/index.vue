<template>
    <section>
        <LazyDefaultIndexHero />
        <LazyDefaultIndexAbout />
        <LazyDefaultIndexExperience />
        <LazyDefaultIndexProjects />
        <LazyDefaultIndexContact />
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
