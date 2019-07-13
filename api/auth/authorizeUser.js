const jwt = require('jsonwebtoken');

const privateKey = "secretAndPrivate";

module.exports = (req, res, next) => {
	jwt.verify(req.body.token, privateKey, function(err, decoded) {
	  if(err) {
	  	res.send("Wrong token. Authorisation failed");
	  } else {
	  	console.log("Logged in user email", decoded.email);
	  	req.body.email = decoded.email;
	  	next();
	  }
	});
}