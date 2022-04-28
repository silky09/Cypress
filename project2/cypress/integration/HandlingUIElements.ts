/// <reference types = 'cypress' />

describe('Interact with UI elements', () => { 
    
    it.only('Varify Input field and Radio button', () => {

        cy.visit('https://demo.guru99.com/test/newtours/')// visit web url
        
        //Get the current URL of the page that is currently active
        // varify URL should include 'newtours' text
        cy.url().should('include', 'newtours')
        // specify the title of the web page
        cy.title().should('eq', 'Welcome: Mercury Tours')

        // Visiblity and enable checked status and sign in
        cy.get('[name="userName"]')
          .should('be.visible')
          .should('be.enabled')
          .type('mercury')
        cy.get('[name="password"]')
          .should('be.visible')
          .should('be.enabled')
          .type('mercury')

        cy.get('[name="submit"]')
            .should('be.visible')
            .should('be.enabled')
            .click()

        //click on flight option on the left side

        cy.contains('Flights').click()

        // varify title of the page should be "Find a Flight: Mercury Tours:"

        cy.title().should('eq', 'Find a Flight: Mercury Tours:')
 
        // Radio button and visibility checked status
        cy.get('[value="roundtrip"]').should('be.checked')
        cy.get('[value="oneway"]').should('not.be.checked').click()
     
    });

    it.only('Interact with Passenger Dropdown', () => {

        cy.get('[name="passCount"]').select('2')

    });

    it.only('Departing Dropdown', () => {

        cy.get('[name="fromPort"]').select('Paris')

    });

    it.only('On Date and Month Dropdown', () => {

        cy.get('[name="fromMonth"]').select('May')
        cy.get('[name="fromDay"]').select('9')
    });

    it.only('Arrivin Dropdown', () => {

        cy.get('[name="toPort"]').select('London')

    });

    it.only('Returning Date and Month Dropdown', () => {

        cy.get('[name="toMonth"]').select('September')
        cy.get('[name="toDay"]').select('9')
    });

    it.only('Airlines preference Dropdown', () => {

        cy.get('[name="airline"]').select('Unified Airlines')

    });

    it.only('Click and varify Service class preference, Radio button', () => {
        
        cy.get('[value="Coach"]').should('be.checked')
        cy.get('[value="Business"]').should('not.be.checked')
        cy.get('[value="First"]').should('not.be.checked').click()

    });

    it.only('Click on Continue button', () => {

      cy.get('[name="findFlights"]').should('be.visible').should('be.enabled').click()
    
    });

    it.only('Click to Back to Home button', () => {

        cy.get('td > a > img').should('be.visible').click()
      
      });


    


        // Validating checkboxes and Dropdowns

        

    

    it('Interact with UI elements: Checkboxes', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')
        cy.title().should('eq', 'Register')

        // interect withmultiple Checkboxs use "one line of code" instead of multiple lines
        // first check "common locator" should be found. and use "array" ['value name1', 'value name2']
        
        // varify checkbox is unchecked

        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
        cy.get('[type="checkbox"]').check(['Cricket', 'Hockey']).should('be.checked')
        // negative scenarios: uncheck all checkboxes
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')

    });

    it('Language dropdown multi select', ()=> {
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Danish').click()
        cy.get('.ui-corner-all').contains('French').click()

    });

    it('Skills dropdown', ()=> {
        cy.get('.form-group').click('bottomLeft', { multiple: true })     
        cy.get('#Skills').select('Android').should('have.value','Android')
      

    });

    it('Select country dropdown', ()=> {
        
    cy.get('[role="combobox"]').click()
    cy.get('.select2-search__field').type('Den{enter}')
    //    cy.get('.select2-search__field').type('{enter}')

    });








});