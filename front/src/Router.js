import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Router.css";
import Index from "pages/Index.js";
import Contact from "pages/Contact.js";

export default function(){
	return <Router>
		<Route path="/" exact component={Index} />
		<Route path="/contact" component={Contact} />
	</Router>
}