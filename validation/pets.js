const Joi = require("joi");

const newPetObj = {
  color: Joi.string(),
  type: Joi.string(),
  name: Joi.string().required(),
};

const createPetSchema = Joi.object(newPetObj);

module.exports = {
  createPetSchema,
};
