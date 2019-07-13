const register = require("../api/auth/register");
const login = require("../api/auth/login");
const authorizeUser = require("../api/auth/authorizeUser");

module.exports = (app) => {
	app.get("/", (req, res) => res.send("Hello, world3"));
	app.post("/register", register);
	app.post("/login", login);
	app.get("/home", authorizeUser, (req, res) => { res.send("Authorized User Email " + req.User.email ) });
}