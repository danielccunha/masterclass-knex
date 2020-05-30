const { celebrate } = require('celebrate');

const UserValidator = require('./UserValidator');
const ProjectValidator = require('./ProjectValidator');

exports.User = {
  show: celebrate(UserValidator.show),
  create: celebrate(UserValidator.create),
  update: celebrate(UserValidator.update),
  delete: celebrate(UserValidator.delete),
};

exports.Project = {
  index: celebrate(ProjectValidator.index),
  create: celebrate(ProjectValidator.create),
};
