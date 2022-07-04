window.onload = function() {
    let black = document.getElementById('black');
    black.classList.add('selected')
}

let pixels = document.getElementById('pixel-board').children;
for (i = 0; i < pixels.length; i += 1) {
    pixels[i].className = 'pixel';
}

let black = document.getElementById('black');
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

black.addEventListener('click', addSelected)
red.addEventListener('click', addSelected)
green.addEventListener('click', addSelected)
blue.addEventListener('click', addSelected)

function addSelected (event) {
    console.log(event.target);
        document.querySelector('.selected').classList = 'color'
    if (event.target.classList != 'color selected') {
        event.target.classList.add('selected')
    }
}