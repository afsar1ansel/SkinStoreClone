const express = require("express");
const registerRouter = express.Router();
const User = require("../models/userModle");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();

let userDetail = {};
let otp = "";

registerRouter.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  const isuser = await User.findOne({ email });
  if(isuser){
    res.send("User already exists")
  }
  
  userDetail = { email, password, name };
  otp = Math.floor(1000 + Math.random() * 9000);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_MAIL,
      pass: process.env.MY_PASS,
    },
  });

  const mailOptions = {
    from: "mdafsaransal@gmail",
    to: userDetail.email, 
    subject: "Email verification",
    text: `Your otp is ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Check your email for otp");
  } catch (error) {
    res.send({ msg: error.message });
  }
});

registerRouter.post("/verify", async (req, res) => {
  const { userOtp } = req.body;

  if (userOtp == otp) {
    try {
      bcrypt.hash(userDetail.password, 5, async (err, hash) => {
        if (err) {
          res.send("Something went wrong with hashing" + err);
        } else {
          const user = new User({
            name: userDetail.name,
            email: userDetail.email,
            password: hash,
          });
          await user.save();
          res.send("User registered successfully");
        }
      });
    } catch (error) {
      res.send({ msg: error.message });
    }
  } else {
    res.send("Otp verification failed");
  }
});

module.exports = registerRouter;
