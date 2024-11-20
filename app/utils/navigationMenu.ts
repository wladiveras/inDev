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
            label: 'Contato',
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

const updateActiveMenuItem = () => {
    // Reset all active states
    navigationMenu.value[0].forEach((item) => {
        if (item.active !== undefined) {
            item.active = false
        }
    })

    // Get all sections and find the one in view
    const sections = navigationMenu.value[0]
        .filter((item) => item.href)
        .map((item) => ({
            id: item.href!.substring(1),
            element: document.getElementById(item.href!.substring(1))
        }))
        .filter((section) => section.element)

    // Find the current section
    for (const section of sections) {
        const rect = section.element!.getBoundingClientRect()

        // Check if section is in viewport with some tolerance
        const isInView =
            rect.top <= 100 && // Increased tolerance for better UX
            rect.bottom >= 100 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight)

        if (isInView) {
            const menuItem = navigationMenu.value[0].find(
                (item) => item.href === `#${section.id}`
            )
            if (menuItem) {
                menuItem.active = true
            }
            break // Exit after finding the first visible section
        }
    }
}

const scrollToSection = (href: string) => {
    const targetElement = document.querySelector(href)
    if (!targetElement) return

    const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset
    const offset = 80 // Adjust this value based on your header height

    window.scrollTo({
        top: targetPosition - offset,
        behavior: 'smooth'
    })
}

export const setupNavigation = () => {
    const handleScroll = () => {
        window.requestAnimationFrame(() => {
            updateActiveMenuItem()
        })
    }

    onMounted(() => {
        // Set up click handlers
        navigationMenu.value[0].forEach((item) => {
            if (item.href) {
                item.onSelect = () => scrollToSection(item.href!)
            }
        })

        // Add scroll listener with debounce
        window.addEventListener('scroll', handleScroll, { passive: true })

        // Initial check
        updateActiveMenuItem()
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
}
