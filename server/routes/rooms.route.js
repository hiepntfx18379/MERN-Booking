import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  findRoom,
  getAllRoom,
} from "../controllers/room.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const roomRoute = express.Router();

/**
 * Private
 * POST create
 */
roomRoute.post("/create/:hotelId", verifyAdmin, createRoom);

/**
 * Private
 * PUT update
 */
roomRoute.put("/update/:id", verifyAdmin, updateRoom);

/**
 * Private
 * POST delete
 */
roomRoute.delete("/delete/:id/:hotelId", verifyAdmin, deleteRoom);

/**
 * Public
 * GET find Room
 */
roomRoute.get("/:id", findRoom);

/**
 * Public
 * GET get all
 */
roomRoute.get("/", getAllRoom);

export default roomRoute;
