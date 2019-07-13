const register = require("../api/auth/register");

module.exports = (app) => {
	app.get("/", (req, res) => res.send("Hello, world3"));
	app.post("/register", register);
}