const {test,expect} = require('@playwright/test');
const { text } = require('node:stream/consumers');

test('flipkart login', async({page}) => {
    await page.goto("https://www.flipkart.com/account/login")
    await page.locator('//*[@id="container"]/div/div[3]/div/div[2]/div/form/div[1]/input]').fill('+919714373117')
    await page.pause()
});