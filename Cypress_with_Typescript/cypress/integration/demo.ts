/// <reference types = 'cypress' />


it.only('cypress test', () => {
    cy.visit('https://example.cypress.io/')
    cy.wait(1000)
    cy.contains('get', {timeout: 6000}).click()
    

})


it('google_test', function(){
   cy.visit('https://www.google.com/') 
   // to accept CookieConsent
   cy.get('#L2AGLb > .QS5gu').click()
   //cy.get('.gLFyf')
   cy.get('[name="q"]')
        .type("Staffanstorp kommun {enter}")
   cy.contains('Staffanstorps kommun: Startsida')
        .click()
   //cy.get('.CookieConsent-module--button--approve--DBKMT').click()
})