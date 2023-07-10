function changeSize () {
    const newSize = Number(input.value);
    if (newSize === 0) window.alert ('Board inválido!');

    else if (newSize >= pixelLine.length) {
        createPixelLines(newSize - pixelLine.length)
        createPixelElements()
        addColorEvent()
    }

    else {
        const selectPixels = document.querySelectorAll('.pixel-line')
        for (i = 0; i < selectPixels.length; i += 1) {
            selectPixels[i].remove()
        }

        createPixelLines(newSize)
        createPixelElements()
        addColorEvent()
    }
}