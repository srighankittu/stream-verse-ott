import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  // eslint-disable-next-line no-undef
  const secret = process.env.JWT_SECRET;
  const decodedValue = jwt.verify(jwtToken, secret);

  if (decodedValue.username) {
    req.username = decodedValue.username;
    req.randomData = "Adsadsadsadssd";
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
}

export default userMiddleware;
