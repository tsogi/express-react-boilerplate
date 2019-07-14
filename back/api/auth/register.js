const models = require(process.env.PWD + "/database/models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
	(!req.body.email || !req.body.password) ? res.send({ success: false, msg: "Email and Password should be provided" }) : null;

	bcrypt.hash(req.body.password, 10, function(err, hash) {
		req.body.password = hash;
		let users = models.User.create(req.body).then((User) => {
			jwt.sign({ email: req.body.email }, process.env.JWT_PRIVATE_KEY, { algorithm: 'HS256' }, function(err, token) {
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
}