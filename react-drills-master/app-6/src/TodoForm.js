import React, { useState } from "react";

function TodoForm({ addTodo }) {
	//component that passes in addTodo
	const [value, setValue] = useState(""); //initial value is empty

	function handleSubmit(e) {
		//function that handles the submit button, passing in an event
		e.preventDefault(); //preventing the browser to reset automatically
		if (!value) return; // if user does not enter anything, return
		addTodo(value); //add what the user puts to a todo item
		setValue(""); //reset the value back to an empty string
	}

	return (
		<form>
			<input
				placeholder="Add new task"
				type="text"
				className="input"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={handleSubmit}>Add</button>
		</form>
	);
}

export default TodoForm;
