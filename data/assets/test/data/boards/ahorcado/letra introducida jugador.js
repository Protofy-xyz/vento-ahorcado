const letter = params.letra.toUpperCase()

	await execute_action("letras jugador", {
		action: "set",
		key: letter, // key
		value: board?.['crear palabra'].includes(letter)? "OK": "BAD", // value
	})

