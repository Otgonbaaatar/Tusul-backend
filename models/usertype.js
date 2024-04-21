// Import mongoose
const mongoose = require("mongoose");

const usertypeSchema = new mongoose.Schema({
  typename: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Blog model
const usertype = mongoose.model("usertype", usertypeSchema);

// Export the model
module.exports = usertype;
