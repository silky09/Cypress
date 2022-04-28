/// <reference types = 'cypress' />

describe(' Handling_Navigation', () => 
{ 
    it('Navigation tests', () => {
        cy.visit('https://demo.nopcommerce.com/')
         // Home page
        cy.title().should('eq', 'nopCommerce demo store')
        // Registration page
        cy.get('.ico-register').contains('Register').click()
        cy.title().should('eq', 'nopCommerce demo store. Register')
        
        // Navigating back to home page

        cy.go('back')
        cy.title().should('eq', 'nopCommerce demo store')

        // Navigating forward to Registration page
        
        cy.go('forward')
        cy.title().should('eq', 'nopCommerce demo store. Register')

         // Navigating back to home page with back number -1

         cy.go(-1) // back
        cy.title().should('eq', 'nopCommerce demo store')

        // Navigating back to home page with forward number 1

        cy.go(1) // forward
        cy.title().should('eq', 'nopCommerce demo store. Register')

        cy.reload()
        // viewport to 100px and 500px
        cy.viewport(1000, 800)
    
    })


 })