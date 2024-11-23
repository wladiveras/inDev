<template>
    <section
        id="projects"
        class="md:container md:mx-auto"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            :title="projects.title"
            :subtitle="projects.subtitle"
            icon="line-md:folder-settings"
        />
        <section>
            <section
                v-for="(project, index) in starredProjects"
                :key="index"
            >
                <AnimateElement
                    :animation="index % 2 !== 0 ? 'slideLeft' : 'slideRight'"
                    :duration="1000"
                    :delay="300"
                    repeat-once
                >
                    <article
                        :class="[
                            'flex flex-wrap md:flex-nowrap gap-10 mb-10',
                            { 'md:flex-row-reverse': index % 2 !== 0 }
                        ]"
                    >
                        <div
                            class="w-full md:w-1/2 cursor-pointer max-h-[350px]"
                        >
                            <NuxtImg
                                format="webp"
                                width="100%"
                                height="auto"
                                densities="x1 x2"
                                :src="project.image"
                                :alt="project.title"
                                class="inset-0 w-full h-full rounded-lg object-cover"
                                loading="lazy"
                            />
                        </div>

                        <div class="w-full md:w-1/2">
                            <div
                                class="flex flex-nowrap justify-between items-center"
                            >
                                <div>
                                    <span
                                        class="relative text-primary-600 dark:text-primary-400"
                                    >
                                        <UIcon
                                            class="relative top-1 text-primary-600 dark:text-primary-400"
                                            name="line-md:star"
                                            size="1.2rem"
                                        />
                                        Destacado
                                    </span>
                                    <h1 class="text-lg font-bold mb-5">
                                        {{ project.title }}
                                    </h1>
                                </div>
                                <div class="flex justify-center">
                                    <a
                                        v-if="project.github"
                                        :href="project.github"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="External Link"
                                    >
                                        <UIcon
                                            class="mr-1.5 relative top-[-0.1rem] hover:text-primary-500 transition-all duration-300 cursor-pointer"
                                            name="line-md:github"
                                            size="1.5rem"
                                        />
                                    </a>
                                    <a
                                        v-if="project.video"
                                        :href="project.video"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="External Link"
                                    >
                                        <UIcon
                                            class="mr-1.5 relative top-[-0.1rem] hover:text-primary-500 transition-all duration-300 cursor-pointer"
                                            name="mdi:video"
                                            size="1.5rem"
                                        />
                                    </a>

                                    <a
                                        v-if="project.preview"
                                        :href="project.preview"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="External Link"
                                    >
                                        <UIcon
                                            class="mr-1.5 relative top-[-0.1rem] hover:text-primary-500 transition-all duration-300 cursor-pointer"
                                            name="line-md:external-link"
                                            size="1.5rem"
                                        />
                                    </a>
                                </div>
                            </div>
                            <USeparator
                                type="dashed"
                                class="mb-5"
                            />
                            <p class="font-thin text-sm">
                                {{ project.description }}
                            </p>
                            <div class="flex flex-wrap gap-2 mt-5 mb-5">
                                <UBadge
                                    v-for="technologies in project.technologies"
                                    :key="technologies"
                                >
                                    {{ technologies }}
                                </UBadge>
                            </div>
                        </div>
                    </article>
                </AnimateElement>
                <USeparator class="mb-10 mt-10">
                    <template #default>
                        <MainLogo
                            width="25"
                            height="25"
                            alt="Logo"
                        />
                    </template>
                </USeparator>
            </section>
        </section>
        <div class="container mx-auto py-16 px-4">
            <h1 class="text-2xl font-bold mb-8 text-center">
                Outros <span class="text-primary-500">projetos</span>
            </h1>

            <section
                class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
                <div
                    v-for="(project, index) in nonStarredProjects"
                    :key="index"
                    class="flex"
                >
                    <DefaultProjectCard :project="project" />
                </div>
            </section>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const landingStore = useLandingStore()
    const { projects, starredProjects, nonStarredProjects } =
        storeToRefs(landingStore)
</script>

<style scoped>
    technology-ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    technology-list {
        margin-bottom: 10px;
    }

    technology-list::before {
        content: '▶';
        color: #49e79c;
        margin-right: 10px;
    }
</style>
