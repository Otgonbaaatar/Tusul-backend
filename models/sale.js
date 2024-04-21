// Import mongoose
const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  name: String,
  perfumeid: {
    type: mongoose.Types.ObjectId,
    ref: "perfume",
  },
  start: Date,
  end: Date,
  percent: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Blog model
const sale = mongoose.model("sale", saleSchema);

// Export the model
module.exports = sale;
