<template>
    <UCard
        id="about"
        class="mt-20"
    >
        <template #header>
            <div class="flex items-center justify-center gap-4">
                <UIcon
                    name="fa:user-secret"
                    size="1.2rem"
                />
                <span>Sobre mim</span>
            </div>
        </template>
        <div class="flex justify-center items-center">
            <div class="flex flex-col items-center gap-4 font-thin">
                <section class="flex flex-col gap-6">
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
                    <p class="mt-10">
                        aqui estão algumas tecnologias com as quais tenho
                        trabalhado recentemente.
                    </p>
                </section>

                <ul class="flex flex-wrap">
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon name="i-logos-javascript" />
                        JavaScript (ES6+)
                    </li>
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon name="i-logos-typescript-icon" />
                        typescript
                    </li>
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon name="logos:vue" />
                        Vue.js
                    </li>
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon name="i-logos-nuxt-icon" />
                        Nuxt
                    </li>
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon name="i-logos-nodejs-icon" />
                        Node.js
                    </li>
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon
                            name="logos:cloudflare-icon"
                            size="0.5rem"
                        />
                        Cloudflare
                    </li>
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon
                            name="i-logos-php"
                            size="0.5rem"
                        />
                        PHP
                    </li>
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon name="i-logos-laravel" />
                        Laravel
                    </li>
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon name="i-logos-wordpress-icon" />
                        WordPress
                    </li>
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon name="i-logos-mysql-icon" />
                        Mysql
                    </li>
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon name="devicon:redis" />
                        Redis
                    </li>
                    <li class="w-1/2 md:w-1/3 p-2 flex items-center gap-2">
                        <UIcon name="i-logos-rabbitmq-icon" />
                        RabbitMQ
                    </li>
                </ul>
            </div>
        </div>

        <template #footer>
            <div class="flex justify-center items-center">
                <UCarousel
                    v-slot="{ item }"
                    :items="personalPhotos"
                    :ui="{ item: 'basis-1/3' }"
                >
                    <img
                        :src="item"
                        width="234"
                        height="234"
                        class="rounded-lg"
                    />
                </UCarousel>
            </div>
        </template>
    </UCard>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: 'default'
    })

    useSeoMeta({
        title: 'Desenvolvedor Fullstack'
    })

    const personalPhotos = [
        'https://picsum.photos/640/640?random=1',
        'https://picsum.photos/640/640?random=2',
        'https://picsum.photos/640/640?random=3',
        'https://picsum.photos/640/640?random=4',
        'https://picsum.photos/640/640?random=5',
        'https://picsum.photos/640/640?random=6'
    ]
</script>

<style scoped>
    body {
        background-color: #222;

        color: #ccc;

        font-family: monospace;
    }

    ul {
        list-style-type: none;

        padding: 0;

        margin: 0;
    }

    li {
        margin-bottom: 10px;
    }

    li::before {
        content: '▶';

        color: #49e79c;

        margin-right: 10px;
    }
</style>
