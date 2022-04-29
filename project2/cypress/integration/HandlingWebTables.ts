/// <reference types = 'cypress' />

describe('Handling Web/HTML tables', () => {

    it('Table test', () => {

       cy.visit('https://testautomationpractice.blogspot.com/')
       cy.scrollTo(0, 1500)
      
       // Check value presence anywhere in the table.
       cy.get('[name="BookTable"]').contains('td', 'Learn Selenium')
         .should('be.visible')

          // check value presence in specific row (tr)and column(td)
         
           // #HTML1 > div.widget-content > table > tbody > tr:nth-child(2) > td:nth-child(3)
        cy.get('[name="BookTable"] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')
         
       
    })
 })