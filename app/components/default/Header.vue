<template>
    <header
        ref="header"
        class="fixed w-full top-0 z-50 transition-transform duration-300 backdrop-blur-sm"
        :class="{ '-translate-y-full': isHeaderHidden }"
    >
        <div class="hidden md:flex">
            <UNavigationMenu
                highlight
                :items="navigationMenu"
                orientation="horizontal"
                variant="link"
                class="data-[orientation=horizontal]:border-b data-[orientation=vertical]:border-l border-[var(--ui-border)]"
                trailing-icon="i-lucide-arrow-down"
                color="primary"
            >
                <template #logo-label>
                    <div
                        class="flex align-center justify-center items-center min-h-full"
                    >
                        <MainLogo
                            width="50"
                            height="50"
                            alt="Logo"
                            class="ml-10"
                        />
                    </div>
                </template>

                <template #resume-label>
                    <div class="flex items-center justify-right gap-3">
                        <SetTheme />
                        <SetColor />

                        <UButton
                            aria-label="Contato"
                            icon="material-symbols:connect-without-contact"
                            variant="outline"
                            size="xl"
                            class="text-primary-400 border-1 border-primary-500/100 cursor-pointer mr-10"
                            :to="contact.url"
                            target="_blank"
                        >
                            Contato
                        </UButton>
                    </div>
                </template>
            </UNavigationMenu>
        </div>

        <div
            class="flex md:hidden m-1 border-b var(--ui-border); dark:border-gray-800 items-center justify-between w-full h-14 p-2"
        >
            <UIcon
                name="line-md:menu"
                class="cursor-pointer"
                color="neutral"
                size="2rem"
                @click="open"
            />
            <div class="flex-grow flex justify-center">
                <MainLogo
                    width="50"
                    height="50"
                />
            </div>

            <DefaultSearch />
        </div>
    </header>
</template>

<script lang="ts" setup>
    import { ModalNavigationMenu } from '#components'

    const landingStore = useLandingStore()

    const { contact } = storeToRefs(landingStore)
    const { isHeaderHidden } = useHeaderScroll()
    const { navigationMenu } = useNavigation()

    const slideover = useSlideover()

    function open() {
        slideover.open(ModalNavigationMenu)
    }
</script>

<style></style>
