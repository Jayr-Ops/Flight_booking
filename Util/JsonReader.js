const testData = require('../testdata/Passenger_details.json')

class Jsonreader{
    static passenger_details(){
        return testData;
    }
}

module.exports = Jsonreader;