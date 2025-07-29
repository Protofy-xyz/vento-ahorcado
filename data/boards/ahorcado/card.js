await execute_action("letras jugador", {
	key: params.letra, // key
	value: board?.['crear palabra'].includes(params.letra), // value
})