/// <reference types = 'cypress' />

describe('Hooks', () => {

    before(() => {
        // runs once before all tests in the block
        cy.log('---This is a Setup block--- ')
      })

    
    beforeEach(() => {
        // runs before each test in the block
        cy.log('---This is a Login block--- ')
    })
    
    afterEach(() => {
        // runs after each test in the block
        cy.log('---This is a Logout block--- ')
    })
    
    after(() => {
        // runs once after all tests in the block
        cy.log('---This is a Teardown block--- ')
    })
     

    it('TC #1: Search', () => {
        cy.log('This is search test');
    })

    it('TC #2: Advanced Search', () => {
        cy.log('This is Advanced Search test');
    })

    it('TC #3: Listing product', () => {
        cy.log('This is Listing product test');
    })




})