<template>
    <footer
        id="footer"
        class="mt-60 mb-20 text-center"
    >
        <section class="flex gap-5 justify-center mb-5">
            <UTooltip
                v-for="(media, index) in medias"
                :key="index"
                :text="media.tooltip"
            >
                <a :href="media.link">
                    <UIcon
                        :name="media.icon"
                        size="1.5rem"
                    />
                </a>
            </UTooltip>
        </section>
        <section>
            <a
                href="https://github.com/wladiveras/inDev"
                type="_blank"
            >
                <p class="mb-5">Planejado e Desenvolvido por wladi veras</p>
                <div
                    class="flex items-center justify-between m-auto max-w-[10rem] mt-2"
                >
                    <span class="flex justify-center">
                        <Icon
                            class="relative top-1 mr-2"
                            name="line-md:star-twotone"
                        />
                        3.121
                    </span>

                    <span class="flex justify-center">
                        <UIcon
                            class="relative top-1 mr-2"
                            name="line-md:round-ramp-right"
                        />
                        5.121
                    </span>
                </div>
            </a>
        </section>
    </footer>
</template>

<script lang="ts" setup>
    const medias = [
        {
            icon: 'line-md:instagram',
            tooltip: 'Instagram',
            link: 'https://instagram.com/wladi_veras'
        },
        {
            icon: 'line-md:twitter',
            tooltip: 'Twitter',
            link: 'https://x.com/wladiveras'
        },
        {
            icon: 'line-md:linkedin',
            tooltip: 'LinkedIn',
            link: 'https://linkedin.com/in/wladiveras'
        },
        {
            icon: 'line-md:github',
            tooltip: 'Instagram',
            link: 'https://github.com/wladiveras'
        }
    ]
</script>

<style></style>
