const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;
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

const selectAllPetsByOwner = (idowner) => {
  //   return Pets.find({ owner: new ObjectId(idowner) });
  return Pets.find({ owner: idowner });
};

const updatePetById = (color, type, name, id) => {
  // return Pets.findByIdAndUpdate(id, { color:color, type:type, name:name, owner:owner });
  return Pets.findByIdAndUpdate(
    id,
    { color, type, name },
    { returnDocument: "after" }
  );
};

module.exports = {
  createPets,
  selectAllPetsByOwner,
  updatePetById,
};
