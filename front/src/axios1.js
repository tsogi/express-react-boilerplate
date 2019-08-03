import axios from "axios";

const axios1 = axios.create({
	baseURL: process.env.REACT_APP_API_URL + "/",
	params: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRzb2dpYWlkemU3QGdtYWlsLmNvbSIsImlhdCI6MTU2NDg2Nzg2MH0.UKflXpJX_DsoNxcGFqDyecnhSwX90IVClcf774bpv3Y" },
});

axios.post("user")
.then((response) => {
	console.log(response.data);
})