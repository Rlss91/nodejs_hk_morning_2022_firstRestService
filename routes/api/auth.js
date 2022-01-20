const express = require("express");
const bcrypt = require("../../config/bcrypt");
const UserSchema = require("../../validation/users");
const UserModel = require("../../model/users");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const value = await UserSchema.schema.validateAsync(req.body, {
      abortEarly: false,
    });
    value.password = await bcrypt.createHash(value.password);
    const userData = await UserModel.selectUserByEmail(value.email);
    if (userData.length != 0) {
      throw "email already exists";
    } else {
      await UserModel.insertUser(value.name, value.email, value.password);
      res.json({ status: "ok", msg: "user created" });
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
  } catch (err) {}
});

module.exports = router;
