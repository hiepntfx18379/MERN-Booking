import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  findHotel,
  getAllHotel,
  countByCity,
  countByType,
} from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const hotelsRoute = express.Router();

/**
 * Private
 * POST create
 */
hotelsRoute.post("/create", verifyAdmin, createHotel);

/**
 * Private
 * PUT update
 */
hotelsRoute.put("/update/:id", verifyAdmin, updateHotel);

/**
 * Private
 * POST delete
 */
hotelsRoute.delete("/delete/:id", verifyAdmin, deleteHotel);

/**
 * Public
 * GET find hotel
 */
hotelsRoute.get("/find/:id", findHotel);

/**
 * Public
 * GET get all
 */
hotelsRoute.get("/countByCity", countByCity);
hotelsRoute.get("/countByType", countByType);
hotelsRoute.get("/", getAllHotel);

export default hotelsRoute;
