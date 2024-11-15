<template>
    <div>
        <section
            :class="{ center: 'text-center' }"
            class="mt-10"
        >
            <h2
                class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
            >
                <span>
                    {{ props.title }} <br />
                    <span
                        v-if="props.subtitle"
                        class="ml-5 text-indigo-500"
                    >
                        {{ props.subtitle }}
                    </span>
                </span>
            </h2>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        title: string
        subtitle?: string
        center?: boolean
        animate?: boolean
    }>()
</script>

<style></style>
