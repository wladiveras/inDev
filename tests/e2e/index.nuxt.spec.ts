import { setup, createPage } from '@nuxt/test-utils/e2e'
import { describe, it, expect } from 'vitest'

describe('login page', async () => {
    await setup({
        host: 'http://localhost:3000'
    })

    it('displays the email and password fields', async () => {
        const page = await createPage('/')
        expect(await page.getByTestId('hero-home').isVisible()).toBe(true)
    })
})
