# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: first_test\End-to-End.spec.js >> Find flight
- Location: tests\first_test\End-to-End.spec.js:6:1

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Test source

```ts
  1  | exports.CommanMethod = class CommanMethod{
  2  |     static async textbox(element,value){
> 3  |         await element.fill(value)
     |                       ^ Error: locator.fill: value: expected string, got undefined
  4  |     }
  5  |     static async select(element,value){
  6  |         await element.selectOption(value)
  7  |     }
  8  |     static async click_element(element){
  9  |         await element.click()
  10 |     }
  11 | }
```