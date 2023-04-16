import roomModel from "../models/room.model.js";
import hotelsModel from "../models/hotels.model.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new roomModel(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      // assign room for Room
      await hotelsModel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    console.log("update");
    const updatedRoom = await roomModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
    console.log("update ok");
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await roomModel.findByIdAndDelete(req.params.id);
    try {
      await hotelsModel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has deleted");
  } catch (err) {
    next(err);
  }
};

export const findRoom = async (req, res, next) => {
  try {
    console.log("find");
    const room = await roomModel.findById(req.params.id);
    res.status(200).json(room);
    console.log("find ok");
  } catch (err) {
    next(err);
  }
};

export const getAllRoom = async (req, res, next) => {
  try {
    console.log("get all");
    const rooms = await roomModel.find();
    res.status(200).json(rooms);
    console.log("get all ok");
  } catch (err) {
    next(err);
  }
};
