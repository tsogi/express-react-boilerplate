const express = require("express");
require('dotenv').config(); // Loads .env variables as process.env.var_name
const initRoutes = require(process.env.PWD + "/routes");
var bodyParser = require('body-parser');
var models = require("./database/models/index.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true })) // for parsing POST data, application/x-www-form-urlencoded

initRoutes(app);

models.User.findOne({ where: { email: "tsogiaidze@yahoo.com" } }).then(user => {console.log("user is: " + user.email);})

app.listen(process.env.EXPRESS_PORT, () => console.log(`Server started. Listening on port ${process.env.EXPRESS_PORT}`));