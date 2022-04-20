/// <reference types = 'cypress' />


it('cypress test', () => {
    cy.visit('https://example.cypress.io/')
    cy.wait(1000)
    cy.contains('get').click()
    

})


it.only('google_test', function(){
   cy.visit('https://www.google.com/') 
   cy.get('#L2AGLb > .QS5gu').click()
})