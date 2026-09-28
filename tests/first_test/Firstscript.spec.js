const {test, expect} = require('@playwright/test');

test('home page', async ({page}) => {
    await page.goto('https://www.automationexercise.com/login');
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[2]').fill('Jay Rathod');
    await page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]').fill('rathodjay08@outlook.com');
    await page.click('//*[@id="form"]/div/div/div[3]/div/form/button')
    await page.pause()
});