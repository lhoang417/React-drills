import React, { useState } from "react";

function DataArrayFilter() {
	//function called DataArray
	const array = [
		"Aragorn",
		"Legolas",
		"Gimli",
		"Gandalf",
		"Frodo",
		"Sam",
		"Merry",
		"Pippin",
	]; //array of strings
	const [text, setText] = useState(""); // useState controls the value of the input element, text is used to store the the value, and setText is used to set the value when a change occurs. In the () we're passing an empty string to initialize the state.

	const arrayItems = array
		.filter((value) => {
			return value.toLowerCase().includes(text.toLowerCase());
		})
		.map((item, index) => <h2 key={index}>{item}</h2>); // using .map to separate each item of the array and assigning to the value of an h2 element. .map takes in each item of the array, along with optional index as the second parameter.
	function handleChange(input) {
		setText(input);
	} //function called handleChange that sets the input passed in to the text variable above
	return (
		<div>
			<input onChange={(event) => handleChange(event.target.value)} />
			{arrayItems}
		</div> //created input element to be able to filter from the array, and using onChange event with the handleChange function above
	); //returning the variable above within a div element
}

export default DataArrayFilter;
