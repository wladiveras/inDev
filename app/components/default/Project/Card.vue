<template>
    <AnimateElement
        animation="fadeIn"
        :duration="1000"
        :delay="300"
        repeat-once
        class="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 h-full flex flex-col"
    >
        <header class="flex justify-between items-center mb-4">
            <UIcon
                name="line-md:folder"
                size="3rem"
                class="text-primary-500 relative top-[-0.3rem]"
            />

            <div class="flex justify-center">
                <DefaultProjectLink
                    v-if="project.github"
                    :href="project.github"
                    icon="line-md:github"
                    label="GitHub Repository"
                />
                <DefaultProjectLink
                    v-if="project.preview"
                    :href="project.preview"
                    icon="line-md:external-link"
                    label="Live Preview"
                />
            </div>
        </header>

        <h2 class="text-md font-bold mb-4">{{ project.title }}</h2>

        <p class="text-gray-400 text-xs flex-grow">{{ project.description }}</p>

        <footer class="flex flex-wrap gap-2 mt-5">
            <UBadge
                v-for="technology in project.technologies"
                :key="technology"
            >
                {{ technology }}
            </UBadge>
        </footer>
    </AnimateElement>
</template>

<script setup lang="ts">
    import type { Project } from '~/types'

    defineProps<{
        project: Project
    }>()
</script>
