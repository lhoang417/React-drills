import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
	const [todos, setTodos] = useState([""]); //setting todos as an empty array and using useState to handle states
	const addTodo = (input) => {
		//function that takes in an input parameter
		const newTodos = [...todos, { input }]; //spread operator copies the list of todos, and add a new todo with the input passed in, then assigning to new variable newTodos
		setTodos(newTodos); //setting the todos with the new variable above
	};
	return (
		<div className="App">
			<div className="todo-list">
				<h1>My Todo List:</h1>
				<TodoForm addTodo={addTodo} />
				<h3>
					{todos.map((todo, index) => (
						<Todo key={index} index={index} todo={todo} />
					))}
				</h3>
			</div>
		</div>
	); //TodoForm component passes in a todo item using addTodo function .map creates a new array and displays in the h3 element.
}

export default App;
