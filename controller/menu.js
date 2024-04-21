const model = require("../models/menu");
const asyncHandler = require("../middleware/asyncHandler");

exports.create = asyncHandler(async (req, res) => {
  try {
    const input = {
      ...req.body,
      // photo: req.file ? req.file.filename : "no-photo.png",
    };
    const newItem = await model.create(input);
    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});
exports.update = asyncHandler(async (req, res) => {
  try {
    // Retrieve old data from the database
    const old = await model.findById(req.params.id);

    // Check if files were uploaded
    const uploadedFiles = req.file ? req.file.filename : old.file;

    // Construct input object including uploaded files or old files if no new files uploaded

    const input = {
      ...req.body,
      photo: uploadedFiles,
    };

    // Update database record
    const newItem = await model.findByIdAndUpdate(req.params.id, input, {
      new: true,
    });

    // Return response
    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

exports.findDelete = asyncHandler(async (req, res, next) => {
  try {
    const text = await model.findByIdAndDelete(req.params.id, {
      new: true,
    });
    return res.status(200).json({ success: true, data: text });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

exports.detail = asyncHandler(async (req, res, next) => {
  try {
    const text = await model.findById(req.params.id);
    return res.status(200).json({ success: true, data: text });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

exports.getAll = asyncHandler(async (req, res, next) => {
  try {
    const total = await model.countDocuments();
    const text = await model.find();
    return res.status(200).json({ success: true, total: total, data: text });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
