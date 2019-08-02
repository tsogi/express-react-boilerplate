import React from "react";
import Router from "Router";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from "redux/reducers";
import "./App.css";

const store = createStore(rootReducer);

export default function(){
	return <Provider store={store}>
		<div className="routes-wrapper">
			<Router />
		</div>
	</Provider>
}