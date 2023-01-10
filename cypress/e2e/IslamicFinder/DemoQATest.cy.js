

import maincall from '../General/MainCall'

//let log =new login();

describe('DemoQA website', function() {

it('Opens the demo site', function(){
maincall.Demo.Url()
cy.url().should('eq', 'https://demoqa.com/elements', { timeout: 200000 })
}
)
it('Verifies and Fills form', function(){
    maincall.Demo.DealWithElements()
}
    )
it('Checkbox ', function(){
        maincall.Demo.CheckBox()
    }
  )
  it('Radio Button ', function(){
    maincall.Demo.RadioButton()
}
)
it('Table ', function(){
    maincall.Demo.Table()
    maincall.Demo.FillSalaryTable()
    maincall.Demo.EditRecordTable()
    maincall.Demo.SearchBox()
    maincall.Demo.DeleteTableData()
})
it('Clicking the Button ', function(){
    maincall.Demo.ButtonClicks()
}
)
it('Clicking the lINK ', function(){
    maincall.Demo.Links()
}
)
it('Uploads and Downloads file', function(){
    maincall.Demo.UploadAndDownload()
}
)
it('handle window file', function(){
    maincall.Demo.AlertsFrame()
}
)
it('handles Alerts', function(){
    maincall.Demo.Alerts()
}
)
it('handles iframes', function(){
    maincall.Demo.Frames()
}
)
it('Iframes example', function(){
    maincall.Demo.FramesExample()
}
)
it('Nested Frames', function(){
    maincall.Demo.Dialogs()
}
)

})