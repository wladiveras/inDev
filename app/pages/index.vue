<template>
  <section class="max-w-[40rem] mt-20">
    <h2 class="text-5xl font-semibold">
      A <span class="text-rose-400">maior plataforma</span> de acompanhantes do
      Brasil
    </h2>
    <p class="text-2xl max-w-[40rem] mt-5">
      Fatal Model é <b>respeito</b>, <b>segurança</b> e <b>dignidade</b>.
    </p>
  </section>

  <section></section>

  <UCard class="mt-20">
    <template #header>
      <div class="space-y-4 space-x-4 text-center">
        <UModal title="Modal with title">
          <UButton
            label="Open"
            color="neutral"
            variant="subtle"
            trailing-icon="i-lucide-chevron-up"
          />

          <template #body>
            <Placeholder class="h-48" />
          </template>
        </UModal>
        <UDrawer direction="left">
          <UButton
            label="Open"
            color="neutral"
            variant="subtle"
            trailing-icon="i-lucide-chevron-up"
          />

          <template #content>
            <Placeholder class="w-96 m-4" />
          </template>
        </UDrawer>

        <UDrawer direction="right">
          <UButton
            label="Open"
            color="neutral"
            variant="subtle"
            trailing-icon="i-lucide-chevron-up"
          />

          <template #content>
            <Placeholder class="w-96 m-4" />
          </template>
        </UDrawer>

        <UDrawer should-scale-background>
          <UButton
            class="mt-3"
            label="Open"
            color="neutral"
            variant="subtle"
            trailing-icon="i-lucide-chevron-up"
          />

          <template #content>
            <Placeholder class="h-48 m-4" />
          </template>
        </UDrawer>
      </div>
    </template>
    <div class="flex justify-center items-center">
      <div class="flex flex-col items-center gap-4">
        <UCollapsible class="flex flex-col gap-2 w-48">
          <UButton
            label="Open"
            color="neutral"
            variant="subtle"
            trailing-icon="i-lucide-chevron-down"
            block
          />

          <template #content>
            <UForm
              :schema="schema"
              :state="state"
              class="space-y-4"
              @submit="onSubmit"
            >
              <UFormField label="Email" name="email">
                <UInput v-model="state.email" />
              </UFormField>

              <UFormField label="Password" name="password">
                <UInput v-model="state.password" type="password" />
              </UFormField>

              <UButton type="submit"> Submit </UButton>
            </UForm>
          </template>
        </UCollapsible>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-center items-center">
        <UPagination v-model:page="page" :total="100" />
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

definePageMeta({
  layout: "default",
})

useSeoMeta({
  title: "Top Models",
})

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  })
}

const page = ref(1)
</script>
