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
            onSelect: () => {
                navigateTo('#about')
            }
        },
        {
            label: 'Experiência',
            icon: 'line-md:clipboard-list',
            active: false
        },
        {
            label: 'Projetos',
            icon: 'line-md:folder-settings',
            active: false
        },
        {
            label: 'Contato',
            icon: 'material-symbols:connect-without-contact',
            active: false
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
