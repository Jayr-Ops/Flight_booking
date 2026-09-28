const { CommanMethod } = require('../Util/CommanMethod')
const Jsonreader = require('../Util/JsonReader')
const test_form = Jsonreader.passenger_details()
exports.checkout_page = class checkout_page{
    constructor(page){
        this.page=page
        this.Name=page.getByPlaceholder('First Last')
        this.Address=page.getByPlaceholder('123 Main St.')
        this.City=page.getByPlaceholder('Anytown')
        this.State=page.getByPlaceholder('State')
        this.zipcode=page.getByPlaceholder('12345')
        this.cardtype=page.locator('#cardType')
        this.card_number=page.getByPlaceholder('Credit Card Number')
        this.Month=page.getByPlaceholder('Month')
        this.Year=page.getByPlaceholder('Year')
        this.Name_on_card=page.getByPlaceholder('John Smith')
        this.Purchase=page.locator('input[type="submit"]')
    }

    async final_Checkout(){
        await CommanMethod.textbox(this.Name,test_form.Purchase_flight_form.Name)
        await CommanMethod.textbox(this.Address,test_form.Purchase_flight_form.Address)
        await CommanMethod.textbox(this.City,test_form.Purchase_flight_form.City)
        await CommanMethod.textbox(this.State,test_form.Purchase_flight_form.State)
        await CommanMethod.textbox(this.zipcode,test_form.Purchase_flight_form.Zip_Code)
        await CommanMethod.select(this.cardtype,test_form.Purchase_flight_form.Card_Type.Card1)
        await CommanMethod.textbox(this.card_number,test_form.Purchase_flight_form.CC_Number)
        await CommanMethod.textbox(this.Month,test_form.Purchase_flight_form.Month)
        await CommanMethod.textbox(this.Year,test_form.Purchase_flight_form.Year)
        await CommanMethod.textbox(this.Name_on_card,test_form.Purchase_flight_form.Buyer_Name)
    }

    async submit(){
        await CommanMethod.click_element(this.Purchase)
    }

}

