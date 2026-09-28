# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: first_test\End-to-End.spec.js >> Find flight
- Location: tests\first_test\End-to-End.spec.js:6:1

# Error details

```
ReferenceError: Purchase_flight_form is not defined
```

# Test source

```ts
  1  | const { CommanMethod } = require('../Util/CommanMethod')
  2  | const Jsonreader = require('../Util/JsonReader')
  3  | const test_form = Jsonreader.passenger_details()
  4  | exports.checkout_page = class checkout_page{
  5  |     constructor(page){
  6  |         this.page=page
  7  |         this.Name=page.getByPlaceholder('First Last')
  8  |         this.Address=page.getByPlaceholder('123 Main St.')
  9  |         this.City=page.getByPlaceholder('Anytown')
  10 |         this.State=page.getByPlaceholder('State')
  11 |         this.zipcode=page.getByPlaceholder('12345')
  12 |         this.cardtype=page.locator('#cardType')
  13 |         this.card_number=page.getByPlaceholder('Credit Card Number')
  14 |         this.Month=page.getByPlaceholder('Month')
  15 |         this.Year=page.getByPlaceholder('Year')
  16 |         this.Name_on_card=page.getByPlaceholder('John Smith')
  17 |         this.Purchase=page.locator('input[type="submit"]')
  18 |     }
  19 | 
  20 |     async final_Checkout(){
  21 |         await CommanMethod.textbox(this.Name,test_form.Purchase_flight_form.Name)
  22 |         await CommanMethod.textbox(this.Address,test_form.Purchase_flight_form.Address)
  23 |         await CommanMethod.textbox(this.City,test_form.Purchase_flight_form.City)
  24 |         await CommanMethod.textbox(this.State,test_form.Purchase_flight_form.State)
  25 |         await CommanMethod.textbox(this.zipcode,test_form.Purchase_flight_form.Zip_Code)
  26 |         await CommanMethod.select(this.cardtype,test_form.Purchase_flight_form.Card_Type.Card1)
  27 |         await CommanMethod.textbox(this.card_number,test_form.Purchase_flight_form.CC_Number)
  28 |         await CommanMethod.textbox(this.Month,test_form.Purchase_flight_form.Month)
> 29 |         await CommanMethod.textbox(this.Year,Purchase_flight_form.Year)
     |                                              ^ ReferenceError: Purchase_flight_form is not defined
  30 |         await CommanMethod.textbox(this.Name_on_card,Purchase_flight_form.Name_on_card)
  31 |     }
  32 | 
  33 |     async submit(){
  34 |         await CommanMethod.click_element(this.Purchase)
  35 |     }
  36 | 
  37 | }
  38 | 
  39 | 
```