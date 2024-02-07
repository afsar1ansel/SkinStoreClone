const express = require("express");
const loginRouter = express.Router();
const User = require("../models/userModle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {auth} = require("../middleware/auth.middleware");
require("dotenv").config();

// login
loginRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.send(err);
        }
        if (result) {
          const authToken = jwt.sign(
            { userID: user._id },
            process.env.AUTH_TOKEN,
            {
              expiresIn: "1h",
            }
          );
         
          const refreshToken = jwt.sign(
            { userID: user._id },
            process.env.REFRESH_TOKEN,
            {
              expiresIn: "1d",
            }
          );

          res.cookie("authToken", authToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60,
            sameSite: "none",
            // secure: true,
          })
          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24,
            sameSite: "none",
            // secure: true,
          })

          res.send({mgs:"Login Successful", userDetail:user, authToken:authToken,refreshToken:refreshToken});

        } else {
          res.status(400).send("Wrong password");
        }
      });
    } else {
      res.status(400).send("User not found");
    }
  } catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = loginRouter;
