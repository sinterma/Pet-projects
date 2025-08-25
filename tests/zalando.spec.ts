import {test, expect} from '@playwright/test'


test.beforeEach(async ({page}) => {
    await page.goto('https://en.zalando.de');
})

test ('has tittle', async ({page}) => {
    await expect(page).toHaveTitle('Shop Shoes, Fashion & Accessories Online | Zalando')
} )

test ('select category women', async ({page}) => {
    await page.locator('header a[href="/women-home/"]').click()
    await expect(page).toHaveTitle('Women’s Shoes & Fashion Online | ZALANDO')
})