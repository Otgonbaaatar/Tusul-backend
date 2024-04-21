// Import mongoose
const mongoose = require("mongoose");

const perfumeSchema = new mongoose.Schema({
  name: String,
  photo: String,
  gender: String,
  brand: String,
  size: String,
  pieces: String,
  price: String,
  note: String,
  skill: String,
  overview: String,
  menuid: {
    type: mongoose.Types.ObjectId,
    ref: "menu",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Blog model
const perfume = mongoose.model("perfume", perfumeSchema);

// Export the model
module.exports = perfume;
