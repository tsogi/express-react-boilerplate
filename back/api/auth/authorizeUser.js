const jwt = require('jsonwebtoken');
const models = require(process.env.PWD + "/database/models");

module.exports = (req, res, next) => {
	jwt.verify(req.headers.token, process.env.JWT_PRIVATE_KEY, function(err, decoded) {
	  if(err) { // If user is not logged in
	  	res.status(401);
	  	res.send("Authorisation error: " + err);
	  } else {
	  	models.User.findOne({ where: { email: decoded.email} }).then((User) => {
	  		req.User = User;
	  		next();
	  	});
	  }
	});
}