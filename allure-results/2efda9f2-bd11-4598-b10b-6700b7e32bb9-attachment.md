# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: first_test\End-to-End.spec.js >> select flight
- Location: tests\first_test\End-to-End.spec.js:12:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('[type="submit"]').first()

```

# Test source

```ts
  1  | exports.choose_flight = class choose_flight{
  2  |     constructor(page){
  3  |         this.page=page
  4  |         this.choose_this_flight=page.locator('[type="submit"]').nth(0)
  5  |     }
  6  | 
  7  |     async select_flight(){
> 8  |         await this.choose_this_flight.click()
     |                                       ^ Error: locator.click: Target page, context or browser has been closed
  9  |     }
  10 | }
```