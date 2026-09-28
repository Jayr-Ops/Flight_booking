# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: first_test\End-to-End.spec.js >> Find flight
- Location: tests\first_test\End-to-End.spec.js:7:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'getByPlaceholder')
```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - generic [ref=f2e4]:
    - link "Travel The World" [ref=f2e5] [cursor=pointer]:
      - /url: index.php
    - link "home" [ref=f2e6] [cursor=pointer]:
      - /url: home
  - generic [ref=f2e7]:
    - heading "Your flight from TLV to SFO has been reserved." [level=2] [ref=f2e8]
    - paragraph [ref=f2e9]: "Airline: United"
    - paragraph [ref=f2e10]: "Flight Number: UA954"
    - paragraph [ref=f2e11]: "Price: 400"
    - paragraph [ref=f2e12]: "Arbitrary Fees and Taxes: 514.76"
    - separator [ref=f2e13]
    - paragraph [ref=f2e14]:
      - text: "Total Cost:"
      - emphasis [ref=f2e15]: "914.76"
    - paragraph [ref=f2e16]: Please submit the form below to purchase the flight.
    - generic [ref=f2e17]:
      - generic [ref=f2e18]:
        - generic [ref=f2e19] [cursor=pointer]: Name
        - textbox "Name" [ref=f2e21]:
          - /placeholder: First Last
      - generic [ref=f2e22]:
        - generic [ref=f2e23] [cursor=pointer]: Address
        - textbox "Address" [ref=f2e25]:
          - /placeholder: 123 Main St.
      - generic [ref=f2e26]:
        - generic [ref=f2e27] [cursor=pointer]: City
        - textbox "City" [ref=f2e29]:
          - /placeholder: Anytown
      - generic [ref=f2e30]:
        - generic [ref=f2e31] [cursor=pointer]: State
        - textbox "State" [ref=f2e33]
      - generic [ref=f2e34]:
        - generic [ref=f2e35] [cursor=pointer]: Zip Code
        - textbox "Zip Code" [ref=f2e37]:
          - /placeholder: "12345"
      - generic [ref=f2e38]:
        - generic [ref=f2e39] [cursor=pointer]: Card Type
        - combobox [ref=f2e41] [cursor=pointer]:
          - option "Visa" [selected]
          - option "American Express"
          - option "Diner's Club"
      - generic [ref=f2e42]:
        - generic [ref=f2e43] [cursor=pointer]: Credit Card Number
        - textbox "Credit Card Number" [ref=f2e45]
      - generic [ref=f2e46]:
        - generic [ref=f2e47] [cursor=pointer]: Month
        - textbox "Month" [ref=f2e49]: "11"
      - generic [ref=f2e50]:
        - generic [ref=f2e51] [cursor=pointer]: Year
        - textbox "Year" [ref=f2e53]: "2017"
      - generic [ref=f2e54]:
        - generic [ref=f2e55] [cursor=pointer]: Name on Card
        - textbox "Name on Card" [ref=f2e57]:
          - /placeholder: John Smith
      - generic [ref=f2e59]:
        - generic [ref=f2e60] [cursor=pointer]:
          - checkbox "Remember me" [ref=f2e61]
          - text: Remember me
        - button "Purchase Flight" [ref=f2e62] [cursor=pointer]
```

# Test source

```ts
  1  | exports.checkout_page = class checkout_page{
  2  |     constructor(page){
  3  |         this.page=page
> 4  |         this.Name=page.getByPlaceholder('First Last')
     |                        ^ TypeError: Cannot read properties of undefined (reading 'getByPlaceholder')
  5  |         this.Address=page.getByPlaceholder('123 Main St.')
  6  |         this.City=page.getByPlaceholder('Anytown')
  7  |         this.State=page.getByPlaceholder('State')
  8  |         this.zipcode=page.getByPlaceholder('12345')
  9  |         this.cardtype=page.locator('#cardType')
  10 |         this.card_number=page.getByPlaceholder('Credit Card Number')
  11 |         this.Month=page.getByPlaceholder('Month')
  12 |         this.Year=page.getByPlaceholder('Year')
  13 |         this.Name_on_card=page.getByPlaceholder('John Smith')
  14 |         this.Purchase=page.locator('input[type="submit"]')
  15 |     }
  16 | 
  17 |     async final_Checkout(){
  18 |         await this.Name.fill('Abc Xyz')
  19 |         await this.Address.fill('Xyz Streets')
  20 |         await this.City.fill('NY')
  21 |         await this.State.fill('NY')
  22 |         await this.zipcode.fill('45HGG9')
  23 |         await this.cardtype.selectOption('Visa')
  24 |         await this.card_number.fill('123 456 789')
  25 |         await this.Month.fill('11')
  26 |         await this.Year.fill('2028')
  27 |         await this.Name_on_card('Abc Xyz')
  28 |     }
  29 | 
  30 |     async submit(){
  31 |         await this.Purchase.click()
  32 |     }
  33 | 
  34 | }
  35 | 
  36 | 
```