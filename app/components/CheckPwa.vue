<template>
    <div v-show="$pwa.needRefresh">
        <span> New content available, click on reload button to update. </span>

        <button @click="$pwa.updateServiceWorker()">Reload</button>
    </div>
</template>

<script setup>
    const { $pwa } = useNuxtApp()
    const toast = useToast()

    onMounted(() => {
        if ($pwa.offlineReady) toast.success('App ready to work offline')
    })
</script>
