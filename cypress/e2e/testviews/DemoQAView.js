
import { NAME } from "../IslamicFinder/constant";
import{WEle} from"../WebElemets/DemoElements"

var catogoryCard1 ='.category-cards > :nth-child(1)';
var Element0 = ':nth-child(1) > .element-list > .menu-list > #item-0';
var FullName="//*[@placeholder='Full Name']";
var Email="//*[@id='userEmail']";
var CurrentAdress="//*[@id='currentAddress']";
var PermanentAdress="//*[@id='permanentAddress']";
var Submit="//*[@id='submit']";
var tabSubmit = '#submit'
var Output="//*[@id='output']";
var Element1 = ':nth-child(1) > .element-list > .menu-list > #item-1';
var ExpandAll='.rct-option-expand-all > .rct-icon';
var Before ="(//*[@class='rct-title'])[" ;
var After = "]";
var Check = ["" ,"Home", "Desktop", "Notes","Commands", "Documents","WorkSpace","React", "Angular", "Veu","Office", "Public","Private", "Classified","General" ,"Downloads","Word File.doc", "Excel File.doc"]
 var Result = ["" ,"home", "desktop", "notes","commands", "documents","workspace","react", "angular", "veu","office", "public","private", "classified","general" ,"downloads","wordFile", "excelFile"]
var RCT ="(//*[@class='rct-title'])[1]";
var Before1= ("(//*[@class='text-success'])[");
var After1 = "]";
var RCToptions = '.rct-option-collapse-all > .rct-icon ';
var Element2 = ':nth-child(1) > .element-list > .menu-list > #item-2';
var YesRadio = "//*[@id='yesRadio']";
var TextSuccess= "//*[@class='text-success']";
var ImpressiveRadio = "//*[@id='impressiveRadio']";
var Element3 = ':nth-child(1) > .element-list > .menu-list > #item-3'; 
var TableDate = ["" ,"Cierra", "Vega", "39","cierra@example.com", "10000","Insurance"," ", "Alden", "Cantrell","45", "alden@example.com","12000", "Compliance"," " ,"Kierra", "Gentry","29", "kierra@example.com","2000", "Legal"," "]
var Before3= "(//*[@class='rt-td'])[";
var After3 = "]";
var AddNewRecord= '#addNewRecordButton';
var FirstName= '#firstName';
var LAstName = '#lastName';
var UserEmail= '#userEmail';
var Age= '#age';
var Salary = '#salary';
var Department = '#department';
var TableDataof4Rows = "(//*[@class='rt-tr-group'])[4]";
var EditRecordTable = '#edit-record-1 > svg > path';
var TableDate2 = ["" ,"Ali Hussnain", "Ali Hussnain", "25","aligill984@gmail.com", "11111","Islamabad Pakistan"," ", "Alden", "Cantrell","45", "alden@example.com","12000", "Compliance"," " ,"Kierra", "Gentry","29", "kierra@example.com","2000", "Legal"," "]
var Before4= ("(//*[@class='rt-td'])[");
var After4 = "]";
var SearchBox= '#searchBox';
var TableDate3 = ["" ,"Ali Hussnain", "Ali Hussnain", "25","aligill984@gmail.com", "11111","Islamabad Pakistan"," "]
var Before5= ("(//*[@class='rt-td'])[");
var After5 = "]";
var Record1='#delete-record-1 > svg';
var Record2='#delete-record-2 > svg';
var Record3='#delete-record-3 > svg';
var Record4='#delete-record-4 > svg';
var Element4 = ':nth-child(1) > .element-list > .menu-list > #item-4'; 
var DoubleClick = '#doubleClickBtn';
var DoubleClickMessage= "//*[@id='doubleClickMessage']";
var RightClick = '#rightClickBtn';
var RightClickMessage= "//*[@id='rightClickMessage']";
var DynamicClick = "(//*[@class='btn btn-primary'])[3]";
var DynamicClickMessage = "//*[@id='dynamicClickMessage']";
var Element5= ':nth-child(1) > .element-list > .menu-list > #item-5';
var Link = '#simpleLink';
var URL1='https://demoqa.com/';
var BrokenUrl ='https://demoqa.com/broken';
var Element6 = ':nth-child(1) > .element-list > .menu-list > #item-6'
var BrokenImage = "//*[@src='/images/Toolsqa_1.jpg']";
var DemoQAdot = "//*[@href='http://demoqa.com']";
var broken500= "//*[@href='http://the-internet.herokuapp.com/status_codes/500']";
var Element7 = ':nth-child(1) > .element-list > .menu-list > #item-7';
var Download = '#downloadButton';
var UploadFile = '#uploadFile';
var UploadFilepath='#uploadedFilePath';
var BrowserwindowURl='https://demoqa.com/browser-windows';
var tabbutton = '#tabButton';
var WindowButton='#windowButton';
var MessageWindowButton= '#msgWindowButtonWrapper';
var x1 = "(//*[@id='item-1'])[2]";
var AlertButton = "//*[@id='alertButton']";
var Timeralert="//*[@id='timerAlertButton']";
var confirmButton='#confirmButton';
var confirmResult='#confirmResult';
var promtButton = '#promtButton';
var FrameURL = "https://demoqa.com/frames";
var frame1= '[id=frame1]';
var SampleHeading="#sampleHeading";
var IframeExampleUrl="https://the-internet.herokuapp.com/iframe";
var Resolveframe = '#mce_0_ifr';
var x2='#tinymce';
var DialogsURL ="https://demoqa.com/modal-dialogs";
var ShowSmallModel= '#showSmallModal';
var showLargeModal = '#showLargeModal';
var p= 'p'
var closeLargeModal = '#closeLargeModal';











    











class DemoQA{
    Url()
    {
    cy.visit('https://demoqa.com/' ,{ timeout: 200000 })
    cy.get(catogoryCard1).click();
    }
DealWithElements(){

    cy.get(Element0).click()
    cy.wait(3000)
    //  cy.xpath("//*[@placeholder='Full Name']").click()
    var x=cy.xpath(FullName);
    x.type(NAME.Name);
    cy.xpath(Email).type(NAME.email)
    cy.xpath(CurrentAdress).type(NAME.Adress)
    cy.xpath(PermanentAdress).type(NAME.Adress)
    cy.xpath(Submit).click()
    cy.xpath(Output).should('be.visible');
        


}

CheckBox(){
    cy.get(Element1).click();
    cy.get(ExpandAll).click()
    

      for (let i = 1; i <= 17; i++) {


      let ver= cy.xpath(Before+ i + After)
      ver.should('have.text', Check[i])
      ver.then(($text)=>{
       const txt = $text.text()
       cy.log(txt)
       cy.xpath(RCT).click()
   })
   }
  

   for (let i = 1; i <= 17; i++) {


   let ver= cy.xpath(Before1+ i + After1)
   ver.should('have.text', Result[i])
   ver.then(($text)=>{
    const txt = $text.text()
    cy.log(txt)
    cy.get(RCToptions).click({})
})
   }}

RadioButton()

{    cy.get(Element2).click();
    cy.xpath(YesRadio).check({force: true});
    cy.xpath(TextSuccess).should('include.text','Yes')
    cy.xpath(ImpressiveRadio).check({force: true});
    cy.xpath(TextSuccess).should('include.text','Impressive')
    

}

Table(){
    cy.get(Element3).click();



      for (let i = 1; i <= 21; i++) {


      let ver= cy.xpath(Before3+ i + After3)
      ver.should('have.text', TableDate[i])
      ver.then(($text)=>{
       const txt = $text.text()
       cy.log(txt)

})
      }}

FillSalaryTable(){

    cy.get(AddNewRecord).click()
    cy.get(FirstName).type(NAME.Name)
    cy.get(LAstName).type(NAME.Name)
    cy.get(UserEmail).type(NAME.email)
    cy.get(Age).type('25');
    cy.get(Salary).type(NAME.password)
    cy.get(Department).type(NAME.Adress)
    cy.get(tabSubmit).click()
    cy.wait(5000)
    cy.xpath(TableDataof4Rows).should('be.visible')

      

}
EditRecordTable(){

    cy.get(EditRecordTable).click()
    cy.get(FirstName).clear()
    cy.get(FirstName).type(NAME.Name)
    cy.get(LAstName).clear()
    cy.get(LAstName).type(NAME.Name)
    cy.get(UserEmail).clear()  
    cy.get(UserEmail).type(NAME.email)
    cy.get(Age).clear()
    cy.get(Age).type('25');
    cy.get(Salary).clear()
    cy.get(Salary).type(NAME.password)
    cy.get(Department).clear()
    cy.get(Department).type(NAME.Adress)
    cy.get(tabSubmit).click()
    


      for (let i = 1; i <= 21; i++) {


      let ver= cy.xpath(Before4+ i + After4)
      ver.should('include.text', TableDate2[i])
      ver.then(($text)=>{
       const txt = $text.text()
       cy.log(txt)

})

}

}
SearchBox(){
    cy.get(SearchBox).type(NAME.Name);
   


    for (let i = 1; i <= 7; i++) {


    let ver= cy.xpath(Before5+ i + After5)
    ver.should('include.text', TableDate3[i])
    ver.then(($text)=>{
     const txt = $text.text()
     cy.log(txt)

})

}
}
DeleteTableData(){
    cy.get(SearchBox).clear()
    cy.get(Record1).click()
    cy.get(Record2).click()
    cy.get(Record3).click()
    cy.get(Record4).click()
    var TableDate = [" " ," ", " ", " "," ", " "," "," "]
    
    


    for (let i = 1; i <= 7; i++) {


    let ver= cy.xpath(Before3+ i + After)
    ver.should('not.to.match', ':empty')
    ver.then(($text)=>{
     const txt = $text.text()
     cy.log(txt)

})

}
}

ButtonClicks()

{


cy.get(Element4).click();

cy.get(DoubleClick).dblclick()
cy.xpath(DoubleClickMessage).should('include.text',NAME.doubleclick)
cy.get(RightClick).rightclick()
cy.xpath(RightClickMessage).should('include.text',NAME.rightlick)
cy.xpath(DynamicClick).click()
cy.xpath(DynamicClickMessage).should('include.text',NAME.DynamicClick)

}
Links()
{
   
    cy.get(Element5).click( {force: true});
    cy.get(Link).invoke('removeAttr', 'target').click()
    cy.url().should('eq', URL1, { timeout: 200000 })
    cy.go('back')


}
BrokenLinkandImage(){
    cy.visit(BrokenUrl, { timeout: 200000 })
    cy.get(Element6).click();
    cy.xpath(BrokenImage).should('be.visible')
    cy.xpath(DemoQAdot).click()
    //cy.url().should('eq', 'https://demoqa.com/', { timeout: 200000 })
   // cy.go('back')
    cy.xpath(broken500).click()
    
}
UploadAndDownload(){
  //  cy.visit("https://demoqa.com/upload-download", { timeout: 200000 })

    cy.get(Element7).click()
    cy.get(Download).click()
    cy.readFile(NAME.uplaodimage)
    .should('exist')
    cy.get(UploadFile).selectFile(NAME.selectFile)
    cy.get(UploadFilepath).should('be.visible')


    
}
AlertsFrame(){
   
    cy.visit( BrowserwindowURl,{
        onBeforeLoad(win) {
          cy.stub(win, 'open')
        }
      });
    
      cy.get(tabbutton).click();
      cy.window().its('open').should('be.called');

      cy.get(WindowButton).click();
      cy.window().its('open').should('be.called');

      cy.get(MessageWindowButton).click();
      cy.window().its('open').should('be.called');
}
Alerts(){
    cy.xpath(x1).click()
    cy.xpath(AlertButton).click()
    cy.on('window:alert',(t)=>{
        expect(t).to.contains('You clicked a button');
     })
    
    cy.xpath(Timeralert).click()
    cy.wait(5000)
    cy.on('window:alert',(t)=>{
        expect(t).to.contains('This alert appeared after 5 seconds');
     })
     cy.get(confirmButton).click() 
     cy.on("window:confirm", (t) => {
        //verify text on pop-up
        expect(t).to.equal("Do you confirm action?");
        
     });
     cy.get(confirmResult).should('include.text','You selected Ok')
     cy.window().then(function(promptelement){
        cy.stub(promptelement, "prompt").returns("Hello");
        cy.get(promtButton).click()
      });
    }

   Frames(){
        cy.visit(FrameURL)
     //   cy.xpath("(//*[@id='item-2'])[2]").click()
        cy.get(frame1).its('0.contentDocument.body').then(cy.wrap).find(SampleHeading).then(function(txt){
           const txtframe = txt.text();
           //assertion to verify text
           expect(txtframe).to.contains('This is a sample page');
           cy.log(txtframe);
        })
       

    }

  FramesExample(){
    cy.visit(IframeExampleUrl,{ timeout: 200000 })
    //Resolving the iframe 
    cy.get(Resolveframe).then(function($frame){  

       let iframe=  $frame.contents().find(x2)
       cy.wrap(iframe).clear().click().type(NAME.Adress)
    })
 

  }
 Dialogs(){
cy.visit(DialogsURL)
cy.get(ShowSmallModel).invoke('attr', 'open', 'open')
cy.get(ShowSmallModel).should('be.visible')
cy.get(showLargeModal).click()
cy.get(p).should('include.text',NAME.Paragraph)
cy.get(closeLargeModal).click()
 }
}


export default DemoQA