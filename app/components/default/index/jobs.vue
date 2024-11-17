<template>
    <section
        id="jobs"
        class="md:container md:mx-auto"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            title="Minha"
            subtitle="Experiência"
            icon="line-md:coffee-half-empty-filled-loop"
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

                            <ul class="list-disc pl-8 space-y-4 jobs">
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
    import type { CustomTabItem } from '~/types'

    const items = ref<CustomTabItem[]>([
        {
            icon: 'hugeicons:job-share',
            title: 'Arquiteto de Soluções',
            label: 'Workana',
            date: 'Janeiro 2024 - Presente',
            content: [
                {
                    text: 'Estruturar e desenvolver um chatbot completo com automação, utilizando integração com inteligência artificial para personalizar respostas e otimizar o atendimento ao cliente.'
                },
                {
                    text: 'Projetar e implementar interfaces interativas com foco em UI/UX, garantindo uma experiência de usuário fluida e centrada nas necessidades do cliente final.'
                },
                {
                    text: 'Desenvolver uma solução de divisão de links (Linksplit) para campanhas de marketing, gerando URLs randômicas e rastreáveis para segmentação e análise de tráfego.'
                },
                {
                    text: 'Criar um layout de checkout totalmente responsivo, priorizando usabilidade e conversão para proporcionar uma experiência de compra eficiente em múltiplos dispositivos.'
                },
                {
                    text: 'Planejar o escopo do projeto e liderar o squad em todas as etapas, desde a concepção inicial até a execução e entrega final.'
                },
                {
                    text: 'Gerenciar o sistema, assegurando sua escalabilidade, estabilidade e eficiência operacional, além de implementar práticas de segurança robustas e estratégias eficazes de proteção de dados.'
                }
            ]
        },
        {
            icon: 'hugeicons:job-share',
            title: 'Fullstack Developer',
            label: 'Greenn',
            date: 'fevereiro 2022 - Janeiro 2024',
            content: [
                {
                    text: `Participar do desenvolvimento de soluções digitais utilizando uma stack moderna, incluindo Laravel, Lumen, Node.js, MySQL, Redis, RabbitMQ, Vue.js, Nuxt.js, TypeScript, Nuxt UI e Tailwind.`
                },
                {
                    text: 'Atuar em três squads, contribuindo para a criação de novas funcionalidades e manutenção de produtos como greenn.com.br, greenn.club e gdigital.com.br.'
                },
                {
                    text: 'Implementar soluções robustas para vendas, gateways de pagamento e checkouts, além do backend para gerenciamento de pagamentos e assinaturas recorrentes.'
                },
                {
                    text: 'Desenvolver plataformas para cursos online e funis de vendas, garantindo integração e performance otimizadas.'
                },
                {
                    text: 'Participar do planejamento, definição de escopo e garantia de qualidade dos projetos, assegurando entregas eficientes e de alta qualidade.'
                },
                {
                    text: 'Contribuir para a estabilidade e escalabilidade das aplicações, colaborando com equipes técnicas em soluções robustas e sustentáveis.'
                }
            ]
        },
        {
            icon: 'hugeicons:job-share',
            title: 'Fullstack Developer',
            label: 'AlternativaCard',
            date: 'Julho 2021 - agosto 2022',
            content: [
                {
                    text: `Estruturar e desenvolver um projeto completo utilizando Laravel, Vue 3 (Composition API), MySQL e Redis para cache, otimizando a performance do sistema.`
                },
                {
                    text: 'Criar o escopo do projeto e conduzir melhorias contínuas, realizando ajustes e otimizações para aprimorar desempenho e funcionalidade.'
                },
                {
                    text: 'Desenvolver layouts interativos, incluindo a criação de cards que permitiam aos clientes realizar pedidos diretamente pelo site e acompanhar o status em tempo real.'
                },
                {
                    text: 'Gerenciar o sistema, garantindo sua estabilidade, escalabilidade e eficiência operacional.'
                },
                {
                    text: 'Ser responsável pelo deployment do sistema, assegurando sua segurança e implementando práticas robustas de proteção de dados.'
                }
            ]
        }
    ])
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
        color: var(--color-indigo-500);
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
