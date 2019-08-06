import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";
import axios from "axios1";
import { connect } from "react-redux";
const store = require("store");

const Login = ({ storeUser, history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let handleLoginClick = (email, password) => {
		axios.post("login", { email: email, password: password })
			.then((response) => {
				if(response.data && response.data.success) {
					let user = ({ email: email, token: response.data.token });
					storeUser(user);
					store.set("user", user);
					history.push("account");
				} else {
					alert("Something went wrong, contact administration:" + response.data.msg);
				}
			});
	}

	return (
			<div className="loginPage">
				<h3>Log In</h3>
				<input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
				<br />
				<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
				<br />
				<button onClick={() => handleLoginClick(email, password)}>Log In</button>
			</div>
		)
}

let mapDispatchToProps = dispatch => ({
	storeUser : (user) => dispatch({ type: "SET_USER", user: user })
})

export default connect(null, mapDispatchToProps)(withRouter(Login));