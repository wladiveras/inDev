<template>
    <section
        id="about"
        class="md:container md:mx-auto md:mt-0"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            :title="about.title"
            :subtitle="about.subtitle"
            icon="line-md:coffee-half-empty-filled-loop"
        />
        <AnimateElement
            animation="fadeIn"
            :duration="2000"
            :delay="300"
            repeat-once
        >
            <section
                class="flex flex-col gap-4 font-thin justify-center items-center px-5"
            >
                <article class="flex flex-col gap-6">
                    <p
                        v-for="(content, index) in about.content"
                        :key="index"
                        :class="{
                            'mt-10 mb-10 border-l-4 border-primary-500 pl-4 font-normal':
                                content.type === 'heading'
                        }"
                    >
                        {{ content.text }}
                    </p>
                </article>

                <ul class="technology-ul flex flex-wrap">
                    <li
                        v-for="tech in about.technologies"
                        :key="tech.name"
                        class="technology-list w-1/2 md:w-1/3 lg:w-1/4 p-2 flex items-center gap-2"
                    >
                        <UIcon
                            :name="tech.icon"
                            :size="tech.size"
                        />
                        <strong class="font-bold">
                            {{ tech.name }}
                        </strong>
                    </li>
                </ul>
            </section>
        </AnimateElement>
    </section>
</template>

<script lang="ts" setup>
    const landingStore = useLandingStore()
    const { about } = storeToRefs(landingStore)
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
