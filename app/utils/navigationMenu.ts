import type { NavigationMenuItem } from '#ui/types'

export const navigationMenu = ref<NavigationMenuItem[][]>([
    [
        {
            slot: 'logo',
            label: 'logo'
        },
        {
            label: 'Sobre',
            icon: 'i-lucide-book-open',
            to: '#about'
        },
        {
            label: 'Experiência',
            icon: 'i-lucide-book-open',
            to: '#jobs'
        },
        {
            label: 'Projetos',
            icon: 'i-lucide-book-open',
            to: '#projects'
        }
    ],
    [
        {
            label: 'Resume',
            slot: 'resume',
            disabled: false
        }
    ]
])
