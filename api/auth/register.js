const models = require("../../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (req, res) => {
	(!req.body.email || !req.body.password) ? res.send({ success: false, msg: "Email and Password should be provided" }) : null;

	bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
		req.body.password = hash;
		let users = models.User.create(req.body).then((User) => {
			console.log("validated user" + User);
			res.send({ success: true, msg: "User created successfully" });
		}).catch((err) => {
			res.send({ success: false, msg: "" + err });
		});
	});
}