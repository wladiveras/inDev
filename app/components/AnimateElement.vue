<template>
    <section
        ref="elementRef"
        :class="[
            customClass,
            'animate__animated',
            isVisible ? animationClass : ''
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
            animation?:
                | 'fadeIn'
                | 'fadeInTopRight'
                | 'fadeInTopLeft'
                | 'fadeInUp'
                | 'slideUp'
                | 'slideDown'
                | 'slideLeft'
                | 'slideRight'
                | 'zoomIn'

            delay?: number
            duration?: number
            customClass?: string
            repeat?: boolean
            repeatOnce?: boolean
            threshold?: number
            resetOnExit?: boolean
        }>(),
        {
            animation: 'fadeIn',
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

    const animationMap = {
        fadeIn: 'animate__fadeIn',
        fadeInTopRight: 'animate__fadeInTopRight',
        fadeInTopLeft: 'animate__fadeInTopLeft',
        fadeInUp: 'animate__fadeInUp',
        slideUp: 'animate__slideInUp',
        slideDown: 'animate__slideInDown',
        slideLeft: 'animate__slideInLeft',
        slideRight: 'animate__slideInRight',
        zoomIn: 'animate__zoomIn'
    }

    const animationClass = computed(() => animationMap[props.animation])

    const style = computed(() => ({
        '--animate-duration': `${props.duration}ms`,
        '--animate-delay': `${props.delay}ms`
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
