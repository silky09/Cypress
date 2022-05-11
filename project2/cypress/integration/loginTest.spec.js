/// <reference types = 'cypress' />

import {loginPage} from '../support/PageObjects/LoginPage'

describe('Login Test', () => {

    const Login = new loginPage;

    it('Valid login Test', () => {

        Login.VisitUrl()
        Login.EnterEmail('admin@yourstore.com')
        Login.EnterPassword('admin')
        Login.ClickLogin()

        // for validation
       cy.title().should('eq', 'Dashboard / nopCommerce administration')

    })

})