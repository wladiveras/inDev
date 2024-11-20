<template>
    <section>
        <UDropdownMenu
            :items="colorThemes"
            :ui="{ content: 'w-48' }"
        >
            <UButton
                class="text-[var(--ui-primary)]"
                variant="outline"
                icon="mdi:color"
            />
            <template #profile-trailing>
                <div :class="iconColorClass">
                    <UIcon
                        name="mdi:color"
                        class="shrink-0 size-5"
                    />
                </div>
            </template>
        </UDropdownMenu>
    </section>
</template>

<script lang="ts" setup>
    const { colorThemes, currentTheme, changeColor } = useTheme()

    const iconColorClass = computed(() => `text-${currentTheme}-500`)

    onBeforeMount(() => {
        changeColor(currentTheme.value)
    })
</script>
