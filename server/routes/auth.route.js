import express from "express";

const authRoute = express.Router();

authRoute.use("/", (req, res) => {
  res.send("auth");
});

export default authRoute;
