import React from "react";

function DataArray() {
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
	const arrayItems = array.map((item) => <h2>{item}</h2>); // using .map to separate each item of the array and assigning to the value of an h2 element.
	return <div>{arrayItems}</div>; //returning the variable above within a div element
}

export default DataArray;
