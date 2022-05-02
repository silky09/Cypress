export class loginPage{

    // creating variable to less use of hard code

    my_email = '#Email';
    my_password = '#Password';
    button = '.button-1'

    // perform actions like visit url
    
    VisitUrl(){
        cy.visit('https://admin-demo.nopcommerce.com/login')

    }

    EnterEmail(email){
        cy.get(this.my_email).clear()
        cy.get(this.my_email).type(email)
        

    }

    EnterPassword(password){
        cy.get(this.my_password).clear()
        cy.get(this.my_password).type(password)
        

    }

    ClickLogin(){
        cy.get(this.button).click()
    }



}