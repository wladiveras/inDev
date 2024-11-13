<script setup lang="ts">
import favicon from "~/assets/images/favicon.svg"

const colorMode = useColorMode()
const color = computed(() => (colorMode.value === "dark" ? "#111827" : "white"))

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", type: "image/svg+xml", href: favicon }],
  htmlAttrs: {
    lang: "en",
  },
})

useSeoMeta({
  titleTemplate: "Wladi Veras  • %s",
  ogImage: "https://saas-template.nuxt.dev/social-card.png",
  twitterImage: "https://saas-template.nuxt.dev/social-card.png",
  twitterCard: "summary_large_image",
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </UApp>
</template>
<style>
@import "tailwindcss";
@import "@nuxt/ui";

:root {
  font-family: "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  --font-family-sans: "Fira Code", "Fira Mono", "Roboto Mono", monospace;

  --breakpoint-3xl: 1920px;

  --ui-primary: var(--ui-color-primary-700);
  --ui-radius: var(--radius-md);

  --ui-text-dimmed: var(--ui-color-neutral-400);
  --ui-text-muted: var(--ui-color-neutral-500);
  --ui-text-toned: var(--ui-color-neutral-600);
  --ui-text: var(--ui-color-neutral-700);
  --ui-text-highlighted: var(--ui-color-neutral-900);

  --ui-bg: var(--color-white);
  --ui-bg-elevated: var(--ui-color-neutral-100);
  --ui-bg-accented: var(--ui-color-neutral-200);
  --ui-bg-inverted: var(--ui-color-neutral-900);

  --ui-border: var(--ui-color-neutral-200);
  --ui-border-accented: var(--ui-color-neutral-300);
  --ui-border-inverted: var(--ui-color-neutral-900);
}

.dark {
  --ui-primary: var(--ui-color-primary-200);

  --ui-text-dimmed: var(--ui-color-neutral-500);
  --ui-text-muted: var(--ui-color-neutral-400);
  --ui-text-toned: var(--ui-color-neutral-300);
  --ui-text: var(--ui-color-neutral-200);
  --ui-text-highlighted: var(--color-white);

  --ui-bg: var(--ui-color-neutral-900);
  --ui-bg-elevated: var(--ui-color-neutral-800);
  --ui-bg-accented: var(--ui-color-neutral-700);
  --ui-bg-inverted: var(--color-white);

  --ui-border: var(--ui-color-neutral-800);
  --ui-border-accented: var(--ui-color-neutral-700);
  --ui-border-inverted: var(--color-white);
}
</style>
