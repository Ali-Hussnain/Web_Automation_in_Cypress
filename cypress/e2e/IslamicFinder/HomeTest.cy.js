import home from '../testviews/homeview'
import { NAME } from './constant'
import login from '../testviews/LoginView'
import MainCall from '../General/MainCall'


describe('HomeScreen test', function() {
   

    it('Goes to homescreen', function(){
       
        MainCall.login.Url();
      MainCall.login.login();
      MainCall.h1.clickOnHome();
      cy.url().should('eq', 'https://www.islamicfinder.org/', { timeout: 200000 })

    })

    it('navigates to Prayer', function(){
    //  
      
       MainCall.h1.NavigateOnPrayer();
       MainCall.h1.ChangeLocationmanually();
    })
    it('Verifies the prayer times ', function(){
       
      MainCall.h1.verifyPrayerTime()
      cy.wait(5000);
   })

  })

   describe('PrayerTimes test', function() {

       it('Changes Calculation methds ', function(){

    MainCall.h1.VerifyCalculationMethodandJursisticMthodChange()
   
  })
  it('Verifies All Calulation method ', function(){

    MainCall.h1.VerifyCalculationMethod()
   
  })
  it('Verifies Duhar zawal and Magrib Sunset ', function(){

    MainCall.h1.verifydhuhrzawalTimeandMaghribSunsetTimeDropdownValuesPrayerTimesSettings()
   
  })
  it('Verifies PrayerTimes of April 2020 ', function(){
    cy.wait(3000)
      
    MainCall.h1.verifyMonthlyPrayerTimes()
  
  })
  

it('Verifies Hijri Months and Years PrayerTimes Chart Dropdown Monthly and Yearly ', function(){
    
  MainCall.h1.verifyHijriMonthsandYearsPrayerTimesChartDropdownMonthlyYearly()

})

   
    it('Open Prayer times tab ', function(){
       
      MainCall.h1.VerifyPrayerTimetable()
    
    })

  })
