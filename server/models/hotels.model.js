import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const hotelsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Hotel", "Apartments", "Resorts", "Villas", "Cabins"],
      default: "Hotel",
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
    description: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      min: 1,
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
  },
);

//Export the model
const hotelsModel = mongoose.model("Hotels", hotelsSchema);
export default hotelsModel;
