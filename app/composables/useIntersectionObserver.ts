export function useAnimateObserver(options = {}) {
    const elements = ref<Element[]>([])

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
                threshold: 0.5,
                ...options
            }
        )

        elements.value.forEach((element) => {
            if (element) {
                observer.observe(element)
            }
        })

        onUnmounted(() => {
            elements.value.forEach((element) => {
                if (element) {
                    observer.unobserve(element)
                }
            })
        })
    })

    const observe = (element: Element) => {
        if (element) {
            elements.value.push(element)
        }
    }

    return {
        observe
    }
}
