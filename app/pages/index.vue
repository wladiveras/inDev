<template>
    <section>
        <DefaultIndexHero />
        <DefaultIndexAbout />
        <DefaultIndexExperience />
        <DefaultIndexProjects />
        <DefaultIndexContact />
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
