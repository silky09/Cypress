/* ==== Test Created with Cypress Studio ==== */
it('Valid test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').should('be.enabled');
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').should('be.enabled');
  cy.get('[data-test="login-button"]').click();
  cy.get('.title').should('have.text', 'Products');
  cy.get('.select_container').click();
  cy.get('.select_container').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  cy.get('[data-test="product_sort_container"]').select('lohi');
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  cy.get('#item_0_img_link > .inventory_item_img').click();
  cy.get('[data-test="back-to-products"]').click();
  cy.get('.shopping_cart_link').click();
  cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price').should('have.text', '$29.99');
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').clear();
  cy.get('[data-test="firstName"]').type('gaa');
  cy.get('[data-test="lastName"]').clear();
  cy.get('[data-test="lastName"]').type('goo');
  cy.get('[data-test="postalCode"]').clear();
  cy.get('[data-test="postalCode"]').type('21345');
  cy.get('[data-test="firstName"]').should('have.value', 'gaa');
  cy.get('[data-test="lastName"]').should('have.class', 'form_input');
  cy.get('[data-test="postalCode"]').click();
  cy.get('[data-test="postalCode"]').should('have.attr', 'placeholder', 'Zip/Postal Code');
  cy.get('[data-test="continue"]').click();
  cy.get('.summary_total_label').should('have.class', 'summary_total_label');
  cy.get('.cart_footer').click();
  cy.get('[data-test="finish"]').click();
  cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
  cy.get('.complete-text').should('be.visible');
  cy.get('[data-test="back-to-products"]').should('be.enabled');
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').should('have.text', 'Logout');
  cy.get('#logout_sidebar_link').should('be.visible');
  cy.get('.bm-item-list').click();
  cy.get('#logout_sidebar_link').click();
  cy.get('.login_wrapper').click();
  /* ==== End Cypress Studio ==== */
});