/// <reference types = 'cypress' />

it('login_test', () => {
    //visit website
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    //make appointment
    cy.get('#btn-make-appointment').click()
    //enter username, password
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()

    // select facility
    //cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
    
    // click checkbox
    cy.get('.checkbox-inline').click()

    // click radiobutton
    cy.contains('Medicaid').click()
    //cy.get('.col-sm-4 > :nth-child(2)').click()
    
    //Visit date
    //cy.get('#txt_visit_date').type('22-04-2022')
    //:nth-child(4) > :nth-child(5)
    //click().type(cypress.moment().format('dd mm, '))
    cy.get('#txt_comment').type('Hello')
    cy.get('#btn-book-appointment').click()
})