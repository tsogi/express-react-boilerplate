import React, { useState } from "react";
import "./Account.css";
import axios from "axios1";

export default function(){
	const [email, setEmail] = useState("");

	axios.get("account")
		.then((response) => {
			if(response.data && response.data.success) {
				setEmail(response.data.email);
			}
		})

	let logStatus = email ? <div>Logged in user email: {email}</div> : <div>You aren't logged in</div>
	return logStatus;
}