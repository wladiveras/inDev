<template>
    <section
        ref="elementRef"
        :class="[
            customClass,
            'animate__animated',
            shouldAnimate ? currentAnimationClass : ''
        ]"
        :style="style"
    >
        <slot />
    </section>
</template>

<script lang="ts" setup>
    import { ref, computed, onMounted } from 'vue'

    type AnimationType =
        | 'fadeIn'
        | 'fadeInTopRight'
        | 'fadeInTopLeft'
        | 'fadeInUp'
        | 'slideUp'
        | 'slideDown'
        | 'slideLeft'
        | 'slideRight'
        | 'zoomIn'
        | 'lightSpeedInRight'
        | 'lightSpeedInLeft'

    const props = withDefaults(
        defineProps<{
            animation?: AnimationType
            mobileAnimation?: AnimationType | 'none'
            mobileBreakpoint?: number
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
            mobileAnimation: undefined,
            mobileBreakpoint: 768,
            delay: 0,
            duration: 600,
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
    const isMobile = ref(false)

    // Get preloader state
    const preloader = usePreloader()
    const preloaderState = preloader.getState()

    // Only animate when element is visible AND preloader is ready
    const shouldAnimate = computed(
        () => isVisible.value && preloaderState.isReady
    )

    const animationMap = {
        fadeIn: 'animate__fadeIn',
        fadeInTopRight: 'animate__fadeInTopRight',
        fadeInTopLeft: 'animate__fadeInTopLeft',
        fadeInUp: 'animate__fadeInUp',
        slideUp: 'animate__slideInUp',
        slideDown: 'animate__slideInDown',
        slideLeft: 'animate__slideInLeft',
        slideRight: 'animate__slideInRight',
        zoomIn: 'animate__zoomIn',
        lightSpeedInRight: 'animate__lightSpeedInRight',
        lightSpeedInLeft: 'animate__lightSpeedInLeft'
    }

    // Determine which animation to use based on screen size
    const currentAnimationClass = computed(() => {
        if (isMobile.value && props.mobileAnimation) {
            return props.mobileAnimation === 'none'
                ? ''
                : animationMap[props.mobileAnimation]
        }
        return animationMap[props.animation]
    })

    const style = computed(() => ({
        '--animate-duration': `${props.duration}ms`,
        '--animate-delay': `${props.delay}ms`
    }))

    const updateMobileState = () => {
        isMobile.value = window.innerWidth < props.mobileBreakpoint
    }

    onMounted(() => {
        updateMobileState()

        window.addEventListener('resize', updateMobileState)

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
            window.removeEventListener('resize', updateMobileState)
        })
    })
</script>
