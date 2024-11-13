<template>
    <UDrawer :handle="false">
        <UButton
            color="neutral"
            variant="link"
            size="xl"
            class="cursor-pointer mr-2"
            icon="line-md:search"
        />
        <template #content>
            <UCommandPalette
                v-model:search-term="searchTerm"
                :loading="status === 'pending'"
                :groups="groups"
                placeholder="Pesquisar Projetos..."
                class="h-80"
            />
        </template>
    </UDrawer>
</template>

<script lang="ts" setup>
    const searchTerm = ref('')

    const { data: projects, status } = await useFetch(
        'https://6733eeb1a042ab85d118670a.mockapi.io/api/v1/projects',
        {
            params: { q: searchTerm },
            transform: (
                data: {
                    id: number
                    email: string
                    createdAt: string
                    project: string
                    project_image: string
                }[]
            ) => {
                return (
                    data?.map((project) => ({
                        id: project.id,
                        label: project.project,
                        suffix: FormatDate(project.createdAt),
                        avatar: {
                            src: project.project_image
                        }
                    })) || []
                )
            },
            lazy: true
        }
    )

    const groups = computed(() => [
        {
            id: 'projects',
            label: searchTerm.value
                ? `Pesquisando o projeto “${searchTerm.value}”...`
                : 'Projetos',
            items: projects.value || [],
            filter: false
        }
    ])
</script>

<style></style>
