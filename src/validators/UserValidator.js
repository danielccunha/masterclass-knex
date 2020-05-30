const { Joi, Segments } = require('celebrate');

exports.show = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().min(1).required(),
  }),
};

exports.create = {
  [Segments.BODY]: Joi.object()
    .keys({
      username: Joi.string().required(),
    })
    .unknown(),
};

exports.update = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().min(1).required(),
  }),
  [Segments.BODY]: Joi.object()
    .keys({
      username: Joi.string().required(),
    })
    .unknown(),
};

exports.delete = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().min(1).required(),
  }),
};
