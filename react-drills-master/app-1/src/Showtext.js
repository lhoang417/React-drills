import React, { useState } from "react"; //import react from react

function Showtext() {
	//function called Showtext
	const [text, setText] = useState(""); // useState controls the value of the input element, text is used to store the the value, and setText is used to set the value when a change occurs. In the () we're passing an empty string to initialize the state.
	return (
		<div className="App">
			<input onChange={(event) => setText(event.target.value)} />
			<p>{text}</p>
		</div> // using onChange event handler and adding anonymous function with event parameter, and using setText to set the value of whatever is entered from the event
		//<p> tag is showing the text that being set with onChange listener
	);
}
export default Showtext; //exporting Showtext
