/// <reference types = 'cypress' />

describe('API_test', () => { 
    
    it('Initial Validation', () => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
        //cy.request('https://todomvc-app-for-testing.surge.sh/')
    
        cy.get('.new-todo').type('Cypress {enter}')
        cy.get('.new-todo').type('Interview {enter}')
        cy.get('label')
          .should('have.length', 2)
          .and('contain', 'Cypress')
          .and('contain', 'Interview')

          cy.get(':nth-child(2) > .view > .toggle').click()
            .should('be.checked')
            .should('not.be.visible')
            

    });

    it('Basic API testing', () => {

      cy.request({
        method : 'GET',
        url : 'https://flask-rest-api-demo.herokuapp.com/product/motorbike'
      }).then((resp) => {
        expect(resp.status).equal(200)
        expect(resp.body.product[0]).has.property('product', 'motorbike')
        expect(resp.body.product[0]).have.property('price', 599.99)
        expect(resp.body.product[0]).have.property('id', 3)

      })

    })



  })