function addColor(event) {
    const color = getComputedStyle(document.getElementsByClassName('selected')[0]).backgroundColor;
    event.target.style.backgroundColor = color;
}