import express from "express";

const userRoute = express.Router();

userRoute.use("/", (req, res) => {
  res.send("user");
});

export default userRoute;
