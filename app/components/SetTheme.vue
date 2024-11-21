<template>
    <div>
        <UButton
            aria-label="select theme"
            class="text-[var(--ui-primary)] transition-all duration-300"
            variant="outline"
            :icon="iconName"
            @click="changeTheme"
        />
    </div>
</template>

<script lang="ts" setup>
    const colorMode = useColorMode()

    const backgroundColor = computed(() =>
        colorMode.value === 'dark' ? 'dark' : 'white'
    )

    const iconName = computed(() =>
        colorMode.value === 'dark'
            ? 'line-md:sunny-outline-to-moon-transition'
            : 'line-md:moon-to-sunny-outline-transition'
    )

    const changeTheme = () => {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }

    useHead({
        meta: [
            {
                key: 'theme-color',
                name: 'theme-color',
                content: backgroundColor
            }
        ]
    })
</script>
