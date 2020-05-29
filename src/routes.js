const express = require('express');
const controllers = require('./controllers');

const routes = express.Router();

// Users
routes.get('/users', controllers.User.index);

module.exports = routes;
