let pixels = document.getElementById('pixel-board').children;
for (i = 0; i < pixels.length; i += 1) {
    pixels[i].className = 'pixel';
}
window.onload = function() {
    let black = document.getElementById('black');
    black.classList.add('selected')
}
