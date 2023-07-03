const fixedColor01 = document.getElementById('fixed-color-01');
const colorRed = document.getElementById('color-red');
const colorGreen = document.getElementById('color-green');
const colorBlue = document.getElementById('color-blue');
const fixedColor02 = document.getElementById('fixed-color-02');
const randomColor01 = document.getElementById('random-color-01');
const color01 = document.getElementById('color-01');
const color02 = document.getElementById('color-02');
const color03 = document.getElementById('color-03');
const randomColor02 = document.getElementById('random-color-02');
const pixelsBoard = document.getElementById('pixel-board');
const pixelLine = document.getElementsByClassName('pixel-line');
const pixels = document.getElementsByClassName('pixel')
const clearButton = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const buttonBoard = document.getElementById('generate-board');

fixedColor01.addEventListener('click', addSelectedClass);
colorRed.addEventListener('click', addSelectedClass);
colorGreen.addEventListener('click', addSelectedClass);
colorBlue.addEventListener('click', addSelectedClass);
fixedColor02.addEventListener('click', addSelectedClass);
randomColor01.addEventListener('click', addSelectedClass);
color01.addEventListener('click', addSelectedClass);
color02.addEventListener('click', addSelectedClass);
color03.addEventListener('click', addSelectedClass);
randomColor02.addEventListener('click', addSelectedClass);
clearButton.addEventListener('click', clear);
buttonBoard.addEventListener('click', changeSize);

function addColorEvent() {
    for (i = 0; i < pixels.length; i += 1) {
        pixels[i].addEventListener('click', addColor);
    }
}

window.onload = function() {
    fixedColor01.classList.add('selected')
    randomColor01.style.backgroundColor = newRandomColor()
    randomColor02.style.backgroundColor = newRandomColor()

    createPixelLines(16)
    createPixelElements()
    addColorEvent()
}