const EXCLE = require('xlsx')
const {test,expect} = require('@playwright/test')
test('sheet1',async({page})=>{
    const workbook = EXCLE.readFile('tests/first_test/Excle_test/Excle_Test.xlsx')
    const sheet = workbook.SheetNames[0]
    const sheet1 = workbook.Sheets[sheet]
    const data = EXCLE.utils.sheet_to_json(sheet1)

    await page.goto('https://www.automationexercise.com/login')
    await page.getByPlaceholder('Email Address').nth(0).fill(data[0].Username)
    await page.getByPlaceholder('Password').fill(data[0].Password)
    await page.locator('//*[@id="form"]/div/div/div[1]/div/form/button').click()

})