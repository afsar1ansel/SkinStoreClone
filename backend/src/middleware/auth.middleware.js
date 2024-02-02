const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  const { authToken, refreshToken } = req.cookies;

  console.log(authToken, refreshToken);

  try {
    if (authToken) {
      const decodedAuthToken = await jwt.verify(
        authToken,
        process.env.AUTH_TOKEN
      );
      if (decodedAuthToken) {
        console.log(decodedAuthToken);
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
