const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  roomNumbers: {
    type: Number,
    required: true,
  },
});

//Export the model
const roomModel = mongoose.model("Room", userSchema);
module.exports = roomModel;
