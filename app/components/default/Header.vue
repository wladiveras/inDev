<template>
  <div class="hidden md:flex">
    <UNavigationMenu
      highlight
      :items="navigation"
      orientation="horizontal"
      class="data-[orientation=horizontal]:border-b data-[orientation=vertical]:border-l border-[var(--ui-border)]"
      trailing-icon="i-lucide-arrow-down"
      color="primary"
    >
      <template #logo-label>
        <div class="flex align-center justify-center items-center min-h-full">
          <img
            src="https://icon-sets.iconify.design/assets/logo-text-dark.svg"
            class="h-8"
          />
        </div>
      </template>
    </UNavigationMenu>
  </div>
  <div
    class="flex md:hidden m-1 border-b border-gray-200 flex items-center justify-between w-full h-14 p-2"
  >
    <UIcon
      name="line-md:menu"
      class="cursor-pointer"
      size="2rem"
      @click="open"
    />
    <div class="flex-grow flex justify-center">
      <img
        src="https://icon-sets.iconify.design/assets/logo-text-dark.svg"
        class="h-8"
      />
    </div>
    <UIcon name="line-md:search" size="2rem" />
  </div>
</template>

<script lang="ts" setup>
import { SlideoverNavigation } from "#components"

const count = ref(0)

const slideover = useSlideover()

function open() {
  count.value++

  slideover.open(SlideoverNavigation, {
    title: "Slideover",
    count: count.value,
  })
}

const navigation = ref([
  [
    {
      slot: "logo",
    },
    {
      label: "Link 1",
      icon: "i-lucide-book-open",
      to: "/",
      active: true,
      children: [
        {
          label: "Algo",
          description: "Descrição.",
          icon: "i-lucide-house",
        },
      ],
    },
    {
      label: "Link 2",
      icon: "i-lucide-book-open",
      to: "/ss",
      children: [
        {
          label: "Algo",
          description: "Descrição.",
          icon: "i-lucide-house",
        },
      ],
    },
    {
      label: "Link 3",
      icon: "i-lucide-book-open",
      to: "/ssss",
      children: [
        {
          label: "Algo",
          description: "Descrição.",
          icon: "i-lucide-house",
        },
      ],
    },
  ],
  [
    {
      icon: "i-simple-icons-github",
      badge: "3.8k",
      to: "#",
      target: "_blank",
    },
    {
      label: "Ajuda",
      icon: "i-lucide-circle-help",
      disabled: true,
    },
  ],
])
</script>

<style></style>
