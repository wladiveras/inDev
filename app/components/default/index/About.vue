<template>
    <section
        id="about"
        class="md:container md:mx-auto md:px-[400px]"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            title="Um pouco"
            subtitle="sobre mim"
        />

        <section
            class="flex flex-col gap-4 font-thin justify-center items-center px-5"
        >
            <MotionGroup
                :initial="{
                    x: -100,
                    opacity: 0
                }"
                :visible-once="{
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: 300,
                        duration: 600,
                        type: 'keyframes',
                        ease: 'easeIn'
                    }
                }"
            >
                <article class="flex flex-col gap-6">
                    <p>
                        Olá! Meu nome é Wladi, e minha paixão é criar soluções
                        digitais inovadoras. Minha trajetória no desenvolvimento
                        web começou quando eu ainda era jovem, experimentando
                        personalizações em plataformas como o WordPress. Essa
                        experiência inicial me ensinou muito sobre HTML, CSS e a
                        base da programação.
                    </p>
                    <p>
                        Ao longo dos anos, tive a oportunidade de trabalhar em
                        agências de publicidade, start-ups e me aventurar no
                        empreendedorismo, desenvolvendo projetos que uniam
                        tecnologia e inovação. Criei desde um sistema de RP para
                        restaurantes até um gateway de pagamento completo, com
                        integrações complexas. Hoje, meu foco principal está em
                        criar produtos digitais acessíveis e inclusivos,
                        oferecendo experiências ricas e práticas para os
                        usuários.
                    </p>

                    <p>
                        Recentemente, lancei a ferramenta chatbot, onde apliquei
                        minha expertise em micro-serviços, banco de dados e
                        arquiteturas backend e frontend. Com mais de 8 anos de
                        experiência e uma formação técnica sólida, continuo
                        comprometido em desenvolver soluções automatizadas que
                        tragam valor para o dia a dia dos nossos clientes.
                    </p>
                    <p
                        class="mt-10 mb-10 border-l-4 border-indigo-500 pl-4 font-normal"
                    >
                        aqui estão algumas tecnologias com as quais tenho
                        trabalhado recentemente.
                    </p>
                </article>
            </MotionGroup>

            <ul class="technology-ul flex flex-wrap">
                <MotionGroup
                    :initial="{
                        x: -100,
                        opacity: 0
                    }"
                    :visible-once="{
                        x: 0,
                        opacity: 1,
                        transition: {
                            delay: 600,
                            duration: 1000,
                            type: 'keyframes',
                            ease: 'easeIn'
                        }
                    }"
                >
                    <li
                        v-for="tech in technologies"
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
                </MotionGroup>
            </ul>
        </section>
    </section>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: 'default'
    })

    useSeoMeta({
        title: 'Desenvolvedor Fullstack'
    })

    const technologies = [
        {
            name: 'JavaScript (ES6+)',
            icon: 'i-logos-javascript',
            size: '1rem'
        },
        {
            name: 'TypeScript',
            icon: 'i-logos-typescript-icon',
            size: ''
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
