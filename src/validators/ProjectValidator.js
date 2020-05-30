const { Joi, Segments } = require('celebrate');

exports.index = {
  [Segments.QUERY]: Joi.object().keys({
    userId: Joi.number().min(1),
    page: Joi.number().min(0).default(0),
  }),
};

exports.create = {
  [Segments.BODY]: Joi.object().keys({
    userId: Joi.number().min(1).required(),
    title: Joi.string().required(),
  }),
};
