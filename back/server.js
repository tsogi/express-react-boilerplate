const express = require("express");
const initRoutes = require("./routes");
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true })) // for parsing POST data, application/x-www-form-urlencoded

const port = 3004;

initRoutes(app);

app.listen(port, () => console.log(`Evaluator launched and listening on port ${port}`));