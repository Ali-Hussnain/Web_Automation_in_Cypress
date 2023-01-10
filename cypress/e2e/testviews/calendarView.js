var Toggle = "//*[@class='fa fa-bars hide-for-xl']";
var IslamicGallery= '.mainFeatures > :nth-child(1) > [href="/islamic-calendar/"]';
var pagetext = "//*[@id='main-heading-text']";
var CalendarMonth = "//*[@id='calendar-primary-month']";
var islamicDate = '.pad-bottom-sm > span';
var Ele = "//*[@class='large-12 column background-secondary text-inverted pad-tb hoverable text-center sm bold']";
var Print = "//*[@id='generate-print']";
var Ele1= "//*[@class='mb-0 font-dark font-md gtm-pt-sch-dropdown']";
var Ele2 = '#pt-table-container > .mb-0';
var SpecialIslamicDays = ["" , "Shab e Barat 2022", "Ramadan 2022","Laylat ul Qadr 2022 - 27th Ramadan 1443", "Eid ul Fitr 2022" , "Hajj 2022","Eid al Adha 2022", "Muharram 2022","Ashura 2022 - 9th and 10th of Muharram 2022"]
var VerifyIslamicDaysBefore= ("(//*[@class='large-6 small-12 columns pad-xs event-box'])[");
var VerifyIslamicDaysAfter = "]";
var DateConverter = '.gtm-pt-f-dateconverter';
var g2h= "//*[@id='g2h-label']";
var days= "//*[@id='days']"
var Months = "//*[@id='months']";
var CDButton = "//*[@id='convert-date-button']";
var ConvertedDAte = "//*[@class='date-converted-date']";







class calendar{

clickOnCalendar(){
var y = cy.xpath(Toggle);
y.click();
cy.wait(2000);
var z= cy.get(IslamicGallery)
z.click();
cy.xpath(pagetext).contains(" Islamic Calendar 2022 - Hijri Calendar");


}

VerifyGregorianDate(){
cy.xpath(CalendarMonth).invoke("text").then(text=>{const Date = text;
cy.log(Date);
cy.xpath(CalendarMonth).should('include.text', Date)
})
}
VerifydateonCalendar(){

  let todayIslamicDate=  cy.get(islamicDate) .invoke("text")
  .then(text => {
    const someText = text;
    cy.log(someText);
    cy.log(todayIslamicDate)
    cy.get(islamicDate).should('include.text', someText)
    

  })  

  }

VerifyPrayertimeofCurrentMonth(){

  cy.xpath(Ele).click()
  cy.xpath(Print)
    .then($popup => {
        if ($popup.is(':visible')) {
            cy.xpath(Ele1).click()
            cy.log($popup)
            cy.log("Prayer Times of current months are displayed")
            cy.get(Ele2).should('include.text', 'See monthly chart')
        } 
        else{
            return
        }
    })
}

VerifySpecialIslamicDays(){
  this.clickOnCalendar()
  
       cy.wait(3000)
       cy.scrollTo('500px')
       cy.wait(3000)

       for (let i = 1; i <= 8; i++) {


       let ver= cy.xpath(VerifyIslamicDaysBefore+ i + VerifyIslamicDaysAfter)
       ver.should('include.text', SpecialIslamicDays[i])
       ver.then(($text)=>{
        const txt = $text.text()
        cy.log(txt)
    })}

}

clickOnDateConverter(){
  cy.get(DateConverter).click()
  cy.xpath(g2h).should('include.text', "Gregorian to Hijri Converter")
  cy.xpath(days).select('6');
  cy.xpath(Months).select('December');
  cy.xpath(CDButton).click()
  cy.wait(3000)
  let todayIslamicDate=  cy.xpath(ConvertedDAte) .invoke("text")
  .then(text => {
    const someText = text;
    cy.log(someText);
    cy.log(todayIslamicDate)
    cy.xpath(ConvertedDAte).should('include.text', someText)
    

  })  


  
  
  
  }
}
  




export default calendar