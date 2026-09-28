const {test, expect} = require('@playwright/test')

test('locator1', async({page}) => {
    await page.goto('https://www.automationexercise.com/');
    await page.locator('a[href="/login"]').click();
    await expect(page).toHaveURL('https://www.automationexercise.com/login');
    await page.pause();
});

test('locator2', async({page}) =>{
    await page.goto("https://www.automationexercise.com/login")
    await page.locator('input[name="name"]').fill("Jay Rathod")
    const username = await page.locator('input[name="name"]').inputValue()
    await expect(username).toBe("Jay Rathod")
    await page.pause();
})



test('locator3', async({page}) => {
    await page.goto("https://www.automationexercise.com/login")
    const Signup = await page.locator('.signup-form')
    const Email = Signup.locator('input[data-qa=signup-email]')
    await Email.fill("abc@xyz.com")

    await expect(Email).toHaveValue("abc@xyz.com")
    await page.pause();
})



test ('locator4', async ({page}) => {
    await page.goto('https://www.automationexercise.com/login')
    await page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[2]').fill('rathodjay08@gmail.com')
    await page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[3]').fill('Abc@123')
    await page.locator('//*[@id="form"]/div/div/div[1]/div/form/button').click()

    await expect(page).not.toHaveURL('https://www.automationexercise.com/login')
    await page.pause();
})