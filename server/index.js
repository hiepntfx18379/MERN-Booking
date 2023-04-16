import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routers from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.URI;

// middleware
app.use(bodyParser.json({ limit: "30mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "30mb",
  })
);
app.use(express.json());
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong!!";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack, // i can send whatever i want because no certain rule
  });
});

// route init
routers(app);

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect to db");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
