const { Joi, Segments } = require('celebrate');

module.exports = {
  [Segments.BODY]: Joi.object()
    .keys({
      username: Joi.string().required(),
    })
    .unknown(),
};
