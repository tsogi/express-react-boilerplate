# The project
## Aim
Aim of the project is to let developer start writing actual business logic right away as opposed to spend 2-3 days on wiring up different technologies and packages.

## File structure
Root directory contains `back` and `front` folders which respectively contain **Express.js** and **React.js** apps. These two apps are independent and could be used separately as well. 

More details about structure on the [link](https://github.com/tsogi/express-react-boilerplate/wiki/File-structure) 

## Used technologies
* `back`
  * `expressjs`
  * `sequelize`
  * `jsonwebtoken` // jwt
  
* `front`
  * `reactjs`
  * `react-redux`
  * `axios`

## Installation
* Clone or download the repository
* `cd back`
  * `npm install`
  * copy `.env.example` to `.env` and configure
  * `npx sequelize-cli db:migrate` // will create Users table
  * `npm run nodemon` // starts express js server 
* `cd front`
  * `npm install`
  * copy `.env.example` to `.env` and configure
  * `npm start` // starts react app
  
That's just it. Rest is already configured for you! Now you are good to leverage full power of awesome technologies included in the project.

## Usage
* Add route in `back/routes/index.js` e.x. `app.get("/getUser", authorizeUser, (req, res) => { res.send("Authorized User " + req.User ) });`
* Call the route from react app using axios1 e.x. `axios1.get("/getUser");`
  * You don't have to worry about authorization, jwt token will be automatically injected in axios request and checked in routes using `authorizeUser` middleware.
  * If user is authorized response will be `Authorized User { Username: "John", Email: "john@gmail.com", ... }`
  * If user is not authorized response will be `Authorisation error: User isn't authorized`

# Contribution
All kind of contributions are highly appreciated. 

For a list of features that needs to be added check out the issues section.

For detailed instructions about contribution follow the [link](https://github.com/tsogi/express-react-boilerplate/wiki/Contribution-instructions).