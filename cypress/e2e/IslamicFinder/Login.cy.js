
import { NAME } from './constant';
import login from '../testviews/LoginView';
import maincall from '../General/MainCall'

//let log =new login();

describe('login the If', function() {

it('Login the account', function(){
maincall.login.Url()
cy.url().should('eq', 'https://www.islamicfinder.org/login/', { timeout: 200000 })
maincall.login.login()
}
)

})
