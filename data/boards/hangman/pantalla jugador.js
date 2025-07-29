let displayedWord = board['new word'].split('').map(letter => board['letters said'][letter] ? letter : '_').join(' ');
return displayedWord;