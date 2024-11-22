import type { CustomTabItem } from '~/types'

export const useLandingStore = defineStore('landing', {
    state: () => ({
        hero: {
            image: '/images/me-ia.png',
            label: 'Olá, eu me chamo',
            title: 'Wladi',
            subtitle: ' Veras',
            about: 'Crio soluções para a web.',
            description:
                'Com mais de 8 anos de experiência, trabalhei em projetos como o chatbot e o gateway de pagamento, focando sempre na segurança, escalabilidade e na entrega de produtos que atendem às necessidades dos usuários.'
        },
        about: {
            title: 'Um pouco',
            subtitle: 'Sobre mim',
            content: [
                {
                    text: `Olá! Meu nome é Wladi, e minha paixão é criar soluções
                        digitais inovadoras. Minha trajetória no desenvolvimento
                        web começou quando eu ainda era jovem, experimentando
                        personalizações em plataformas como o WordPress. Essa
                        experiência inicial me ensinou muito sobre HTML, CSS e a
                        base da programação.`
                },
                {
                    text: `Ao longo dos anos, tive a oportunidade de trabalhar em
                        agências de publicidade, start-ups e me aventurar no
                        empreendedorismo, desenvolvendo projetos que uniam
                        tecnologia e inovação. Criei desde um sistema de RP para
                        restaurantes até um gateway de pagamento completo, com
                        integrações complexas. Hoje, meu foco principal está em
                        criar produtos digitais acessíveis e inclusivos,
                        oferecendo experiências ricas e práticas para os
                        usuários.`,
                    type: ''
                },
                {
                    text: `Recentemente, lancei a ferramenta chatbot, onde apliquei
                        minha expertise em micro-serviços, banco de dados e
                        arquiteturas backend e frontend. Com mais de 8 anos de
                        experiência e uma formação técnica sólida, continuo
                        comprometido em desenvolver soluções automatizadas que
                        tragam valor para o dia a dia dos nossos clientes.`,
                    type: ''
                },
                {
                    text: `aqui estão algumas tecnologias com as quais tenho
                        trabalhado recentemente.`,
                    type: 'heading'
                }
            ],
            technologies: [
                {
                    name: 'JavaScript (ES6+)',
                    icon: 'i-logos-javascript',
                    size: '1rem'
                },
                {
                    name: 'TypeScript',
                    icon: 'i-logos-typescript-icon',
                    size: '1rem'
                },
                {
                    name: 'Vue.js',
                    icon: 'i-logos-vue',
                    size: '1rem'
                },
                {
                    name: 'Nuxt',
                    icon: 'i-logos-nuxt-icon',
                    size: '1rem'
                },
                {
                    name: 'Node.js',
                    icon: 'i-logos-nodejs-icon',
                    size: '1rem'
                },
                {
                    name: 'Cloudflare',
                    icon: 'i-logos-cloudflare-icon',
                    size: '0.5rem'
                },
                {
                    name: 'PHP',
                    icon: 'i-logos-php',
                    size: '0.5rem'
                },
                {
                    name: 'Laravel',
                    icon: 'i-logos-laravel',
                    size: '1rem'
                },
                {
                    name: 'WordPress',
                    icon: 'i-logos-wordpress-icon',
                    size: '1rem'
                },
                {
                    name: 'MySQL',
                    icon: 'i-logos-mysql',
                    size: '1rem'
                },
                {
                    name: 'Redis',
                    icon: 'i-logos-redis',
                    size: '1rem'
                },
                {
                    name: 'RabbitMQ',
                    icon: 'i-logos-rabbitmq-icon',
                    size: '1rem'
                }
            ]
        },
        experience: {
            title: 'Minha',
            subtitle: 'Experiência',
            content: <CustomTabItem[]>[
                {
                    icon: 'hugeicons:job-share',
                    title: 'Arquiteto de Soluções',
                    label: 'Workana',
                    url: 'https://www.workana.com/freelancer/5529756ca94d0028765b33de5136df7f',
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
                    url: 'https://greenn.com.br',
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
                    label: 'Alternativa Card',
                    url: 'https://alternativacard.com.br',
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
            ]
        },
        projects: {
            title: 'Meus',
            subtitle: 'Projetos',
            content: [
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
                    preview: 'https://marinabot.com.br',
                    github: ''
                },
                {
                    title: 'Linksplit',
                    star: true,
                    description:
                        'O Linksplit é uma ferramenta que cria um único link para dividir e direcionar leads para diferentes destinos de forma automática e aleatória. Ideal para campanhas de marketing e testes A/B, ele permite separar o tráfego entre vários links, facilitando a análise de dados e o rastreamento de desempenho. Com o Linksplit, você pode segmentar leads e otimizar estratégias, enquanto monitora a performance em tempo real.',
                    technologies: [
                        'Nuxt 3',
                        'Pinia',
                        'Laravel',
                        'Mysql',
                        'Redis'
                    ],
                    image: '/images/project-linksplit.png',
                    preview: 'https://linksplit.com.br',
                    github: ''
                },
                {
                    title: 'in Dev',
                    star: false,
                    description:
                        'O Linksplit é uma ferramenta que cria um único link para dividir e direcionar leads para diferentes destinos de forma automática e aleatória. Ideal para campanhas de marketing e testes A/B, ele permite separar o tráfego entre vários links, facilitando a análise de dados e o rastreamento de desempenho. Com o Linksplit, você pode segmentar leads e otimizar estratégias, enquanto monitora a performance em tempo real.',
                    technologies: ['Nuxt 3', 'Pinia', 'Laravel', 'Mysql'],
                    image: '/images/project-linksplit.png',
                    preview: '',
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
        },
        contact: {
            title: 'Entre em',
            subtitle: 'Contato',
            url: 'https://www.workana.com/freelancer/5529756ca94d0028765b33de5136df7f',
            description: `minha caixa de entrada no Workana está sempre aberta. Se você tiver alguma
                dúvida, projeto interessante ou apenas quiser trocar uma ideia,
                será um prazer conversar com você. Responderei assim que
                possível!`
        },
        footer: {
            text: 'Planejado e Desenvolvido por wladi veras',
            link: 'https://github.com/wladiveras/inDev',
            medias: [
                {
                    icon: 'line-md:instagram',
                    tooltip: 'Instagram',
                    link: 'https://instagram.com/wladi_veras'
                },
                {
                    icon: 'line-md:twitter',
                    tooltip: 'Twitter',
                    link: 'https://x.com/wladiveras'
                },
                {
                    icon: 'line-md:github',
                    tooltip: 'Instagram',
                    link: 'https://github.com/wladiveras'
                },
                {
                    icon: 'line-md:linkedin',
                    tooltip: 'LinkedIn',
                    link: 'https://linkedin.com/in/wladiveras'
                }
            ]
        }
    }),
    getters: {
        starredProjects: (state) =>
            state.projects.content.filter((project) => project.star),
        nonStarredProjects: (state) =>
            state.projects.content.filter((project) => !project.star)
    },
    actions: {}
})
