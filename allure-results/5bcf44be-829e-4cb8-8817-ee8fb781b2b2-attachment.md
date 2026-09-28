# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: first_test\End-to-End.spec.js >> select flight
- Location: tests\first_test\End-to-End.spec.js:12:1

# Error details

```
TypeError: obj1.choose_this_flight is not a function
```

# Test source

```ts
  1  | import { loginpage } from "../../page/home";
  2  | import {choose_flight} from "../../page/flight_choose"
  3  | import {checkout_page} from '../../page/Purchase_flight'
  4  | 
  5  | const{test,expect} = require('@playwright/test')
  6  | 
  7  | test('Find flight',async({page})=>{
  8  |     const obj1 = new loginpage(page)
  9  |     await obj1.find()
  10 | })
  11 | 
  12 | test('select flight', async({page})=>{
  13 |     const obj1 = new choose_flight(page)
> 14 |     await obj1.choose_this_flight()
     |                ^ TypeError: obj1.choose_this_flight is not a function
  15 | })
  16 | 
  17 | test('Final_Checkout', async({page})=>{
  18 |     const obj1 = new checkout_page(page)
  19 |     await obj1.final_Checkout()
  20 | })
  21 | 
  22 | test('submit',async({page})=>{
  23 |     const obj2 = new checkout_page(page)
  24 |     await obj2.submit()
  25 |     await page.pause()
  26 | })
```