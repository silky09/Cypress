/// <reference types = 'cypress' />

import {loginPage} from '../PageObjects/LoginPages'
import {logOut} from '../PageObjects/LogoutPage'

describe('POM-demo-test', function() {

    const login = new loginPage;
    const logout = new logOut;

    it('LoginTest', function() {

        login.VisitURL('https://www.saucedemo.com/');
        login.EnterUserName('standard_user');
        login.EnterPassword('secret_sauce');
        login.ClickLoginButton();
        
        cy.get('.title').should('contain.text', 'Products')

    })

    it('LogOut_Test', function(){
        logout.ClickLogout()
        cy.title().should('eq', 'Swag Labs')
    })

})