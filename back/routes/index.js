const register = require("../api/auth/register");
const login = require("../api/auth/login");
const authorizeUser = require("../api/auth/authorizeUser"); // Blocks unlogined users

module.exports = (app) => {
	app.get("/", (req, res) => res.send("Hello, world"));
	app.post("/register", register);
	app.post("/login", login);
	app.get("/user", authorizeUser, (req, res) => { res.send("Authorized User Email " + req.User.email ) });
}