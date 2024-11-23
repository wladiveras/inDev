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
                },
                {
                    name: 'figma',
                    icon: 'i-logos-figma',
                    size: '1rem'
                },
                {
                    name: 'React',
                    icon: 'i-logos-react',
                    size: '1rem'
                },
                {
                    name: 'Nest.js',
                    icon: 'i-logos-nestjs',
                    size: '1rem'
                },
                {
                    name: 'Docker',
                    icon: 'i-logos-docker-icon',
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
                    url: 'https://alternativafc.com.br/',
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
                    title: 'Chatbot - Automação',
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
                    github: '',
                    video: 'https://www.youtube.com/watch?v=QNYQvQ2Iisg&t'
                },
                {
                    title: 'justdo.cash',
                    star: true,
                    description:
                        'Um gerador Landing page SaaS projetada para potencializar a apresentação do seu serviço de assinatura de produtos. Com recursos de segurança integrados, ela garante a proteção de dados e transações, enquanto oferece uma experiência confiável para seus clientes. Além disso, você conta com um dashboard intuitivo, que permite monitorar facilmente vendas e assinaturas em tempo real, simplificando a gestão do seu negócio. Para completar, um checkout otimizado está pronto para vender todos os seus produtos de forma rápida e eficiente. Transforme suas ideias em resultados com uma solução prática e completa.',
                    technologies: [
                        'Nuxt 3',
                        'Pinia',
                        'Laravel',
                        'Mysql',
                        'typescript'
                    ],
                    image: '/images/project-justdocash.png',
                    preview: 'https://justdo.cash',
                    github: '',
                    video: ''
                },
                {
                    title: 'Zaptus',
                    star: true,
                    description:
                        'A Zaptus é um projeto que evoluiu para se tornar uma empresa especializada no desenvolvimento de software sob medida. Com foco em criar soluções inovadoras e eficientes, a Zaptus atende às necessidades de negócios que buscam se destacar no mercado digital. Desde sistemas robustos até aplicações personalizadas, a Zaptus combina tecnologia de ponta com metodologias ágeis para entregar resultados que realmente fazem a diferença. Nossa missão é transformar ideias em produtos funcionais e escaláveis, sempre com foco na experiência do usuário e nos objetivos estratégicos de nossos clientes. Mais do que uma empresa, a Zaptus é parceira no desenvolvimento de soluções tecnológicas que impulsionam o sucesso dos negócios.',
                    technologies: ['React', 'Laravel', 'Mysql'],
                    image: '/images/project-zaptus.png',
                    preview: '', // preview: 'https://www.zaptus.com.br/',
                    github: '',
                    video: ''
                },
                {
                    title: 'inDev - portfólio',
                    star: false,
                    description:
                        'O inDev é um portfólio open source, criado para quem busca uma solução prática e eficiente para exibir serviços e conquistas. Com estrutura otimizada e fácil personalização, permite apresentar sua trajetória de forma profissional e organizada. Ideal para freelancers, desenvolvedores e criativos, o inDev destaca projetos, compartilha experiências e atrai novas oportunidades. Simples de usar e focado em resultados, é a ferramenta perfeita para mostrar seu talento de forma clara e objetiva.',
                    technologies: [
                        'Nuxt 3',
                        'Pinia',
                        'cloudflare',
                        'nuxthub',
                        'typescript'
                    ],
                    image: '/images/project-indev.png',
                    preview: 'https://wladi.com.br',
                    github: 'https://github.com/wladiveras/inDev',
                    video: ''
                },
                {
                    title: 'Linksplit',
                    star: false,
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
                    github: '',
                    video: ''
                },
                {
                    title: 'Natural Life',
                    star: false,
                    description:
                        '"Transforme Seu Corpo, Transforme Sua Vida" é um template projetado para academias e espaços fitness. Ele oferece uma estrutura pronta, com design moderno e funcionalidades voltadas para destacar equipamentos, instrutores e a comunidade. O template pode ser facilmente personalizado para se adequar à identidade da academia, proporcionando uma plataforma eficiente e atraente para os visitantes.',
                    technologies: [
                        'React',
                        'Typescript',
                        'Javascript',
                        'Nodejs'
                    ],
                    image: '',
                    preview: 'https://zaptus-academia.vercel.app/',
                    github: '',
                    video: ''
                },
                {
                    title: 'Sabor & Arte',
                    star: false,
                    description:
                        '"Sabor & Arte" é um template projetado para restaurantes, oferecendo uma estrutura elegante e funcional. Com foco em destacar a experiência gastronômica, o template permite apresentar o menu, ambiente e diferenciais do restaurante de forma atraente e intuitiva. Ele pode ser facilmente personalizado para se adequar ao estilo e identidade do restaurante, proporcionando uma plataforma de fácil navegação e uma experiência digital envolvente para os visitantes.',
                    technologies: [
                        'React',
                        'Typescript',
                        'Javascript',
                        'Nodejs'
                    ],
                    image: '',
                    preview: 'https://zaptus-site-restaurante.vercel.app/',
                    github: '',
                    video: ''
                },
                {
                    title: 'Elite Fitness',
                    star: false,
                    description:
                        '"Descubra o Poder da Natureza" é um template pronto, projetado para exibir produtos naturais e promover o bem-estar. Ele oferece uma estrutura funcional e visualmente atraente, que pode ser personalizada conforme as necessidades do projeto, economizando tempo e garantindo uma navegação eficiente para os visitantes.',
                    technologies: [
                        'React',
                        'Typescript',
                        'Javascript',
                        'Nodejs'
                    ],
                    image: '',
                    preview: 'https://zaptus-natural.vercel.app/',
                    github: '',
                    video: ''
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
