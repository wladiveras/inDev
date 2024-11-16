<template>
    <section>
        <DefaultIndexHero />
        <DefaultIndexAbout />
        <DefaultIndexWork />
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
