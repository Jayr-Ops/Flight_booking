const {test,expect} = require('@playwright/test')

test.skip('assertion1',async({page})=>{
    await page.goto('https://www.automationexercise.com/')
    const title = await page.title()
    console.log(title)
    await expect(title).toHaveTitle('Automation Exercise')
})

test.skip('assertion2', async({page})=>{
    await page.goto('https://www.automationexercise.com/')
    const logo = await page.getByAltText('Website for automation practice')
    await expect(logo).toBeVisible()
})

test.skip('assertion3', async({page})=>{
    await page.goto('https://www.automationexercise.com/')
    await page.getByText('Signup / Login').click()
    await expect(page).toHaveURL(/login/)
    await page.pause()
})

test.skip('assertion4', async({page})=>{
    await page.goto('https://www.automationexercise.com/login')
    const heading = await page.getByRole('heading',{name:'New User Signup!'}).innerText()
    await expect(heading).toBe('New User Signup!')
})

test('assertion5', async({page})=>{
    await page.goto('https://www.automationexercise.com/login')
    await page.getByPlaceholder('Email Address').nth(0).fill('rathodjay08@yahoo.com')
    await page.getByPlaceholder('Password').fill('abc@123')
    const error = await page.locator('.login-form p')
    await expect(error).toBeHidden()
    await page.getByRole('button',{name:'Login'}).click()
    const msg = await error.innerText()
    console.log(msg)
    await expect(error).toBeVisible()
    await page.pause()
})
