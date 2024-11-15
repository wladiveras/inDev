<template>
    <div>
        <section
            class="mt-10 mb-10 border-b-2 pb-6 border-indigo-500"
            :class="{ 'pl-4': !center }"
        >
            <MotionGroup
                :initial="{
                    x: -100,
                    opacity: 0
                }"
                :visible-once="{
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: 0,
                        duration: 600,
                        type: 'keyframes',
                        ease: 'easeIn'
                    }
                }"
            >
                <h2
                    :class="{ 'text-center w-full': center }"
                    class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl"
                >
                    <span>
                        {{ props.title }} <br />
                        <span
                            v-if="props.subtitle"
                            :class="{
                                'ml-10': !center
                            }"
                            class="text-indigo-500"
                        >
                            {{ props.subtitle }}
                        </span>
                    </span>
                </h2>
            </MotionGroup>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        title: string
        subtitle?: string
        center?: boolean
    }>()
</script>

<style></style>
