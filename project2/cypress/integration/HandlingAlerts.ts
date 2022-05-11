/// <reference types = 'cypress' />

describe('Handling Alerts', () => { 

     it.only('Interect with Alerts, 1. window:alert', () => {

        cy.visit('https://register.rediff.com/register/register.php')
        cy.get('[type="submit"]').click()

        // Handeling window:alert
        //expect(str).to.equal or expect(str).to.contains both works

         // 'on' is a method that helps to trigger any events.
        cy.on('window:alert',(str) => {
         //assertions
         expect(str).to.contains('Your full name cannot be blank.\nPlease enter your firstname and lastname e.g. Sameer Bhagwat')
        
        });

      
   });

    // Handeling window:confirm  You clicked: Ok
    it.only('Interect with Alerts, 2. window:confirm You clicked: Ok', () => {

      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      cy.get(':nth-child(2) > button').click()


      cy.on('window:confirm', (str) => {
         expect(str).to.equal('I am a JS Confirm')
      })


    });

     // Handeling window:confirm  You clicked: Cancle

    it.only('Interect with Alerts, 3. window:confirm You clicked: Cancle', () => {

      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      
      cy.on('window:confirm', (str) => {
         return false;
      })
      
      // click on Click for JS Confirm button
      cy.get(':nth-child(2) > button').click()
      
       // verify application message on Cancel button click
      cy.get('#result').should('have.text','You clicked: Cancel')



      
      

    })
    

})
