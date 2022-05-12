// 'use strict'

let figures = document.querySelectorAll('figure');
console.log(figures);

figures[0].pret = 32;
figures[1].pret = 48;
figures[2].pret = 70;
figures[3].pret = 25;
figures[4].pret = 30;
figures[5].pret = 40;
figures[6].pret = 20;
figures[7].pret = 100;

function compare(a, b) {
    if (a.innerText > b.innerText)
        return -1;
    if (a.innerText < b.innerText)
        return 1;
    return 0;
}

let buton1

