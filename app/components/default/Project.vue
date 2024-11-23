<template>
    <section
        id="project"
        class="md:container md:mx-auto"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            :title="project.title"
            :subtitle="project.subtitle"
            icon="line-md:folder-settings"
        />
        <section>
            <section
                v-for="(item, index) in starredProjects"
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
                                :src="item.image"
                                :alt="item.title"
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
                                        {{ item.title }}
                                    </h1>
                                </div>
                                <div class="flex justify-center">
                                    <a
                                        v-if="item.github"
                                        :href="item.github"
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
                                        v-if="item.video"
                                        :href="item.video"
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
                                        v-if="item.preview"
                                        :href="item.preview"
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
                                {{ item.description }}
                            </p>
                            <div class="flex flex-wrap gap-2 mt-5 mb-5">
                                <UBadge
                                    v-for="technologies in item.technologies"
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
                    v-for="(item, index) in nonStarredProjects"
                    :key="index"
                    class="flex"
                >
                    <LazyDefaultProjectCard :project="item" />
                </div>
            </section>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const landingStore = useLandingStore()
    const { project, starredProjects, nonStarredProjects } =
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
