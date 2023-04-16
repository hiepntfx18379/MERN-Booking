import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  findUser,
} from "../controllers/user.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const userRoute = express.Router();

userRoute.put("/update/:id", verifyUser, updateUser);
userRoute.delete("delete/:id", verifyUser, deleteUser);
userRoute.get("/:id", verifyUser, findUser);
userRoute.get("/", verifyAdmin, getAllUser);

export default userRoute;
