const fixedColor = document.getElementById('fixed-color');
const color01 = document.getElementById('color-01');
const color02 = document.getElementById('color-02');
const color03 = document.getElementById('color-03');
const clearColor = document.getElementById('clear-color');
const pixelsBoard = document.getElementById('pixel-board');
const pixelLine = document.getElementsByClassName('pixel-line')
const pixels = document.getElementsByClassName('pixel')
const clearButton = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const buttonBoard = document.getElementById('generate-board');

fixedColor.addEventListener('click', addSelectedClass)
color01.addEventListener('click', addSelectedClass)
color02.addEventListener('click', addSelectedClass)
color03.addEventListener('click', addSelectedClass)
clearColor.addEventListener('click', addSelectedClass)
clearButton.addEventListener('click', clear);
buttonBoard.addEventListener('click', changeSize);

function addColorEvent() {
    for (i = 0; i < pixels.length; i += 1) {
        pixels[i].addEventListener('click', addColor);
    }
}

window.onload = function() {
    fixedColor.classList.add('selected')
    color01.style.backgroundColor = newRandomColor()
    color02.style.backgroundColor = newRandomColor()
    color03.style.backgroundColor = newRandomColor()

    createPixelLines(16)
    createPixelElements()
    addColorEvent()
}