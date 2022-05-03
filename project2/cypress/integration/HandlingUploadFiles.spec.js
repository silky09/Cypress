/// <reference types = 'cypress' />

describe('Upload png_file', function() {

    it('Upload png_file', function() {

       const path = 'img.png';
       cy.visit('https://the-internet.herokuapp.com/upload')
       cy.get('#file-upload').attachFile(path)
       cy.get('#file-submit').click()
       cy.get('#uploaded-files').should('contain', 'img.png').reload()
       
       //cy.get('#uploaded-files').contains('img.png')
    })

})