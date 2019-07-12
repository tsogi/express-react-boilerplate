const express = require("express");
const initRoutes = require("./routes");

const app = express();

const port = 3004;

initRoutes(app);

app.listen(port, () => console.log(`Evaluator launched and listening on port ${port}`));