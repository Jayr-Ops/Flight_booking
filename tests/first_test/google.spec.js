const {test, expect} = require('@playwright/test')

test('Google', async({page})=>{
    await page.goto("https://www.google.com/")
    await page.locator('//*[@id="ti6dpd"]').fill('playwright')
    
    await page.waitForTimeout(2000)

    const suggestions = page.locator('ul[role="listbox"] li')

    let suggestionList = []

    const count = await suggestions.count()
    const targetSuggestion = 'playwright documentation'
    for (let i = 0; i < count; i++) 
        { 
            const text = await suggestions.nth(i).innerText()
            text.trim()
            if (text.includes(targetSuggestion)) 
                { 
                    await suggestions.nth(i).click()
                } 
        }
})