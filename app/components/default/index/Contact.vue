<template>
    <section
        id="contact"
        class="md:container md:mx-auto md:mt-0"
    >
        <DefaultTitle
            class="md:mt-0"
            :title="contact.title"
            :subtitle="contact.subtitle"
            center
        />

        <section
            class="flex flex-col gap-4 font-thin justify-center items-center px-5 text-center"
        >
            <p class="mb-10">
                {{ contact.description }}
            </p>
            <UButton
                :href="`${contact.url}`"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="External Link"
                icon="material-symbols:connect-without-contact"
                variant="outline"
                size="xl"
                class="text-primary-500 border-1 border-primary-500/100 cursor-pointer mr-10"
            >
                Entre em contato
            </UButton>
        </section>
    </section>
</template>

<script lang="ts" setup>
    const landingStore = useLandingStore()
    const { contact } = storeToRefs(landingStore)
</script>

<style scoped></style>
