import express from "express";

const roomsRoute = express.Router();

roomsRoute.use("/", (req, res) => {
  res.send("room");
});

export default roomsRoute;
