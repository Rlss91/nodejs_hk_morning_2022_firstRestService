const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petsSchema = new Schema({
  color: String,
  type: String,
  name: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, required: true },
});

const Pets = mongoose.model("Pets", petsSchema);

const createPets = (color, type, name, owner) => {
  const newPets = new Pets({ color, type, name, owner });
  return newPets.save();
};

module.exports = {
  createPets,
};
