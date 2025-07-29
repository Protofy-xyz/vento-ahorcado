return (() => {
    
    const totalErrors = Object.values(board['letters said']??{}).filter(v => v === 'BAD').length ?? 0;

    const word = board["new word"]
    
    if(!totalErrors || !word){
        const image = "burning-0"
        return `/public/images/${image}.png`
    }
    
    

    const errorsToGameOver = 5
    let extension = "0"

    const wordAsArr = word.toUpperCase().split('')
    const userLetters = Object.keys(board["letters said"])
    const isCompleted = wordAsArr.every(l => userLetters.includes(l))

    if (totalErrors > 5) {
        extension = "over"
    } else if (word.length && isCompleted) {
        extension = "win"
    } else if (totalErrors >= 0 && totalErrors <= errorsToGameOver) {
        extension = totalErrors
    }

    const image = "burning-" + extension
    return `/public/images/${image}.png`
})()