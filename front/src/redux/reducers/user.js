var store = require('store');

store.set("user", { email: undefined, token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRzb2dpYWlkemU4QHlhaG9vLmNvbSIsImlhdCI6MTU2NDk0ODIzOH0.n-rxuHp-rjWov9JzlIdoS8CArPzI6On57hCdbdCay5E" });
let user = store.get("user") && store.get("user").token ? store.get("user") : { email: undefined, token: "" };

const User = (state = user, action) => {
	switch(action.type) {
		case "SET_USER" : return action.user;
		default: return state
	}
}

export default User