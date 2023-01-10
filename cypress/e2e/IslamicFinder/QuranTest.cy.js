import MainCall from '../General/MainCall'
describe('Quran Test', function() {
   

    it('Goes to Quran Screen', function(){
       
        MainCall.login.Url2();
     // MainCall.login.login();
      MainCall.Quran.ClickonQuran();
    

    }
    )
  
    it('Verifies Quran Surahs', function(){
       
      MainCall.Quran.VerifySurahs();
  

  }
  )
  it('Plays Quran ', function(){
       
     
    MainCall.Quran.PlaySurah();

  }
  )
  it.only('Quran Settings ', function(){
       
     
    MainCall.Quran.seekBarMovement();

  }
  )
    it ('Verifies Quran Juzz' , function()
      {
           MainCall.Quran.VerifyJuzz();
      }
    )
    
    })
    