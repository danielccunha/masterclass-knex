const { celebrate } = require('celebrate');

const UserValidator = require('./UserValidator');

exports.User = {
  create: celebrate(UserValidator),
};
