const {test,expect} = require('@playwright/test')

test.skip('input1', async({page})=>{
    await page.goto('https://www.automationexercise.com/login')
    await page.getByRole('textbox',{name:'Name'}).fill('Parth')
    await page.getByRole('textbox',{name:'Email Address'}).nth(1).fill('parthrathod@gmail.com')
    const Name = await page.getByRole('textbox',{name:'Name'}).inputValue()
    const Email = await page.getByRole('textbox',{name:'Email Address'}).nth(1).inputValue()
    console.log(Name,Email)
    expect(Name).toBe('Parth')
    expect(Email).toBe('parthrathod@gmail.com')
    await page.pause()
})

test.skip('input2',async({page})=>{
    await page.goto('https://www.automationexercise.com/login')
    await page.getByRole('textbox',{name:'Email Address'}).nth(1).fill('parthrathod@gmail.com')
    await page.getByRole('textbox',{name:'Email Address'}).nth(1).clear()
    await page.getByRole('textbox',{name:'Email Address'}).nth(1).fill('parthrathod08@gmail.com')
    const Email1 = await page.getByRole('textbox',{name:'Email Address'}).nth(1).inputValue()
    expect(Email1).toBe('parthrathod07@gmail.com')
})

test.skip('input3',async({page})=>{
    await page.goto('https://www.automationexercise.com/login')
    await page.getByRole('textbox',{name:'Name'}).fill('Parth')
    await page.getByRole('textbox',{name:'Email Address'}).nth(1).fill('parthrathod.new@gmail.com')
    await page.getByRole('button',{name:'Signup'}).click()
    await page.waitForURL(/signup/)
    await page.locator('#password').fill('Test@123')
    await page.locator('#first_name').fill('Parth')
    await page.locator('#last_name').fill('Rathod')
    await page.locator('#address1').fill('Chandkheda,Ahmeadabad')
    await page.locator('#country').selectOption('India')
    await page.locator('#state').fill('Gujarat')
    await page.locator('#city').fill('Ahmedabad')
    await page.locator('#zipcode').fill('382424')
    await page.locator('#mobile_number').fill('9714373117')
    

    const password = await page.locator('#password').inputValue()
    const firstname = await  page.locator('#first_name').inputValue()
    const lastname = await page.locator('#last_name').inputValue()
    const address = await page.locator('#address1').inputValue()
    const contry = await page.locator('#country').inputValue()
    const state = await page.locator('#state').inputValue()
    const city = await page.locator('#city').inputValue()
    const zipcode = await page.locator('#zipcode').inputValue()
    const mobile = await page.locator('#mobile_number').inputValue()

    expect(password).toBe('Test@123')
    expect(firstname).toBe('Parth')
    expect(lastname).toBe('Rathod')
    expect(address).toBe('Chandkheda,Ahmeadabad')
    expect(contry).toBe('India')
    expect(state).toBe('Gujarat')
    expect(city).toBe('Ahmedabad')
    expect(zipcode).toBe('382424')
    expect(mobile).toBe('9714373117')

    await page.getByRole('button',{name:'Create Account'}).click()
    await page.pause()
})

test.skip('input4', async({page})=>{
    await page.goto('https://www.automationexercise.com/login')
    const placeholder = await page.getByPlaceholder('Email Address').nth(0).getAttribute('placeholder')
    console.log(placeholder)
})

test('input5', async({page})=>{
    await page.goto('https://www.automationexercise.com/login')
    await page.getByPlaceholder('Email Address').nth(0).fill('rathod.com')
    await page.getByPlaceholder('Password').fill('abc@123')
    await page.getByRole('button',{name:'Login'})
    
    const emailinput = page.getByPlaceholder('Email Address').nth(0)
    const validationMsg = await emailinput.evaluate( el => el.validationMessage)

    console.log(validationMsg)

    expect(validationMsg.length).toBeGreaterThan(0)
    expect(validationMsg).toContain('@')
})