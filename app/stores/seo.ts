export const useSeoStore = defineStore('seo', {
    state: () => ({
        title: 'Wladi Veras',
        titleCallback: 'Wladi Veras • Desenvolvedor Fullstack',
        website: 'https://wladi.com.br',
        keywords:
            'Wlad, Wladi, GTA, GTA RP, GTA ROLEPLAY, RP, roleplay, Laravel, Vue.js, Nuxt.js, PHP, Tailwind CSS, Bootstrap, frameworks, bibliotecas, programador, desenvolvedor, fullstack, backend, frontend, back-end, front-end, ia, inteligencia artificial, responsivo, profissional de TI, profissional',
        description:
            'Desenvolvedor Fullstack com 8 anos experiência em Laravel, Vue.js, Nuxt.js, PHP, Tailwind CSS, Bootstrap, e outros frameworks e bibliotecas.',
        image: '/images/seo.png'
    }),
    getters: {
        getTitle: (state) => {
            return state.title
        },
        getTitleCallback: (state) => {
            return state.titleCallback
        },
        getWebsite: (state) => {
            return state.website
        },
        getKeywords: (state) => {
            return state.keywords
        },
        getDescription: (state) => {
            return state.description
        },
        getImage: (state) => {
            return state.image
        }
    },
    actions: {}
})
