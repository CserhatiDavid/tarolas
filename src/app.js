/*
* File: app.js
* Author: Cserhati David
* Copyright: 2023, Cserhati David
* Group: Szoft I-2 N
* Date: 2023-02-23
* Github: https://github.com/CserhatiDavid/
* Licenc: GNU GPL
* Nem vállalunk felelősséget a rossz jegyekért
*/
const doc={

}
window.addEventListener('load',()=>{
    init();
})
function init() {
    doc.setButton.addEventListener('click',()=>{
        startSet();
    })
    doc.setButton.addEventListener('click',()=>{
        startGet();
    })
}

//local storage
function startSet() {
    let emp={
        name:"Béla",
        city:"Szeged",
        salary:256
    }
    let empStr=JSON.stringify(emp)
    localStorage.setItem("employee",empStr)
}
function startGet() {
    let empStr=localStorage.getItem("employee")
    let emp=JSON.parse(empStr)
    console.log(emp.name)
}

/*
//session storage
function startSet() {
    let pass="titok"
    sessionStorage.setItem("jelszó",pass)
}
function startGet() {
    let pass=sessionStorage.getItem("jelszó")
    console.log(pass)
}
*/
/*
//cookies
function startSet() {
    let pass="titok"
    document.cookie="jelszo="+pass+"; max-age="+60;
}
function startGet() {
    let pass=document.cookie
    console.log(pass)
}
*/