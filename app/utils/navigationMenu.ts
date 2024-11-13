import type { NavigationMenuItem } from '#ui/types'

export const navigationMenu = ref<NavigationMenuItem[][]>([
    [
        {
            slot: 'logo',
            label: 'logo',
            to: '/'
        },
        {
            label: 'Sobre',
            icon: 'i-lucide-book-open',
            active: false,
            to: '#about'
        },
        {
            label: 'Experiência',
            icon: 'i-lucide-book-open'
        },
        {
            label: 'Projetos',
            icon: 'i-lucide-book-open',

            children: [
                {
                    label: 'Projeto 1',
                    description: 'Descrição.',
                    icon: 'i-lucide-house'
                },
                {
                    label: 'Projeto 2',
                    description: 'Descrição.',
                    icon: 'i-lucide-house'
                },
                {
                    label: 'Projeto 3',
                    description: 'Descrição.',
                    icon: 'i-lucide-house'
                },
                {
                    label: 'Projeto 4',
                    description: 'Descrição.',
                    icon: 'i-lucide-house'
                }
            ]
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
