// 'use strict'

window.onload = myMain;

function myMain() {
    document.querySelector('h1').onmouseover = stil1;
    document.querySelector('h1').onmouseout = stil2;
}

function stil1() {
    document.querySelector('h1').className = "stil1";
}
function stil2() {
    document.querySelector('h1').className = "stil2";
}

//------------------------------------------------------

// la alegerea unui element din lista, fundabul paginii se modifica in culoarea corespunzatoare

function changeBG() {
    let div = document.getElementById("BG");
    let body = document.querySelector('body');

    document.onload = function(event) {
        switch (event.key) {
            case "red":
                body.style.color = "red";
                break;
            case "yellow":
                body.style.color = "green";
                break;
            case "blue":
                body.style.color = "blue";
                break;
            case "green":
                body.style.color = "green";
                break;
            default:
                console.log("Error");
                return;
        }
        document.getElementById("tasta").innerHTML = event.key;
    }
}
//------------------------------------------------------

let figures = document.querySelectorAll('figure');
console.log(figures);

for (let img of figures) {
    let info = String(img.innerHTML);
    console.log(info.split('>'));
    // TODO: folisind regex sau orice altceva pe lume, scoate tilul, pretul si sirsa imaginii
}


function Book(sursaImg, titlu, pret) {
    this.sursaImg = sursaImg;
    this.title = titlu;
    this.pret = pret;
}
// let myCar = new Book("Volkswagen", "Golf 6", 140);


// function compare(a, b) {
//     if (a.innerText > b.innerText)
//         return -1;
//     if (a.innerText < b.innerText)
//         return 1;
//     return 0;
// }

let buton1

