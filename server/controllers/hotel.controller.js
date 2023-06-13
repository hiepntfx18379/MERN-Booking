import hotelsModel from "../models/hotels.model.js";
import roomModel from "../models/room.model.js";

export const createHotel = async (req, res, next) => {
  try {
    const infoHotel = req.body;

    const newHotel = new hotelsModel(infoHotel);
    await newHotel.save();

    res.status(200).json(newHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await hotelsModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await hotelsModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedHotel);
  } catch (err) {
    next(err);
  }
};

export const findHotel = async (req, res, next) => {
  try {
    const hotel = await hotelsModel.findById(req.params.id);

    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await hotelsModel.find();

    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const getAllHotelSearch = async (req, res, next) => {
  try {
    const { min, max, rooms, city, ...other } = req.query;

    await hotelsModel.createIndexes({ city: "text" });
    let hotel = await hotelsModel.find({
      ...other,
      $text: { $search: `${req.query.city}` },
      cheapestPrice: { $gt: min || 1, $lt: max || 999 },
      $expr: { $gt: [{ $size: "$rooms" }, Number(`${req.query.rooms}`)] },
    });
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getAllHotelsAdmin = async (req, res, next) => {
  try {
    const hotel = await hotelsModel.find();
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

// pass querystring to link api
export const countByCity = async (req, res, next) => {
  const queryCity = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      queryCity.map((city) => {
        return hotelsModel.countDocuments({ city: city });
      }),
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await hotelsModel.countDocuments({ type: "hotel" });
    const apartmentCount = await hotelsModel.countDocuments({
      type: "apartment",
    });
    const resortCount = await hotelsModel.countDocuments({ type: "resort" });
    const villasCount = await hotelsModel.countDocuments({ type: "villas" });
    const cabinsCount = await hotelsModel.countDocuments({ type: "cabins" });
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villas", count: villasCount },
      { type: "cabins", count: cabinsCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getRoomsOfHotel = async (req, res, next) => {
  try {
    const hotel = await hotelsModel.findById(req.params.id);
    const listRoom = await Promise.all(
      hotel.rooms.map((rId) => roomModel.findById(rId)),
    );

    res.status(200).json(listRoom);
  } catch (err) {
    next(err);
  }
};
