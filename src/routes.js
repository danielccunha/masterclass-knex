const express = require('express');
const controllers = require('./controllers');
const validators = require('./validators');

const routes = express.Router();

// Users
routes.get('/users', controllers.User.index);
routes.post('/users', validators.User.create, controllers.User.create);

module.exports = routes;
