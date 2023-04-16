import userModel from "../models/user.model.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const { username, password, fullName, phoneNumber, email } = req.body;

  if (!username || !password)
    return res.status(400).json({
      success: false,
      message: "Missing name or password",
    });

  try {
    //check for existing user
    const user = await userModel.findOne({ username });
    if (user)
      return res.status(400).json({
        success: false,
        message: "Username has already existing",
      });

    // all good
    // crypt password
    const hashedPassword = await argon2.hash(password);
    const newUser = new userModel({
      username,
      password: hashedPassword,
      fullName,
      phoneNumber,
      email,
    });

    await newUser.save();

    //after register => take a token for user
    const accessToken = jwt.sign(
      { id: newUser._id },
      process.env.ACCESS_TOKEN_SECRERT
    );

    res.json({
      success: true,
      message: "User created",
      accessToken,
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // simple validation
    if (!username || !password)
      return res.status(400).json({
        success: false,
        message: "Missing name or password",
      });

    const user = await userModel.findOne({ username });
    if (!user)
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password1",
      });

    // compare password
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password2",
      });

    const { ...otherDetail } = user._doc;

    // return token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.ACCESS_TOKEN_SECRERT
    );

    res
      .cookie("access_token", accessToken, {
        httpOnly: true,
      })
      .status(200)
      .json({
        ...otherDetail,
      });
  } catch (err) {
    next(err);
  }
};
