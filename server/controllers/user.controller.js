import userModel from "../models/user.model.js";

export const updateUser = async (req, res, next) => {
  try {
    console.log("update");
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
    console.log("update ok");
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    console.log("delete");
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
    console.log("delete ok");
  } catch (err) {
    next(err);
  }
};

export const findUser = async (req, res, next) => {
  try {
    console.log("find");
    const User = await userModel.findById(req.params.id);
    res.status(200).json(User);
    console.log("find ok");
  } catch (err) {
    next(err);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    console.log("get all");
    const User = await userModel.find();
    res.status(200).json(User);
    console.log("get all ok");
  } catch (err) {
    next(err);
  }
};
