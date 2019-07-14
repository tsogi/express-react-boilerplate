const jwt = require('jsonwebtoken');
const models = require("../../database/models");

const privateKey = "secretAndPrivate";

module.exports = (req, res, next) => {
	jwt.verify(req.body.token, privateKey, function(err, decoded) {
	  if(err) {
	  	res.send("Authorisation error: " + err);
	  } else {
	  	models.User.findOne({ email: decoded.email }).then((User) => {
	  		req.User = User;
	  		next();
	  	});
	  }
	});
}