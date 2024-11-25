interface PreloaderState {
    isLoading: boolean
}

export const usePreloader = () => {
    const state = useState<PreloaderState>('preloader', () => ({
        isLoading: true
    }))

    const show = () => {
        state.value.isLoading = true
    }

    const hide = () => {
        state.value.isLoading = false
    }

    const getState = () => state.value

    return {
        show,
        hide,
        getState
    }
}
