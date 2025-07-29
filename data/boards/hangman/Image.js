return (() => {
    const totalErrors = Object.values(board['letras jugador']).filter(v => v === 'BAD').length ?? 0;
    let extension = "0"
    
    if (totalErrors > 5) {
        extension = "over"
    } else if (totalErrors >= 0 && totalErrors <= 5) {
        extension = totalErrors
    }

    const image = "burning-" + extension
    return `/public/images/${image}.png`
    })()