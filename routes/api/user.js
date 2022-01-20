const express = require("express");

const UserModel = require("../../model/users");

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
  //   console.log(req.jwtData);
  try {
    const userData = await UserModel.selectUserByEmail(req.jwtData.email);
    res.json(userData);
  } catch (err) {
    res.json({ status: "error", err });
  }
});

module.exports = router;
