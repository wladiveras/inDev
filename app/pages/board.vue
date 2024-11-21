<template>
    <section
        id="experience"
        class="md:container md:mx-auto"
    >
        <DefaultTitle
            class="mt-20 md:mt-0"
            title="Quadro"
            subtitle="de Tarefas"
            icon="line-md:clipboard-list"
        />

        <section
            class="flex flex-col gap-4 font-thin justify-center items-center px-5 h-150"
        >
            <ClientOnly>
                <iframe
                    :src="src"
                    width="100%"
                    height="100%"
                />
            </ClientOnly>
        </section>
    </section>
</template>

<script lang="ts" setup>
    const appConfig = useAppConfig()
    const colorMode = useColorMode()

    const token =
        'eyJ2aWV3IjoiYm9hcmQiLCJib2FyZFN0YXR1c2VzIjpbInRyaWFnZSIsImJhY2tsb2ciLCJ0b2RvIiwiaW5fcHJvZ3Jlc3MiLCJpbl9yZXZpZXciLCJkb25lIiwicmVsZWFzZWQiXSwiYm9hcmRMaW5rZWRQcnMiOmZhbHNlLCJsaXN0R3JvdXAiOiJzdGF0ZSIsImxpc3RPcmRlciI6ImNyZWF0ZWRfYXQiLCJ0aW1lbGluZVpvb20iOiJtb250aCIsInRpbWVsaW5lT3JkZXIiOiJzdGF0ZSIsInRpbWVsaW5lRGlzcGxheSI6ImFsbF9taWxlc3RvbmVzIiwiZmlsdGVycyI6e30sIm93bmVyIjoibnV4dCIsIm5hbWUiOiJ1aSJ9'

    const src = computed(
        () =>
            `https://volta.net/embed/${token}?theme=${colorMode.value}&gray=${appConfig.ui.colors.neutral}&primary=${appConfig.ui.colors.primary}`
    )
</script>

<style></style>
