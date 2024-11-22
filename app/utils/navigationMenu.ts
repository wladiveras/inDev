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
            active: false,
            href: '#about'
        },
        {
            label: 'Experiência',
            icon: 'line-md:clipboard-list',
            active: false,
            href: '#experience'
        },
        {
            label: 'Projetos',
            icon: 'line-md:folder-settings',
            active: false,
            href: '#projects'
        },
        {
            label: 'Workana',
            icon: 'material-symbols:connect-without-contact',
            active: false,
            href: '#contact'
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
