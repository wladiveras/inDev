import type { ColorTheme } from '~/types'

export const useTheme = () => {
    const config = useAppConfig()
    const currentTheme = ref(config.ui.colors.primary)
    const currentColor = ref('#6366f1')

    const colorThemes: ColorTheme[] = [
        {
            label: 'indigo',
            slot: 'profile',
            class: 'text-indigo-500',
            color: '#6366f1',
            onSelect() {
                changeColor('indigo')
            }
        },
        {
            label: 'amber',
            slot: 'profile',
            class: 'text-amber-500',
            color: '#f59e0b',
            onSelect() {
                changeColor('amber')
            }
        },
        {
            label: 'red',
            slot: 'profile',
            class: 'text-red-500',
            color: '#ef4444',
            onSelect() {
                changeColor('red')
            }
        },
        {
            label: 'pink',
            slot: 'profile',
            class: 'text-pink-500',
            color: '#ec4899',
            onSelect() {
                changeColor('pink')
            }
        },
        {
            label: 'fuchsia',
            slot: 'profile',
            class: 'text-fuchsia-500',
            color: '#d946ef',
            onSelect() {
                changeColor('fuchsia')
            }
        },
        {
            label: 'green',
            slot: 'profile',
            class: 'text-green-500',
            color: '#22c55e',
            onSelect() {
                changeColor('green')
            }
        },
        {
            label: 'emerald',
            slot: 'profile',
            class: 'text-emerald-500',
            color: '#10b981',
            onSelect() {
                changeColor('emerald')
            }
        },
        {
            label: 'sky',
            slot: 'profile',
            class: 'text-sky-500',
            color: '#0ea5e9',
            onSelect() {
                changeColor('sky')
            }
        }
    ]

    watch(
        () => config.ui.colors.primary,
        (newColor) => {
            const theme = colorThemes.find((c) => c.label === newColor)
            if (theme) {
                currentColor.value = theme.color
            }
        },
        { immediate: true }
    )

    const changeColor = (color: string) => {
        config.ui.colors.primary = color
        currentTheme.value = color
        currentColor.value =
            colorThemes.find((c) => c.label === color)?.color || '#6366f1'
    }

    return {
        colorThemes,
        currentTheme,
        currentColor,
        changeColor
    }
}
