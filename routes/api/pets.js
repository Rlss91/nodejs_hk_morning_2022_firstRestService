const express = require("express");
const router = express.Router();

const petsModel = require("../../model/pets");
const userModel = require("../../model/users");
const petsSchema = require("../../validation/pets");

router.post("/", async (req, res) => {
  try {
    //!validation joi
    const value = await petsSchema.createPetSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    const userData = await userModel.selectUserByEmail("1@gmail.com");
    console.log("userData", userData);

    // const petsdata = await petsModel.createPets(
    //   value.color,
    //   value.type,
    //   value.name,
    //   value.owner
    // );
    res.json({ status: "ok", msg: "created" });
  } catch (err) {
    console.log("err from pets", err);
    res.status(400).json(err);
  }
});

module.exports = router;
