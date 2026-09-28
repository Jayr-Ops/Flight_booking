const {test , expect} = require('@playwright/test')

test.skip('radio1', async ({page}) =>{

    await page.goto('https://www.automationexercise.com/login')
    await page.getByPlaceholder('Name').fill('Parth')
    await page.getByPlaceholder('Email Address').nth(1).fill('rathodjay08.new@gmail.com')
    await page.getByRole('button',{name:'Signup'}).click()
    await page.getByRole('radio',{name: 'Mr.'}).check()
    await expect(page.getByRole('radio',{name: 'Mr.'})).toBeChecked()
    await expect(page.getByRole('radio',{name: 'Mrs.'})).not.toBeChecked()
    await page.pause()
})

test.skip('radio2', async({page}) =>{
    await page.goto('https://www.automationexercise.com/login')
    await page.getByPlaceholder('Name').fill('Parth')
    await page.getByPlaceholder('Email Address').nth(1).fill('rathodjay08.new@gmail.com')
    await page.getByRole('button',{name:'Signup'}).click()
    await page.getByRole('checkbox',{name:'Sign up for our newsletter!'}).check()
    await expect(page.getByRole('checkbox',{name:'Sign up for our newsletter!'})).toBeChecked()
    await page.pause()
})

test.skip('radio3',async({page})=>{
    await page.goto('https://www.automationexercise.com/login')
    await page.getByPlaceholder('Name').fill('Parth')
    await page.getByPlaceholder('Email Address').nth(1).fill('rathodjay08.new@gmail.com')
    await page.getByRole('button',{name:'Signup'}).click()
    await page.getByRole('checkbox',{name:'Receive special offers from our partners!'}).check()
    await page.getByRole('checkbox',{name:'Receive special offers from our partners!'}).uncheck()
    await expect(page.getByRole('checkbox',{name:'Receive special offers from our partners!'})).not.toBeChecked()
    await page.pause()
})

test.skip('radio4', async({page})=>{
    await page.goto('https://www.automationexercise.com/login')
    await page.getByPlaceholder('Name').fill('Parth')
    await page.getByPlaceholder('Email Address').nth(1).fill('rathodjay08.new@gmail.com')
    await page.getByRole('button',{name:'Signup'}).click()
    await page.getByRole('checkbox',{name:'Sign up for our newsletter!'}).check()
    await page.getByRole('checkbox',{name:'Receive special offers from our partners!'}).check()
    console.log(await page.getByRole('checkbox',{name:'Sign up for our newsletter!'}).isChecked())
    console.log(await page.getByRole('checkbox',{name:'Receive special offers from our partners!'}).isChecked())
    await expect(page.getByRole('checkbox',{name:'Sign up for our newsletter!'})).toBeChecked()
    await expect(page.getByRole('checkbox',{name:'Receive special offers from our partners!'})).toBeChecked()
})

test('radio5', async({page})=>{
    await page.goto('https://www.automationexercise.com/login')
    await page.getByPlaceholder('Name').fill('Parth')
    await page.getByPlaceholder('Email Address').nth(1).fill('rathodjay08.new@gmail.com')
    await page.getByRole('button',{name:'Signup'}).click()
    let Mr = await page.getByRole('radio',{name: 'Mr.'}).isChecked()
    let Mrs = await page.getByRole('radio',{name: 'Mrs.'}).isChecked()
    console.log(Mr)
    console.log(Mrs)

    await expect(Mr).toBe(false)
    await expect(Mrs).toBe(false)
})