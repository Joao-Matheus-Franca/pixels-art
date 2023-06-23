//Retorna um valor aleatório entre 0 e 255:
function randomNumber() {
    return Math.floor(Math.random() * 256)
}

//Retorna uma string com valores de uma cor aleatória:
function newRandomColor() {
    const newColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    return newColor;
}

//Seleciona as cores presentes para seleção:
const fixedColor = document.getElementById('fixed-color');
const color01 = document.getElementById('color-01');
const color02 = document.getElementById('color-02');
const color03 = document.getElementById('color-03');

//Seleciona o conjunto de elementos do quadro de pixels:
const pixels = document.getElementById('pixel-board').children;

//Adiciona classe 'pixel' aos elementos do quadro de pixels:
for (i = 0; i < pixels.length; i += 1) {
    pixels[i].className = 'pixel';
}

//Atribui cores aleatórias ao carregar a página:
window.onload = function() {
    fixedColor.classList.add('selected')
    color01.style.backgroundColor = newRandomColor()
    color02.style.backgroundColor = newRandomColor()
    color03.style.backgroundColor = newRandomColor()
}