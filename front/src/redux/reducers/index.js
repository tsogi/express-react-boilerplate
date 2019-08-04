import { combineReducers } from 'redux';
import language from "redux/reducers/language";
import user from "redux/reducers/user";

export default combineReducers({
	language,
	user
})