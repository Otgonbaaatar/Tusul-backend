// Import mongoose
const mongoose = require("mongoose");

const orderperfumeSchema = new mongoose.Schema({
  pieces: Number,
  perfumeid: {
    type: mongoose.Types.ObjectId,
    ref: "perfume",
  },
  orderid: {
    type: mongoose.Types.ObjectId,
    ref: "order",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Blog model
const orderperfume = mongoose.model("orderperfume", orderperfumeSchema);

// Export the model
module.exports = orderperfume;
