<template>
    <section
        id="projects"
        class="md:container md:mx-auto"
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
                <div class="flex flex-col gap-2">
                    <h3 class="text-2xl font-bold text-white">Em construção</h3>

                    <p class="text-white">Alguma coisa nova vai vir.</p>
                </div>
            </article>
        </section>
    </section>
</template>

<script lang="ts" setup>
    const items = [
        {
            label: 'Chatbot',
            icon: 'i-lucide-user'
        },
        {
            label: 'Greenn',
            icon: 'i-lucide-user'
        },
        {
            label: 'Alternativa Card',
            icon: 'i-lucide-lock'
        }
    ]
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
