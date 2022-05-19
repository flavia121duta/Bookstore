let color = 'grey';
const buton = document.getElementById('moon');
const htmlQS = document.querySelector('html')
const bodyQS = document.querySelector('body')
const headerQS = document.querySelector('header')
const footerQS = document.querySelector('footer')
const ignoraQS = document.querySelectorAll('.ignora')
let arrayObj = [htmlQS, bodyQS, headerQS, footerQS]
buton.addEventListener('click', changeBackground)
function changeBackground(){
    htmlQS.style.backgroundColor = color;
    bodyQS.style.backgroundColor = color;
    headerQS.style.backgroundColor = color;
    footerQS.style.backgroundColor = color;
    ignoraQS[0].style.backgroundColor = color;
    ignoraQS[1].style.backgroundColor = color;
    color = (color === 'grey' ? `lightblue` : `grey`);
}

//------------------------------------------------------

const list = document.querySelector('#notice .lista');

list.addEventListener('dblclick', (event) => {
    event.target.remove();
});

list.addEventListener('click', (event) => {
    event.target.style.textDecoration = "line-through";
    event.target.style.color = "grey";
});

//------------------------------------------------------

const homeColors = ['pink', 'red', 'yellow', 'blue', 'white', 'violet', 'hotpink', 'cornsilk']

function coloreaza() {
    document.querySelector('#home').style.backgroundColor = homeColors[Math.floor(Math.random() * homeColors.length)];
    //document.querySelector('#history').style.backgroundColor = homeColors[Math.floor(Math.random() * homeColors.length)];
}

function delay() {
    setTimeout(coloreaza, 1000);
}
document.querySelector('#home').addEventListener('mouseover', coloreaza);
//document.querySelector('#history').addEventListener('mouseover', delay);

let container = document.getElementById("presentation");
let t = setInterval(schimba,200,container,"red","blue");

function schimba(elem, culoare1, culoare2) {
    if(elem.style.backgroundColor===culoare1)
            elem.style.backgroundColor = culoare2;
        else
            elem.style.backgroundColor = culoare1;
}

container.onfocus = function() {
    clearInterval(t);
}

//----------------------------------------------------------

let myWindow; // globala pt a fi vazuta si la apelul close()
function openWin() {
    myWindow = window.open("/galerie", "_blank", "width=50vw");
    myWindow.blur();
}

function closeWin() {
    myWindow.close();
}

//----------------------------------------------------------

const f = function () {
    let n = document.getElementById("notice");
    bodyQS.onkeyup = function(event) {
        switch (event.key) {
            case "r":
                n.style.backgroundColor = "tomato";
                break;
            case "g":
                n.style.backgroundColor = "lightgreen";
                break;
            case "b":
                n.style.backgroundColor = "blue";
                break;
            // pt. orice alta tasta
            default:
                let stil = window.getComputedStyle(bodyQS);
                let BGcolor = stil.getPropertyValue("background-color"); // rgba(0, 0, 0, 0) ???
                // console.log(BGcolor);
                n.style.backgroundColor = (color === 'grey' ? 'lightblue' : 'grey');
                return;
        }
    }
}

f();

//----------------------------------------------------------

const g = function () {
    let a = document.getElementById('ancora');
    a.addEventListener('click', (event) => {
        event.preventDefault();
    });
}

g();

//----------------------------------------------------------

function func1(event) {
    let p = document.querySelector('#history > p');
    if (document.getElementById("check").checked) {
        event.stopPropagation();
    }
    p.style.border = "thick solid #0000FF";
}

function func2() {
    let section = document.querySelector('#history');
    section.style.backgroundColor = "white";
    // alert("SECTION");
}

//----------------------------------------------------------

function myFunction() {
    const element = document.querySelector('#notice > ul');
    const rect = element.getBoundingClientRect();

    document.getElementById("demo").innerHTML =
        "Left: " + rect.left.toFixed() + ", Top: " + rect.top.toFixed() + ", Width: " + rect.width + ", Height: " + rect.height;
}

//----------------------------------------------------------

// inserare de element in pagina
document.getElementById('contact').addEventListener('click', (event) => {
        let cx=event.clientX; //pozitia mouse-ului
        let cy=event.clientY;

        let div = document.createElement("div");
        div.classList.add('butterfly');

        div.style.position="absolute";
        div.style.left=cx + "px";
        div.style.top=cy + "px";
        div.style.display = "inline";
        div.style.backgroundImage = `url("butterfly.png")`;

        document.getElementById('contact').appendChild(div);
        // setTimeout(function(){document.getElementById('contact').removeChild(div);},3000);
    }
);

//----------------------------------------------------------

function hide(e) {
    e.currentTarget.style.visibility = 'hidden';
    console.log(e.currentTarget);
}

function show(e) {
    e.currentTarget.style.visibility = 'visible';
    console.log(e.currentTarget);
}

let ps = document.getElementsByTagName('p');

for(let i = 0; i < ps.length; i++) {
    ps[i].addEventListener('dblclick', hide, true);
    // ps[i].addEventListener('click', show, true);
}


