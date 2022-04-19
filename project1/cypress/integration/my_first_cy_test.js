/// <reference types="cypress" />

it('google test', function(){
    cy.visit('https://www.google.co.in/')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gLFyf').type('All news about sweden {enter}')
    cy.wait(4000)
    cy.contains('All news about Sweden | Euronews').click()
    cy.contains('Live').click()
    
})
