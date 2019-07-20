require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DEVELOPMENT_DB_USERNAME,
    "password": process.env.DEVELOPMENT_DB_PASSWORD,
    "database": process.env.DEVELOPMENT_DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "",
    "password": "",
    "database": "",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "",
    "password": "",
    "database": "",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}