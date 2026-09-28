const {test , expect} = require('@playwright/test')
const { url } = require('node:inspector')

test.skip('advance1', async({page})=>{
    await page.goto('https://www.automationexercise.com/products')
    const products = page.locator('.product-image-wrapper')
    const product2 = products.nth(1)
    await product2.getByText('View Product').click()

    await expect(page).toHaveURL('https://www.automationexercise.com/product_details/2')

    console.log(page.url())
    
})

test.skip('advance2', async({page})=>{
    await page.goto('https://www.automationexercise.com/products')
    const products = page.locator('.product-image-wrapper')
    const first_prod = products.first()
    const second_prod  = products.last()
    const content1 = await first_prod.locator('.productinfo p').innerText()
    await expect(content1).toContain('Blue Top')
    const content2 = await second_prod.locator('.productinfo p').innerText()
    await expect(content2).toContain('GRAPHIC DESIGN MEN T SHIRT')
})

test.skip('advance3', async({page}) => {

    await page.goto('https://www.automationexercise.com/products')
    const products = page.locator('.product-image-wrapper',{ hasText : 'Blue Top'})
    await products.getByText('View Product').click()
    await expect(page).toHaveURL('https://www.automationexercise.com/product_details/1')
})

test.skip('advance4', async({page})=>{
    await page.goto('https://www.automationexercise.com/products')
    const products = page.locator('.product-image-wrapper', { visible: true })
    const count = await products.count()
    console.log(count)
    await expect(count).toBeGreaterThan(0)
})

test('advance5', async({page})=>{
    await page.goto('https://www.automationexercise.com/products')
    const products = page.locator('.product-image-wrapper')
    for (let i=0; i<3 ; i++){
      const name = await products.nth(i).locator('.productinfo p').innerText()
      await products.nth(i).locator('.productinfo').getByText('Add to cart').click()
      await page.getByText('Continue Shopping').click()

      console.log(name)
    }
    await page.pause()
})