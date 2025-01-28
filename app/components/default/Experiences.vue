<template>
    <div class="w-full">
        <UStepper
            ref="stepper"
            :items="items"
        >
            <template #content="{ item }">
                <Placeholder class="aspect-video">
                    {{ item.title }}
                </Placeholder>
            </template>
        </UStepper>

        <div class="flex gap-2 justify-between mt-4">
            <UButton
                leading-icon="i-lucide-arrow-left"
                :disabled="!stepper?.hasPrev"
                @click="stepper?.prev()"
            >
                Prev
            </UButton>

            <UButton
                trailing-icon="i-lucide-arrow-right"
                :disabled="!stepper?.hasNext"
                @click="stepper?.next()"
            >
                Next
            </UButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const landingStore = useLandingStore()
    const { experience } = storeToRefs(landingStore)
    const stepper = useTemplateRef('stepper')

    const items = ref([
        {
            title: 'Workana',
            description: 'Arquiteto de Soluções',
            icon: 'i-lucide-house'
        },
        {
            title: 'Greenn',
            description: 'Desenvolvedor - Fullstack',
            icon: 'i-lucide-truck'
        },
        {
            title: 'Alternativa',
            description: 'Desenvolvedor - fullstack',
            icon: 'i-lucide-truck'
        }
    ])
</script>

<style scoped>
    .jobs {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .jobs li {
        position: relative;
        padding-left: 20px;
    }
    .jobs li::before {
        content: '▹';
        position: absolute;
        top: -11px;
        left: -10px;
        font-size: 2rem;
        color: var(--color-primary-500);
    }

    technology-ul {
        list-style-type: none;

        padding: 0;

        margin: 0;
    }

    technology-list {
        margin-bottom: 10px;
    }

    technology-list::before {
        content: '▶';

        color: #49e79c;

        margin-right: 10px;
    }
</style>
