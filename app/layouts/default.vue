<template>
  <div>
    <DefaultHeader />

    <UContainer>
      <slot />
    </UContainer>
    <DefaultFooter />
  </div>
</template>

<script lang="ts" setup>
const slideover = useSlideover()
</script>

<style></style>
