const{test,expect} = require('../../Fixtures/baseFixtures')
require('../../hooks/hooks')
const Jsonreader = require('../../Util/JsonReader')
const cities = Jsonreader.passenger_details()

test('Find flight',async({loginPage1,choose_flight1,checkout_page1,page})=>{
    await loginPage1.find(cities.SourceCities.Paris, cities.DestinationCities.London)
    await choose_flight1.select_flight()
    await checkout_page1.final_Checkout()
    await checkout_page1.submit()
    await page.pause()
})