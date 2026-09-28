const {test,expect} = require('@playwright/test')

test.skip('mouse1', async({page})=>{
    await page.goto('https://www.stadsolution.com/automation-testing-practice/')
    await page.getByRole('heading',{name:'Double Click'}).scrollIntoViewIfNeeded()
    const text = await page.locator('//*[@id="df1"]').inputValue()
    console.log(text)
    await page.getByRole('button',{name:' Double Click Me'}).dblclick()
    const text2 = await page.locator('//*[@id="df2"]').inputValue()
    console.log(text2)
    expect(text2).toBe(text)
})

test.skip('mouse2',async({page})=>{
    await page.goto('https://www.stadsolution.com/automation-testing-practice/')
    await page.getByRole('heading',{name:'Mouse Hover Dropdown'}).scrollIntoViewIfNeeded()
    await page.getByRole('button',{name:' Mobiles ▾'}).hover()
    expect(page.getByRole('button',{name:' Mobiles ▾'})).toBeVisible()
    const items = page.locator('a').filter({hasText: /Samsung|Apple|OnePlus|Xiaomi/,});
    const values = await items.allTextContents()
    for(const item of values){
        console.log(item.trim())
    }
    await page.getByText('Samsung',{exact: true}).nth(0).click()
    await page.pause()
})

test.skip('keyboard', async({page})=>{
    await page.goto('https://www.stadsolution.com/automation-testing-practice/')
    const FullName = page.getByPlaceholder('e.g. Rahul Sharma')
    await FullName.click()
    await page.keyboard.type('Jay Rathod')
    await page.keyboard.press('Tab')
    await page.keyboard.type('rathod@test.com')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Escape')
    
    await expect(FullName).toHaveValue('Jay Rathod')
    const Email = page.getByPlaceholder('rahul@example.com')
    await expect(Email).toHaveValue('rathod@test.com')
    await page.pause()
})

test.skip('Scroll', async({page})=>{
    await page.goto('https://www.stadsolution.com/automation-testing-practice/')
    await page.getByRole('Heading',{name:'Range Slider'}).scrollIntoViewIfNeeded()
    await expect(page.getByRole('Heading',{name:'Range Slider'})).toBeVisible() 
    await page.evaluate(() => window.scrollBy(0, -5000));
    const pageheading = page.getByRole('heading',{name:' Practice Automation Testing'})
    await expect(pageheading).toBeVisible()
    await page.pause()
})

test.skip('drag&drop',async({page})=>{
    await page.goto('https://www.stadsolution.com/automation-testing-practice/')
    await page.getByRole('heading',{name:'Drag and Drop'}).scrollIntoViewIfNeeded()
    const target = page.locator('text=Drop Here')
    const targettext = await target.innerText()
    console.log(targettext)
    await page.dragAndDrop('#drag-src','#drag-tgt')
    const dropped = page.locator('text=Dropped!')
    await expect(dropped).toBeVisible()
    await page.getByRole('button', { name: '↺ Reset' }).nth(2).click()
    await expect(target).toBeVisible()
    await page.pause()
})

test.skip('right click',async({page})=>{
    await page.goto('https://www.stadsolution.com/automation-testing-practice/')
    const Fname = page.getByPlaceholder('e.g. Rahul Sharma')
    await Fname.fill('Jay Rathod')
    await Fname.click({button:'right'})
    await expect(Fname).toBeFocused()
    await page.keyboard.press('Escape')
    const Fname_value = await Fname.inputValue()
    expect(Fname_value).toBe('Jay Rathod')
    await page.pause()
})

test.skip('Range Slider', async({page})=>{
    await page.goto('https://www.stadsolution.com/automation-testing-practice/')
    await page.getByRole('heading',{name:'Range Slider'}).scrollIntoViewIfNeeded()
    //const min = await page.locator('#dmin').innerText()
    //const max = await page.locator('#dmax').innerText()
    //console.log(min,'-',max)
    const volumeSlider = page.locator('input[type="range"]')
    const CurrentValue = await volumeSlider.inputValue()
    console.log(CurrentValue)
    await page.evaluate(() => {
        const slider = document.querySelector('input[type="range"]');
        slider.value = '80'
    })
    console.log(CurrentValue)
    await page.pause()
})

test('Hover - Reveal Dropdown Menu on Mouse Over', async ({ page }) => {
    await page.goto('https://www.stadsolution.com/automation-testing-practice/');
    const mobilesBtn = page.getByRole('button', { name: '📱 Mobiles ▾' });
    await mobilesBtn.scrollIntoViewIfNeeded();
    const mobilesDropdown = page.locator('.hover-dropdown').first();
    const isHiddenBefore = await mobilesDropdown.isHidden();
    console.log('Dropdown Hidden Before Hover:', isHiddenBefore);
    await mobilesBtn.hover();
    console.log('Hovered over Mobiles button');
    //await mobilesDropdown.waitFor({ state: 'visible' });
    const isVisibleAfter = await mobilesDropdown.isVisible();
    console.log('Dropdown Visible After Hover:', isVisibleAfter);



// Read all dropdown items

// Locator Strategy 3: chained locator — all links inside the dropdown
    const dropdownItems = mobilesDropdown.locator('a');
    const itemCount = await dropdownItems.count();
    console.log('Dropdown Item Count:', itemCount);
    for (let i = 0; i < itemCount; i++) 
    {
        const itemText = await dropdownItems.nth(i).innerText();
        console.log(` Item ${i + 1}: ${itemText}`);
    }

    await mobilesDropdown.getByText('Samsung').click();
    console.log('Clicked Samsung');
    expect(isVisibleAfter).toBe(true);
    expect(itemCount).toBeGreaterThan(0);
});