for (id = 0; id < pixels.length; id += 1) {
    pixels[id].addEventListener('click', adicionarCor);
}
function adicionarCor(event) {
    console.log(event.target);
    let color = getComputedStyle(document.getElementsByClassName('selected')[0]).backgroundColor;
    console.log(color);
    event.target.style.backgroundColor = color;
}

let button = document.getElementById('clear-board');

button.addEventListener('click', limpar);

function limpar () { 
    let resetar = document.getElementsByClassName('pixel');
    for (i = 0; i < resetar.length; i += 1){
        resetar[i].style.backgroundColor = 'white'
    }
}
  
let input = document.getElementById('board-size');
let buttonBoard = document.getElementById('generate-board');

buttonBoard.addEventListener('click', mudarTamanho);

function mudarTamanho (event) {
    if (input.value === '') {
        window.alert ('Board inválido!')
    }

    else if (input.value >= 5 && input.value <= 50) {
    for (let i = 0; i < (input.value*input.value - 25); i += 1) {
    let novo = document.createElement('div');
    novo.className = 'pixel';
    document.getElementById('pixel-board').appendChild(novo);}
    let tamanho = input.value*40 + input.value*0.18*40;
    let tamanho2 = input.value*40 + input.value*40;
    document.getElementById('pixel-board').style.width = tamanho.toString() + 'px';
    document.getElementById('pixel-board').style.height = tamanho2.toString() + 'px';}

    else if (input.value < 5) {
        input.value = 5;
        for (let i = 0; i < (input.value*input.value - 25); i += 1) {
            let novo = document.createElement('div');
            novo.className = 'pixel';
            document.getElementById('pixel-board').appendChild(novo);}
            let tamanho = input.value*40 + input.value*0.18*40;
            let tamanho2 = input.value*40 + input.value*40;
            document.getElementById('pixel-board').style.width = tamanho.toString() + 'px';
            document.getElementById('pixel-board').style.height = tamanho2.toString() + 'px';
    } 

    else if (input.value > 50) {
        input.value = 50;
        for (let i = 0; i < (input.value*input.value - 25); i += 1) {
            let novo = document.createElement('div');
            novo.className = 'pixel';
            document.getElementById('pixel-board').appendChild(novo);}
            let tamanho = input.value*40 + input.value*0.18*40;
            let tamanho2 = input.value*40 + input.value*40;
            document.getElementById('pixel-board').style.width = tamanho.toString() + 'px';
            document.getElementById('pixel-board').style.height = tamanho2.toString() + 'px';
    }

    else if (input.value === '') {
        window.alert ('Board inválido!')
    }
}