exports.CommanMethod = class CommanMethod{
    static async textbox(element,value){
        await element.fill(value)
    }
    static async select(element,value){
        await element.selectOption(value)
    }
    static async click_element(element){
        await element.click()
    }
}