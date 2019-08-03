import axios from "axios";

const axios1 = axios.create({
	baseURL: process.env.REACT_APP_API_URL + "/",
	headers: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRzb2dpYWlkemU3QGdtYWlsLmNvbSIsImlhdCI6MTU2NDg2Nzg2MH0.UKflXpJX_DsoNxcGFqDyecnhSwX90IVClcf774bpv3Y'},
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