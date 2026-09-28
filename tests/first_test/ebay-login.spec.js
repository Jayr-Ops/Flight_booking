const {test,expect} = require('@playwright/test')

test('ebay login', async({page}) => {

    await page.goto("https://signin.ebay.com/ws/eBayISAPI.dll?SignIn")
    await page.locator('.textbox__control').nth(0).fill('rathodjay08@gmail.com')
    await page.pause()
});