/// <reference types = 'cypress' />

describe('eCommerce Demo test', () => { 

    it('Visit page', () => {
        cy.visit('https://www.nopcommerce.com/en/demo')

    })

    it('Registration', () => {
        cy.contains('Register').click({force: true})

    })




 })