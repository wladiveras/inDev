export const usePreloader = () => {
    const nuxtApp = useNuxtApp()
    const { $preloader } = nuxtApp

    if (!$preloader) {
        throw new Error('Preloader plugin not installed')
    }

    return $preloader
}
