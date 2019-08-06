var store = require('store');

let user = store.get("user") && store.get("user").token ? store.get("user") : { email: undefined, token: "" };

const User = (state = user, action) => {
	switch(action.type) {
		case "SET_USER" : return action.user;
		default: return state
	}
}

export default User