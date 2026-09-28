const{test,expect} = require('../../Fixtures/baseFixtures')
require('../../hooks/hooks')

test('Final_Checkout', async({checkout_page1})=>{
    await checkout_page1.final_Checkout()
})

test('submit',async({checkout_page1})=>{
    checkout_page1.submit()
})