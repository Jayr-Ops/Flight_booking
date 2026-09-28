const {AppConstant} = require('../Constant/AppConstant')
const { ScreenshotHelper } = require('../Util/ScreenshotHelper')
const { test, expect} = require('@playwright/test')
test.beforeAll(async ()=>{
    console.log('Test Execution started')
})

test.beforeEach(async ({page})=>{
    console.log("Opening Application...")
    await page.goto(AppConstant.BASE_URL)
})

test.afterEach(async({page}, testInfo)=>{
    if (testInfo.status !== testInfo.expectedStatus){
        await ScreenshotHelper.capture(page,testInfo.title.replace(/\s+/g,"_"))
    }
})

test.afterAll(async({})=>{
    console.log('Test Execution completed')
})