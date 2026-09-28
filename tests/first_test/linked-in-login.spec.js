const {test , expect} =  require('@playwright/test')

test('linkedIn', async({page}) => {
    await page.goto('https://www.linkedin.com/login/?trk=guest_homepage-basic_nav-header-signin')
    await page.locator('#«Rsvvtiejj35659j6»').fill('rathodjay08@outlook.com')
    await page.locator('#«R5fvtiejj35659j6»').fill('123456#')
    await page.pause()
});