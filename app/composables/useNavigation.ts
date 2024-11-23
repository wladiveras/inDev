import type { NavigationMenuItem } from '~/types'

export const useNavigation = () => {
    const navigationMenu = ref<NavigationMenuItem[][]>([
        [
            {
                slot: 'logo',
                label: 'logo'
            },
            {
                label: 'Sobre',
                icon: 'line-md:coffee-half-empty-filled-loop',
                active: false,
                href: '/#about'
            },
            {
                label: 'Experiência',
                icon: 'line-md:clipboard-list',
                active: false,
                href: '/#experience'
            },
            {
                label: 'Projetos',
                icon: 'line-md:folder-settings',
                active: false,
                href: '/#projects'
            },
            {
                label: 'Workana',
                icon: 'material-symbols:connect-without-contact',
                active: false,
                href: '/#contact'
            },
            {
                label: 'Time',
                icon: 'ri:team-line',
                active: false,
                href: '/team'
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

    return {
        navigationMenu
    }
}
