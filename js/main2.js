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
let footer = document.querySelector('footer');
console.log(footer);

div.addEventListener("click", (event)=>{
    body.style.backgroundColor = `${event.target.value}`;
    footer.style.backgroundColor = `${event.target.value}`;
});

//------------------------------------------------------

let figures = document.querySelectorAll('figure');

let preturi = [32, 48, 70, 25, 40, 30, 20, 99.99];
let titluri = [
                "Din cer au căzut trei mere",
                "Bunica mi-a zis să-ți spun că-i pare rău",
                "Integrala poeziei",
                "Înainte ca ochiul să-și fi terminat privirea",
                "Classic cars",
                "How to bake PI",
                "Insatiable Curiosity",
                "Gerda Taro: Inventing Robert Capa"
            ];

let surse = []
let imagini = [];
let index=0;
let initialOrder = -100
for (let img of figures) {
    // let info = img.innerHTML;
    img.pret = `${preturi[index]}`;
    img.titlu = `${titluri[index++]}`;
    imagini.push(img);
}

function addOrder(x){
    x.style.order = initialOrder;
    initialOrder++;
}

function Book(sursaImg, titlu, pret) {
    this.sursaImg = sursaImg;
    this.title = titlu;
    this.pret = pret;
}

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
    // console.log(imagini)
}
order.addEventListener('change',ordoneaza)
options.addEventListener('change',ordoneaza)



