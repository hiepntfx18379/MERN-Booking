import transModel from "../models/transactions.model.js";
import userModel from "../models/user.model.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (err) {
    next(err);
  }
};

export const findUser = async (req, res, next) => {
  try {
    const User = await userModel.findById(req.params.id);
    res.status(200).json(User);
  } catch (err) {
    next(err);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const User = await userModel.find();
    res.status(200).json(User);
  } catch (err) {
    next(err);
  }
};

export const createTransaction = async (req, res, next) => {
  try {
    const {
      user,
      username,
      hotel,
      hotelname,
      roomInfo,
      room,
      dateStart,
      dateEnd,
      price,
      payment,
    } = req.body;
    if (room.length === 0 || !payment)
      res.status(400).json({
        success: false,
        message: "Missing number of rooms or payment methods",
      });

    const newTrans = new transModel({
      user,
      username,
      hotel,
      hotelname,
      roomInfo,
      room,
      dateStart,
      dateEnd,
      price,
      payment,
    });

    await newTrans.save();

    res.json({
      success: true,
      message: "transaction created",
      newTrans,
    });
  } catch (err) {
    next(err);
  }
};

export const getTransaction = async (req, res, next) => {
  try {
    const idUser = req.params;
    const userTransaction = await transModel
      .find({
        user: idUser.id,
      })
      .sort({ status: 1 });

    res.json({
      success: true,
      message: "transaction get",
      userTransaction,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllTransactions = async (req, res, next) => {
  try {
    const getTrans = await transModel.find().sort({ status: 1 });
    res.status(200).json(getTrans);
  } catch (err) {
    next(err);
  }
};

export const findTransaction = async (req, res, next) => {
  try {
    const idHotel = req.params;
    const hotelTransaction = await transModel.find({
      hotel: idHotel.id,
    });

    res.json({
      success: true,
      message: "You can't delete ",
      hotelTransaction,
    });
  } catch (err) {
    next(err);
  }
};
