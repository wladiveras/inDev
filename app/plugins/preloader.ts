// plugins/preloader.ts
export default defineNuxtPlugin(() => {
    const preloaderState = reactive({
        isLoading: true,
        isReady: false
    })

    return {
        provide: {
            preloader: {
                show: () => {
                    preloaderState.isLoading = true
                    preloaderState.isReady = false
                },
                hide: () => {
                    preloaderState.isLoading = false

                    setTimeout(() => {
                        preloaderState.isReady = true
                    }, 100)
                },
                getState: () => preloaderState
            }
        }
    }
})
