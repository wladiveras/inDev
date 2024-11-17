<template>
    <section
        id="jobs"
        class="md:container md:mx-auto"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            title="Minha"
            subtitle="Experiência"
        />

        <section
            class="flex flex-col gap-4 font-thin justify-center items-center px-5"
        >
            <article class="flex flex-col gap-6">
                <UTabs
                    :items="items"
                    class="w-full"
                >
                    <template #content="{ item }">
                        <div class="container mx-auto px-4 py-16">
                            <h1 class="text-2xl font-bold mb-4">
                                {{ item.title }}
                                <span class="text-indigo-500">
                                    @{{ item.label }}
                                </span>
                            </h1>

                            <p class="text-md mb-8">{{ item.date }}</p>

                            <ul class="list-disc pl-8 space-y-4">
                                <li
                                    v-for="(content, index) in item.content"
                                    :key="`${item.label}-${index}`"
                                >
                                    <p>{{ content.text }}</p>
                                </li>
                            </ul>
                        </div>
                    </template>
                </UTabs>
            </article>
        </section>
    </section>
</template>

<script lang="ts" setup>
    import type { TabsItem } from '~/types'

    const items = ref<TabsItem[]>([
        {
            icon: 'hugeicons:job-share',
            title: 'Arquiteto de Soluções',
            label: 'Workana',
            date: 'May 2018 - Present',
            content: [
                {
                    text: 'exemplo 1'
                },
                {
                    text: 'exemplo 2'
                },
                {
                    text: 'exemplo 3'
                }
            ]
        },
        {
            icon: 'hugeicons:job-share',
            title: 'Fullstack Developer',
            label: 'Greenn',
            date: 'Maio 2018 - Presente',
            content: [
                {
                    text: 'exemplo 1'
                },
                {
                    text: 'exemplo 2'
                },
                {
                    text: 'exemplo 3'
                }
            ]
        },
        {
            icon: 'hugeicons:job-share',
            title: 'Fullstack Developer',
            label: 'AlternativaCard',
            date: 'Maio 2018 - Presente',
            content: [
                {
                    text: 'exemplo 1'
                },
                {
                    text: 'exemplo 2'
                },
                {
                    text: 'exemplo 3'
                }
            ]
        }
    ])
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
