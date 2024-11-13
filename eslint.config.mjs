// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    rules: {
        '@stylistic/operator-linebreak': 'off',
        '@stylistic/indent': 'off',
        'vue/html-indent': 'off',
        'vue/script-indent': 'off',
        '@stylistic/indent-binary-ops': 'off',
        'stylistic/indent-binary-ops': 'off',
        'stylistic/brace-style': 'off'
    }
})
