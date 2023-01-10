/// <reference types="@shelex/cypress-allure-plugin" />

import MainCall from '../General/MainCall'
describe('Calendar test', function() {
   

    it('Goes to homescreen', function(){
       
        MainCall.login.Url();
      MainCall.login.login();
      MainCall.h1.clickOnHome();
      cy.url().should('eq', 'https://www.islamicfinder.org/')

    })

    it('navigates to Calendar', function(){
    //  MainCall.login.Url2();
    
      
       MainCall.calendar.clickOnCalendar();
       
    })

    it('Gets todays date', function(){
          
         MainCall.calendar.VerifydateonCalendar()
         MainCall.calendar.VerifyGregorianDate()
         
      })
   it('Verify Special Islamic days', function(){
         MainCall.calendar.VerifySpecialIslamicDays()
      })
   
 it('Verify PT of current months', function(){
   MainCall.calendar.VerifyPrayertimeofCurrentMonth()


 })
 it('Navigates to Date converter ', function(){
   MainCall.calendar.clickOnDateConverter()
 })

})