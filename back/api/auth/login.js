const models = require("../../database/models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
	if(!req.body.email || !req.body.password) {
	 res.send({ success: false, msg: "Email and Password should be provided" });
	 return;
	}

	models.User.findOne({ where: { email: req.body.email} }).then((User) => {
		if(User) {
			// Load hash from your password DB.
			bcrypt.compare(req.body.password, User.password, function(err, bcryptedPass) {
				if(bcryptedPass) {
					jwt.sign({ email: req.body.email }, process.env.JWT_PRIVATE_KEY, { algorithm: 'HS256' }, function(err, token) {
						if(err) {
							res.send({ success: false, msg: "jwt error" + err });
						} else {
							res.send({ success: true, msg: "Login successfull", token: token });
						}
					});
				} else {
					res.send({ success: false, msg: "Login error " + err });
				}
			});
		}
	});
}