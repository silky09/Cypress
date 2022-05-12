/// <reference types = 'cypress' />

describe('Setting global variable', () => {

    beforeEach(function(){
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })

    it('Valid username and Valid password', function(){

       cy.visit(Cypress.env('url'))
       cy.get('[data-test="username"]').type(this.data.standardUsername)
       cy.get('[data-test="password"]').type(this.data.systemPassword)
       cy.get('[data-test="login-button"]').click()
       cy.get('.title').should('contain.text', 'Products')
    });

    it('inValid username and valid password', function(){

        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type(this.data.dummyUser)
        cy.get('[data-test="password"]').type(this.data.systemPassword)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        
     });

     it('Blocked Username and valid Password', function(){
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type(this.data.lockedOutUser);
        cy.get('[data-test="password"]').type(this.data.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    });

    it('inValid username and invalid password', function(){

        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type(this.data.dummyUser)
        cy.get('[data-test="password"]').type(this.data.dummyPassword)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        
     });

})