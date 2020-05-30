const express = require('express');
const controllers = require('./controllers');
const validators = require('./validators');

const routes = express.Router();

// Users
routes.get('/users', controllers.User.index);
routes.get('/users/:id', validators.User.show, controllers.User.show);
routes.post('/users', validators.User.create, controllers.User.create);
routes.put('/users/:id', validators.User.update, controllers.User.update);
routes.delete('/users/:id', validators.User.delete, controllers.User.delete);

// Projects
routes.get('/projects', validators.Project.index, controllers.Project.index);
routes.post('/projects', validators.Project.create, controllers.Project.create);

module.exports = routes;
