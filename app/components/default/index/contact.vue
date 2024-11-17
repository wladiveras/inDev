<template>
    <section
        id="contact"
        class="md:container md:mx-auto md:mt-0"
    >
        <DefaultTitle
            class="md:mt-0"
            title="Entre"
            subtitle="em contato"
            center
        />

        <section
            class="flex flex-col gap-4 font-thin justify-center items-center px-5 text-center"
        >
            <p class="mb-10">
                Embora no momento eu não esteja em busca de novas oportunidades,
                minha caixa de entrada está sempre aberta. Se você tiver alguma
                dúvida, projeto interessante ou apenas quiser trocar uma ideia,
                será um prazer conversar com você. Responderei assim que
                possível!
            </p>
            <UButton
                href="https://wa.me/5521969098986?text=Olá Wladi, gostaria de solicitar seus serviços."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="External Link"
                icon="material-symbols:connect-without-contact"
                variant="outline"
                size="xl"
                class="text-indigo-500 border-1 border-indigo-500/100 cursor-pointer mr-10"
            >
                Entre em contato
            </UButton>
        </section>
    </section>
</template>

<script lang="ts" setup></script>

<style scoped></style>
