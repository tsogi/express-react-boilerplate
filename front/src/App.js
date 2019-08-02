import React from "react";
import Router from "Router";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import "./App.css";

export default function(){
	return <div className="routes-wrapper">
		<Router />
	</div>
}