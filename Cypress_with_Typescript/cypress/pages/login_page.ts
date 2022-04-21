export class LoginPage{

    loginPage_username= '#uname'
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'

    navigateToPage(url: string){
        cy.visit(url)

    }

    enterUserName(username: string){
        cy.get(this.loginPage_username).type(username)
    }

    enterPassword(password: string){
        cy.get(this.loginPage_password).type(password)
    }

    clickLoginButton(){
        cy.get(this.loginPage_loginButton).click()
    }


}