function randomNumber() {
    return Math.floor(Math.random() * 256)
}

function newRandomColor() {
    newColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    return newColor;
}

export default newRandomColor
