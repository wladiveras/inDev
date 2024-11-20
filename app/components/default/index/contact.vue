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
                minha caixa de entrada está sempre aberta. Se você tiver alguma
                dúvida, projeto interessante ou apenas quiser trocar uma ideia,
                será um prazer conversar com você. Responderei assim que
                possível!
            </p>
            <UButton
                target="_blank"
                rel="noopener noreferrer"
                aria-label="External Link"
                icon="material-symbols:connect-without-contact"
                variant="outline"
                size="xl"
                class="text-primary-500 border-1 border-primary-500/100 cursor-pointer mr-10"
                @click="handleGeneratePDF"
            >
                Entre em contato
            </UButton>
        </section>
    </section>
</template>

<script lang="ts" setup>
    const { generatePDFWithCustomization } = usePDF()

    const handleGeneratePDF = () => {
        generatePDFWithCustomization()
    }
</script>

<style scoped></style>
