import React from "react";
import { connect } from 'react-redux'

const Language = ({ selectedLanguage, changeLanguage }) => {
	changeLanguage("ge");
	return (
			<div>
				Selected language is "{selectedLanguage}"
			</div>
		)
}

const mapStateToProps = (state) => ({
	selectedLanguage: state.language
});

const mapDispatchToProps = (dispatch) => ({
	changeLanguage: (language) => { return dispatch({type: "SET_LANGUAGE", language: language}) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Language)