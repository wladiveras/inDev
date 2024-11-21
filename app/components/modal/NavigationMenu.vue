<template>
    <UDrawer
        direction="left"
        :ui="{ container: 'max-w-xl mx-auto' }"
    >
        <template #body>
            <div
                class="flex align-center justify-center items-center w-full min-w-[20rem]"
            >
                <LogoType
                    width="200"
                    height="200"
                    color="#4f46e5"
                    alt="Logo"
                    class="center"
                />
            </div>
            <UNavigationMenu
                orientation="vertical"
                :items="navigationMenu"
                class="data-[orientation=vertical]:w-auto"
            >
                <!-- @ts-ignore -->
                <template #resume-label> <div /> </template>

                <template #logo-label> <div /> </template>
            </UNavigationMenu>
        </template>

        <template #footer>
            <div class="flex items-center gap-5 m-auto mb-5">
                <SetTheme />
                <SetColor />
            </div>
            <UButton
                aria-label="Currículo"
                icon="mdi:resume"
                variant="outline"
                size="xl"
                class="text-primary-400 border-1 border-primary-500/100 m-auto"
            >
                Currículo
            </UButton>
        </template>
    </UDrawer>
</template>

<script setup lang="ts">
    import LogoType from '../LogoType.vue'
</script>
