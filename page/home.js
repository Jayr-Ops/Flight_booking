const {CommanMethod} = require('../Util/CommanMethod')
exports.loginpage = class loginpage{

    constructor(page){
        this.page=page;
        this.departcity=page.locator('.form-inline').nth(0)
        this.destination=page.locator('.form-inline').nth(1)
        this.Find_button=page.locator('//html/body/div[3]/form/div/input')
    }

    async find(city1,city2){
        await this.page.goto('https://blazedemo.com/')
        await CommanMethod.select(this.departcity,city1)
        await CommanMethod.select(this.destination,city2)
        await CommanMethod.click_element(this.Find_button)
    }

}