const {test,expect} = require('@playwright/test')

test.skip('upload single file',async({page})=>{
    await page.goto('https://www.stadsolution.com/automation-testing-practice/')
    await page.getByRole('heading',{name:'File Upload'}).scrollIntoViewIfNeeded()
    await page.locator('#up1').setInputFiles('tests/download/test.txt')
    const uploaded = await page.locator('#fr1').innerText()
    console.log(uploaded)
    await expect(uploaded).toBe(" test.txt (0.0 KB)")
    await page.pause()
})

test.skip('multiple', async({page})=>{
    await page.goto('https://www.stadsolution.com/automation-testing-practice/')
    await page.getByRole('heading',{name:'File Upload'}).scrollIntoViewIfNeeded()
    await page.locator('#up2').setInputFiles(['tests/download/test.txt','tests/download/test.csv','tests/download/test.json'])
    const fileDetails = await page.locator('#up2').evaluate(input => {
        return Array.from(input.files).map(file => ({
            name: file.name,
            size: file.size,
            type: file.type
        }))
    })
    console.log('Uploaded files:');

    for (const file of fileDetails) {
        console.log(
            `Name: ${file.name}, Size: ${file.size} bytes, Type: ${file.type}`
        )
    }
    expect(fileDetails.map(file => file.name)).toEqual([
        'test.txt',
        'test.csv',
        'test.json'
    ])
    expect(fileDetails.length).toBe(3)
    await page.pause()
})

test('download server file', async ({page})=>{
    await page.goto('https://www.stadsolution.com/automation-testing-practice/')
    
})