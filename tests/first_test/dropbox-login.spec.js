const {test,expect} = require('@playwright/test')

test('dropbox',async({page}) => {
    await page.goto('https://www.dropbox.com/login')
    await page.locator('input[name="susi_email"]').fill('rathodjay08@gmail.com')
    await page.click('button[type="submit"]')
    await page.pause()
});