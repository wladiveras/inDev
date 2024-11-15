export function useIntersectionObserver(options = {}) {
    const targetRef = ref<HTMLElement | null>(null)
    const isVisible = ref(false)

    const observer = new IntersectionObserver(
        ([entry]) => {
            isVisible.value = entry.isIntersecting
        },
        {
            threshold: 0.1,
            ...options
        }
    )

    onUnmounted(() => {
        observer.disconnect()
    })

    return {
        targetRef,
        isVisible
    }
}
