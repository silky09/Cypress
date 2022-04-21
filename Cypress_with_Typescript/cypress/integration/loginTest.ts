import {LoginPage} from '../pages/login_page'

const loginPage = new LoginPage()

it('login_test', () => {

    loginPage.navigateToPage('https://trytestingthis.netlify.app/index.html');
    loginPage.enterUserName('test');
    loginPage.enterPassword('test');
    loginPage.clickLoginButton();

})