function removePixelBoard() {
    const pixelBoard = document.getElementsByClassName('pixel')
    
    if (removeBoard.textContent === 'Remover borda') {
        for (i = 0; i < pixelBoard.length; i += 1) {
            const color = getComputedStyle(pixelBoard[i]).backgroundColor;
            pixelBoard[i].style.border = `2px solid ${color}`; 
        }
        removeBoard.textContent = 'Adicionar borda'
    }
        
    else if (removeBoard.textContent === 'Adicionar borda') {
        for (i = 0; i < pixelBoard.length; i += 1) {
            pixelBoard[i].style.border = `2px solid black`; 
        }
        removeBoard.textContent = 'Remover borda'
    }
}