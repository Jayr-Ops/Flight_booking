
const{test,expect} = require('../../Fixtures/baseFixtures')
require('../../hooks/hooks')
const Jsonreader = require('../../Util/JsonReader')
const cities = Jsonreader.passenger_details()

test('Find flight',async({loginPage1})=>{
    await loginPage1.find(cities.SourceCities.Paris, cities.DestinationCities.London)

})

