<template>
    <div>
        <UButton
            class="text-[var(--ui-primary)]"
            variant="outline"
            :icon="
                colorMode.value === 'dark'
                    ? 'i-heroicons-moon'
                    : 'i-heroicons-sun'
            "
            @click="changeTheme"
        />
    </div>
</template>

<script lang="ts" setup>
    const colorMode = useColorMode()

    const backgroundColor = computed(() =>
        colorMode.value === 'dark' ? 'dark' : 'white'
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
