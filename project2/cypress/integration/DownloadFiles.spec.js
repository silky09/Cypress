/// <reference types = 'cypress' />
///If autocompletion does not work out of the box you can add the following line above your testfile

/// <reference types="cypress-downloadfile"/>

describe('DownloadFiles', function() {

    it('DownloadFiles', function() {

        // first param => url of the image
        // second param --> folder name
        // third param --> file name
        cy.downloadFile('http://www.africau.edu/images/default/sample.pdf','Download', 'demo.pdf')
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','MyDownload', 'img.jpg')


    })

})