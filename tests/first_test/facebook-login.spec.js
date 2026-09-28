const {test , expect} = require('@playwright/test')

test('facebook', async({page}) => {
    await page.goto('https://www.facebook.com/')
    await page.locator('[name=email]').fill('rathodjay08@outlook.com')
    await page.locator('[name=pass]').fill('123456')
    await page.pause()
})