await execute_action("letras jugador", {
	action: "set",
	key: params.letra, // key
	value: board?.['crear palabra'].includes(params.letra)? "OK": "BAD", // value
})