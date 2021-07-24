import React from "react";

function Todo({ todo }) {
	// component that passes in a todo
	return <div className="todo">{todo.text}</div>; //returning a div element with a class of "todo" that shows the text of the todo item - todo.text
}

export default Todo;
