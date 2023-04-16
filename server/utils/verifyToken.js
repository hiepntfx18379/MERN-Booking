import jwt from "jsonwebtoken";
import { catchError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(catchError(401, "You are not authenticated"));
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRERT, (err, user) => {
    if (err) return next(catchError(403, "Token is valid"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(catchError(403, "Youu are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(catchError(403, "Youu are not authorized"));
    }
  });
};
