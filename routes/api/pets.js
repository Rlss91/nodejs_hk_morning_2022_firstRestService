const express = require("express");
const router = express.Router();

const petsModel = require("../../model/pets");
const userModel = require("../../model/users");
const petsSchema = require("../../validation/pets");

// router.get("/:param1", async (req, res) => {
//   console.log("body", req.body); //post, put, patch
//   console.log("query params", req.query); //get
//   console.log("params", req.params); //
// });

router.get("/", async (req, res) => {
  try {
    const userData = await userModel.selectUserByEmail(req.jwtData.email);
    const petsData = await petsModel.selectAllPetsByOwner(userData._id);
    console.log(petsData);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    //!validation joi
    // console.log("req.jwtData", req.jwtData);
    const value = await petsSchema.createPetSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    const userData = await userModel.selectUserByEmail(req.jwtData.email);
    console.log("userData", userData);

    const petsdata = await petsModel.createPets(
      value.color,
      value.type,
      value.name,
      userData[0]._id
    );
    console.log("petsdata", petsdata);
    res.json({ status: "ok", msg: "created" });
  } catch (err) {
    console.log("err from pets", err);
    res.status(400).json(err);
  }
});

module.exports = router;