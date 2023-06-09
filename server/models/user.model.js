import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    img: {
      type: String,
    },
    fullname: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    email: {
      type: String,
    },
    isadmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true },
);

//Export the model
const userModel = mongoose.model("User", userSchema);
export default userModel;
