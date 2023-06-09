import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  findUser,
  createTransaction,
  getTransaction,
  getAllTransactions,
} from "../controllers/user.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const userRoute = express.Router({ mergeParams: true });

userRoute.put("/update/:id", verifyUser, updateUser);
userRoute.delete("/delete/:id", verifyUser, deleteUser);
userRoute.get("/find/:id", verifyUser, findUser);
userRoute.post("/transaction", verifyUser, createTransaction);
userRoute.get("/transaction/:id", getTransaction);
userRoute.get("/all/transactions", verifyAdmin, getAllTransactions);
userRoute.get("/", verifyAdmin, getAllUser);

export default userRoute;
