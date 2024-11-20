import type { ColorTheme } from '~/types'

export const useTheme = () => {
    const config = useAppConfig()
    const currentTheme = ref(config.ui.colors.primary)

    const colorThemes: ColorTheme[] = [
        {
            label: 'indigo',
            slot: 'profile',
            class: 'text-indigo-500',
            onSelect() {
                changeColor('indigo')
            }
        },
        {
            label: 'red',
            slot: 'profile',
            class: 'text-red-500',
            onSelect() {
                changeColor('red')
            }
        },
        {
            label: 'amber',
            slot: 'profile',
            class: 'text-amber-500',
            onSelect() {
                changeColor('amber')
            }
        },
        {
            label: 'pink',
            slot: 'profile',
            class: 'text-pink-500',
            onSelect() {
                changeColor('pink')
            }
        },
        {
            label: 'fuchsia',
            slot: 'profile',
            class: 'text-fuchsia-500',
            onSelect() {
                changeColor('fuchsia')
            }
        },
        {
            label: 'green',
            slot: 'profile',
            class: 'text-green-500',
            onSelect() {
                changeColor('green')
            }
        },
        {
            label: 'sky',
            slot: 'profile',
            class: 'text-sky-500',
            onSelect() {
                changeColor('sky')
            }
        }
    ]

    const changeColor = (color: string) => {
        config.ui.colors.primary = color
        currentTheme.value = color
    }

    return {
        colorThemes,
        currentTheme,
        changeColor
    }
}
