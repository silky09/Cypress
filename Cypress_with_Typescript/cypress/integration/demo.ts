/// <reference types = 'cypress' />


it('cypress test', () => {
    cy.visit('https://example.cypress.io/')
    cy.wait(1000)
    cy.contains('get').click()
    

})


it.only('google_test', function(){
   cy.visit('https://www.google.com/') 
   // to accept CookieConsent
   cy.get('#L2AGLb > .QS5gu').click()
   //cy.get('.gLFyf')
   cy.get('[name="q"]', {timeout: 6000})
        .type("Staffanstorp kommun {enter}")
   cy.contains('Staffanstorps kommun: Startsida')
        .click()
   //cy.get('.CookieConsent-module--button--approve--DBKMT').click()
})