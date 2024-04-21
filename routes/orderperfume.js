express = require("express");
const upload = require("../middleware/fileUpload");

const {
  create,
  detail,
  findDelete,
  getAll,
  update,
} = require("../controller/orderperfume");
const router = express.Router();

// upload.single("file"),
// const cpUploads = upload.fields([{ name: "file", maxCount: 16 }]);
//api/v1/assistant/
router.route("/").post(upload.single("file"), create).get(getAll);
router
  .route("/:id")
  .get(detail)
  .delete(findDelete)
  .put(upload.single("file"), update);
//"/api/v1/moktaText"
module.exports = router;
