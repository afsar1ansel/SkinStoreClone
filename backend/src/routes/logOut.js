const express = require("express");
const logoutRouter = express.Router();

// logout
logoutRouter.post("/logout", (req, res) => {
  res.clearCookie("authToken");
  res.clearCookie("refreshToken");



  res.send("Logged out successfully");
});

module.exports = logoutRouter;
