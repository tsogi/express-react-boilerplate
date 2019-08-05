const express = require("express");
require('dotenv').config(); // Loads .env variables as process.env.var_name
const initRoutes = require(process.env.PWD + "/routes");
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

app.use(cors()); // This allows cors requests

app.use(bodyParser.urlencoded({ extended: true })) // for parsing POST data, application/x-www-form-urlencodedd
app.use(bodyParser.json());

initRoutes(app); // Loads routes

app.listen(process.env.EXPRESS_PORT, () => console.log(`Server started. Listening on port ${process.env.EXPRESS_PORT}`));