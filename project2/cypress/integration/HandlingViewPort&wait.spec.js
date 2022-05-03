/// <reference types = 'cypress' />

context('Google page testing in multipal viewport', function() {

    beforeEach(() => {
        cy.visit('https://www.google.co.in/')
    })

    it('Open in mac 15', function() {

        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
       cy.get('#L2AGLb > .QS5gu').click()
    })

    it('Open in ipad-mini', function() {

        cy.viewport('ipad-mini')
        cy.screenshot()
        cy.wait(200)
       cy.get('#L2AGLb > .QS5gu').click()
    })

    it('Open in iphone-x', function() {

        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(200)
       cy.get('#L2AGLb > .QS5gu').click()
    })

    it('Open in samsung-s10', function() {

        cy.viewport('samsung-s10')
        cy.screenshot()
        cy.wait(200)
       cy.get('#L2AGLb > .QS5gu').click()
    })

})
