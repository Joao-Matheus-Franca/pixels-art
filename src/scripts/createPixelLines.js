function createPixelLines(number) {
    for (i = 0; i < number; i += 1) {
        const newElement = document.createElement('tr');
        newElement.className = 'pixel-line'
        pixelsBoard.appendChild(newElement)
    }
}