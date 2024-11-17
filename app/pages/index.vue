<template>
    <section>
        <DefaultIndexHero />
        <DefaultIndexAbout />
        <DefaultIndexJobs />
        <DefaultIndexProjects />
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
