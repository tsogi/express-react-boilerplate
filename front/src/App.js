import React from "react";
import Router from "Router";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import store from "redux/store";
import "./App.css";

console.log(store.getState())

export default function(){
	return <Provider store={store}>
		<div className="routes-wrapper">
			<Router />
		</div>
	</Provider>
}