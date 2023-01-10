import { NAME } from "../IslamicFinder/constant";
var IFlogo= "//*[@class='am-logo bg-If_logo_mobile' ]";
var SearchLocation= '#js-small-search';
var x3 ="[class='boxCard-title mb-1']";
var Toggle = "//*[@class='fa fa-bars hide-for-xl']";
var Prayers = '[title="Prayers"]'
var GetLoc = "//*[@class='input-group-append js-trig-get-location']";
var fontmd3 = "//*[@class='font-md font-dark mb-3']";
var Gotit = '#got-it-btn';
var prayertime = ["" , "05:01 AM", "06:23 AM", "11:47 AM" , "03:32 PM","05:09 PM", "06:32 PM"]
var FontDark = '.font-dark > .font-primary'; 
var VerifyPrayerBefore= ("(//*[@class='prayertime'])[");
var VerifyPrayerAfter = "]";
var DropDown = "[class='font-sm font-dark']";
var CalculationMethod = '#preferenceCalculationMethod';
var JuristicMethod = '#preferenceJuristicMethod';
var SavePreference = "[class='btn button-dark save-preferences save-btn']";
var prayertimeAfterChange = ["" , "05:01 AM", "06:23 AM", "11:47 AM" , "02:47 PM","05:09 PM", "06:27 PM"];
var Download = "//*[@id='download-pt']";
var LahorePrayerTimeChartAprilWeb=["","1Wed7Wed04:30AM05:52AM12:07PM04:36PM06:22PM07:44PM01:06AM","2Thu8Thu04:28AM05:50AM12:07PM04:36PM06:23PM07:45PM01:05AM","3Fri9Fri04:27AM05:49AM12:06PM04:37PM06:23PM07:46PM01:05AM","4Sat10Sat04:25AM05:48AM12:06PM04:37PM06:24PM07:47PM01:04AM","5Sun11Sun04:24AM05:47AM12:06PM04:37PM06:24PM07:48PM01:04AM","6Mon12Mon04:23AM05:46AM12:06PM04:38PM06:25PM07:48PM01:03AM","7Tue13Tue04:21AM05:44AM12:05PM04:38PM06:26PM07:49PM01:02AM","8Wed14Wed04:20AM05:43AM12:05PM04:38PM06:26PM07:50PM01:02AM","9Thu15Thu04:18AM05:42AM12:05PM04:39PM06:27PM07:51PM01:01AM","10Fri16Fri04:17AM05:41AM12:04PM04:39PM06:28PM07:52PM01:00AM","11Sat17Sat04:16AM05:39AM12:04PM04:39PM06:28PM07:53PM01:00AM","12Sun18Sun04:14AM05:38AM12:04PM04:40PM06:29PM07:54PM12:59AM","13Mon19Mon04:13AM05:37AM12:04PM04:40PM06:30PM07:54PM12:58AM","14Tue20Tue04:12AM05:36AM12:03PM04:40PM06:30PM07:55PM12:58AM","15Wed21Wed04:10AM05:35AM12:03PM04:41PM06:31PM07:56PM12:57AM","16Thu22Thu04:09AM05:34AM12:03PM04:41PM06:32PM07:57PM12:56AM","17Fri23Fri04:07AM05:32AM12:03PM04:41PM06:32PM07:58PM12:54AM","18Sat24Sat04:06AM05:31AM12:02PM04:42PM06:33PM07:59PM12:55AM","19Sun25Sun04:05AM05:30AM12:02PM04:42PM06:34PM08:00PM12:54AM","20Mon26Mon04:03AM05:29AM12:02PM04:42PM06:34PM08:01PM12:52AM","21Tue27Tue04:02AM05:28AM12:02PM04:42PM06:35PM08:02PM12:53AM","22Wed28Wed04:01AM05:27AM12:02PM04:43PM06:36PM08:02PM12:52AM","23Thu29Thu03:59AM05:26AM12:01PM04:43PM06:37PM08:03PM12:51AM","24Fri30Fri03:58AM05:25AM12:01PM04:43PM06:37PM08:04PM12:51AM","AprilRamadan","25Sat1Sat03:57AM05:24AM12:01PM04:44PM06:38PM08:05PM12:50AM","26Sun2Sun03:56AM05:23AM12:01PM04:44PM06:39PM08:06PM12:49AM","27Mon3Mon03:54AM05:22AM12:01PM04:44PM06:39PM08:07PM12:49AM","28Tue4Tue03:53AM05:21AM12:01PM04:45PM06:40PM08:08PM12:48AM","29Wed5Wed03:52AM05:20AM12:00PM04:45PM06:41PM08:09PM12:47AM","30Thu6Thu03:51AM05:19AM12:00PM04:45PM06:41PM08:10PM12:47AM"]
var prayerTimeChartBeforePath="//*[@id=\"monthly-prayers\"]/tbody/tr[";
var prayerTimeChartAfterPath="]";
var SelectMonth = "//*[@id='dd-month']";
var SelectYear = "//*[@id='dd-year']";
var ViewTable = '#pt-table-container > .mb-0';
var CalculationMethodsNames = ["" ,"Algerian Ministry of Religious Affairs and Wakfs","Diyanet İşleri Başkanlığı, Turkey","Egyptian General Authority of Survey","Islamic Society of North America","JAKIM","Majlis Ugama Islam Singapura","Muslim World League","Shia Ithna-Ashari, Leva Institute, Qum","Sihat/Kemenag","Spiritual Administration of Muslims of Russia","Tunisian Ministry of Religious Affairs","Umm Al-Qura","Union des Organisations Islamiques de France","University Of Islamic Sciences, Karachi (Default)","Custom - Fajar and isha Angle","Custom - Fajr Angle and Isha time adjustment"]
    
var CalculationMethodsNamesBefore= ("(//*[@id='preferenceCalculationMethod']/option)[");
var CalculationMethodsNamesAfter = "]";
var FajarAngle = "//*[@class='form-control a-fajr']";
var IshaAngle = "//*[@class='form-control a-isha']";
var dhuhrTimeAfterZawalMinutes=["" , "1 minute (Default)","2 minutes ","3 minutes ","4 minutes ","5 minutes ","6 minutes ","7 minutes ","8 minutes ","9 minutes ","10 minutes ","11 minutes ","12 minutes ","13 minutes ","14 minutes ","15 minutes ","16 minutes ","17 minutes ","18 minutes ","19 minutes ","20 minutes ","21 minutes ","22 minutes ","23 minutes ","24 minutes ","25 minutes ","26 minutes ","27 minutes ","28 minutes ","29 minutes ","30 minutes ","31 minutes ","32 minutes ","33 minutes ","34 minutes ","35 minutes ","36 minutes ","37 minutes ","38 minutes ","39 minutes ","40 minutes ","41 minutes ","42 minutes ","43 minutes ","44 minutes ","45 minutes ","46 minutes ","47 minutes ","48 minutes ","49 minutes ","50 minutes ","51 minutes ","52 minutes ","53 minutes ","54 minutes ","55 minutes ","56 minutes ","57 minutes ","58 minutes ","59 minutes ","60 minutes "]
   var MaghribTimeAfterSunsetMinutes=["", "1 minute (Default)","2 minutes ","3 minutes ","4 minutes ","5 minutes ","6 minutes ","7 minutes ","8 minutes ","9 minutes ","10 minutes ","11 minutes ","12 minutes ","13 minutes ","14 minutes ","15 minutes "]
   var dhuhrTimeAfterZawalMinutesBefore= ("(//*[@id='dhuhar-time-after-zawal']/option)[");
   var dhuhrTimeAfterZawalMinutesAfter = "]";
var MaghribTimeAfterSunsetMinutesBefore= ("(//*[@id='maghrib-time-after-sunset']/option)[");
   var MaghribTimeAfterSunsetMinutesAfter = "]";
   var HijriPTclicks = "//*[@href='/prayer-times/?providedDate=1585267200000&type=Hijri']";
   var monthsDropdownValuesHijri=["","Muharram","Safar","Rabi ul Awal","Rabi Al-Akhar","Jumada Al-Awwal","Jumada Al-Akhirah","Rajab","Shaban","Ramadan","Shawwal","Dhul Qadah","Dhul Hijjah"]
      var monthsDropdownValuesHijriBefore= ("(//*[@id='dd-month']/option)[");
   var monthsDropdownValuesHijriAfter = "]";
   var yearsDropdownValueHijriPrayerTimeChart=["" ,"1444","1445","1446","1447","1448","1449","1450","1451","1452","1453","1454","1455","1456","1457","1458","1459","1460","1461","1462","1463","1464","1465","1466","1467","1468","1469","1470","1471","1472","1473","1474","1475","1476","1477","1478","1479","1480","1481","1482","1483","1484","1485","1486","1487","1488","1489","1490","1491","1492","1493","1494","1495","1496","1497","1498","1499","1500","1501","1502","1503","1504","1505","1506","1507","1508","1509","1510","1511","1512","1513","1514","1515","1516","1517","1518","1519","1520","1521","1522","1523","1524","1525","1526","1527","1528","1529","1530","1531","1532","1533","1534","1535","1536","1537","1538","1539","1540","1541","1542","1543"]
    var yearsDropdownValueHijriPrayerTimeChartBefore= ("(//*[@id='dd-year']/option)[");
   var yearsDropdownValueHijriPrayerTimeChartAfter = "]";




class home{

  


  
clickOnHome(){
        var x= cy.xpath(IFlogo ,  { timeout: 200000 })
        x.click();
    }

    ChangeLocationmanually(){
      cy.get(SearchLocation).click().type('Lahore')
  
    //cy.get('[href="/my-location/1172451/"]').click()
      cy.get(x3).contains("Prayer Times in Lahore");


    }
NavigateOnPrayer(){
        var y = cy.xpath(Toggle)
        y.click();
        var z= cy.get(Prayers)
        z.click();
        var loc = cy.xpath(GetLoc)
        loc.click()
        var verify= cy.xpath(fontmd3) 
        verify.should("have.text","Get Prayer Times alert on your phone for free." )

        var got = cy.get(Gotit)
        got.click()

    }

verifyPrayerTimeWithCityCalculationMethodAngleNamePrayerNames(){


}
 


verifyPrayerTime(){

    


           for (let i = 1; i <= 6; i++) {


           let ver= cy.xpath(VerifyPrayerBefore+ i + VerifyPrayerAfter)
           ver.should('have.text', prayertime[i])
           ver.then(($text)=>{
            const txt = $text.text()
            cy.log(txt)
        })
    
    
        }
 

    }
     
VerifyCalculationMethodandJursisticMthodChange(){
  cy.get(FontDark).click()
      cy.get(DropDown).contains("University Of Islamic Sciences, Karachi");    
      cy.get(FontDark).click()
  
      cy.get(CalculationMethod).select('Muslim World League' , { timeout: 30000 })
      cy.wait(2000)
  
      cy.get(JuristicMethod).select('Hanbali, Maliki, Shafi' , { timeout: 30000 })
      cy.wait(2000)
      cy.get(Gotit).click()
  
      cy.get(SavePreference).click()
   
     // cy.get("[class='font-sm font-dark']").contains("Muslim World League");  

    
    

       for (let i = 1; i <= 6; i++) {


       let ver= cy.xpath(VerifyPrayerBefore+ i + VerifyPrayerAfter)
       ver.should('have.text', prayertimeAfterChange[i])
       ver.then(($text)=>{
        const txt = $text.text()
        cy.log(txt)
    })}}


    VerifyPrayerTimetable(){

        cy.scrollTo('bottom')
       
        
        cy.get('#generate-print').invoke('removeAttr', 'target')
        cy.xpath(Download).click()
       
        
            cy.get('h3').contains("Monthly Prayer Times in Lahore")
          cy.go('back')
        
    }

  verifyMonthlyPrayerTimes(){
    
    cy.xpath(SelectMonth).select('April');
    cy.wait(6000);
    cy.xpath(SelectYear).select('2020');
    cy.wait(3000);
    cy.get(ViewTable).click();
    cy.wait(3000);
    
   
  // cy.xpath("//table[@id='monthly-prayers']/tbody").contains('tr','1 Wed 04:30 AM 05:52 AM 12:07 PM 04:36 PM 06:22 PM 07:45 PM').should('be.visible')
  
   
     for (let i = 1; i <= 31; i++) {


      let ver= cy.xpath(prayerTimeChartBeforePath+ i + prayerTimeChartAfterPath)
      //ver.should('contains.text', LahorePrayerTimeChartAprilWeb[i])
     ver .then($el => $el.text().replace(/\s/g, ''))
  .should('contains',LahorePrayerTimeChartAprilWeb[i])

    
      
    }
  }

  VerifyCalculationMethod(){
    cy.get(FontDark).click()
      cy.wait(3000)
      for (let i = 1; i <= 16; i++) {
      let ver= cy.xpath(CalculationMethodsNamesBefore+ i + CalculationMethodsNamesAfter)
      ver.should('include.text', CalculationMethodsNames[i])
      ver.then(($text)=>{
       const txt = $text.text()
       cy.log(txt)
   })


   }


  }
  verifydhuhrzawalTimeandMaghribSunsetTimeDropdownValuesPrayerTimesSettings() {
    cy.get(FontDark).click()
    cy.xpath(FajarAngle).should('include.text', '18')
    cy.xpath(IshaAngle).should('include.text', '18')

   cy.wait(3000)
 

   for (let i = 1; i <= 60; i++) {


   let ver= cy.xpath(dhuhrTimeAfterZawalMinutesBefore+ i + dhuhrTimeAfterZawalMinutesAfter)
   ver.should('include.text', dhuhrTimeAfterZawalMinutes[i])
   ver.then(($text)=>{
    const txt = $text.text()
    cy.log(txt)
  })
  }
  for (let i = 1; i <= 15; i++) {


    let ver= cy.xpath(MaghribTimeAfterSunsetMinutesBefore+ i + MaghribTimeAfterSunsetMinutesAfter)
    ver.should('include.text', MaghribTimeAfterSunsetMinutes[i])
    ver.then(($text)=>{
     const txt = $text.text()
     cy.log(txt)
     cy.wait(5000)
    // cy.get('#got-it-btn').click()
   // cy.get("[class='btn button-dark save-preferences save-btn']").click()

   })
   }}

   verifyHijriMonthsandYearsPrayerTimesChartDropdownMonthlyYearly() {
    cy.wait(8000);
    cy.xpath(SelectMonth).select('April');
    cy.wait(6000);
    cy.xpath(SelectYear).select('2020');
    cy.wait(3000);
  this.VerifyYears();
    cy.xpath(HijriPTclicks).click()
   
   for (let i = 1; i <= 30; i++) {
   let ver= cy.xpath(monthsDropdownValuesHijriBefore+ i + monthsDropdownValuesHijriAfter)
   ver.should('include.text', monthsDropdownValuesHijri[i])
   ver.then(($text)=>{
    const txt = $text.text()
    cy.log(txt)
  })
  
   
   }}
  
  VerifyYears()
  {
    

   for (let i = 1; i <= 30; i++) 
   {
   let ver= cy.xpath(yearsDropdownValueHijriPrayerTimeChartBefore+ i + yearsDropdownValueHijriPrayerTimeChartAfter)
   ver.should('include.text', yearsDropdownValueHijriPrayerTimeChart[i])

   ver.then(($text)=>{
    const txt = $text.text()
    cy.log(txt)
   
  })
  
  }}

}
   



export default home