import { defineVitestConfig } from '@nuxt/test-utils/config'
import vue from '@vitejs/plugin-vue'

export default defineVitestConfig({
    plugins: [vue()],
    test: {
        environment: 'nuxt',
        globals: true,
        environmentOptions: {
            nuxt: {
                mock: {
                    intersectionObserver: true,
                    indexedDb: true
                }
            }
        }
    }
})
