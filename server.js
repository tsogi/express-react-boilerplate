const express = require("express");
const Sequelize = require('sequelize');

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

app.get("/", (req, res) => res.send("Hello, world2"));

app.listen(port, () => console.log(`Evaluator launched and listening on port ${port}`));