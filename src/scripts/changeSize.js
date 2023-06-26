function changeSize () {
    if (input.value === '') window.alert ('Board inválido!')

    createPixelLines(Number(input.value) - pixelLine.length)
    createPixelElements()
    addColorEvent()
}