class Quran{

ClickonQuran()
{
var y = cy.xpath("//*[@class='fa fa-bars hide-for-xl']");
y.click();
cy.wait(2000); 
var z= cy.get(':nth-child(1) > [href="/quran/"]');
z.click();
cy.xpath("//*[@class='pad-left pad-right']").contains("Al Quran with Translation");
}

VerifySurahs(){
    
    var SurahList=["","", "Surah Fatiha", "Surah Baqarah", "Surah Imran", "Surah Nisa", "Surah Maida", "Surah Anam", "Surah Araf", "Surah Anfal","Surah Taubah","Surah Yunus","Surah Hud","Surah Yusuf", "Surah Raad", "Surah Ibrahim", "Surah Hijr", "Surah Nahl","Surah Isra","Surah Kahf","Surah Maryam","Surah Taha","Surah Anbiya","Surah Hajj","Surah Muminun","Surah Noor","Surah Furqan","Surah Shuara","Surah Naml","Surah Qasas", "Surah Ankabut", "Surah Rum", "Surah Luqman", "Surah Sajdah", "Surah Ahzab","Surah Saba","Surah Fatir","Surah Yaseen","Surah Saffat","Surah Sad","Surah Zumar","Surah Ghafir","Surah Fussilat","Surah Shura","Surah Zukhruf","Surah Dukhan","Surah Jathiyah","Surah Ahqaf","Surah Muhammad", "Surah Fath","Surah Hujurat","Surah Qaf","Surah Dhariyat","Surah Tur","Surah Najm","Surah Qamar","Surah Rahman","Surah Waqiah","Surah Hadid","Surah Mujadila","Surah Hashr","Surah Mumtahana", "Surah Saff", "Surah Jumah", "Surah Munafiqoon", "Surah Taghabun", "Surah Talaq", "Surah Tahrim", "Surah Mulk", "Surah Qalam", "Surah Haqqah", "Surah Maarij", "Surah Nuh", "Surah Jinn", "Surah Muzammil", "Surah Mudathir", "Surah Qiyamah", "Surah Insan", "Surah Mursalat", "Surah Naba", "Surah Naziat", "Surah Abasa", "Surah Takwir", "Surah Infitar", "Surah Mutaffifin", "Surah Inshiqaq", "Surah Burooj", "Surah Tariq", "Surah Ala", "Surah Ghashiya", "Surah Fajr", "Surah Balad", "Surah Shams", "Surah Layl", "Surah Duha", "Surah Sharh", "Surah Teen", "Surah Alaq", "Surah Qadr", "Surah Bayyinah", "Surah Zalzalah", "Surah Adiyat", "Surah Qariah", "Surah Takathur", "Surah Asr", "Surah Humazah", "Surah Feel", "Surah Quraish", "Surah Maun", "Surah Kauthar", "Surah Kafiroon", "Surah Nasr", "Surah Masad", "Surah Ikhlas", "Surah Falaq", "Surah Nas"]
    var SurahFirst= ("(//*[@class='d-flex'])[");
    var SurahLast = "]";
    cy.wait(3000)
    cy.scrollTo('500px')
    cy.wait(3000)

    for (let i = 1; i <= 115; i++) {


    let ver= cy.xpath(SurahFirst+ i + SurahLast)
    ver.should('include.text', SurahList[i])
    ver.then(($text)=>{
     const txt = $text.text()
     cy.log(txt)
 })}

}
VerifyJuzz(){
    cy.get('#juzz-label').click()
    var JuzzList = ["" , "Alaf Lam Meem", "Sayaqool","Tilkal Rusull", "Lan Tana Loo","Wal Mohsanat","La Yuhibbullah", "Wa Iza Samiu","Wa Lau Annana","Qalal Malao","Wa A'lamu","Yatazeroon","Wa Mamin Da'abat","Wa Ma Ubrioo","Rubama","Subhanallazi","Qal Alam","Aqtarabo","Qadd Aflaha","Wa Qalallazina","A'man Khalaq","Utlu Ma Oohi","Wa Manyaqnut", "Wa Mali", "Faman Azlam", "Elahe Yuruddo", "Ha'a Meem", "Qala Fama Khatbukum", "Qadd Sami Allah", "Tabarakallazi", "Amma Yatasa'aloon"]

       var JuzzFirst= ("(//*[@class='bold'])[");
       var JuzzLast = "]";
       cy.wait(3000)
       cy.scrollTo('500px')
       cy.wait(3000)

       for (let i = 1; i <= 30; i++) {


       let ver= cy.xpath(JuzzFirst+ i + JuzzLast)
       ver.should('include.text', JuzzList[i])
       ver.then(($text)=>{
        const txt = $text.text()
        cy.log(txt)
    })}


}

PlaySurah(){
    cy.xpath("(//*[@class='large-4 columns relative pad-l-sm pad-r-sm is-directed'])[1]").click();
    cy.xpath("//*[@class='h1-text']").contains("Read Surah Fatiha with translation");
    cy.xpath("//*[@class='aya-text-img fa fa-play-circle fa-2x play-1-7 play-pause-btn fa-play-circle-o']").click();
  var y=  cy.xpath("//*[@class='row removeAyatBackground activeAyat']").should('be.visible')
  cy.log(y+"Ayat is playing")
}
seekBarMovement() {

    cy.visit("https://www.islamicfinder.org/quran/surah-al-faatiha/");
 
    cy.get('#gotit').click();
  //  cy.get('.slider-handle').should('have.attr', 'aria-valuenow', 3).type("3",{ force: true })
 
    
     cy.get('.slider-handle').type(
        "{rightarrow}{rightarrow}"
     )}
}
export default Quran

    
