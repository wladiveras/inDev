export default defineAppConfig({
    ui: {
        colors: {
            primary: 'indigo',
            neutral: 'slate'
        },
        theme: {
            transitions: 'out-in',
            colors: [
                'primary',
                'secondary',
                'tertiary',
                'info',
                'success',
                'warning',
                'error'
            ]
        },
        ui: {
            button: {
                slots: {
                    base: ['rounded-full'],
                    label: '',
                    leadingIcon: '',
                    leadingAvatar: '',
                    leadingAvatarSize: '',
                    trailingIcon: ''
                }
            }
        },
        input: {
            default: {
                size: 'md'
            }
        },
        card: {
            rounded: 'rounded-xl'
        },
        footer: {
            top: {
                wrapper: 'border-t border-gray-200 dark:border-gray-800',
                container: 'py-8 lg:py-16'
            },
            bottom: {
                wrapper: 'border-t border-gray-200 dark:border-gray-800'
            }
        },
        page: {
            hero: {
                wrapper: 'lg:py-24'
            }
        },
        container: {
            base: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        }
    }
})
