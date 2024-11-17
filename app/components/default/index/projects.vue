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

        <section
            class="flex flex-col gap-4 font-thin justify-center items-center px-5"
        >
            <!-- First Project (Left Image) -->
            <article class="flex flex-col md:flex-row justify-center gap-6">
                <section class="w-full md:w-1/2">
                    <img
                        src="/images/project-chatbot.png"
                        class="rounded saturate-50 hover:saturate-150 content-center mb-10 md:mb-0"
                    />
                </section>
                <section class="w-full md:w-1/2">
                    <div class="flex flex-nowrap justify-between items-center">
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
                                WhatsApp - Chatbot
                            </h1>
                        </div>
                        <div class="flex justify-center">
                            <a
                                href="https://test.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="External Link"
                            >
                                <UIcon
                                    class="mr-1.5 relative top-[-0.1rem] hover:text-indigo-500 transition-all duration-300 cursor-pointer"
                                    name="line-md:github"
                                    size="1.5rem"
                                />
                            </a>
                            <a
                                href="https://test.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="External Link"
                            >
                                <UIcon
                                    class="mr-1.5 relative top-[-0.1rem] hover:text-indigo-500 transition-all duration-300 cursor-pointer"
                                    name="line-md:external-link"
                                    size="1.5rem"
                                />
                            </a>
                        </div>
                    </div>
                    <USeparator class="mb-5" />
                    <p class="font-thin text-sm">
                        O chatbot foi desenvolvido para empresas que buscam
                        otimizar o atendimento e criar conexões ágeis com seus
                        clientes. Com funcionalidades como fluxos automatizados,
                        envio de áudios e respostas naturais, ele transforma a
                        comunicação em um processo mais simples e eficiente,
                        entregando resultados reais para o negócio.
                    </p>
                    <div class="flex flex-wrap gap-2 mt-5 mb-5">
                        <UBadge>Nuxt 3</UBadge>
                        <UBadge>Pinia</UBadge>
                        <UBadge>Laravel</UBadge>
                        <UBadge>Mysql</UBadge>
                        <UBadge>Redis</UBadge>
                        <UBadge>Evolution Api</UBadge>
                        <UBadge>LLama 3.2</UBadge>
                    </div>
                </section>
            </article>

            <USeparator class="mb-10 mt-10" />

            <!-- Second Project (Right Image) -->
            <article class="flex flex-col md:flex-row justify-center gap-6">
                <section class="w-full md:w-1/2 order-2 md:order-1">
                    <div class="flex flex-nowrap justify-between items-center">
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
                                Linksplit - seu alcance com um único link.
                            </h1>
                        </div>
                        <div class="flex justify-center">
                            <a
                                href="https://test.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="External Link"
                            >
                                <UIcon
                                    class="mr-1.5 relative top-[-0.1rem] hover:text-indigo-500 transition-all duration-300 cursor-pointer"
                                    name="line-md:github"
                                    size="1.5rem"
                                />
                            </a>
                            <a
                                href="https://test.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="External Link"
                            >
                                <UIcon
                                    class="mr-1.5 relative top-[-0.1rem] hover:text-indigo-500 transition-all duration-300 cursor-pointer"
                                    name="line-md:external-link"
                                    size="1.5rem"
                                />
                            </a>
                        </div>
                    </div>
                    <USeparator class="mb-5" />
                    <p class="font-thin text-sm">
                        O Linksplit é uma ferramenta que cria um único link para
                        dividir e direcionar leads para diferentes destinos de
                        forma automática e aleatória. Ideal para campanhas de
                        marketing e testes A/B, ele permite separar o tráfego
                        entre vários links, facilitando a análise de dados e o
                        rastreamento de desempenho. Com o Linksplit, você pode
                        segmentar leads e otimizar estratégias, enquanto
                        monitora a performance em tempo real.
                    </p>
                    <div class="flex flex-wrap gap-2 mt-5 mb-5">
                        <UBadge>Nuxt 3</UBadge>
                        <UBadge>Pinia</UBadge>
                        <UBadge>Laravel</UBadge>
                        <UBadge>Mysql</UBadge>
                    </div>
                </section>
                <section class="w-full md:w-1/2 order-1 md:order-2">
                    <img
                        src="/images/project-linksplit.png"
                        class="rounded saturate-50 hover:saturate-150 content-center mb-10 md:mb-0"
                    />
                </section>
            </article>
            <USeparator class="mb-10 mt-10" />

            <div class="container mx-auto py-16 px-4">
                <h1 class="text-2xl font-bold mb-8 text-center">
                    Outros <span class="text-indigo-500">projetos</span>
                </h1>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-slate-800 rounded-lg shadow-lg p-8">
                        <div class="flex justify-between items-center mb-4">
                            <UIcon
                                name="line-md:folder"
                                size="3rem"
                                class="text-indigo-500 relative top-[-0.3rem]"
                            />

                            <div class="flex justify-center">
                                <a
                                    href="https://test.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="External Link"
                                >
                                    <UIcon
                                        class="mr-1.5 relative top-[-0.1rem] hover:text-indigo-500 transition-all duration-300 cursor-pointer"
                                        name="line-md:github"
                                        size="1.5rem"
                                    />
                                </a>
                                <a
                                    href="https://test.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="External Link"
                                >
                                    <UIcon
                                        class="mr-1.5 relative top-[-0.1rem] hover:text-indigo-500 transition-all duration-300 cursor-pointer"
                                        name="line-md:external-link"
                                        size="1.5rem"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <h2 class="text-md font-bold">
                                Desenvolvendo Sites com WordPress e Elementor
                            </h2>
                        </div>

                        <p class="text-gray-400 text-xs">
                            Com WordPress e Elementor, criar sites profissionais
                            e funcionais é simples e eficiente. O WordPress
                            oferece flexibilidade, enquanto o Elementor permite
                            construir layouts personalizados com ferramentas de
                            arrastar e soltar. Juntos, eles garantem design
                            profissional, responsividade e SEO otimizado,
                            transformando ideias em experiências digitais
                            incríveis.
                        </p>

                        <div class="flex flex-wrap gap-2 mt-5 mb-5">
                            <UBadge>Nuxt 3</UBadge>
                            <UBadge>Pinia</UBadge>
                            <UBadge>Laravel</UBadge>
                            <UBadge>Mysql</UBadge>
                        </div>
                    </div>

                    <div class="bg-slate-800 rounded-lg shadow-lg p-8">
                        <div class="flex justify-between items-center mb-4">
                            <UIcon
                                name="line-md:folder"
                                size="3rem"
                                class="text-indigo-500 relative top-[-0.3rem]"
                            />

                            <div class="flex justify-center">
                                <a
                                    href="https://test.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="External Link"
                                >
                                    <UIcon
                                        class="mr-1.5 relative top-[-0.1rem] hover:text-indigo-500 transition-all duration-300 cursor-pointer"
                                        name="line-md:github"
                                        size="1.5rem"
                                    />
                                </a>
                                <a
                                    href="https://test.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="External Link"
                                >
                                    <UIcon
                                        class="mr-1.5 relative top-[-0.1rem] hover:text-indigo-500 transition-all duration-300 cursor-pointer"
                                        name="line-md:external-link"
                                        size="1.5rem"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <h2 class="text-md font-bold">
                                Desenvolvendo Sites com WordPress e Elementor
                            </h2>
                        </div>

                        <p class="text-gray-400 text-xs">
                            Com WordPress e Elementor, criar sites profissionais
                            e funcionais é simples e eficiente. O WordPress
                            oferece flexibilidade, enquanto o Elementor permite
                            construir layouts personalizados com ferramentas de
                            arrastar e soltar. Juntos, eles garantem design
                            profissional, responsividade e SEO otimizado,
                            transformando ideias em experiências digitais
                            incríveis.
                        </p>

                        <div class="flex flex-wrap gap-2 mt-5 mb-5">
                            <UBadge>Nuxt 3</UBadge>
                            <UBadge>Pinia</UBadge>
                            <UBadge>Laravel</UBadge>
                            <UBadge>Mysql</UBadge>
                        </div>
                    </div>

                    <div class="bg-slate-800 rounded-lg shadow-lg p-8">
                        <div class="flex justify-between items-center mb-4">
                            <UIcon
                                name="line-md:folder"
                                size="3rem"
                                class="text-indigo-500 relative top-[-0.3rem]"
                            />

                            <div class="flex justify-center">
                                <a
                                    href="https://test.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="External Link"
                                >
                                    <UIcon
                                        class="mr-1.5 relative top-[-0.1rem] hover:text-indigo-500 transition-all duration-300 cursor-pointer"
                                        name="line-md:github"
                                        size="1.5rem"
                                    />
                                </a>
                                <a
                                    href="https://test.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="External Link"
                                >
                                    <UIcon
                                        class="mr-1.5 relative top-[-0.1rem] hover:text-indigo-500 transition-all duration-300 cursor-pointer"
                                        name="line-md:external-link"
                                        size="1.5rem"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <h2 class="text-md font-bold">
                                Desenvolvendo Sites com WordPress e Elementor
                            </h2>
                        </div>

                        <p class="text-gray-400 text-xs">
                            Com WordPress e Elementor, criar sites profissionais
                            e funcionais é simples e eficiente. O WordPress
                            oferece flexibilidade, enquanto o Elementor permite
                            construir layouts personalizados com ferramentas de
                            arrastar e soltar. Juntos, eles garantem design
                            profissional, responsividade e SEO otimizado,
                            transformando ideias em experiências digitais
                            incríveis.
                        </p>

                        <div class="flex flex-wrap gap-2 mt-5 mb-5">
                            <UBadge>Nuxt 3</UBadge>
                            <UBadge>Pinia</UBadge>
                            <UBadge>Laravel</UBadge>
                            <UBadge>Mysql</UBadge>
                        </div>
                    </div>
                </div>
            </div>
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
