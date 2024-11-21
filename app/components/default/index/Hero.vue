<template>
    <section
        id="hero-home"
        class="hero max-w-[62rem] mt-30 md:mt-60 mx-auto w-full px-4 md:px-6"
        aria-labelledby="main-heading"
    >
        <section
            class="flex flex-col md:flex-row gap-8 items-center justify-center"
        >
            <section
                class="w-full md:w-1/1 container px-4 sm:px-6 lg:px-8 m-auto flex justify-center items-center"
            >
                <AnimateElement
                    animation="fadeInTopRight"
                    :duration="1000"
                    :delay="700"
                    repeat
                    mobile-animation="none"
                >
                    <section>
                        <span
                            v-if="hero.label"
                            class="text-primary-500 text-xl md:text-2xl"
                        >
                            {{ hero.label }}
                        </span>

                        <h1
                            id="main-heading"
                            class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl"
                        >
                            {{ hero.header }}
                            <span
                                v-if="hero.subHeader"
                                class="underline decoration-primary-500"
                            >
                                {{ hero.subHeader }}
                            </span>
                        </h1>

                        <h2
                            id="main-heading"
                            class="text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-500 sm:text-6xlp"
                        >
                            {{ hero.title }}
                        </h2>

                        <section
                            class="text-1xl gap-2 max-w-[40rem] text-slate-400 dark:text-slate-300 mt-10"
                        >
                            <p>
                                {{ hero.description }}
                            </p>
                        </section>
                    </section>
                </AnimateElement>
            </section>

            <section class="w-full md:w-1/2">
                <AnimateElement
                    animation="fadeInTopLeft"
                    :duration="600"
                    :delay="100"
                    repeat-once
                    mobile-animation="none"
                >
                    <div class="relative group">
                        <div
                            class="absolute -inset-2 bg-gradient-to-r from-slate-600 dark:from-white to-primary-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"
                        />
                        <div
                            class="absolute -inset-1 bg-gradient-to-r from-primary to-primary-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"
                        ></div>
                        <div
                            class="relative mt-20 md:mt-0 animate__animated animate__bounceIn float"
                        >
                            <NuxtImg
                                width="auto"
                                height="auto"
                                format="webp"
                                :src="hero.image"
                                :alt="hero.header"
                                class="w-64 h-110 rounded-md m-auto object-cover border-4 border-white/50 shadow-xl md:transform -translate-x-4 -translate-y-4 md:hover:translate-x-0 md:hover:translate-y-0 transition duration-300"
                            />
                        </div>
                    </div>
                </AnimateElement>
            </section>
        </section>
    </section>
</template>

<script lang="ts" setup>
    const hero = {
        label: 'Olá, eu me chamo',
        header: 'Wladi',
        subHeader: 'Veras',
        title: 'Crio soluções para a web.',
        image: '/images/me-ia.png',

        description:
            'Com mais de 8 anos de experiência, trabalhei em projetos como o chatbot e o gateway de pagamento, focando sempre na segurança, escalabilidade e na entrega de produtos que atendem às necessidades dos usuários.'
    }
</script>

<style lang="css" scoped></style>
