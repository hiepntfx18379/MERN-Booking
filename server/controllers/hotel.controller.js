import hotelsModel from "../models/hotels.model.js";

export const createHotel = async (req, res, next) => {
  try {
    console.log("create");
    const infoHotel = req.body;
    const newHotel = new hotelsModel(infoHotel);
    await newHotel.save();
    console.log("create ok");
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    console.log("update");
    const updatedHotel = await hotelsModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
    console.log("update ok");
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    console.log("delete");
    const deletedHotel = await hotelsModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedHotel);
    console.log("delete ok");
  } catch (err) {
    next(err);
  }
};

export const findHotel = async (req, res, next) => {
  try {
    console.log("find");
    const hotel = await hotelsModel.findById(req.params.id);
    res.status(200).json(hotel);
    console.log("find ok");
  } catch (err) {
    next(err);
  }
};

export const getAllHotel = async (req, res, next) => {
  try {
    console.log("get all");
    const hotel = await hotelsModel.find();
    res.status(200).json(hotel);
    console.log("get all ok");
  } catch (err) {
    next(err);
  }
};
