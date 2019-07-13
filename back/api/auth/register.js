const models = require("../../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const privateKey = "secretAndPrivate";
const saltRounds = 10;

module.exports = (req, res) => {
	(!req.body.email || !req.body.password) ? res.send({ success: false, msg: "Email and Password should be provided" }) : null;

	bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
		req.body.password = hash;
		let users = models.User.create(req.body).then((User) => {
			jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'HS256' }, function(err, token) {
				if(err) {
					res.send({ success: false, msg: "jwt error" + err });
				} else {
					res.send({ success: true, msg: "Registration successfull", token: token });
				}
			});
		}).catch((err) => {
			res.send({ success: false, msg: "" + err });
		});
	});
	// // Load hash from your password DB.
	// bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
	// // res == true
	// });
}