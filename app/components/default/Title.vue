<template>
    <div>
        <section
            ref="heroTitle"
            class="mt-10 mb-10 border-b-2 pb-6 border-indigo-500"
            :class="{ 'pl-4': !center }"
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
        </section>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue'

    const props = defineProps<{
        title: string
        subtitle?: string
        center?: boolean
    }>()

    const heroTitle = ref<HTMLElement | null>(null)

    onMounted(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-delay')
                    }
                })
            },
            {
                threshold: 0.5
            }
        )

        // Observe multiple elements
        if (heroTitle.value) {
            observer.observe(heroTitle.value)
        }

        onUnmounted(() => {
            if (heroTitle.value) {
                observer.unobserve(heroTitle.value)
            }

            observer.disconnect()
        })
    })
</script>

<style scoped>
    .animate-delay {
        animation: fadeIn 0.8s ease-out forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
