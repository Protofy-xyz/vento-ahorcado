const letter = params.letter.toUpperCase()

	await execute_action("letters said", {
		action: "set",
		key: letter, // key
		value: board?.['new word'].includes(letter)? "OK": "BAD", // value
	})

