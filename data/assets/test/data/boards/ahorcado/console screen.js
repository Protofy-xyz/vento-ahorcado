return (() => {
    const totalErrors = Object.values(board['letras jugador']).filter(v => v === 'BAD').length ?? 0;
    
    const errorsToGameOver = 5
    let extension = "0"

    const word = board["crear palabra"]
    const wordAsArr = word.toUpperCase().split('')
    const userLetters = Object.keys(board["letras jugador"])
    const isCompleted = wordAsArr.every(l => userLetters.includes(l))

    if (totalErrors > 5) {
        extension = "over"
    } else if (board["crear palabra"].length && isCompleted) {
        extension = "win"
    } else if (totalErrors >= 0 && totalErrors <= errorsToGameOver) {
        extension = totalErrors
    }

    const image = "burning-" + extension
    return `/public/images/${image}.png`
})()