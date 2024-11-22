<template>
    <section
        id="about"
        class="md:container md:mx-auto md:mt-0"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            title="xxx"
            subtitle="xx"
            icon="line-md:coffee-half-empty-filled-loop"
        />
        <AnimateElement
            animation="fadeIn"
            :duration="2000"
            :delay="300"
            repeat-once
        >
            <section
                class="flex flex-col gap-4 font-thin justify-center items-center px-5"
            ></section>
        </AnimateElement>
    </section>
</template>

<script setup lang="ts"></script>
