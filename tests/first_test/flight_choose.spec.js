const{test,expect} = require('../../Fixtures/baseFixtures')
require('../../hooks/hooks')

test('select flight', async({choose_flight1})=>{
    await choose_flight1.select_flight()
})