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

//Adiciona a classe 'selected' a cores:

//Seleciona o quadro de pixels:
const pixels = document.getElementById('pixel-board');

//Adiciona classe 'pixel' aos elementos do quadro de pixels:
for (i = 0; i < 5; i += 1) {
    const newElement = document.createElement('tr');
    newElement.className = 'pixel-line'
    pixels.appendChild(newElement)
}

//Seleciona linha de pixels:
const pixelLine = document.getElementsByClassName('pixel-line')

//Adiciona colunas a cada linha:
for (i = 0; i < pixelLine.length; i += 1) {
    for (l = 0; l < pixelLine.length; l += 1) {
        const newElement = document.createElement('td');
        newElement.className = 'pixel'
        pixelLine[i].appendChild(newElement)
    }
}

//Atribui cores aleatórias ao carregar a página:
window.onload = function() {
    fixedColor.classList.add('selected')
    color01.style.backgroundColor = newRandomColor()
    color02.style.backgroundColor = newRandomColor()
    color03.style.backgroundColor = newRandomColor()
}