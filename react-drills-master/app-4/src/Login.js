import React, { useState } from "react";

function Login() {
	//function called Login
	const [user, setUser] = useState(""); //variable using useState to control the value of the input element and setting it as user
	const [password, setPassword] = useState(""); //variable using useState to control the value of the input element and setting it as password
	function handleSubmit() {
		//function to handle what happens when click the input button below
		alert(`username: ${user} password: ${password}`); //alert a message that displays username and password passing in what the user types
	}
	return (
		<div>
			<form>
				<input onChange={(event) => setUser(event.target.value)} type="text" />
				<input
					onChange={(event) => setPassword(event.target.value)}
					type="text"
				/>
				<input
					onClick={(e) => {
						handleSubmit(e.target.value);
					}}
					type="submit"
					value="Login"
				/>
			</form>
		</div> //created a form with three inputs, one for user, one for password, and one to submit
	);
}

export default Login;
