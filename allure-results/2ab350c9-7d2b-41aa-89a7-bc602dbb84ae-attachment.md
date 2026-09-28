# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: first_test\mouse_Keyboard.spec.js >> Hover - Reveal Dropdown Menu on Mouse Over
- Location: tests\first_test\mouse_Keyboard.spec.js:97:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.hover-dropdown').first() to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e7]:
    - banner [ref=e8]:
      - generic [ref=e10]:
        - generic [ref=e11]: QA
        - generic [ref=e12]:
          - generic [ref=e13]: Automation Testing Practice
          - generic [ref=e14]: Selenium · Cypress · Playwright
    - generic [ref=e15]:
      - heading [level=1] [ref=e16]:
        - img "🧪" [ref=e17]
        - text: Practice Automation Testing
      - paragraph [ref=e18]: All UI elements in one place — forms, tables, popups, drag & drop, sliders, and more
      - generic [ref=e19]:
        - generic [ref=e20]:
          - img "✅" [ref=e21]
          - text: 14 Sections
        - generic [ref=e22]:
          - img "🖱" [ref=e23]
          - text: Interactive
        - generic [ref=e24]:
          - img "📱" [ref=e25]
          - text: Responsive
        - generic [ref=e26]:
          - img "⚡" [ref=e27]
          - text: All Features Live
    - main [ref=e28]:
      - generic [ref=e29]:
        - generic [ref=e30]:
          - img "📝" [ref=e32]
          - heading "GUI Form Elements" [level=2] [ref=e33]
          - generic [ref=e34]: Section 1
        - generic [ref=e35]:
          - generic [ref=e36]:
            - generic [ref=e37]:
              - generic [ref=e38]: Full Name
              - textbox "e.g. Rahul Sharma" [ref=e39]
            - generic [ref=e40]:
              - generic [ref=e41]: Email Address
              - textbox "rahul@example.com" [ref=e42]
            - generic [ref=e43]:
              - generic [ref=e44]: Phone
              - textbox "+91 98765 43210" [ref=e45]
            - generic [ref=e46]:
              - generic [ref=e47]: Address
              - textbox "Enter full address..." [ref=e48]
          - generic [ref=e49]:
            - generic [ref=e50]:
              - generic [ref=e51]: Gender
              - generic [ref=e52]:
                - generic [ref=e53] [cursor=pointer]:
                  - radio "Male" [ref=e54]
                  - text: Male
                - generic [ref=e55] [cursor=pointer]:
                  - radio "Female" [ref=e56]
                  - text: Female
                - generic [ref=e57] [cursor=pointer]:
                  - radio "Other" [ref=e58]
                  - text: Other
            - generic [ref=e59]:
              - generic [ref=e60]: Days Available
              - generic [ref=e61]:
                - generic [ref=e62] [cursor=pointer]:
                  - checkbox "Sun" [ref=e63]
                  - text: Sun
                - generic [ref=e64] [cursor=pointer]:
                  - checkbox "Mon" [ref=e65]
                  - text: Mon
                - generic [ref=e66] [cursor=pointer]:
                  - checkbox "Tue" [ref=e67]
                  - text: Tue
                - generic [ref=e68] [cursor=pointer]:
                  - checkbox "Wed" [ref=e69]
                  - text: Wed
                - generic [ref=e70] [cursor=pointer]:
                  - checkbox "Thu" [ref=e71]
                  - text: Thu
                - generic [ref=e72] [cursor=pointer]:
                  - checkbox "Fri" [ref=e73]
                  - text: Fri
                - generic [ref=e74] [cursor=pointer]:
                  - checkbox "Sat" [ref=e75]
                  - text: Sat
          - generic [ref=e76]:
            - generic [ref=e77]:
              - generic [ref=e78]: Country
              - combobox [ref=e79] [cursor=pointer]:
                - option "— Select Country —" [selected]
                - option "India"
                - option "United States"
                - option "United Kingdom"
                - option "Canada"
                - option "Australia"
                - option "Germany"
                - option "France"
                - option "Japan"
                - option "China"
                - option "Brazil"
            - generic [ref=e80]:
              - generic [ref=e81]: Testing Tools (Multi-select)
              - listbox [ref=e82] [cursor=pointer]:
                - option "Selenium" [ref=e83]
                - option "Cypress" [ref=e84]
                - option "Playwright" [ref=e85]
                - option "Appium" [ref=e86]
                - option "TestNG" [ref=e87]
                - option "JUnit" [ref=e88]
                - option "Postman" [ref=e89]
            - generic [ref=e90]:
              - generic [ref=e91]: Indian Birds (Sorted)
              - listbox [ref=e92] [cursor=pointer]:
                - option "Bulbul" [ref=e93]
                - option "Crane" [ref=e94]
                - option "Flamingo" [ref=e95]
                - option "Hornbill" [ref=e96]
                - option "Kingfisher" [ref=e97]
                - option "Myna" [ref=e98]
                - option "Parrot" [ref=e99]
                - option "Peacock" [ref=e100]
                - option "Sparrow" [ref=e101]
                - option "Sunbird" [ref=e102]
          - generic [ref=e103]:
            - generic [ref=e104]:
              - generic [ref=e105]: Date Picker 1 — MM/DD/YYYY
              - textbox "Select date..." [ref=e106] [cursor=pointer]
            - generic [ref=e107]:
              - generic [ref=e108]: Date Picker 2 — DD/MM/YYYY
              - textbox "Select date..." [ref=e109] [cursor=pointer]
          - generic [ref=e110]:
            - generic [ref=e111]: Date Picker 3 — Range
            - textbox "Select a date range..." [ref=e112] [cursor=pointer]
          - generic [ref=e113]:
            - button [ref=e114] [cursor=pointer]:
              - img "🚀" [ref=e115]
              - text: Submit Form
            - button "↺ Reset" [ref=e116] [cursor=pointer]
      - generic [ref=e117]:
        - generic [ref=e118]:
          - img "📁" [ref=e120]
          - heading "File Upload" [level=2] [ref=e121]
          - generic [ref=e122]: Section 2
        - generic [ref=e124]:
          - generic [ref=e125]:
            - generic [ref=e126]: Single File
            - generic [ref=e127] [cursor=pointer]:
              - button "Choose File" [ref=e128]
              - img "📄" [ref=e130]
              - paragraph [ref=e131]:
                - strong [ref=e132]: Click to browse
              - paragraph [ref=e133]: Any single file
          - generic [ref=e135]:
            - generic [ref=e136]: Multiple Files
            - generic [ref=e137] [cursor=pointer]:
              - button "Choose File" [ref=e138]
              - img "📂" [ref=e140]
              - paragraph [ref=e141]:
                - strong [ref=e142]: Click to browse
              - paragraph [ref=e143]: Multiple files allowed
      - generic [ref=e145]:
        - generic [ref=e146]:
          - img "📊" [ref=e148]
          - heading "Static Web Table" [level=2] [ref=e149]
          - generic [ref=e150]: Section 3
        - table [ref=e153]:
          - rowgroup [ref=e154]:
            - row [ref=e155]:
              - columnheader "#" [ref=e156]
              - columnheader "Student Name" [ref=e157]
              - columnheader "Trainer" [ref=e158]
              - columnheader "Course" [ref=e159]
              - columnheader "Batch" [ref=e160]
          - rowgroup [ref=e161]:
            - row [ref=e162]:
              - cell "1" [ref=e163]
              - cell "Arjun Mehta" [ref=e164]
              - cell "Ravi Kumar" [ref=e165]
              - cell "Selenium Basics" [ref=e166]
              - cell "Batch A" [ref=e167]
            - row [ref=e169]:
              - cell "2" [ref=e170]
              - cell "Priya Sharma" [ref=e171]
              - cell "Sneha Patil" [ref=e172]
              - cell "API Testing" [ref=e173]
              - cell "Batch B" [ref=e174]
            - row [ref=e176]:
              - cell "3" [ref=e177]
              - cell "Rohit Verma" [ref=e178]
              - cell "Ravi Kumar" [ref=e179]
              - cell "Cypress Advanced" [ref=e180]
              - cell "Batch A" [ref=e181]
            - row [ref=e183]:
              - cell "4" [ref=e184]
              - cell "Neha Joshi" [ref=e185]
              - cell "Anil Desai" [ref=e186]
              - cell "Playwright Pro" [ref=e187]
              - cell "Batch C" [ref=e188]
            - row [ref=e190]:
              - cell "5" [ref=e191]
              - cell "Karan Patel" [ref=e192]
              - cell "Sneha Patil" [ref=e193]
              - cell "Java for Testers" [ref=e194]
              - cell "Batch B" [ref=e195]
            - row [ref=e197]:
              - cell "6" [ref=e198]
              - cell "Divya Nair" [ref=e199]
              - cell "Anil Desai" [ref=e200]
              - cell "Mobile Testing" [ref=e201]
              - cell "Batch C" [ref=e202]
      - generic [ref=e204]:
        - generic [ref=e205]:
          - img "⚡" [ref=e207]
          - heading "Dynamic Web Table" [level=2] [ref=e208]
          - generic [ref=e209]: Section 4
        - generic [ref=e210]:
          - generic [ref=e211]:
            - textbox "Name" [ref=e212]
            - textbox "Role" [ref=e213]
            - textbox "Department" [ref=e214]
            - button "+ Add Row" [ref=e215] [cursor=pointer]
          - table [ref=e217]:
            - rowgroup [ref=e218]:
              - row [ref=e219]:
                - columnheader "#" [ref=e220]
                - columnheader "Name" [ref=e221]
                - columnheader "Role" [ref=e222]
                - columnheader "Department" [ref=e223]
                - columnheader "Action" [ref=e224]
            - rowgroup [ref=e225]:
              - row [ref=e226]:
                - cell "1" [ref=e227]
                - cell "Meera Iyer" [ref=e228]
                - cell "Test Engineer" [ref=e229]
                - cell "QA Automation" [ref=e230]
                - cell [ref=e231]:
                  - button "Delete" [ref=e232] [cursor=pointer]
      - generic [ref=e233]:
        - generic [ref=e234]:
          - img "📄" [ref=e236]
          - heading "Pagination Web Table" [level=2] [ref=e237]
          - generic [ref=e238]: Section 5
        - generic [ref=e239]:
          - table [ref=e241]:
            - rowgroup [ref=e242]:
              - row [ref=e243]:
                - columnheader "ID" [ref=e244]
                - columnheader "Student Name" [ref=e245]
                - columnheader "Course" [ref=e246]
                - columnheader "City" [ref=e247]
                - columnheader "Status" [ref=e248]
            - rowgroup [ref=e249]:
              - row [ref=e250]:
                - cell "1" [ref=e251]
                - cell "Aarav Singh" [ref=e252]
                - cell "Selenium Automation" [ref=e253]
                - cell "Mumbai" [ref=e254]
                - cell "Enrolled" [ref=e255]
              - row [ref=e257]:
                - cell "2" [ref=e258]
                - cell "Bhavna Reddy" [ref=e259]
                - cell "Cypress Testing" [ref=e260]
                - cell "Hyderabad" [ref=e261]
                - cell "Enrolled" [ref=e262]
              - row [ref=e264]:
                - cell "3" [ref=e265]
                - cell "Chirag Malhotra" [ref=e266]
                - cell "API Testing" [ref=e267]
                - cell "Pune" [ref=e268]
                - cell "Completed" [ref=e269]
              - row [ref=e271]:
                - cell "4" [ref=e272]
                - cell "Deepika Nair" [ref=e273]
                - cell "Playwright Pro" [ref=e274]
                - cell "Bengaluru" [ref=e275]
                - cell "Enrolled" [ref=e276]
          - generic [ref=e278]:
            - generic [ref=e279]: Showing 1–4 of 12 items
            - generic [ref=e280]:
              - button "‹" [disabled]
              - button "1" [ref=e281] [cursor=pointer]
              - button "2" [ref=e282] [cursor=pointer]
              - button "3" [ref=e283] [cursor=pointer]
              - button "›" [ref=e284] [cursor=pointer]
      - generic [ref=e285]:
        - generic [ref=e286]:
          - img "🗂️" [ref=e288]
          - heading "Tabs" [level=2] [ref=e289]
          - generic [ref=e290]: Section 6
        - generic [ref=e291]:
          - generic [ref=e292]:
            - button [ref=e293] [cursor=pointer]:
              - img "📌" [ref=e294]
              - text: Section 1
            - button [ref=e295] [cursor=pointer]:
              - img "📌" [ref=e296]
              - text: Section 2
            - button [ref=e297] [cursor=pointer]:
              - img "📌" [ref=e298]
              - text: Section 3
          - generic [ref=e299]:
            - paragraph [ref=e300]:
              - text: This is
              - strong [ref=e301]: Section 1
              - text: . Practice tab switching, content visibility assertions, and DOM state verification with Selenium, Cypress, or Playwright.
            - button "Submit" [ref=e302] [cursor=pointer]
      - generic [ref=e303]:
        - generic [ref=e304]:
          - img "⏱️" [ref=e306]
          - heading "Dynamic Button — Timer" [level=2] [ref=e307]
          - generic [ref=e308]: Section 7
        - generic [ref=e309]:
          - generic [ref=e310]:
            - generic [ref=e311]: 00:00:00
            - generic [ref=e312]: hours · minutes · seconds
          - generic [ref=e313]:
            - button [ref=e314] [cursor=pointer]:
              - img "▶" [ref=e315]
              - text: START
            - button "↺ RESET" [ref=e316] [cursor=pointer]
      - generic [ref=e317]:
        - generic [ref=e318]:
          - img "🔔" [ref=e320]
          - heading "Alerts & Popups" [level=2] [ref=e321]
          - generic [ref=e322]: Section 8
        - generic [ref=e323]:
          - paragraph [ref=e324]: Custom modal-based alerts — cleaner than native browser dialogs and fully automatable with Selenium/Playwright.
          - generic [ref=e325]:
            - button [ref=e326] [cursor=pointer]:
              - img "💬" [ref=e327]
              - text: Simple Alert
            - button [ref=e328] [cursor=pointer]:
              - img "⚠️" [ref=e329]
              - text: Confirm Alert
            - button [ref=e330] [cursor=pointer]:
              - img "✏️" [ref=e331]
              - text: Prompt Alert
            - button [ref=e332] [cursor=pointer]:
              - img "🪟" [ref=e333]
              - text: Popup Window
            - button [ref=e334] [cursor=pointer]:
              - img "🔗" [ref=e335]
              - text: New Tab
      - generic [ref=e336]:
        - generic [ref=e337]:
          - img "🖱️" [ref=e339]
          - heading "Mouse Hover Dropdown" [level=2] [ref=e340]
          - generic [ref=e341]: Section 9
        - generic [ref=e342]:
          - paragraph [ref=e343]:
            - text: Hover over a button to reveal the dropdown. Use
            - code [ref=e344]: Actions.moveToElement()
            - text: in Selenium to test hover interactions.
          - generic [ref=e345]:
            - generic [ref=e346]:
              - button [ref=e347] [cursor=pointer]:
                - img "📱" [ref=e348]
                - text: Mobiles ▾
              - generic [ref=e349]:
                - link [ref=e350] [cursor=pointer]:
                  - /url: "#"
                  - img "📱" [ref=e351]
                  - text: Samsung
                - link [ref=e352] [cursor=pointer]:
                  - /url: "#"
                  - img "🍎" [ref=e353]
                  - text: Apple
                - link [ref=e354] [cursor=pointer]:
                  - /url: "#"
                  - img "🔴" [ref=e355]
                  - text: OnePlus
                - link [ref=e356] [cursor=pointer]:
                  - /url: "#"
                  - img "⚡" [ref=e357]
                  - text: Xiaomi
            - generic [ref=e358]:
              - button [ref=e359] [cursor=pointer]:
                - img "💻" [ref=e360]
                - text: Laptops ▾
              - generic:
                - link "🍎 Apple MacBook":
                  - /url: "#"
                  - img "🍎"
                  - text: Apple MacBook
                - link "💙 Dell":
                  - /url: "#"
                  - img "💙"
                  - text: Dell
                - link "🔵 HP":
                  - /url: "#"
                  - img "🔵"
                  - text: HP
                - link "🟠 Lenovo":
                  - /url: "#"
                  - img "🟠"
                  - text: Lenovo
      - generic [ref=e361]:
        - generic [ref=e362]:
          - img "👆" [ref=e364]
          - heading "Double Click" [level=2] [ref=e365]
          - generic [ref=e366]: Section 10
        - generic [ref=e367]:
          - paragraph [ref=e368]:
            - text: Double-click the button to copy text from Field 1 into Field 2. Tests
            - code [ref=e369]: Actions.doubleClick()
            - text: in Selenium.
          - generic [ref=e370]:
            - generic [ref=e371]:
              - generic [ref=e372]: Field 1 — Source
              - textbox [ref=e373]: Hello from Field 1! 👋
            - generic [ref=e374]:
              - generic [ref=e375]: Field 2 — Target (read-only)
              - textbox "Appears after double-click..." [ref=e376]
          - button [ref=e377] [cursor=pointer]:
            - img "👆" [ref=e378]
            - text: Double Click Me
          - text: ← double-click!
      - generic [ref=e379]:
        - generic [ref=e380]:
          - generic [ref=e381]: ↔️
          - heading "Drag and Drop" [level=2] [ref=e382]
          - generic [ref=e383]: Section 11
        - generic [ref=e384]:
          - generic [ref=e385]:
            - generic [ref=e386]:
              - generic [ref=e387]: Source
              - generic [ref=e388]:
                - img "🧩" [ref=e390]
                - generic [ref=e391]: Drag Me!
                - generic [ref=e392]: Hold and drag to the target →
            - generic [ref=e393]:
              - generic [ref=e394]: Target
              - generic [ref=e395]:
                - img "📦" [ref=e397]
                - generic [ref=e398]: Drop Here
                - generic [ref=e399]: Release to drop
          - button "↺ Reset" [ref=e400] [cursor=pointer]
      - generic [ref=e401]:
        - generic [ref=e402]:
          - img "🎚️" [ref=e404]
          - heading "Range Slider" [level=2] [ref=e405]
          - generic [ref=e406]: Section 12
        - generic [ref=e407]:
          - generic [ref=e408]:
            - generic [ref=e409]: Price Range
            - generic [ref=e410]:
              - generic [ref=e412] [cursor=pointer]
              - generic [ref=e413] [cursor=pointer]
            - generic [ref=e414]:
              - generic [ref=e415]: ₹0
              - generic [ref=e416]: ₹50,000
            - generic [ref=e417]:
              - generic [ref=e418]:
                - generic [ref=e419]: MIN
                - text: ₹2,000
              - generic [ref=e420]: —
              - generic [ref=e421]:
                - generic [ref=e422]: MAX
                - text: ₹30,000
          - generic [ref=e423]:
            - generic [ref=e424]: Volume
            - slider [ref=e425] [cursor=pointer]: "60"
            - generic [ref=e426]: 60%
      - generic [ref=e427]:
        - generic [ref=e428]:
          - img "🔷" [ref=e430]
          - heading "SVG Elements" [level=2] [ref=e431]
          - generic [ref=e432]: Section 13
        - img [ref=e435]:
          - generic [ref=e437]: Circle
          - generic [ref=e438]: r = 65
          - generic [ref=e440]: Rectangle
          - generic [ref=e441]: 130 × 130
          - generic [ref=e443]: Triangle
          - generic [ref=e445]: Ellipse
          - generic [ref=e446]: 75 × 50
      - generic [ref=e447]:
        - generic [ref=e448]:
          - img "🔗" [ref=e450]
          - heading "Labels and Links" [level=2] [ref=e451]
          - generic [ref=e452]: Section 14
        - generic [ref=e454]:
          - generic [ref=e455]:
            - generic [ref=e456]:
              - heading [level=4] [ref=e457]:
                - img "📱" [ref=e458]
                - text: Mobile Labels
              - generic [ref=e459]:
                - generic [ref=e460]:
                  - img "📱" [ref=e461]
                  - text: Samsung
                - generic [ref=e462]:
                  - img "📱" [ref=e463]
                  - text: RealMe
                - generic [ref=e464]:
                  - img "📱" [ref=e465]
                  - text: Moto
            - generic [ref=e466]:
              - heading [level=4] [ref=e467]:
                - img "💻" [ref=e468]
                - text: Laptop Links
              - generic [ref=e469]:
                - link [ref=e470] [cursor=pointer]:
                  - /url: https://www.apple.com
                  - img "🍎" [ref=e471]
                  - text: Apple
                  - img "↗" [ref=e472]
                - link [ref=e473] [cursor=pointer]:
                  - /url: https://www.lenovo.com
                  - text: Lenovo
                  - img "↗" [ref=e474]
                - link [ref=e475] [cursor=pointer]:
                  - /url: https://www.dell.com
                  - text: Dell
                  - img "↗" [ref=e476]
          - generic [ref=e478]:
            - heading [level=4] [ref=e479]:
              - img "🚫" [ref=e480]
              - text: Broken Links (Error Codes)
            - generic [ref=e481]:
              - link "400" [ref=e482] [cursor=pointer]:
                - /url: "#"
              - link "401" [ref=e483] [cursor=pointer]:
                - /url: "#"
              - link "403" [ref=e484] [cursor=pointer]:
                - /url: "#"
              - link "404" [ref=e485] [cursor=pointer]:
                - /url: "#"
              - link "408" [ref=e486] [cursor=pointer]:
                - /url: "#"
              - link "500" [ref=e487] [cursor=pointer]:
                - /url: "#"
              - link "502" [ref=e488] [cursor=pointer]:
                - /url: "#"
              - link "503" [ref=e489] [cursor=pointer]:
                - /url: "#"
    - generic:
      - generic:
        - generic:
          - img "💬"
        - heading "Simple Alert" [level=3]
        - paragraph: This is a simple informational alert. It does not require any user decision — just acknowledgement.
        - generic:
          - button "OK, Got it"
    - generic:
      - generic:
        - generic:
          - img "⚠️"
        - heading "Confirmation Required" [level=3]
        - paragraph: Are you sure you want to proceed? This action cannot be undone.
        - generic:
          - button "Cancel"
          - button "Yes, Confirm"
    - generic:
      - generic:
        - generic:
          - img "✏️"
        - heading "Prompt Alert" [level=3]
        - paragraph: "Please type your name to continue:"
        - textbox "Your name here..."
        - generic:
          - button "Cancel"
          - button "Submit"
  - generic [ref=e490]: desktop
  - iframe [ref=e491]:
    - button "Chat widget" [ref=f2e5] [cursor=pointer]:
      - img "Opens Chat This icon Opens the chat window." [ref=f2e8]
```

# Test source

```ts
  6   |     const text = await page.locator('//*[@id="df1"]').inputValue()
  7   |     console.log(text)
  8   |     await page.getByRole('button',{name:' Double Click Me'}).dblclick()
  9   |     const text2 = await page.locator('//*[@id="df2"]').inputValue()
  10  |     console.log(text2)
  11  |     expect(text2).toBe(text)
  12  | })
  13  | 
  14  | test.skip('mouse2',async({page})=>{
  15  |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  16  |     await page.getByRole('heading',{name:'Mouse Hover Dropdown'}).scrollIntoViewIfNeeded()
  17  |     await page.getByRole('button',{name:' Mobiles ▾'}).hover()
  18  |     expect(page.getByRole('button',{name:' Mobiles ▾'})).toBeVisible()
  19  |     const items = page.locator('a').filter({hasText: /Samsung|Apple|OnePlus|Xiaomi/,});
  20  |     const values = await items.allTextContents()
  21  |     for(const item of values){
  22  |         console.log(item.trim())
  23  |     }
  24  |     await page.getByText('Samsung',{exact: true}).nth(0).click()
  25  |     await page.pause()
  26  | })
  27  | 
  28  | test.skip('keyboard', async({page})=>{
  29  |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  30  |     const FullName = page.getByPlaceholder('e.g. Rahul Sharma')
  31  |     await FullName.click()
  32  |     await page.keyboard.type('Jay Rathod')
  33  |     await page.keyboard.press('Tab')
  34  |     await page.keyboard.type('rathod@test.com')
  35  |     await page.keyboard.press('Tab')
  36  |     await page.keyboard.press('Escape')
  37  |     
  38  |     await expect(FullName).toHaveValue('Jay Rathod')
  39  |     const Email = page.getByPlaceholder('rahul@example.com')
  40  |     await expect(Email).toHaveValue('rathod@test.com')
  41  |     await page.pause()
  42  | })
  43  | 
  44  | test.skip('Scroll', async({page})=>{
  45  |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  46  |     await page.getByRole('Heading',{name:'Range Slider'}).scrollIntoViewIfNeeded()
  47  |     await expect(page.getByRole('Heading',{name:'Range Slider'})).toBeVisible() 
  48  |     await page.evaluate(() => window.scrollBy(0, -5000));
  49  |     const pageheading = page.getByRole('heading',{name:' Practice Automation Testing'})
  50  |     await expect(pageheading).toBeVisible()
  51  |     await page.pause()
  52  | })
  53  | 
  54  | test.skip('drag&drop',async({page})=>{
  55  |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  56  |     await page.getByRole('heading',{name:'Drag and Drop'}).scrollIntoViewIfNeeded()
  57  |     const target = page.locator('text=Drop Here')
  58  |     const targettext = await target.innerText()
  59  |     console.log(targettext)
  60  |     await page.dragAndDrop('#drag-src','#drag-tgt')
  61  |     const dropped = page.locator('text=Dropped!')
  62  |     await expect(dropped).toBeVisible()
  63  |     await page.getByRole('button', { name: '↺ Reset' }).nth(2).click()
  64  |     await expect(target).toBeVisible()
  65  |     await page.pause()
  66  | })
  67  | 
  68  | test.skip('right click',async({page})=>{
  69  |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  70  |     const Fname = page.getByPlaceholder('e.g. Rahul Sharma')
  71  |     await Fname.fill('Jay Rathod')
  72  |     await Fname.click({button:'right'})
  73  |     await expect(Fname).toBeFocused()
  74  |     await page.keyboard.press('Escape')
  75  |     const Fname_value = await Fname.inputValue()
  76  |     expect(Fname_value).toBe('Jay Rathod')
  77  |     await page.pause()
  78  | })
  79  | 
  80  | test.skip('Range Slider', async({page})=>{
  81  |     await page.goto('https://www.stadsolution.com/automation-testing-practice/')
  82  |     await page.getByRole('heading',{name:'Range Slider'}).scrollIntoViewIfNeeded()
  83  |     //const min = await page.locator('#dmin').innerText()
  84  |     //const max = await page.locator('#dmax').innerText()
  85  |     //console.log(min,'-',max)
  86  |     const volumeSlider = page.locator('input[type="range"]')
  87  |     const CurrentValue = await volumeSlider.inputValue()
  88  |     console.log(CurrentValue)
  89  |     await page.evaluate(() => {
  90  |         const slider = document.querySelector('input[type="range"]');
  91  |         slider.value = '80'
  92  |     })
  93  |     console.log(CurrentValue)
  94  |     await page.pause()
  95  | })
  96  | 
  97  | test('Hover - Reveal Dropdown Menu on Mouse Over', async ({ page }) => {
  98  |     await page.goto('https://www.stadsolution.com/automation-testing-practice/');
  99  |     const mobilesBtn = page.getByRole('button', { name: '📱 Mobiles ▾' });
  100 |     await mobilesBtn.scrollIntoViewIfNeeded();
  101 |     const mobilesDropdown = page.locator('.hover-dropdown').first();
  102 |     const isHiddenBefore = await mobilesDropdown.isHidden();
  103 |     console.log('Dropdown Hidden Before Hover:', isHiddenBefore);
  104 |     await mobilesBtn.hover();
  105 |     console.log('Hovered over Mobiles button');
> 106 |     await mobilesDropdown.waitFor({ state: 'visible' });
      |                           ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  107 |     const isVisibleAfter = await mobilesDropdown.isVisible();
  108 |     console.log('Dropdown Visible After Hover:', isVisibleAfter);
  109 | 
  110 | 
  111 | 
  112 | // Read all dropdown items
  113 | 
  114 | // Locator Strategy 3: chained locator — all links inside the dropdown
  115 |     const dropdownItems = mobilesDropdown.locator('a');
  116 |     const itemCount = await dropdownItems.count();
  117 |     console.log('Dropdown Item Count:', itemCount);
  118 |     for (let i = 0; i < itemCount; i++) 
  119 |     {
  120 |         const itemText = await dropdownItems.nth(i).innerText();
  121 |         console.log(` Item ${i + 1}: ${itemText}`);
  122 |     }
  123 | 
  124 |     await mobilesDropdown.getByText('Samsung').click();
  125 |     console.log('Clicked Samsung');
  126 |     expect(isVisibleAfter).toBe(true);
  127 |     expect(itemCount).toBeGreaterThan(0);
  128 | });
```