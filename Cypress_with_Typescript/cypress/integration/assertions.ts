it('assertions_types', () => {
    cy.visit('https://example.cypress.io/')
    //cy.wait(1000)
    cy.contains('get').click()
    //assertion types: 
    //1. should-contain

    cy.get('#query-btn', {timeout: 6000})
    .should('contain', 'Button')
  //it waits till 6 secs then failing the assertion or run the code
    
  //2. should-have
    cy.get('#query-btn', {timeout: 6000})
        .should('have.class', 'query-btn')
        .should('be.enabled')
        .should('be.visible')

    cy.get('[data-cy="submit"]')
        .should('have.text', 'Submit')
        //.should('have.html','')

    //explicit wait will do later

    

})