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