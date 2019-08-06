import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Router.css";
import Index from "pages/Index.js";
import Account from "pages/Account.js";
import Language from "pages/Language.js";
import Login from "pages/Login.js";
import Register from "pages/Register";

export default function(){
	return <Router>
		<Route path="/" exact component={Index} />
		<Route path="/account" component={Account} />
		<Route path="/language" component={Language} />
		<Route path="/login" component={Login} />
		<Route path="/register" component={Register} />
	</Router>
}