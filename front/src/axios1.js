import axios from "axios";
import store from "redux/store";

const axios1 = axios.create({
	baseURL: process.env.REACT_APP_API_URL + "/",
	headers: { token: store.getState().user.token },
});

axios1.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error.response.status === 401) { // Here we check if we are already on Login page to avoid infinite redirection to Login
        if(window.location.href.indexOf("/login") == -1) { window.location = "/login" }
    } else {
        return Promise.reject(error);
    }
});

export default axios1;