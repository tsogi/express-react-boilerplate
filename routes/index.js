const register = require("../api/auth/register");
const authorizeUser = require("../api/auth/authorizeUser");

module.exports = (app) => {
	app.get("/", (req, res) => res.send("Hello, world3"));
	app.post("/register", register);
	app.get("/home", authorizeUser, (req, res) => { res.send("Authorized User") });
}