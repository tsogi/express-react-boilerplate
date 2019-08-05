import React, { useState } from "react";
import "./Register.css";
import axios from "axios1";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let handleRegisterClick = (email, password) => {
		axios.post("register", { email: email, password: password })
			.then((response) => {
				if(response.data && response.data.msg) {
					alert(response.data.msg);
				} else {
					alert("Something went wrong, contact administration:");
				}
			})
			.catch((error) => {
				alert(error);
			})
	}

	return (<div className="registerPage">
		<h3>Registration</h3>
		<input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
		<br />
		<input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
		<br />
		<button onClick={() => handleRegisterClick(email, password)}>Register</button>
	</div>)
}

export default Register;