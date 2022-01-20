const express = require("express");

const authMiddleware = require("../../middleware/auth");

const authRouter = require("./auth");
const userRouter = require("./user");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", authMiddleware, userRouter);

module.exports = router;

/*

{
    "status": "ok",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwiaWF0IjoxNjQyNjgxNTUzLCJleHAiOjE2NDM1NDU1NTN9.9BsTA7ICqxEt4TbxwuOQKsF0VQZho_rBFxUNfphRsIA"
}

*/
