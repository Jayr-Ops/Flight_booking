const base = require('@playwright/test')

const { loginpage } = require('../page/home')
const { choose_flight } = require('../page/flight_choose')
const {checkout_page } = require('../page/Purchase_flight')

exports.test = base.test.extend({
    loginPage1: async ({page}, use) => {
        const loginpage1 = new loginpage(page)
        await use(loginpage1)
    },
    choose_flight1: async ({page}, use) => {
        const choose_flight1 = new choose_flight(page)
        await use(choose_flight1)
    },
    checkout_page1: async ({page}, use) => {
        const checkout_page1= new checkout_page(page)
        await use(checkout_page1)
    }
})