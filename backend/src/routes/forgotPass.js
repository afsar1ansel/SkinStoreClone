const express = require("express");
const forgotRouter = express.Router();
const User = require("../models/userModle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { auth } = require("../middleware/auth.middleware");
const nodemailer = require("nodemailer");
require("dotenv").config();
let usermail = {}
let otp="";

forgotRouter.post("/forgot", async (req, res) => {
 const { email } = req.body;
 const user = await User.findOne({ email });
 usermail.mail = email
 if (!user) {
   res.status(400).send("User not found");
 }
 else{
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_MAIL,
      pass: process.env.MY_PASS,
    }
  })

   otp = Math.ceil(Math.random() * 1000000);

  const mailOptions = {
    from: process.env.MY_MAIL,
    to: email,
    subject: "Password Reset",
    text: `Your OTP is ${otp}`,
  }

  try {
    await transporter.sendMail(mailOptions);
    res.send({msg:"OTP sent successfully"});
  } catch (error) {
    res.send({ msg: error.message });
  }
 }

})




forgotRouter.patch("/reset", async (req, res) => {
  const { userotp, password } = req.body; 
  console.log(otp, userotp);

  try {
    if (otp == userotp) {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
          return res
            .status(500)
            .json({ error: true, msg: "Something went wrong with hashing" });
        }

        try {
          const updatedUser = await User.updateOne(
            { email: usermail.mail },
            { $set: { password: hash } } 
          );

          console.log("Password updated successfully");
          return res.status(200).json({ msg: "Password changed successfully" });
        } catch (updateErr) {
          console.error("Error updating password:", updateErr);
          return res
            .status(500)
            .json({ error: true, msg: "Failed to update password" });
        }
      });
    } else {
      // Invalid OTP
      return res.status(400).json({ error: true, msg: "Invalid OTP" });
    }
  } catch (error) {
    // Generic error handling
    console.error("An error occurred:", error);
    return res
      .status(500)
      .json({ error: true, msg: "An unexpected error occurred" });
  }
});



module.exports = forgotRouter