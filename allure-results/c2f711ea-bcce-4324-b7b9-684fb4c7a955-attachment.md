# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: first_test\End-to-End.spec.js >> Find flight
- Location: tests\first_test\End-to-End.spec.js:7:1

# Error details

```
Error: locator.selectOption: options[0]: expected object, got undefined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Travel The World" [ref=e5] [cursor=pointer]:
      - /url: index.php
    - link "home" [ref=e6] [cursor=pointer]:
      - /url: home
  - generic [ref=e8]:
    - heading "Welcome to the Simple Travel Agency!" [level=1] [ref=e9]
    - paragraph [ref=e10]: The is a sample site you can test with BlazeMeter!
    - paragraph [ref=e11]:
      - text: Check out our
      - link "destination of the week! The Beach!" [ref=e12] [cursor=pointer]:
        - /url: vacation.html
  - generic [ref=e13]:
    - heading "Choose your departure city:" [level=2] [ref=e14]
    - generic [ref=e15]:
      - combobox [ref=e16] [cursor=pointer]:
        - option "Paris" [selected]
        - option "Philadelphia"
        - option "Boston"
        - option "Portland"
        - option "San Diego"
        - option "Mexico City"
        - option "São Paolo"
      - paragraph
      - heading "Choose your destination city:" [level=2] [ref=e17]
      - combobox [ref=e18] [cursor=pointer]:
        - option "Buenos Aires" [selected]
        - option "Rome"
        - option "London"
        - option "Berlin"
        - option "New York"
        - option "Dublin"
        - option "Cairo"
      - paragraph
      - button "Find Flights" [ref=e20] [cursor=pointer]
```

# Test source

```ts
  1  | exports.CommanMethod = class CommanMethod{
  2  |     static async textbox(element,value){
  3  |         await element.fill(value)
  4  |     }
  5  |     static async select(element,value){
> 6  |         await element.selectOption(value)
     |                       ^ Error: locator.selectOption: options[0]: expected object, got undefined
  7  |     }
  8  |     static async click_element(element){
  9  |         await element.click()
  10 |     }
  11 | }
```