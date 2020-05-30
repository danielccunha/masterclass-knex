const { celebrate } = require('celebrate');

const UserValidator = require('./UserValidator');

exports.User = {
  show: celebrate(UserValidator.show),
  create: celebrate(UserValidator.create),
  update: celebrate(UserValidator.update),
  delete: celebrate(UserValidator.delete),
};
