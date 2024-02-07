const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  const { authToken, refreshToken } = req.cookies;
  // console.log("auth",req.cookies);
  
  try {
    if (authToken) {
      const decodedAuthToken = await jwt.verify(
        authToken,
        process.env.AUTH_TOKEN
      );
      if (decodedAuthToken) {
        console.log("decodedAuthToken" + decodedAuthToken.userID);
        req.body.user_id = decodedAuthToken.userID;
        return next();
      }
    }

    if (refreshToken) {
      const decodedRefreshToken = await jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN
      );
      if (decodedRefreshToken) {
        const newAuthToken = jwt.sign(
          { userID: decodedRefreshToken.userID },
          process.env.AUTH_TOKEN,
          { expiresIn: "1h" }
        );

        res.cookie("authToken", newAuthToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60,
          sameSite: "none",
          // secure:true,
        });

        console.log("New authToken created:", newAuthToken);
        return next();
      }
    } else {
      return res.status(401).send("Please login again");
    }
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).send("Please login again");
  }
};

module.exports = { auth };
