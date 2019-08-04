let defaultUser = { username: undefined, email: undefined, token: "testToken2" };

const user = (state = defaultUser, action) => {
	switch(action.type) {
		case "SET_USER" : return action.user;
		default: return state
	}
}

export default user