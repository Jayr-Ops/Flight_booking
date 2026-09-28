const {test,expect} = require('@playwright/test')

test.describe('Static Web Table Tests',()=>{
    test.beforeEach('goto test webpage',async({page}, TestInfo)=>{
            await page.goto('https://www.stadsolution.com/automation-testing-practice/')
            console.log("Test Info:", TestInfo.titlePath.join(' > '))
    })

    test('table heading', async({page}) => {
        const heading =  page.getByRole('heading',{name: 'Static Web Table'})
        await heading.scrollIntoViewIfNeeded()
        console.log(await heading.innerText())
    })

    test('count number of records', async({page})=>{
        const table =  page.locator('.cb').nth(2).locator('.tw tbody tr')
        const rowcount = await table.count()
        console.log(rowcount)
        await expect(rowcount).toBe(6)
    })

    test('first student name',async({page})=>{
        const table =  page.locator('.cb').nth(2).locator('.tw tbody tr td')
        const first_student = await table.nth(1).innerText()
        console.log(first_student)
        await expect(first_student).toBe('Arjun Mehta')
    })

    test('last student cource', async({page})=>{
        const table =  page.locator('.cb').nth(2).locator('.tw tbody tr td')
        const last_course = await table.nth(28).innerHTML()
        console.log(last_course)
        expect(last_course).toBe('Mobile Testing')
    })
    
})