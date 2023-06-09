import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  findHotel,
  getAllHotelSearch,
  countByCity,
  countByType,
  getRoomsOfHotel,
  getAllHotelsAdmin,
  getAllHotels,
} from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const hotelsRoute = express.Router();
hotelsRoute.post("/create", verifyAdmin, createHotel);
hotelsRoute.get("/getAll", getAllHotels);
hotelsRoute.put("/update/:id", verifyAdmin, updateHotel);
hotelsRoute.delete("/delete/:id", verifyAdmin, deleteHotel);
hotelsRoute.get("/find/:id", findHotel);

hotelsRoute.get("/countByCity", countByCity);
hotelsRoute.get("/countByType", countByType);
hotelsRoute.get("/allRoom/:id", getRoomsOfHotel);
hotelsRoute.get("/search", getAllHotelSearch);
hotelsRoute.get("/", getAllHotelsAdmin);

export default hotelsRoute;
