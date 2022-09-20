const multer = require("multer");
const MIME_TYPE = {
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
  "image/avif" :"avif"
};
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images/categoryImg");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPE[file.mimetype]
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage }).single("CategoryEventBg")
