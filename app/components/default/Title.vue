<template>
    <div>
        <section
            class="mt-10"
            :class="{ 'pl-4': !center }"
        >
            <MotionGroup
                preset="slideVisibleLeft"
                :duration="600"
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
        <USeparator
            type="solid"
            class="mt-5"
        />
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        title: string
        subtitle?: string
        center?: boolean
        direction?: {
            type:
                | 'slideVisibleLeft'
                | 'slideVisibleRight'
                | 'slideVisibleTop'
                | 'slideVisibleBottom'
            default:
                | 'slideVisibleLeft'
                | 'slideVisibleRight'
                | 'slideVisibleTop'
                | 'slideVisibleBottom'
        }
        animate?: {
            type: boolean
            default: true
        }
    }>()
</script>

<style></style>
