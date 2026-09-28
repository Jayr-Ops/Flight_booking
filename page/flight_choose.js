const {CommanMethod} = require('../Util/CommanMethod')
exports.choose_flight = class choose_flight{
    constructor(page){
        this.page=page;
        this.choose_this_flight = page.locator('input[type="submit"]').nth(0)
    }

    async select_flight(){
        await CommanMethod.click_element(this.choose_this_flight)
    }

    
}