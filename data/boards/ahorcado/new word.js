await execute_action("letters said", {
    action: "reset",
	key: '', // key
	value: '', // value
})
return execute_action("/api/v1/chatgpt/send/prompt", { message: userParams.message});