const {test, expect} = require('@playwright/test')

test.skip('inbuilt1',async({page}) => {
    await page.goto('https://www.automationexercise.com/login')
    await page.getByPlaceholder("Email Address").nth(0).fill('rathodjay08@gmail.com')
    await page.getByPlaceholder("Password").fill('Abc@123')
    await page.getByRole('button', {name: 'Login'}).click()

    await expect(page).not.toHaveURL('https://www.automationexercise.com/login')
    await page.pause()
})

test.skip('inbuilt2', async({page}) =>{
    await page.goto('https://www.automationexercise.com/login')
    const text1 = page.getByText('New User Signup!')
    console.log(await text1.textContent())
    await expect(text1).toBeVisible()
    await page.pause();
})

test.skip('inbuilt3', async({page}) => {
    await page.goto('https://www.automationexercise.com/login')
    const Email = await page.getByPlaceholder("Email Address").nth(0)
    await Email.fill('rathodjay08@gmail.com')
    const Text1 = await Email.inputValue()
    expect(Text1).toBe('rathodjay08@gmail.com')
    await page.pause();
})

test.skip('inbuilt4', async({page}) =>{
    await page.goto('https://www.automationexercise.com/login')
    await page.getByPlaceholder('Name').fill('Parth')
    await page.getByPlaceholder('Email Address').nth(1).fill('parth@gmail.com')
    await page.getByRole('button' , {name: "Signup"}).click()

    const radio1 = await page.getByLabel('Mr.')
    await radio1.click()
    await expect(radio1).toBeChecked()
    await page.pause();

})

test('inbuilt5', async({page})=>{
    await page.goto('https://www.automationexercise.com/')
    const img = await page.getByAltText('Website for automation practice')
    await expect(img).toBeVisible()
    await page.pause()

    const logoSrc = await img.getAttribute('src')
    console.log(logoSrc)
})
