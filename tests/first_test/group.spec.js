const {test,expect} = require('@playwright/test')


test.describe('group1',()=>{
    test.beforeAll(()=>{
        console.log("group 1 Before All")
    })
    test.afterEach(()=>{
        console.log("group 1 after each")
    })
    test.beforeEach(()=>{
        console.log("group 1 before each")
    })
    test('test1',{ tag: '@smoke'}, () => {
        console.log("test 1")
    })
    
    test('test2',{ tag: ['@smoke' , '@regression']}, ()=>{
        console.log('test 2')
    })
test.afterAll(()=>{
    console.log("group 1 After All")
    })
})

test.describe('group2',()=>{
    test.beforeAll(()=>{
        console.log("group 2 Before All")
    })
    test.afterEach(()=>{
        console.log("group 2 after each")
    })
    test.beforeEach(()=>{
        console.log("group 2 before each")
    })
    test('test 3',{ tag: ['@regression' , '@smoke']},()=>{
        console.log('test 3')
    })

    test('test 4',{ tag: "@regression" },()=>{
        console.log('test 4')
    })
test.afterAll(()=>{
    console.log("group 2 After All")
})
})

