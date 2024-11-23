<template>
    <section>
        <LazyDefaultHero />
        <LazyDefaultAbout />
        <LazyDefaultExperience />
        <LazyDefaultProject />
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
