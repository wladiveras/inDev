<template>
    <section
        v-for="(item, index) in hero"
        :key="index"
        class="hero max-w-[62rem] mt-30 md:mt-60 mx-auto w-full px-4 md:px-6"
        aria-labelledby="main-heading"
    >
        <section
            class="flex flex-col md:flex-row gap-8 items-center justify-center"
        >
            <section
                class="w-full md:w-1/1 container px-4 sm:px-6 lg:px-8 m-auto flex justify-center items-center"
            >
                <DefaultHeroTitle :hero="item" />
            </section>

            <section class="w-full md:w-1/2">
                <DefaultHeroContent :hero="item" />
            </section>
        </section>
    </section>
</template>

<script lang="ts" setup>
    const landingStore = useLandingStore()
    const { hero } = storeToRefs(landingStore)
</script>

<style lang="css" scoped></style>
