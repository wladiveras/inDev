<template>
    <AnimateElement
        animation="fadeInUp"
        :duration="600"
        :delay="100"
        repeat-once
    >
        <section
            :ref="title"
            class="mt-0 md:mt-50 mb-10 border-b-2 pb-6 border-primary-500 text-center md:text-left flex items-center justify-between gap-4"
            :class="{ 'md:pl-4': !center }"
        >
            <h2
                :class="{ 'md:text-center md:w-full': center }"
                class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl w-full"
            >
                <span>
                    {{ props.title }} <br />
                    <span
                        v-if="props.subtitle"
                        :class="{
                            'md:ml-10': !center
                        }"
                        class="text-primary-500 block md:inline"
                    >
                        {{ props.subtitle }}
                    </span>
                </span>
            </h2>

            <UIcon
                v-if="props.icon"
                :name="props.icon"
                size="3rem"
                class="flex-shrink-0 self-center hidden md:flex"
            />
        </section>
    </AnimateElement>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        title: string
        subtitle?: string
        center?: boolean
        icon?: string
    }>()
</script>
