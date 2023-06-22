//Renderiza cores aleatoriamente:
function randomNumber() {
    return Math.floor(Math.random() * 256)
}

function newRandomColor() {
    const newColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    return newColor;
}

//Seleciona barra de seleção de cores:
const fixedColor = document.getElementById('fixed-color')
const color01 = document.getElementById('color-01')
const color02 = document.getElementById('color-02')
const color03 = document.getElementById('color-03')

window.onload = function() {
    fixedColor.classList.add('selected')
    color01.style.backgroundColor = newRandomColor()
    color02.style.backgroundColor = newRandomColor()
    color03.style.backgroundColor = newRandomColor()
}