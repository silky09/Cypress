/// <reference types = 'cypress' />


describe('Practice API_testing', () => { 

    // create alias request to reuse in many TCs
    beforeEach(function() {
      cy.request('GET', 'https://flask-rest-api-demo.herokuapp.com/users').as('users')

    });

    it('Request Status_test', () => {
    cy.get('@users')
    .its('status').should('eq', 200)
    
    });

    it('Body Length_test', () => {
        
        cy.get('@users')
           .its('body')
           .its('users')
           .should('have.length', 5)
          
           
    });

    it('Header/content-type_test', () => {
        
        cy.get('@users')
           .its('headers')
           .its('content-type')
           .should('contain', 'application/json')
           //use alias 'and'
        //    .its('headers')
        //    .its('content-length')
        //    .should('contain', 285)
        
        // cy.get('@users').then($headers => {
        //   cy.wrap($headers).should('contain', 'content-length')
        // })


    
    });

    const apiItems = 
        {"users": [{"id": 1, "username": "test_1", "password": "qwert"}, {"id": 2, "username": "test_2", "password": "qwaszx"}, {"id": 3, "username": "test_3", "password": "zxasqw"}, {"id": 4, "username": "test_4", "password": "asdfg"}, {"id": 5, "username": "test_5", "password": "qwerty"}]}

    
   it('Initial item', () => {
    cy.get('@users')
       .its('body')
       .should('deep.equal', apiItems)
       
   });



 })