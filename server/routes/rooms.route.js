import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  findRoom,
  getAllRoom,
  availableRoom,
} from "../controllers/room.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const roomRoute = express.Router();

roomRoute.post("/create/:hotelId", verifyAdmin, createRoom);

roomRoute.put("/update/:id", verifyAdmin, updateRoom);

roomRoute.delete("/delete/:id", verifyAdmin, deleteRoom);

roomRoute.get("/find/:id", findRoom);

roomRoute.put("/availableRoom/:id", availableRoom);

roomRoute.get("/", getAllRoom);

export default roomRoute;
