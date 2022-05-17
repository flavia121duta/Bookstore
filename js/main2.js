'use strict'

let f1 = function () {
    if (Number(localStorage.getItem('visits')) > 0)
        localStorage.setItem('visits', `${Number(localStorage.getItem('visits'))+1}`);
    else
        localStorage.setItem('visits', '1');
    let p = document.getElementById('accesari');
    p.textContent += localStorage.getItem('visits');
}

f1();

let f2 = function () {
    document.querySelector('h1').onmouseover = stil1;
    document.querySelector('h1').onmouseout = stil2;
}

f2();

function stil1() {
    document.querySelector('h1').className = "stil1";
}
function stil2() {
    document.querySelector('h1').className = "stil2";
}

//------------------------------------------------------

// la alegerea unui element din lista, fundalul paginii se modifica in culoarea corespunzatoare
let div = document.getElementById("BG");
let body = document.querySelector('body');

div.addEventListener("click", (event)=>{
    body.style.backgroundColor = `${event.target.value}`;
});

//------------------------------------------------------

let figures = document.querySelectorAll('figure');
console.log(figures);
let preturi = [32, 48, 70, 25, 40, 30, 20, 99.99];
let titluri = ['a','b','f','e','c','s','u','i'];
let surse = []
let imagini = [];
let index=0;
let initialOrder = -100
for (let img of figures) {
    // let info = img.innerHTML;
    img.pret = `${preturi[index]}`;
    img.titlu = `${titluri[index++]}`;
    imagini.push(img);
    // TODO: folisind regex sau orice altceva pe lume, scoate tilul, pretul si sursa imaginii
}
function addOrder(x){
    x.style.order=initialOrder;
    initialOrder++;
}

function Book(sursaImg, titlu, pret) {
    this.sursaImg = sursaImg;
    this.title = titlu;
    this.pret = pret;
}

// let book1 = new Book("p1.jpg", "Din cer au căzut trei mere", 32);
// let book2 = new Book("p2.jpeg", "Bunica mi-a zis să-ți spun că-i pare rău", 48);
// //........
//
// let arr = [];
// arr.push(book1);
// arr.push(book2);
// //........

function sortarePret(x,y){
    return x.pret > y.pret ? 1 : -1;
}

function sortareTitlu(x,y){
    return x.titlu > y.titlu ? 1 : -1;
}

const order = document.querySelector('#order');
const options = document.querySelector('#options');

function changeOrder(){
    for (let img of imagini) {
        img.style.order = initialOrder++
    }
}

function ordoneaza(x,y){
    if (order.value==='crescator' && options.value==='titlu'){
        imagini.sort(sortareTitlu)
changeOrder()
    }else if (order.value==='crescator' && options.value==='pret'){
        imagini.sort(sortarePret)
        changeOrder()
    }else if (order.value==='descrescator' && options.value==='titlu'){
        imagini.sort(sortareTitlu);
        imagini.reverse();
        changeOrder()
    }else if (order.value==='descrescator' && options.value==='pret'){
        imagini.sort(sortarePret);
        imagini.reverse();
        changeOrder()
    }
    console.log(imagini)
}
order.addEventListener('change',ordoneaza)
options.addEventListener('change',ordoneaza)



// let buton1

