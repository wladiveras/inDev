<template>
    <footer
        id="footer"
        class="mt-60 mb-20 text-center"
    >
        <section class="flex gap-5 justify-center mb-5">
            <UTooltip
                v-for="(media, index) in footer.medias"
                :key="index"
                :text="media.tooltip"
            >
                <a
                    :href="media.link"
                    :aria-label="media.tooltip"
                >
                    <UIcon
                        :name="media.icon"
                        size="1.5rem"
                        class="hover:text-primary-500 transition-all duration-300"
                    />
                </a>
            </UTooltip>
        </section>
        <section>
            <a
                :href="footer.link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="External Link"
            >
                <p class="mb-5">{{ footer.text }}</p>
                <div
                    class="flex items-center justify-between m-auto max-w-[10rem] mt-2"
                >
                    <span class="flex justify-center">
                        <Icon
                            class="relative top-1 mr-2"
                            name="line-md:star-twotone"
                        />
                        1
                    </span>

                    <span class="flex justify-center">
                        <UIcon
                            class="relative top-1 mr-2"
                            name="line-md:round-ramp-right"
                        />
                        1
                    </span>
                </div>
            </a>
        </section>
    </footer>
</template>

<script lang="ts" setup>
    const landingStore = useLandingStore()
    const { footer } = storeToRefs(landingStore)
</script>

<style></style>
