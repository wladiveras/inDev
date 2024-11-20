<template>
    <section
        id="projects"
        class="md:container md:mx-auto"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            title="Meus"
            subtitle="Projetos"
            icon="line-md:folder-settings"
        />
        <section>
            <section
                v-for="(project, index) in starredProjects"
                :key="index"
            >
                <article
                    :class="[
                        'flex flex-wrap md:flex-nowrap gap-10 mb-10',
                        { 'md:flex-row-reverse': index % 2 !== 0 }
                    ]"
                >
                    <div class="w-full md:w-1/2">
                        <img
                            :src="project.image"
                            :alt="project.title"
                            class="rounded-lg w-full"
                        />
                    </div>

                    <div class="w-full md:w-1/2">
                        <div
                            class="flex flex-nowrap justify-between items-center"
                        >
                            <div>
                                <span class="relative text-amber-400">
                                    <UIcon
                                        class="relative top-1 text-amber-400"
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
                <USeparator class="mb-10 mt-10">
                    <template #default>
                        <MainLogo
                            width="25"
                            height="25"
                            color="#4f46e5"
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

            <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                    v-for="(project, index) in nonStarredProjects"
                    :key="index"
                    class="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8"
                >
                    <div class="flex justify-between items-center mb-4">
                        <UIcon
                            name="line-md:folder"
                            size="3rem"
                            class="text-primary-500 relative top-[-0.3rem]"
                        />

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
                    <div class="flex mb-4">
                        <h2 class="text-md font-bold">
                            {{ project.title }}
                        </h2>
                    </div>

                    <p class="text-gray-400 text-xs">
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
            </section>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const projects = [
        {
            title: 'Chatbot',
            star: true,
            description:
                'O chatbot foi desenvolvido para empresas que buscam otimizar o atendimento e criar conexões ágeis com seus clientes. Com funcionalidades como fluxos automatizados, envio de áudios e respostas naturais, ele transforma a comunicação em um processo mais simples e eficiente, entregando resultados reais para o negócio.',
            technologies: [
                'Nuxt 3',
                'Pinia',
                'Laravel',
                'Mysql',
                'Redis',
                'Evolution Api',
                'LLama 3.2'
            ],
            image: '/images/project-chatbot.png',
            preview: 'XXXXXXXXXXXXXXXX',
            github: 'XXXXXXXXXXXXXXXX'
        },
        {
            title: 'Chatbot',
            star: true,
            description:
                'O chatbot foi desenvolvido para empresas que buscam otimizar o atendimento e criar conexões ágeis com seus clientes. Com funcionalidades como fluxos automatizados, envio de áudios e respostas naturais, ele transforma a comunicação em um processo mais simples e eficiente, entregando resultados reais para o negócio.',
            technologies: [
                'Nuxt 3',
                'Pinia',
                'Laravel',
                'Mysql',
                'Redis',
                'Evolution Api',
                'LLama 3.2'
            ],
            image: '/images/project-chatbot.png',
            preview: 'XXXXXXXXXXXXXXXX',
            github: 'XXXXXXXXXXXXXXXX'
        },
        {
            title: 'Linksplit',
            star: false,
            description:
                'O Linksplit é uma ferramenta que cria um único link para dividir e direcionar leads para diferentes destinos de forma automática e aleatória. Ideal para campanhas de marketing e testes A/B, ele permite separar o tráfego entre vários links, facilitando a análise de dados e o rastreamento de desempenho. Com o Linksplit, você pode segmentar leads e otimizar estratégias, enquanto monitora a performance em tempo real.',
            technologies: ['Nuxt 3', 'Pinia', 'Laravel', 'Mysql'],
            image: '/images/project-linksplit.png',
            preview: '',
            github: 'XXXXXXXXXXXXXXXX'
        }
    ]

    const starredProjects = computed(() =>
        projects.filter((project) => project.star)
    )
    const nonStarredProjects = computed(() =>
        projects.filter((project) => !project.star)
    )
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
