<template>
    <section
        id="experience"
        class="md:container md:mx-auto"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            :title="experience.title"
            :subtitle="experience.subtitle"
            icon="line-md:clipboard-list"
        />

        <section
            class="flex flex-col gap-4 font-thin justify-center items-center px-5"
        >
            <article class="flex flex-col gap-6">
                <UTabs
                    :items="experience.content"
                    class="w-full"
                >
                    <template #content="{ item }">
                        <AnimateElement
                            animation="fadeIn"
                            :duration="2000"
                            :delay="300"
                            repeat-once
                        >
                            <div class="container mx-auto px-4 py-16">
                                <h1 class="text-2xl font-bold mb-4">
                                    {{ item.title }}
                                    <a
                                        class="text-primary-500"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="External Link"
                                        :href="item.url"
                                    >
                                        @{{ item.label }}
                                    </a>
                                </h1>

                                <p class="text-md mb-8">{{ item.date }}</p>

                                <ul class="list-disc pl-8 space-y-4 jobs">
                                    <li
                                        v-for="(content, index) in item.content"
                                        :key="`${item.label}-${index}`"
                                    >
                                        <p>{{ content.text }}</p>
                                    </li>
                                </ul>
                            </div>
                        </AnimateElement>
                    </template>
                </UTabs>
            </article>
        </section>
    </section>
</template>

<script lang="ts" setup>
    const landingStore = useLandingStore()
    const { experience } = storeToRefs(landingStore)
</script>

<style scoped>
    .jobs {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .jobs li {
        position: relative;
        padding-left: 20px;
    }
    .jobs li::before {
        content: '▹';
        position: absolute;
        top: -11px;
        left: -10px;
        font-size: 2rem;
        color: var(--color-primary-500);
    }

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
