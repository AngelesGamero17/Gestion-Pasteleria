import jwt from "jsonwebtoken";
import { tokenVerificationErrors } from "../utils/tokenManager.js";
import config from "../config.js";

export const requireRefreshToken = async (req, res, next) => {
  try {
    let refreshTokenCookie = req.cookies.refreshToken;
    if (!refreshTokenCookie) throw new Error("Token not found");
    const { ID } = jwt.verify(refreshTokenCookie, config.JWT_REFRESH);
    req.empleado = ID;
    next();
  } catch (error) {
    const message = tokenVerificationErrors[error.message] || error.message;
    res.status(401).json({ message });
  }
};


