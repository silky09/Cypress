/// <reference types = 'cypress' />


describe('Cure Make Appointment', () => {

    it('TC_1: Visit the Web page', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    });

    it('TC_2: Click on Make Appointment', () => {
        cy.get('#btn-make-appointment').click()

    });

    it('TC_3: login - Negative TC: Enter inValid Username and Password', function(){
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('test')
        cy.get('#btn-login').click()
    });

    it('TC_4: login - Positive TC: Enter Valid Username and Password', function(){
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
    });

    it('Make Appointment', () => {
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click()
        cy.get('.col-sm-4 > :nth-child(2)').click()
        cy.get('#txt_visit_date').type('28/05/2022')
        cy.get('#txt_comment').click({force: true})
        cy.get('#txt_comment').type('Hello My name is XYZ.')
        cy.get('#btn-book-appointment').click()
    });

    it('Verify Appointment', () => {
        cy.get('.text-center > .btn').click()
    })



//    it('Take a Video', () => {
//     cy.video()
// })


})

