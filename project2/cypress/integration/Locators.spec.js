/// <reference types = 'cypress' />

// i have used multiple css selectors fot getting the elements

describe('Locating end to end Elements', () => { 
    
   
        
    it('Launch browser & Open URL', () => {
            cy.visit('https://demo.nopcommerce.com/')
    });

    it('Enter Text in Search box "Apple MacBook pro 13-inch"', () => {
        cy.get('#small-searchterms').type('Apple MacBook pro 13-inch')
        
    });

    it('Click on Search button > Add to card > Enter quantity 3 > Add to card', () => {
        
       cy.get('[type="submit"]').click()
       cy.scrollTo(0, 1100)
       //cy.scrollTo('1000px')
       cy.wait(2000)
       cy.get('.product-box-add-to-cart-button').click()
       cy.get('#product_enteredQuantity_4').clear().type('3')
       cy.get('#add-to-cart-button-4').click()
       
       
        
    });

    it('Click on Shopping cart link at the top of the page > Select gift wraping option yes/no', () => {
        
        
       cy.contains('Shopping cart').click()

       //for validating the price
       cy.get('.product-unit-price').contains('$1,800.00')
       cy.get('#checkout_attribute_1').select('Yes [+$10.00]')

       //click terms-of-service
       cy.get('#termsofservice').click()
       cy.get('#checkout').click()

       //Click checkout-as-guest-button
       cy.get('.checkout-as-guest-button').click()

    });

    it('Billing address will be added later', () => {
       //  Billing address will be added later
        
        
    });


    
 });















