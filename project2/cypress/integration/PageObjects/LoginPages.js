export class loginPage{

    login_username = '[data-test="username"]';
    login_password = '[data-test="password"]';
    click_button = '[data-test="login-button"]'


    VisitURL(url){

       cy.visit(url)

    }

    EnterUserName(username){
        cy.get(this.login_username).type(username) 
    }

    EnterPassword(password){
        cy.get(this.login_password).type(password)
    }

    ClickLoginButton(){
        cy.get(this.click_button).click() 
    }
}