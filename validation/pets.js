const Joi = require("joi");

const newPetObj = {
  color: Joi.string(),
  type: Joi.string(),
  name: Joi.string().required(),
};

const deletePetObj = {
  id: Joi.string().pattern(new RegExp("^[a-f0-9]{24,24}$")).required(),
};

const updatePetObj = {
  ...newPetObj,
  ...deletePetObj,
};

const createPetSchema = Joi.object(newPetObj);
const deletePetSchema = Joi.object(deletePetObj);

module.exports = {
  createPetSchema,
  deletePetSchema,
};
