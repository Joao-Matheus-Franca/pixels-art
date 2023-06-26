function addSelectedClass (event) {
    document.querySelector('.selected').classList = 'color'
    if (event.target.classList !== 'color selected') {
        event.target.classList.add('selected')
    }
}