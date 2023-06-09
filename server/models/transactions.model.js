import mongoose, { Schema } from "mongoose";

// Declare the Schema of the Mongo model
var transactionSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
  username: {
    type: String,
    required: true,
  },
  hotel: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "Hotels",
  },
  hotelname: {
    type: String,
    require: true,
  },
  room: {
    type: [String],
    required: true,
  },
  dateStart: {
    type: Date,
    required: true,
  },
  dateEnd: {
    type: Date,
    required: true,
  },
  price: {
    type: String,
  },
  payment: {
    type: String,
    require: true,
    enum: ["credit", "cash"],
  },
  status: {
    type: String,
    require: true,
    enum: ["Booked", "Checkin", "Checkout"],
    default: "Booked",
  },
});

//Export the model
const transModel = mongoose.model("Transaction", transactionSchema);
export default transModel;
