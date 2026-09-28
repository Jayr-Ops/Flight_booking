# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: first_test\End-to-End.spec.js >> Find flight
- Location: tests\first_test\End-to-End.spec.js:4:1

# Error details

```
TypeError: loginpage is not a constructor
```

# Test source

```ts
  1  | const base = require('@playwright/test')
  2  | 
  3  | const loginpage = require('../page/home')
  4  | const choose_flight = require('../page/flight_choose')
  5  | const checkout_page = require('../page/Purchase_flight')
  6  | 
  7  | exports.test = base.test.extend({
  8  |     loginPage: async ({page}, use) => {
> 9  |         const loginpage1 = new loginpage(page)
     |                            ^ TypeError: loginpage is not a constructor
  10 |         await use(loginpage1)
  11 |     },
  12 |     choose_flight: async ({page}, use) => {
  13 |         const choose_flight1 = new choose_flight(page)
  14 |         await use(choose_flight1)
  15 |     },
  16 |     checkout_page: async ({page}, use) => {
  17 |         const checkout_page1= new checkout_page(page)
  18 |         await use(checkout_page1)
  19 |     }
  20 | })
```