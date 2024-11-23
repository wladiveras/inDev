export const useHeaderScroll = (threshold = 100) => {
    const isHeaderHidden = ref(false)
    const lastScrollPosition = ref(0)

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY

        if (
            Math.abs(currentScrollPosition - lastScrollPosition.value) <
            threshold
        ) {
            return
        }

        if (
            currentScrollPosition < lastScrollPosition.value ||
            currentScrollPosition < 50
        ) {
            isHeaderHidden.value = false
        } else if (
            currentScrollPosition > lastScrollPosition.value &&
            currentScrollPosition > 50
        ) {
            isHeaderHidden.value = true
        }

        lastScrollPosition.value = currentScrollPosition
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    return {
        isHeaderHidden,
        lastScrollPosition
    }
}
