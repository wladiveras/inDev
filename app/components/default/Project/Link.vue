<template>
    <a
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="label"
    >
        <UIcon
            :name="icon"
            class="mr-1.5 relative top-[-0.1rem] hover:text-primary-500 transition-all duration-300 cursor-pointer"
            size="1.5rem"
        />
    </a>
</template>

<script setup lang="ts">
    defineProps<{
        href: string
        icon: string
        label: string
    }>()
</script>
