const jwt = require('jsonwebtoken');
const models = require(process.env.PWD + "/database/models");

module.exports = (req, res, next) => {
	console.log("middle2", req.query.token);
	jwt.verify(req.body.token, process.env.JWT_PRIVATE_KEY, function(err, decoded) {
	  if(err) { // If user is not logged in
	  	res.send("Authorisation error: " + err);
	  } else {
	  	models.User.findOne({ email: decoded.email }).then((User) => {
	  		req.User = User;
	  		next();
	  	});
	  }
	});
}