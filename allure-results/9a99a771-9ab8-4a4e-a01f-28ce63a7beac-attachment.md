# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: first_test\mouse_Keyboard.spec.js >> Range Slider
- Location: tests\first_test\mouse_Keyboard.spec.js:80:1

# Error details

```
Error: locator.inputValue: Target page, context or browser has been closed
Call log:
  - waiting for locator('#volume-slider')

```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test')
  2  | 
  3  | test.skip('mouse1', async({page})=>{
  4  |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  5  |     await page.getByRole('heading',{name:'Double Click'}).scrollIntoViewIfNeeded()
  6  |     const text = await page.locator('//*[@id="df1"]').inputValue()
  7  |     console.log(text)
  8  |     await page.getByRole('button',{name:' Double Click Me'}).dblclick()
  9  |     const text2 = await page.locator('//*[@id="df2"]').inputValue()
  10 |     console.log(text2)
  11 |     expect(text2).toBe(text)
  12 | })
  13 | 
  14 | test.skip('mouse2',async({page})=>{
  15 |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  16 |     await page.getByRole('heading',{name:'Mouse Hover Dropdown'}).scrollIntoViewIfNeeded()
  17 |     await page.getByRole('button',{name:' Mobiles ▾'}).hover()
  18 |     expect(page.getByRole('button',{name:' Mobiles ▾'})).toBeVisible()
  19 |     const items = page.locator('a').filter({hasText: /Samsung|Apple|OnePlus|Xiaomi/,});
  20 |     const values = await items.allTextContents()
  21 |     for(const item of values){
  22 |         console.log(item.trim())
  23 |     }
  24 |     await page.getByText('Samsung',{exact: true}).nth(0).click()
  25 |     await page.pause()
  26 | })
  27 | 
  28 | test.skip('keyboard', async({page})=>{
  29 |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  30 |     const FullName = page.getByPlaceholder('e.g. Rahul Sharma')
  31 |     await FullName.click()
  32 |     await page.keyboard.type('Jay Rathod')
  33 |     await page.keyboard.press('Tab')
  34 |     await page.keyboard.type('rathod@test.com')
  35 |     await page.keyboard.press('Tab')
  36 |     await page.keyboard.press('Escape')
  37 |     
  38 |     await expect(FullName).toHaveValue('Jay Rathod')
  39 |     const Email = page.getByPlaceholder('rahul@example.com')
  40 |     await expect(Email).toHaveValue('rathod@test.com')
  41 |     await page.pause()
  42 | })
  43 | 
  44 | test.skip('Scroll', async({page})=>{
  45 |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  46 |     await page.getByRole('Heading',{name:'Range Slider'}).scrollIntoViewIfNeeded()
  47 |     await expect(page.getByRole('Heading',{name:'Range Slider'})).toBeVisible() 
  48 |     await page.evaluate(() => window.scrollBy(0, -5000));
  49 |     const pageheading = page.getByRole('heading',{name:' Practice Automation Testing'})
  50 |     await expect(pageheading).toBeVisible()
  51 |     await page.pause()
  52 | })
  53 | 
  54 | test.skip('drag&drop',async({page})=>{
  55 |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  56 |     await page.getByRole('heading',{name:'Drag and Drop'}).scrollIntoViewIfNeeded()
  57 |     const target = page.locator('text=Drop Here')
  58 |     const targettext = await target.innerText()
  59 |     console.log(targettext)
  60 |     await page.dragAndDrop('#drag-src','#drag-tgt')
  61 |     const dropped = page.locator('text=Dropped!')
  62 |     await expect(dropped).toBeVisible()
  63 |     await page.getByRole('button', { name: '↺ Reset' }).nth(2).click()
  64 |     await expect(target).toBeVisible()
  65 |     await page.pause()
  66 | })
  67 | 
  68 | test.skip('right click',async({page})=>{
  69 |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  70 |     const Fname = page.getByPlaceholder('e.g. Rahul Sharma')
  71 |     await Fname.fill('Jay Rathod')
  72 |     await Fname.click({button:'right'})
  73 |     await expect(Fname).toBeFocused()
  74 |     await page.keyboard.press('Escape')
  75 |     const Fname_value = await Fname.inputValue()
  76 |     expect(Fname_value).toBe('Jay Rathod')
  77 |     await page.pause()
  78 | })
  79 | 
  80 | test('Range Slider', async({page})=>{
  81 |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  82 |     await page.getByRole('heading',{name:'Range Slider'}).scrollIntoViewIfNeeded()
  83 |     //const min = await page.locator('#dmin').innerText()
  84 |     //const max = await page.locator('#dmax').innerText()
  85 |     //console.log(min,'-',max)
  86 |     //const volumeSlider = page.locator('input[type="range"]')
  87 |     const volumeSlider = page.locator('#volume-slider');
> 88 |     const CurrentValue = await volumeSlider.inputValue()
     |                                             ^ Error: locator.inputValue: Target page, context or browser has been closed
  89 |     console.log(CurrentValue)
  90 |     await page.evaluate(() => {
  91 |         const slider = document.querySelector('#volume-slider');
  92 |         slider.value = '80'
  93 |     })
  94 |     console.log(CurrentValue)
  95 |     await page.pause()
  96 | })
```