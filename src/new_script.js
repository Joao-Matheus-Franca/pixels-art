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
function addSelectedClass (event) {
    document.querySelector('.selected').classList = 'color'
    if (event.target.classList !== 'color selected') {
        event.target.classList.add('selected')
    }
}

//Adiciona o evento de clique a tabela de cores:
fixedColor.addEventListener('click', addSelectedClass)
color01.addEventListener('click', addSelectedClass)
color02.addEventListener('click', addSelectedClass)
color03.addEventListener('click', addSelectedClass)

//Seleciona o quadro de pixels:
const pixelsBoard = document.getElementById('pixel-board');

//Adiciona classe 'pixel' aos elementos do quadro de pixels:
for (i = 0; i < 5; i += 1) {
    const newElement = document.createElement('tr');
    newElement.className = 'pixel-line'
    pixelsBoard.appendChild(newElement)
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

//

//Seleciona os elementos com classe pixel:
const pixels = document.getElementsByClassName('pixel')

//Adiciona evento de clique nos pixels:
for (id = 0; i < pixels.length; id += 1) {
    pixels[i].addEventListener('click', addColor);
}

//Atribui cores aleatórias ao carregar a página:
window.onload = function() {
    fixedColor.classList.add('selected')
    color01.style.backgroundColor = newRandomColor()
    color02.style.backgroundColor = newRandomColor()
    color03.style.backgroundColor = newRandomColor()
}