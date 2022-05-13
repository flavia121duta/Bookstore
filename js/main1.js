function playSound(sound) {
    let song = document.getElementById("sound");
    song.volume = .25; // setting the volume to 25% because the sound is loud
    if (song.paused)  // if song is paused
        song.play();
    else
        song.pause();
}

//------------------------------------------------------

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
    color = color === 'grey' ? `lightblue` : `grey`;
}

//------------------------------------------------------

const list = document.querySelector('#notice .lista');

list.addEventListener('click', (event) => {
    event.target.remove();
});

//------------------------------------------------------

const homeColors = ['pink', 'red', 'yellow', 'blue', 'white', 'violet', 'hotpink', 'cornsilk']

function coloreaza() {
    document.querySelector('#home').style.backgroundColor = homeColors[Math.floor(Math.random() * homeColors.length)];
}

document.querySelector('#home').addEventListener('mouseover', coloreaza);

