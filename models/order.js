// Import mongoose
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  address: String,
  phone: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Blog model
const order = mongoose.model("order", orderSchema);

// Export the model
module.exports = order;
