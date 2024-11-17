import type { NavigationMenuItem } from '#ui/types'

export const navigationMenu = ref<NavigationMenuItem[][]>([
    [
        {
            slot: 'logo',
            label: 'logo'
        },
        {
            label: 'Sobre',
            icon: 'line-md:coffee-half-empty-filled-loop',
            to: '/#about'
        },
        {
            label: 'Experiência',
            icon: 'line-md:clipboard-list',
            to: '/#jobs'
        },
        {
            label: 'Projetos',
            icon: 'line-md:folder-settings',
            to: '/#projects'
        },
        {
            label: 'Contato',
            icon: 'line-md:folder-settings',
            to: '/#contact'
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
