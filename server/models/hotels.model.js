import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const hotelsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    typeHotel: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    photos: {
      type: [String],
    },
    desc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rooms: {
      type: [String],
    },
    cheapestPrice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const hotelsModel = mongoose.model("Hotels", hotelsSchema);
export default hotelsModel;
