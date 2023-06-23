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

//Adiciona linha de pixels ao quadro de pixels:
function createPixelLines(number) {
    for (i = 0; i < number; i += 1) {
        const newElement = document.createElement('tr');
        newElement.className = 'pixel-line'
        pixelsBoard.appendChild(newElement)
    }
}

//Seleciona linha de pixels:
const pixelLine = document.getElementsByClassName('pixel-line')

//Adiciona colunas a cada linha:
function createPixelElements(pixels = pixelLine.length) {
    for (i = 0; i < pixels; i += 1) {
        for (l = 0; l < pixels; l += 1) {
            if (pixelLine[i].children.length < pixels) {
                const newElement = document.createElement('td');
                newElement.className = 'pixel'
                pixelLine[i].appendChild(newElement)
            }
        }
    }
}

//Adicionar cor aos pixels:
function addColor(event) {
    const color = getComputedStyle(document.getElementsByClassName('selected')[0]).backgroundColor;
    event.target.style.backgroundColor = color;
}

//Seleciona os elementos com classe pixel:
const pixels = document.getElementsByClassName('pixel')

//Adiciona evento de clique nos pixels:
function addColorEvent() {
    for (i = 0; i < pixels.length; i += 1) {
        pixels[i].addEventListener('click', addColor);
    }
}

//Reseta a cor dos pixels para branco:
function clear () { 
    for (i = 0; i < pixels.length; i += 1){
        pixels[i].style.backgroundColor = 'white'
    }
}

//Seleciona o botão para limpar o quadro:
const clearButton = document.getElementById('clear-board');

//Adiciona o evento ao botão de limpar os pixels:
clearButton.addEventListener('click', clear);

const input = document.getElementById('board-size');

const buttonBoard = document.getElementById('generate-board');

buttonBoard.addEventListener('click', mudarTamanho);

function mudarTamanho () {
    if (input.value === '') window.alert ('Board inválido!')

    createPixelLines(Number(input.value) - pixelLine.length)
    createPixelElements()
    addColorEvent()
}

//Atribui cores aleatórias ao carregar a página:
window.onload = function() {
    fixedColor.classList.add('selected')
    color01.style.backgroundColor = newRandomColor()
    color02.style.backgroundColor = newRandomColor()
    color03.style.backgroundColor = newRandomColor()

    createPixelLines(5)
    createPixelElements()
    addColorEvent()
}