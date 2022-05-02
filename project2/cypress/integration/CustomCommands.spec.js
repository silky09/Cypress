/// <reference types = 'cypress' />

describe('Custom commands', () => {

    it('Login_test with many scenarios', () => {
             
      // Login_test with Valid email and Valid password

      cy.log('Login_test with Valid email and Valid password')
       cy.login('admin@yourstore.com', 'admin')

       cy.title().should('eq', 'Dashboard / nopCommerce administration')

       // Login_test with Valid email and invalid password
       cy.log('Login_test with Valid email and inValid password')

       cy.login('admin@yourstore.com', 'admin1')
       cy.title().should('eq', 'Your store. Login')
       cy.get('.message-error')
         .should('contain.text', 'Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect')

      // Login_test with inValid email and invalid password

      cy.log('Login_test with inValid email and inValid password')
      cy.login('admin@yourstore2.com', 'admin1')
      cy.title().should('eq', 'Your store. Login')
       cy.get('.message-error')
         .should('contain.text', 'Login was unsuccessful. Please correct the errors and try again.No customer account found')

    })

    it('Add new customer', () => {

      cy.login('admin@yourstore.com', 'admin')
      //adding customer script
      cy.log('Adding customer.....')

     })

     it('Edit customer', () => {

      cy.login('admin@yourstore.com', 'admin')
      //edit customer script
      cy.log('Adding customer.....')
        
     })

})