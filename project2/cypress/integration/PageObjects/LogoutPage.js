export class logOut{

    logout_sidebar_link = '#logout_sidebar_link'

    ClickLogout(){
        cy.get(this.logout_sidebar_link).click({force: true})
    }

}