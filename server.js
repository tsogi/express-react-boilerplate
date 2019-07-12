const express = require("express");
const Sequelize = require('sequelize');
const initRoutes = require("./routes");

const sequelize = new Sequelize('evaluator', 'root', 'nikoloz93', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully...');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

const port = 3004;

initRoutes(app);

app.listen(port, () => console.log(`Evaluator launched and listening on port ${port}`));