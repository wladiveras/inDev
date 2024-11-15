<template>
    <section
        ref="elementRef"
        :class="[
            'transition-all',
            isVisible ? animationClasses : initialClasses,
            customClass
        ]"
        :style="style"
    >
        <slot />
    </section>
</template>

<script lang="ts" setup>
    import { ref, computed, onMounted } from 'vue'

    const props = withDefaults(
        defineProps<{
            preset?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale'
            delay?: number
            duration?: number
            customClass?: string
            repeat?: boolean // Controls if animation should repeat
            repeatOnce?: boolean // Controls if animation should repeat only once
            threshold?: number // Customizable intersection threshold
            resetOnExit?: boolean // Reset animation when element exits viewport
        }>(),
        {
            preset: 'fadeIn',
            delay: 0,
            duration: 1000,
            customClass: '',
            repeat: false,
            repeatOnce: false,
            threshold: 0.1,
            resetOnExit: false
        }
    )

    const elementRef = ref<HTMLElement | null>(null)
    const isVisible = ref(false)
    const hasAnimatedOnce = ref(false)

    const presets = {
        fadeIn: {
            initial: 'opacity-0',
            animate: 'opacity-100'
        },
        slideUp: {
            initial: 'opacity-0 translate-y-8',
            animate: 'opacity-100 translate-y-0'
        },
        slideLeft: {
            initial: 'opacity-0 -translate-x-8',
            animate: 'opacity-100 translate-x-0'
        },
        slideRight: {
            initial: 'opacity-0 translate-x-8',
            animate: 'opacity-100 translate-x-0'
        },
        scale: {
            initial: 'opacity-0 scale-95',
            animate: 'opacity-100 scale-100'
        }
    }

    const initialClasses = computed(() => presets[props.preset].initial)
    const animationClasses = computed(() => presets[props.preset].animate)

    const style = computed(() => ({
        transitionDuration: `${props.duration}ms`,
        transitionDelay: `${props.delay}ms`
    }))

    onMounted(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (props.repeatOnce && !hasAnimatedOnce.value) {
                            isVisible.value = true
                            hasAnimatedOnce.value = true
                        } else if (props.repeat) {
                            isVisible.value = true
                        } else if (!hasAnimatedOnce.value) {
                            isVisible.value = true
                            hasAnimatedOnce.value = true
                        }
                    } else if (props.resetOnExit) {
                        isVisible.value = false
                        if (props.repeatOnce) {
                            hasAnimatedOnce.value = false
                        }
                    }
                })
            },
            {
                threshold: props.threshold
            }
        )

        if (elementRef.value) {
            observer.observe(elementRef.value)
        }

        onUnmounted(() => {
            if (elementRef.value) {
                observer.unobserve(elementRef.value)
            }
            observer.disconnect()
        })
    })
</script>

<style scoped>
    .transition-all {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
</style>
