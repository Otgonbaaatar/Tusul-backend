// Import mongoose
const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  menuname: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Blog model
const menu = mongoose.model("menu", menuSchema);

// Export the model
module.exports = menu;
