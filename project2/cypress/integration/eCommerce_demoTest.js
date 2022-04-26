/// <reference types = 'cypress' />

describe('eCommerce Demo test', () => { 

    it('Visit page', () => {
        cy.visit('https://www.nopcommerce.com/en/demo')

    })

    it('Varify Title of the page - positive TC', () => {
        cy.visit('https://www.nopcommerce.com/en/demo')
        cy.title().should('eql', 'Store Demo - nopCommerce')

    })

    it('Varify Title of the page - negative TC', () => {
        cy.visit('https://www.nopcommerce.com/en/demo')
        cy.title().should('eql', 'Store Demo - Commerce')

    })

    it('Registration', () => {
        cy.contains('Register').click({force: true})


    })




 })