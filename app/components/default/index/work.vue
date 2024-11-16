<template>
    <section
        id="work"
        class="md:container md:mx-auto md:px-[400px]"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            title="Meus"
            subtitle="Projetos"
        />

        <section
            class="flex flex-col gap-4 font-thin justify-center items-center px-5"
        >
            <article class="flex flex-col gap-6">
                <p>Em desenvolvimento.</p>
            </article>
        </section>
    </section>
</template>

<script lang="ts" setup></script>

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
