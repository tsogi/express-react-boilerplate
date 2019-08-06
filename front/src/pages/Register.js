import React, { useState } from "react";
import "./Register.css";
import axios from "axios1";
import { connect } from "react-redux";
const store = require('store');

const Register = ( { storeUser, user } ) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let handleRegisterClick = (email, password) => {
	axios.post("register", { email: email, password: password })
		.then((response) => {
			if(response.data && response.data.success) {
				let user = ({ email: email, token: response.data.token });
				storeUser(user);
				store.set("user", user);
				alert(response.data.msg);
			} else {
				alert("Something went wrong, contact administration:" + response.data.msg);
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
		<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
		<br />
		<button onClick={() => handleRegisterClick(email, password)}>Register</button>
	</div>)
}

const mapDispatchToProps = dispatch => ({
	storeUser: user => dispatch({type: "SET_USER", user: user})
});

const mapStateToProps = state => ({
	user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);