import { NAME } from "../IslamicFinder/constant"

class login

{
    Url(){

        return cy.visit('https://www.islamicfinder.org/login' ,{ timeout: 200000 })
    }
    Url2()
    {
        return cy.visit('https://www.islamicfinder.org', { timeout: 200000 })
    }
    Url3(){
        return cy.visit('https://www.islamicfinder.org/world/pakistan/1172451/lahore-prayer-times',{timeout: 200000})
    }

login(){

    var x=   cy.xpath("//*[contains(@placeholder,'Email')][@class='edged login-email loginTextbox']")
    x.type(NAME.email)
    var y=  cy.xpath("//*[contains(@placeholder,'Password')][@class='edged login-password loginTextbox']")
    y.type(NAME.password)
    var z= cy.xpath("//*[@class='loginPageBtn button expanded edged submit bg-green']")
    z.click()
    var act = cy.xpath("//*[@class='display-username']")
    act.should("have.text", "Ali Gill" )

}

}
export default login