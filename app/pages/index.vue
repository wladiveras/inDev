<template>
    <section>
        <section
            class="hero max-w-[62rem] mt-50"
            aria-labelledby="main-heading"
        >
            <span class="text-indigo-500">Olá, eu me chamo</span>

            <h1
                id="main-heading"
                class="text-5xl font-bold text-slate-300 mt-2 mb-2"
            >
                Wladi <span class="underline decoration-indigo-500">Veras</span>
            </h1>

            <h2
                id="main-heading"
                class="text-5xl font-bold text-current text-slate-500"
            >
                Crio soluções para a web.
            </h2>

            <div class="text-1xl gap-2 max-w-[40rem] mt-5 text-slate-300 mt-10">
                <p>
                    Sou especializado em criar soluções digitais robustas e de
                    alta qualidade. Com mais de 8 anos de experiência, trabalhei
                    em projetos como o chatbot e o gateway de pagamento, focando
                    sempre na segurança, escalabilidade e na entrega de produtos
                    que atendem às necessidades dos usuários.
                </p>
            </div>
        </section>

        <UCard class="mt-20">
            <template #header>
                <div class="space-y-4 space-x-4 text-center">xx</div>
            </template>
            <div class="flex justify-center items-center">
                <div class="flex flex-col items-center gap-4">
                    <UCollapsible class="flex flex-col gap-2 w-48">
                        <UButton
                            label="Open"
                            color="neutral"
                            variant="subtle"
                            trailing-icon="i-lucide-chevron-down"
                            block
                        />

                        <template #content>
                            <UForm
                                :schema="schema"
                                :state="state"
                                class="space-y-4"
                                @submit="onSubmit"
                            >
                                <UFormField
                                    label="Email"
                                    name="email"
                                >
                                    <UInput v-model="state.email" />
                                </UFormField>

                                <UFormField
                                    label="Password"
                                    name="password"
                                >
                                    <UInput
                                        v-model="state.password"
                                        type="password"
                                    />
                                </UFormField>

                                <UButton type="submit"> Submit </UButton>
                            </UForm>
                        </template>
                    </UCollapsible>
                </div>
            </div>

            <template #footer>
                <div class="flex justify-center items-center">
                    <UPagination
                        v-model:page="page"
                        :total="100"
                    />
                </div>
            </template>
        </UCard>
    </section>
</template>

<script setup lang="ts">
    import { z } from 'zod'
    import type { FormSubmitEvent } from '#ui/types'

    definePageMeta({
        layout: 'default'
    })

    useSeoMeta({
        title: 'Desenvolvedor Fullstack'
    })

    const schema = z.object({
        email: z.string().email('Invalid email'),
        password: z.string().min(8, 'Must be at least 8 characters')
    })

    type Schema = z.output<typeof schema>

    const state = reactive<Partial<Schema>>({
        email: undefined,
        password: undefined
    })

    const toast = useToast()

    async function onSubmit(event: FormSubmitEvent<Schema>) {
        console.log(event.data)
        toast.add({
            title: 'Success',
            description: 'The form has been submitted.',
            color: 'success'
        })
    }

    const page = ref(1)
</script>
